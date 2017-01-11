import React from 'react';
import NavBarContainer from './navbar/navbar_container';

const App = ({ children }) => (
  <div className='body'>
    <NavBarContainer />
    { children }
  </div>
);

export default App;
