import React from 'react';

// TODO: FIGURE OUT DATES

const TIME_SLOTS = [
  '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
  '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM'
];

const PARTY = [1, 2, 3, 4, 5, 6, 7, 8];

class ReservationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: "",
      slot: "",
      party_size: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
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
      return <a id='message'>Login To Book!</a>;
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

  renderButtons() {
    let reserves = this.props.restaurant.reservations;
    
    if (this.props.currentUser) {
      return (
        <div className='booking-buttons'>
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
        </div>
      );
    } else {
      return (
        <div className='booking-buttons'>
          <button disabled>Button</button>
          <button disabled>Button</button>
          <button disabled>Button</button>
          <button disabled>Button</button>
          <button disabled>Button</button>
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
            <option value="" disabled selected>Time Slot</option>
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

        {this.renderMessage()}

        {this.renderButtons()}
      </div>
    );
  }
}

export default ReservationForm;
