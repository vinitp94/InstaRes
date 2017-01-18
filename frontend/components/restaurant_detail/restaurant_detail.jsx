import React from 'react';
import ReviewModalContainer from '../review_modal/review_modal_container';
import { hashHistory } from 'react-router';

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
        reviewArr.push(this.props.restaurant.reviews[id]);
      });

      return (
        <ul>
          {reviewArr.map((rev, idx) => (
            <li key={idx + rev}>
              <a>{rev.rating}</a>
              <a>{rev.body}</a>
            </li>
          ))}
        </ul>
      );
    }
    return;
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
                <a>{this.props.restaurant.ave_rating}</a>
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
            Reservation form will go here!
          </div>

          <div className='booking-buttons'>
            <button>Button</button>
            <button>Button</button>
            <button>Button</button>
            <button>Button</button>
            <button>Button</button>
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

          <div className='review-detail'>
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
