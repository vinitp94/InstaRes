import React from 'react';
import MaskedInput from 'react-input-mask';
import { merge } from 'lodash';

// TODO: DON'T LET NON OWNERS EDIT

const states = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID',
  'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS',
  'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK',
  'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV',
  'WI', 'WY'
];

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
    }
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
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

  renderCategories() {
    return categories.map(cat => (
      <option key={cat} value={cat}>{cat}</option>
    ));
  }

  renderButton() {
    if (this.props.formType === 'new') {
      return <button>Add Restaurant</button>;
    } else {
      return <button>Update Restaurant</button>;
    }
  }

  render() {
    return (
      <div>
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

            <label>City:
              <input
                type='text'
                value={this.state.city}
                onChange={this.update('city')}/>
            </label>

            <label>State:
              <select
                type='text'
                value={this.state.state}
                onChange={this.update('state')}>
                <option value="" disabled selected>State</option>
                {this.renderStates()}
              </select>
            </label>

            <label>Zip Code:
              <MaskedInput
                mask='99999'
                maskChar=' '
                value={this.state.zip_code}
                onChange={this.update('zip_code')}/>
            </label>

            <label>Category:
              <select
                type='text'
                value={this.state.category}
                onChange={this.update('category')}>
                <option value="" disabled selected>Category</option>
                {this.renderCategories()}
              </select>
            </label>

            <label>Description:
              <textarea
                type='text'
                value={this.state.description}
                onChange={this.update('description')}
                rows='10' cols='100'/>
            </label>

            <label>Price:
              <div>
                <label>1
                  <input
                    type='radio'
                    value='1'
                    checked={this.state.price === '1'}
                    onChange={this.update('price')}/>
                </label>
                <label>2
                  <input
                    type='radio'
                    value='2'
                    checked={this.state.price === '2'}
                    onChange={this.update('price')}/>
                </label>
                <label>3
                  <input
                    type='radio'
                    value='3'
                    checked={this.state.price === '3'}
                    onChange={this.update('price')}/>
                </label>
                <label>4
                  <input
                    type='radio'
                    value='4'
                    checked={this.state.price === '4'}
                    onChange={this.update('price')}/>
                </label>
                <label>5
                  <input
                    type='radio'
                    value='5'
                    checked={this.state.price === '5'}
                    onChange={this.update('price')}/>
                </label>
              </div>
            </label>

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

          <div className='restaurant-button'>
            {this.renderButton()}
          </div>
        </form>
      </div>
    );
  }
}

export default RestaurantForm;
