import React from 'react';
import { Link } from 'react-router';

class UserProfileRestaurants extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(id) {
    this.props.deleteRestaurant(id);
  }

  priceToSymbol(price) {
    let symbol = [];
    for(let i = 0; i < price; i++) {
      symbol.push('$');
    }
    return symbol.join('');
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

  renderReviews(num) {
    if (num === 0) {
      return <a id='no-review'>No Reviews</a>;
    } else if (num === 1) {
      return <a>1 Review</a>;
    } else {
      return <a>{num} Reviews</a>;
    }
  }

  render() {
    if (this.props.restaurants.length === 0) {
      return <a id='message'>You have no restaurants.</a>;
    } else {
      return (
        <ul className='restaurants-list'>
          {
            this.props.restaurants.map((rest, idx) => (
              <li key={idx}>
                <div className='left-profile-item'>
                  <Link to={`/restaurants/${rest.id}`}>
                    <img id='profile-thumbnail' src={rest.image_urls[0]} />
                  </Link>

                  <div id='profile-details'>
                    <h2>{rest.name}</h2>
                    <a>{rest.category}</a>
                    <a>|</a>
                    <a>{this.priceToSymbol(rest.price)}</a>
                    <a>|</a>
                    <a>{rest.city}</a>
                    <div id='review-title'>
                      {this.ratingToStar(rest.ave_rating)}
                      {this.renderReviews(rest.num_reviews)}
                    </div>
                  </div>
                </div>

                <div className='right-profile-item'>
                  <button
                    id='profile-button'
                    onClick={this.handleSubmit.bind(this, rest.id)}>Remove
                  </button>

                  <button id='profile-button'>
                    <Link id='edit-link' to={`/restaurants/${rest.id}/edit`}>
                      Edit
                    </Link>
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

export default UserProfileRestaurants;
