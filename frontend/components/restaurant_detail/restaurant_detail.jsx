import React from 'react';
import { hashHistory } from 'react-router';
import ReviewModalContainer from '../review_modal/review_modal_container';
import ReservationFormContainer from '../reservation_form/reservation_form_container';
import RestaurantDetailMap from './restaurant_detail_map';
import Spinner from '../spinner.jsx';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'
];

class RestaurantDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = { restId: "" };

    this.handleFavorite = this.handleFavorite.bind(this);
    this.handleUnfavorite = this.handleUnfavorite.bind(this);
  }

  componentDidMount() {
    this.props.fetchRestaurant(this.props.params.restaurantId);
    this.setState({ restId: this.props.params.restaurantId });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.params.restaurantId !== this.state.restId) {
      this.props.fetchRestaurant(newProps.params.restaurantId);
      this.setState({ restId: newProps.params.restaurantId });
    }
  }

  componentWillUnmount() {
    this.props.clearDetail();
  }

  renderImages() {
    if (this.props.restaurant.image_urls) {
      return this.props.restaurant.image_urls.slice(0, 3).map((img, idx) => (
        <img key={idx} src={img}/>
      ));
    }
    return;
  }

  isOwner() {
    let currentRestId = this.props.params.restaurantId;

    if (this.props.currentUser) {
      return Object.keys(this.props.currentUser.restaurants).includes(currentRestId);
    }
    return false;
  }

  renderButtons() {
    let currentRestId = this.props.params.restaurantId;

    if (this.props.currentUser) {
      if (this.isOwner()) {
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

      if (reviewArr.length > 0) {
        return (
          <div id='review-detail'>
            <h2>Reviews</h2>
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
          </div>
        );
      }
    }
    return <div id='review-detail'></div>;
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

  renderPhone(phone) {
    if (phone) {
      return `(${phone.slice(0, 3)})  ${phone.slice(3, 6)}  ${phone.slice(6, 10)}`;
    }
    return;
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

  renderNumReviews(num) {
    if (num === 0) {
      return <a id='no-review'>No Reviews</a>;
    } else if (num === 1) {
      return <a>1 Review</a>;
    } else {
      return <a>{num} Reviews</a>;
    }
  }

  renderReservationForm() {
    if (!this.props.currentUser) {
      return (
        <div className='booking-form-detail'>
          <a id='message'>Login to make a reservation!</a>;
        </div>
      );
    } else if (!this.isOwner()) {
      return (
        <div className='booking-form-detail'>
          <ReservationFormContainer />
        </div>
      );
    }
  }

  render() {
    if (Object.keys(this.props.restaurant).length === 0 && this.props.errors.length === 0) {
      return <Spinner />;
    } else if (this.props.errors.length === 0) {
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
                {this.renderNumReviews(this.props.restaurant.num_reviews)}
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

          {this.renderReservationForm()}

          <div className='description'>
            <h2>About Us</h2>
            <a>{this.props.restaurant.description}</a>
          </div>

          <div id='location'>
            <h2>Details</h2>
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
                <a>{this.renderPhone(this.props.restaurant.phone_num)}</a>
              </div>
            </div>

            <RestaurantDetailMap
              lat={this.props.restaurant.lat}
              long={this.props.restaurant.long} />
          </div>

          {this.renderReviews()}
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
