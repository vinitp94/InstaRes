import React from 'react';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'
];

class UserProfileReviews extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(id) {
    this.props.deleteReview(id);
  }

  ratingToStar(rating) {
    let imageCopies = [];
    for (let i = 0; i < rating; i++) {
      imageCopies.push("http://res.cloudinary.com/dlhshbg79/image/upload/v1484779138/Logomakr_26JXDI_ssodgb.png");
    }
    return (
      <ul id='stars'>
        {
          imageCopies.map((url, idx) => (
            <li key={idx}><img src={url} /></li>
          ))
        }
      </ul>
    );
  }

  renderDate(timestamp) {
    let a = new Date(timestamp);
    let year = a.getYear() + 1900;
    let month = MONTHS[a.getMonth()];
    let date = a.getDate();
    return <a id='timestamp'>{month} - {`${date}`} - {`${year}`}</a>;
  }

  render() {
    return (
      <ul className='review-list'>
        {
          this.props.reviews.reverse().map((rev, idx) => (
            <li key={idx}>
              <div className='left-profile-item'>
                <a>{this.ratingToStar(rev.rating)}</a>
                <a id='rev-rest'>{rev.restaurant_name}</a>
                {this.renderDate(rev.created_at)}
                <a id='rev-body'>{rev.body}</a>
              </div>

              <div className='right-profile-item'>
                <button
                  id='profile-button'
                  onClick={this.handleSubmit.bind(this, rev.id)}>Delete
                </button>
              </div>
            </li>
          ))
        }
      </ul>
    );
  }
}

export default UserProfileReviews;
