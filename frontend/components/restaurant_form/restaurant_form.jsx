import React from 'react';
import MaskedInput from 'react-input-mask';
import { merge } from 'lodash';
import { hashHistory } from 'react-router';
import { Link } from 'react-router';

const states = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID',
  'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS',
  'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK',
  'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV',
  'WI', 'WY'
];

const cities = ['San Francisco', 'New York', 'Seattle', 'Chicago', 'Miami', 'Los Angeles'];

const categories = [
  'American', 'British', 'Caribbean', 'Chinese', 'French', 'Greek',
  'Indian', 'Italian', 'Japanese', 'Mediterranean', 'Mexican',
  'Moroccan', 'Spanish', 'Thai', 'Turkish', 'Vietnamese'
];

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
    this.state = this.props.restaurant;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cloudinate = this.cloudinate.bind(this);
    this.renderImages = this.renderImages.bind(this);
    this.removeImage = this.removeImage.bind(this);
  }

  componentDidMount() {
    if (this.props.formType === 'edit') {
      this.props.fetchRestaurant(this.props.params.restaurantId);
    } else {
      this.setState(merge(
        {}, _defaultRestaurant, { owner_id: `${this.props.currentUser.id}`}));
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.formType === 'edit') {
      this.setState(newProps.restaurant);
    } else {
      this.setState(merge(
        {}, _defaultRestaurant, { owner_id: `${this.props.currentUser.id}`}));
    }
  }

  componentWillUnmount() {
    this.setState(merge({}, _defaultRestaurant));
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  removeImage(e) {
    e.preventDefault();
    let images = this.state.image_urls;
    let toDelete = e.target.previousSibling.src;
    let newImages = [];

    images.forEach(im => {
      if (im !== toDelete) {
        newImages.push(im);
      }
    });

    this.setState({ image_urls: newImages });
  }

  handleSubmit(e) {
    e.preventDefault();

    let phone = this.state.phone_num;
    let parsedPhone = [];
    phone.split('').forEach(digit => {
      if ('0123456789'.includes(digit)) {
        parsedPhone.push(digit);
      }
    });
    let newrest = merge({}, this.state, { phone_num: parsedPhone.join('') });

    if (this.props.formType === 'new') {
      this.props.createRestaurant(newrest);
    } else {
      if (newrest.image_urls.length === 0) {
        newrest.image_urls = 'empty';
      }

      this.props.updateRestaurant(newrest);
    }
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

  renderStates() {
    return states.map(state => (
      <option key={state} value={state}>{state}</option>
    ));
  }

  renderCities() {
    return cities.map(city => (
      <option key={city} value={city}>{city}</option>
    ));
  }

  renderCategories() {
    return categories.map(cat => (
      <option key={cat} value={cat}>{cat}</option>
    ));
  }

  cloudinate(e) {
    e.preventDefault();
    let that = this;

    cloudinary.openUploadWidget(window.image_upload_options,
      (err, results) => {
        if (!err) {
          results.forEach(res => {
            let newImages = that.state.image_urls;
            newImages.push(res.thumbnail_url);
            that.setState({ image_urls: newImages });
          });
        }
      }
    );
  }

  renderImages() {
    if (this.state.image_urls) {
      let images = this.state.image_urls;
      return (
        <ul className='image-thumbnails'>
          {
            images.map((img, idx) => (
              <li key={idx}>
                <img src={img} />
                <button type="button" onClick={this.removeImage}>Remove</button>
              </li>
          ))}
        </ul>
      );
    }
    return;
  }

  renderButton() {
    if (this.props.formType === 'new') {
      return <button id='restaurant-button'>Add Restaurant</button>;
    } else {
      return <button id='restaurant-button'>Update Restaurant</button>;
    }
  }

  render() {
    return (
      <div className='restaurant-form-container'>
        <form className='restaurant-form' onSubmit={this.handleSubmit}>
          <span className='error'>
            {this.renderErrors()}
          </span>

          <div className='restaurant-input'>
            <label>Name:
              <input
                type='text'
                value={this.state.name}
                onChange={this.update('name')}
                autoFocus/>
            </label>

            <label>Address:
              <input
                type='text'
                value={this.state.address}
                onChange={this.update('address')}/>
            </label>

            <label>
              <select
                type='text'
                value={this.state.city}
                onChange={this.update('city')}>
                <option value="" disabled selected>City</option>
                {this.renderCities()}
              </select>
            </label>

            <label>
              <select
                type='text'
                value={this.state.state}
                onChange={this.update('state')}>
                <option value="" disabled selected>State</option>
                {this.renderStates()}
              </select>
            </label>
            <br/>
            <label>Zip Code:
              <MaskedInput
                mask='99999'
                maskChar=' '
                value={this.state.zip_code}
                onChange={this.update('zip_code')}/>
            </label>

            <label>
              <select
                type='text'
                value={this.state.category}
                onChange={this.update('category')}>
                <option value="" disabled selected>Category</option>
                {this.renderCategories()}
              </select>
            </label>
            <br/>
            <label>Description:
              <textarea
                type='text'
                value={this.state.description}
                onChange={this.update('description')}
                rows='10' cols='100'/>
            </label>

            <label>Price:</label>
            <ul className='price'>
              <li>
                <label>1</label>
                <input
                  type='radio'
                  value='1'
                  checked={this.state.price === '1'}
                  onChange={this.update('price')}/>
              </li>

              <li>
                <label>2</label>
                <input
                  type='radio'
                  value='2'
                  checked={this.state.price === '2'}
                  onChange={this.update('price')}/>
              </li>

              <li>
                <label>3</label>
                <input
                  type='radio'
                  value='3'
                  checked={this.state.price === '3'}
                  onChange={this.update('price')}/>
              </li>

              <li>
                <label>4</label>
                <input
                  type='radio'
                  value='4'
                  checked={this.state.price === '4'}
                  onChange={this.update('price')}/>
              </li>

              <li>
                <label>5</label>
                <input
                  type='radio'
                  value='5'
                  checked={this.state.price === '5'}
                  onChange={this.update('price')}/>
              </li>
            </ul>

            <label>Business Phone:
              <p className='optional-tag'>(optional)</p>
              <MaskedInput
                mask='(999) 999 - 9999'
                maskChar=' '
                placeholder='(xxx) xxx-xxxx'
                value={this.state.phone_num}
                onChange={this.update('phone_num')}/>
            </label>

            <label>Website:
              <p className='optional-tag'>(optional)</p>
              <input
                type='text'
                value={this.state.website_url}
                onChange={this.update('website_url')}/>
            </label>

          </div>

          <div>
            {this.renderImages()}
          </div>

          <div className='upload-button-container'>
            <button id='image-button' onClick={this.cloudinate}>
              Upload Images
            </button>
          </div>

          <div className='restaurant-button'>
            {this.renderButton()}
          </div>
        </form>
      </div>
    );
  }
}

export default RestaurantForm;
