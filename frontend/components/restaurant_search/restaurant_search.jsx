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

  renderResults() {
    let matchList = [];

    if (this.state.name.length > 0) {
      this.props.restaurants.forEach(rest => {
        if (!(rest.name.toLowerCase().match(new RegExp(this.state.name.toLowerCase())) == null)) {
          matchList.push(rest.name);
        }});
    } else {
      return (
        <ul></ul>
      );
    }

    if (matchList.length === 0) {
      return (
        <ul>
          <li key='-1'>No results found</li>
        </ul>
      );
    } else {
      return (
        <ul>
          {matchList.map((match, idx) => (
            <li key={match + idx}>
              {match}
            </li>
          ))}
        </ul>
      );
    }
  }

  render () {
    return (
      <div className='restaurant-search-form-container'>
        <form className='restaurant-search-form'>
          <div className='restaurant-search-input'>
            <input
              type='text'
              placeholder='Search Restaurant...'
              onChange={this.update()}/>
          </div>

          <div className='restaurant-search-button'>
            {this.renderButton()}
          </div>
        </form>

        {this.renderResults()}
      </div>
    );
  }
}

export default RestaurantSearch;
