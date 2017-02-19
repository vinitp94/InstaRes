import React from 'react';
import { Link } from 'react-router';

// TODO: ORDER RESERVATIONS BY CLOSEST TO FURTHEST

const TIME_MAP = {
  11: '11:00 AM', 12: '12:00 PM', 13: '1:00 PM', 14: '2:00 PM', 15: '3:00 PM',
  16: '4:00 PM', 17: '5:00 PM', 18: '6:00 PM', 19: '7:00 PM', 20: '8:00 PM',
  21: '9:00 PM', 22: '10:00 PM'
};

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'
];

class UserProfileReservations extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(id) {
    this.props.deleteReservation(id);
  }

  renderDate(slot) {
    let date = new Date(slot);
    let year = date.getYear() + 1900;
    let month = MONTHS[date.getMonth()];
    let day = date.getDate();
    return `${month} - ${day} - ${year}`;
  }

  renderTime(slot) {
    let time = new Date(slot);
    return TIME_MAP[time.getHours()];
  }

  render() {
    if (this.props.reservations.length === 0) {
      return <a id='message'>You have no reservations.</a>;
    } else {
      return (
        <ul className='reservations-list'>
          {
            this.props.reservations.reverse().map((res, idx) => (
              <li key={idx}>
                <div className='left-profile-item'>
                  <Link to={`/restaurants/${res.restaurant_id}`}>
                    <img id='profile-thumbnail' src={res.image_urls[0]} />
                  </Link>

                  <div id='profile-details'>
                    <h2>{res.name}</h2>
                    <a>Party Size: {res.party_size}</a>
                    <div id='date'>
                      <a>Date: {this.renderDate(res.slot)}</a>
                    </div>
                    <div id='time'>
                      <a>Time: {this.renderTime(res.slot)}</a>
                    </div>
                  </div>
                </div>

                <div className='right-profile-item'>
                  <button
                    id='profile-button'
                    onClick={this.handleSubmit.bind(this, res.id)}>Cancel
                  </button>
                </div>
              </li>
            ))
          }
        </ul>
      );
    }
  }
}

export default UserProfileReservations;
