import React from 'react';
import ReviewModalContainer from '../review_modal/review_modal_container';
import ReservationFormContainer from '../reservation_form/reservation_form_container';
import { hashHistory } from 'react-router';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'
];

class RestaurantDetail extends React.Component {
  constructor(props) {
    super(props);

    this.handleFavorite = this.handleFavorite.bind(this);
    this.handleUnfavorite = this.handleUnfavorite.bind(this);
  }

  componentDidMount() {
    this.props.fetchRestaurant(this.props.params.restaurantId);
  }

  renderImages() {
    if (this.props.restaurant.image_urls) {
      return this.props.restaurant.image_urls.slice(0, 3).map((img, idx) => (
        <img key={idx} src={img}/>
      ));
    }
    return;
  }

  renderButtons() {
    let currentRestId = this.props.params.restaurantId;

    if (this.props.currentUser) {
      if (Object.keys(this.props.currentUser.restaurants).includes(currentRestId)) {
        return (
          <div className='right-title-detail'>
            {this.renderFavorite()}
          </div>
        );
      } else {
        return (
          <div className='right-title-detail'>
            {this.renderFavorite()}
            <ReviewModalContainer restaurantId={currentRestId}/>
          </div>
        );
      }
    } else {
      return (
        <div className='right-title-detail'></div>
      );
    }
  }

  renderFavorite() {
    if (Object.keys(this.props.currentUser.favorites).includes(this.props.params.restaurantId)) {
      return <button id='unfavorite' onClick={this.handleUnfavorite}>Unfavorite</button>;
    } else {
      return <button onClick={this.handleFavorite}>Add to Favorites</button>;
    }
  }

  handleFavorite(e) {
    e.preventDefault();
    this.props.createFavorite({
      user_id: this.props.currentUser.id,
      restaurant_id: this.props.params.restaurantId
    });
  }

  handleUnfavorite(e) {
    e.preventDefault();
    let restId = this.props.params.restaurantId;
    let faveId = this.props.currentUser.favorites[restId].favorite_id;
    this.props.deleteFavorite(faveId);
  }

  priceToSymbol(price) {
    let symbol = [];
    for(let i = 0; i < price; i++) {
      symbol.push('$');
    }
    return symbol.join('');
  }

  renderReviews() {
    if (this.props.restaurant.reviews) {
      let reviewArr = [];
      Object.keys(this.props.restaurant.reviews).forEach(id => {
        reviewArr.unshift(this.props.restaurant.reviews[id]);
      });

      return (
        <ul>
          {reviewArr.map((rev, idx) => (
            <li key={idx + rev}>
              <div id='review-top'>
                <a>{this.ratingToStar(rev.rating)}</a>
                {this.renderDate(rev.created_at)}
              </div>
              <a id='rev-body'>{rev.body}</a>
            </li>
          ))}
        </ul>
      );
    }
    return;
  }

  renderDate(timestamp) {
    let a = new Date(timestamp);
    let year = a.getYear() + 1900;
    let month = MONTHS[a.getMonth()];
    let date = a.getDate();
    return <a id='timestamp'>{month} - {`${date}`} - {`${year}`}</a>;
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((err, idx) => (
          <li key={idx + err}>
            {err}
          </li>
        ))}
      </ul>
    );
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

  render() {
    if (this.props.errors.length === 0) {
      return (
        <div className='restaurant-detail'>
          <div className='images-detail'>
            {this.renderImages()}
          </div>

          <div className='title-detail'>
            <div className='left-title-detail'>
              <h1>{this.props.restaurant.name}</h1>

              <div id='review-title'>
                {this.ratingToStar(this.props.restaurant.ave_rating)}
                <a>{this.props.restaurant.num_reviews} Reviews</a>
              </div>

              <div id='category-price'>
                <a>{this.props.restaurant.category}</a>
                <a>|</a>
                <a>{this.priceToSymbol(this.props.restaurant.price)}</a>
                <a>|</a>
                <a>{this.props.restaurant.city}</a>
              </div>
            </div>

            {this.renderButtons()}
          </div>

          <div className='booking-form-detail'>
            <ReservationFormContainer />
          </div>

          <div className='description'>
            <h2>About Us</h2>
            <a>{this.props.restaurant.description}</a>
          </div>

          <div id='location'>
            <div className='logistical-detail'>
              <div className='address'>
                <div id='top-address'>
                  <a>{this.props.restaurant.address}</a>
                </div>

                <div id='bottom-address'>
                  <a>{this.props.restaurant.city}</a>
                  <a>,</a>
                  <a> {this.props.restaurant.state}</a>
                  <a> {this.props.restaurant.zip_code}</a>
                </div>
              </div>

              <div className='contact-info'>
                <a id='website' className='link'>{this.props.restaurant.website_url}</a>
                <a>{this.props.restaurant.phone_num}</a>
              </div>
            </div>

            <div>
              screenshot the map
            </div>
          </div>

          <div id='review-detail'>
            <h2>Reviews</h2>
            {this.renderReviews()}
          </div>
        </div>
      );
    } else {
      return (
        <div className='restaurant-detail'>
          <span className='error'>
            {this.renderErrors()}
          </span>
        </div>
      );
    }
  }
}

export default RestaurantDetail;
