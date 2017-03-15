import React from 'react';

class RestaurantDetailMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let centerGeo = {
      lat: this.props.lat,
      lng: this.props.long
    };

    this.map = new google.maps.Map(this.refs.detmap, {
      center: centerGeo,
      zoom: 13,
      zoomControl: true
    });

    const pickupMarker = new google.maps.Marker({
      position: centerGeo,
      map: this.map,
    });
  }

  render() {
    return (
      <div className='detail-map'>
        <div ref="detmap" className="det-map"></div>
      </div>
    );
  }
}

export default RestaurantDetailMap;
