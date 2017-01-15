import React from 'react';

const _defaultRestaurant = {
  id: "",
  name: "",
  address: "",
  city: "",
  state: "",
  zip_code: "",
  category: "",
  description: "",
  phone_num: "",
  website_url: "",
  price: "",
  owner_id: "",
  image_urls: [],
};

class RestaurantForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = _defaultRestaurant;
  }

  componentDidMount() {
    if (this.props.formType === 'edit') {
      this.props.fetchRestaurant(this.props.params.restaurantId);
    }
  }

  render() {
    return (
      <div>
        <h1>WE IN THIS</h1>
        <h2>{this.props.currentUser.username}</h2>
      </div>
    );
  }
}

export default RestaurantForm;
