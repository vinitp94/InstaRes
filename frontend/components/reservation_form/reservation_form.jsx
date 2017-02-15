import React from 'react';

const TIME_SLOTS = [
  '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
  '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM'
];

const TIME_MAP = {
  '11:00 AM': 11, '12:00 PM': 12, '1:00 PM': 13, '2:00 PM': 14, '3:00 PM': 15,
  '4:00 PM': 16, '5:00 PM': 17, '6:00 PM': 18, '7:00 PM': 19, '8:00 PM': 20,
  '9:00 PM': 21, '10:00 PM': 22
};

const REVERSE_TIME_MAP = {
  11: '11:00 AM', 12: '12:00 PM', 13: '1:00 PM', 14: '2:00 PM', 15: '3:00 PM',
  16: '4:00 PM', 17: '5:00 PM', 18: '6:00 PM', 19: '7:00 PM', 20: '8:00 PM',
  21: '9:00 PM', 22: '10:00 PM'
};

const PARTY = [1, 2, 3, 4, 5, 6, 7, 8];

class ReservationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: "",
      slot: "8:00 PM",
      party_size: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  handleSubmit(timeSlot) {
    let parsedDate = this.state.date.split('-');
    let year = parseInt(parsedDate[0]);
    let month = parseInt(parsedDate[1]) - 1;
    let day = parseInt(parsedDate[2]);
    let timeCode = TIME_MAP[timeSlot];
    let finalSlot = new Date(year, month, day, timeCode);
    let booking = {
      slot: finalSlot,
      party_size: this.state.party_size,
      user_id: this.props.currentUser.id,
      restaurant_id: this.props.restaurant.id
    };

    this.props.createReservation(booking);
  }

  renderTimeSlots() {
    return TIME_SLOTS.map((time, idx) => (
      <option key={idx} value={time}>{time}</option>
    ));
  }

  renderPartySize() {
    return PARTY.map((size, idx) => (
      <option key={idx} value={size}>{size}</option>
    ));
  }

  renderMessage(numSlots) {
    if (this.state.date === "" || this.state.party_size === "") {
      return <a id='message'>Pick a date and party size!</a>;
    } else if (numSlots === 0) {
      return <a id='message'>We're sorry! There are no available slots for this date.</a>;
    } else if (numSlots === 1) {
      return <a id='message'>Hurry! Only 1 slot left!</a>;
    } else if (numSlots < 5) {
      return <a id='message'>Hurry! Only {`${numSlots}`} slots left!</a>;
    }
    return;
  }

  renderDate() {
    let d = new Date;
    let year = d.getYear() + 1900;
    let date = d.getDate();
    let month = d.getMonth() + 1;

    if (month < 10) {
      month = `0${month}`;
    } else {
      month = `${month}`;
    }
    return `${year}-${month}-${date}`;
  }

  findOpenSlots() {
    let taken = [];
    if (Object.keys(this.props.restaurant).length > 0) {
      taken = Object.keys(this.props.restaurant.reservations).map(resId =>(
        (new Date(this.props.restaurant.reservations[resId].slot)).getTime()
      ));
    }

    let parsedDate = this.state.date.split('-');
    let year = parseInt(parsedDate[0]);
    let month = parseInt(parsedDate[1]) - 1;
    let day = parseInt(parsedDate[2]);
    let validSlots = [];

    TIME_SLOTS.forEach(slot => {
      let slotHour = TIME_MAP[slot];
      let timeCode = (new Date(year, month, day, slotHour)).getTime();
      if (!taken.includes(timeCode)) {
        validSlots.push(slot);
      }
    });
    return this.pickFive(this.state.slot, validSlots);
  }

  pickFive(targetSlot, availSlots) {
    let numSlots = availSlots.length;

    if (numSlots < 6) {
      return availSlots;
    }

    let midIdx = availSlots.indexOf(targetSlot);

    if (midIdx === -1) {
      let midCode = TIME_MAP[targetSlot];
      if (midCode === 22) {
        return this.pickFive(REVERSE_TIME_MAP[11], availSlots);
      } else {
        midCode += 1;
        return this.pickFive(REVERSE_TIME_MAP[midCode], availSlots);
      }
    } else {
      if (midIdx === 0 || midIdx === 1) {
        return availSlots.slice(0, 5);
      } else if (midIdx === (numSlots - 1) || midIdx === (numSlots - 2)) {
        return availSlots.slice(numSlots - 5, numSlots);
      } else {
        return availSlots.slice(midIdx - 2, midIdx + 3);
      }
    }
  }

  renderButtons() {
    let openSlots = this.findOpenSlots();

    if (!this.props.currentUser || this.props.currentUser.id ===
        this.props.restaurant.owner_id || this.state.date === "" ||
        this.state.party_size === "") {
      return (
        <div className='bookings'>
          <div>
            {this.renderMessage(openSlots.length)}
          </div>
        </div>
      );
    } else {
      return (
        <div className='bookings'>
          <div className='booking-buttons'>
            {
              openSlots.map((sl, idx) => (
                <button key={idx} onClick={this.handleSubmit.bind(this, sl)}>{sl}</button>
              ))
            }
          </div>

          <div>
            {this.renderMessage(openSlots.length)}
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className='reservation-form'>
        <div className='reservation-input'>
          <input
            type='date'
            value={this.state.date}
            onChange={this.update('date')}
            id='date'
            min={this.renderDate()} />

          <select
            type='text'
            id='timeslot'
            value={this.state.slot}
            onChange={this.update('slot')}>
            {this.renderTimeSlots()}
          </select>

          <select
            type='text'
            id='party-size'
            value={this.state.party_size}
            onChange={this.update('party_size')}>
            <option value="" disabled selected>Party Size</option>
            {this.renderPartySize()}
          </select>
        </div>

        {this.renderButtons()}
      </div>
    );
  }
}

export default ReservationForm;
