import React from 'react';
import { Link } from 'react-router';

class RestaurantSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  update() {
    return e => this.setState({ name: e.currentTarget.value });
  }

  renderButton() {
    let restList = this.props.restaurants.map(rest => (
      rest.name.toLowerCase()));

    if (restList.includes(this.state.name.toLowerCase())) {
      let matchedId;
      this.props.restaurants.forEach(rest => {
        if (rest.name.toLowerCase() === this.state.name.toLowerCase()) {
          matchedId = rest.id;
        }});

      return (
        <Link to={`/restaurants/${matchedId}`}>
          <button>
            <i className="fa fa-search"></i>
          </button>
        </Link>
      );
    } else {
      return (
        <button disabled>
          <i className="fa fa-search"></i>
        </button>
      );
    }
  }

  renderMatches() {
    return (
      <datalist id='rest-search'>
        {
          this.props.restaurants.map((rest, idx) => (
            <option key={idx}>{rest.name}</option>
          ))
        }
      </datalist>
    );
  }

  render () {
    return (
      <div className='restaurant-search-form-container'>
        <form className='restaurant-search-form'>
          <div className='restaurant-search-input'>
            <input
              type='text'
              placeholder='Search Restaurant...'
              list='rest-search'
              onChange={this.update()}/>
            {this.renderMatches()}
          </div>

          <div className='restaurant-search-button'>
            {this.renderButton()}
          </div>
        </form>

      </div>
    );
  }
}

export default RestaurantSearch;
