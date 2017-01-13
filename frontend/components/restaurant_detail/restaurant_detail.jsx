import React from 'react';

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

  render() {
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
          <p>{this.props.restaurant.description}</p>
        </div>

        <div id='location'>
          <div className='logistical-detail'>
            <div id='address'>
              <a>{this.props.restaurant.address}</a>

              <div id='bottom-address'>
                <a>{this.props.restaurant.city}</a>
                <a>{this.props.restaurant.state}</a>
                <a>{this.props.restaurant.zip_code}</a>
              </div>
            </div>

            <div id='contact-info'>
              <a className='link'>{this.props.restaurant.website_url}</a>
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
  }
}

export default RestaurantDetail;
