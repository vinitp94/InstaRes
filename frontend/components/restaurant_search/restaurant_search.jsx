import React from 'react';

class RestaurantSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  update() {
    return e => this.setState({ name: e.currentTarget.value });
  }

  renderButton() {
    let restList = Object.keys(this.props.restaurants).map(id => (
      this.props.restaurants[id].name));

    if (restList.includes(this.state.name)) {
      return (
        <button>Enter</button>
      );
    } else {
      return (
        <button disabled>Enter</button>
      );
    }
  }

  renderResults() {
    let restList = Object.keys(this.props.restaurants).map(id => (
      this.props.restaurants[id]));

    let matchList = [];

    if (this.state.name.length > 0) {
      restList.forEach(rest => {
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
        <form className='restaurant-search-form' onSubmit={this.handleSubmit}>
          <div>
            <input
              type='text'
              placeholder='Search Restaurant...'
              onChange={this.update()}/>
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
