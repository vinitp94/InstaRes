import React from 'react';
import NavBarContainer from './navbar/navbar_container';
import Footer from './footer/footer';

const App = ({ children }) => (
  <div className='body'>
    <NavBarContainer />
    { children }
    <Footer />
  </div>
);

export default App;
