import React from 'react';

class RestaurantDetail extends React.Component {
  constructor(props) {
    super(props);
    this.restaurant = this.props.restaurant;
  }

  componentDidMount() {
    this.props.fetchRestaurant(this.props.params.restaurantId);
  }

  render() {
    return (
      <div>
        <div className='images-detail'>
          {
            this.restaurant.image_urls.map((img, idx) => (
              <img key={idx} src={img}/>
            ))
          }
        </div>

        <div className='booking-form-detail'>
          Reservation form will go here!
        </div>

        <div className='about-details'>
          <div id='address'>
            <a>{this.restaurant.address}</a>
            <a>{this.restaurant.city}</a>
            <a>{this.restaurant.state}</a>
            <a>{this.restaurant.zip_code}</a>
          </div>

          <div id='contact-info'>
            <a>{this.restaurant.website_url}</a>
            <a>{this.restaurant.phone_num}</a>
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
