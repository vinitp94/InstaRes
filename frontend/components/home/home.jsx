import React from 'react';
import { Link } from 'react-router';

// TODO: Add Location SEARCH container AND home carousel container
// TAKE OUT LINK TO INDEX

const Home = () => (
  <div className='home'>
    <div className='home-header'>
      <div className='left-home'>
        <h1 id='title-left'>Insta</h1>
        <h1 id='title-right'>RES</h1>
      </div>

      <div className='right-home'>
        <h3 id='home-caption'>Don't ever wait in line.</h3>
      </div>
    </div>

    <div className='home-search'>
      Search will go here!
    </div>

    <div className='home-carousel'>
      Picture carousel will go here!
    </div>

    <Link to={`/restaurants`}>
      Temporary Link to restaurant index
    </Link>
  </div>
);

export default Home;
