import React from 'react';
import Autocomplete from 'react-google-autocomplete';
import { Link, hashHistory } from 'react-router';

class Home extends React.Component {
  renderSearch() {
    return <Autocomplete
      onPlaceSelected={ (place) => {
        this.props.receiveSearch(place.formatted_address);
        hashHistory.push(`/restaurants/index/${place.formatted_address}`);
      }}
      placeholder={'Choose your location...'}
      types={['address']}
      autofocus
      id='home-auto' />;
  }

  render() {
    return (
      <div className='home'>
        <div id='home-title'>
          <h2>insta</h2>
          <h1>RES</h1>
        </div>

        <div id='home-caption'>
          <h2>Never wait in line again.</h2>
        </div>

        <div id='now-serving'>
          <h2>Now Serving San Francisco and New York...</h2>
        </div>

        {this.renderSearch()}
      </div>
    );
  }
}

export default Home;
