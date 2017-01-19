import React from 'react';

// TODO: FIGURE OUT DATES

const TIME_SLOTS = [
  '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
  '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM'
];

const TIME_MAP = {
  '11:00 AM': 11, '12:00 PM': 12, '1:00 PM': 13, '2:00 PM': 14, '3:00 PM': 15,
  '4:00 PM': 16, '5:00 PM': 17, '6:00 PM': 18, '7:00 PM': 19, '8:00 PM': 20,
  '9:00 PM': 21, '10:00 PM': 22
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
    console.log(this);
    debugger
    return e => {
      console.log(e);
      debugger
      let a = timeSlot;
    };
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

  renderMessage() {
    if (!this.props.currentUser) {
      return <a id='message'>Login to book!</a>;
    } else if (this.props.currentUser.id === this.props.restaurant.owner_id) {
      return <a id='message'>Check out how people reviewed your restaurant!</a>;
    } else if (this.state.date === "") {
      return <a id='message'>Pick a date and party size!</a>;
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
    return this.pickFive(validSlots);
  }

  pickFive(availSlots) {
    let final = [];
    let middle = this.state.date;

    // TODO FIX this
    return ['11:00 AM', '12:00 PM', '2:00 PM', '6:00 PM', '9:00 PM'];
  }

  renderButtons() {
    let openSlots = this.findOpenSlots();

    if (!this.props.currentUser || this.props.currentUser.id ===
        this.props.restaurant.owner_id ||this.state.date === "" ||
        this.state.party_size === "") {
      return (
        <div className='booking-buttons'>
          <button disabled>---</button>
          <button disabled>---</button>
          <button disabled>{this.state.slot}</button>
          <button disabled>---</button>
          <button disabled>---</button>
        </div>
      );
    } else {
      return (
        <div className='booking-buttons'>
          {
            openSlots.map((sl, idx) => (
              <button key={idx} onClick={(e) => this.handleSubmit(sl)}>{sl}</button>
            ))
          }
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
        {this.renderMessage()}
      </div>
    );
  }
}

export default ReservationForm;
