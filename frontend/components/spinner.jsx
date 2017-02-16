import React from 'react';

class Spinner extends React.Component {
  render() {
    return (
      <div className="spinner">
        <i className="fa fa-spinner fa-pulse fa-3x fa-fw" aria-hidden="true"></i>
      </div>
    );
  }
}

export default Spinner;
