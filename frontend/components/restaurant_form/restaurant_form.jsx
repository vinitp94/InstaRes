import React from 'react';

class RestaurantForm extends React.Component {
  componentDidMount() {

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
