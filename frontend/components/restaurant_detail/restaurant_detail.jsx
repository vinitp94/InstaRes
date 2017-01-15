import React from 'react';
import { hashHistory } from 'react-router';

class RestaurantDetail extends React.Component {
  constructor(props) {
    super(props);
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
    if (this.props.currentUser) {
      return (
        <div className='right-title-detail'>
          <button>Add to Favorites</button>
          <button>Add a Review</button>
        </div>
      );
    } else {
      return (
        <div className='right-title-detail'></div>
      );
    }
  }

  priceToSymbol(price) {
    let symbol = [];
    for(let i = 0; i < price; i++) {
      symbol.push('$');
    }
    return symbol.join('');
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
                <a>Ave reviews</a>
                <a>6 Reviews</a>
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
            review list
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
