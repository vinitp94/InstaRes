import React from 'react';

class Spinner extends React.Component {
  render() {
    return (
      <div className="loading">
        <i className="fa fa-spinner fa-spin fa-3x fa-fw" aria-hidden="true"></i>
      </div>
    );
  }
}

export default Spinner;
