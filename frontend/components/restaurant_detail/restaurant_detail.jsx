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

  render() {
    return (
      <div className='restaurant-detail'>
        <div className='images-detail'>
          {this.renderImages()}
        </div>

        <div className='booking-form-detail'>
          Reservation form will go here!
        </div>

        <div className='about-details'>
          <div id='address'>
            <a>{this.props.restaurant.address}</a>
            <a>{this.props.restaurant.city}</a>
            <a>{this.props.restaurant.state}</a>
            <a>{this.props.restaurant.zip_code}</a>
          </div>

          <div id='other-details'>
            <a>{this.props.restaurant.category}</a>
            <a>{this.props.restaurant.price}</a>
            <a>Eventually need to add AVERAGE reviews</a>
          </div>

          <div id='contact-info'>
            <a>{this.props.restaurant.website_url}</a>
            <a>{this.props.restaurant.phone_num}</a>
          </div>

          <div id='description'>
            <a>{this.props.restaurant.description}</a>
          </div>
        </div>

        <div id='map-screenshot'>
          screenshot the map
        </div>

        <div className='review-detail'>
          review list
        </div>
      </div>
    );
  }
}

export default RestaurantDetail;
