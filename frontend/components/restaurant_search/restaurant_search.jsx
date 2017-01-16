import React from 'react';

class RestaurantSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {

  }

  update() {
    return e => this.setState({ name: e.currentTarget.value });
  }

  renderResults() {
    let restList = Object.keys(this.props.restaurants).map(id => (
      this.props.restaurants[id]));
    let matchList = [];

    restList.forEach(rest => {
      if (!(rest.name.match(new RegExp(this.state.name)) == null)) {
        matchList.push(rest.name);
      }});
  }

  render () {
    return (
      <div>
        <input
          type='text'
          placeholder='Search a Restaurant Name'
          onChange={this.update()}/>
        <ul>
          {this.renderResults()}
        </ul>
      </div>
    );
  }
}

export default RestaurantSearch;
