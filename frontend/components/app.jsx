import React from 'react';
import NavBarContainer from './navbar/navbar_container';

const App = ({ children }) => (
  <div>
    <h1>InstaRes</h1>
    <NavBarContainer />
    { children }
  </div>
);

export default App;
