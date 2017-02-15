import React from 'react';
import { Link } from 'react-router';

class UserProfileFavorites extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(id) {
    this.props.deleteFavorite(id);
  }

  priceToSymbol(price) {
    let symbol = [];
    for(let i = 0; i < price; i++) {
      symbol.push('$');
    }
    return symbol.join('');
  }

  render() {
    if (this.props.favorites.length === 0) {
      return <a id='message'>You have no favorites.</a>;
    } else {
      return (
        <ul className='favorites-list'>
          {
            this.props.favorites.map((fave, idx) => (
              <li key={idx}>
                <div className='left-profile-item'>
                  <Link to={`/restaurants/${fave.id}`}>
                    <img id='profile-thumbnail' src={fave.image_urls[0]} />
                  </Link>

                  <div id='profile-details'>
                    <h2>{fave.name}</h2>
                    <a>{fave.category}</a>
                    <a>|</a>
                    <a>{this.priceToSymbol(fave.price)}</a>
                    <a>|</a>
                    <a>{fave.city}</a>
                  </div>
                </div>

                <div className='right-profile-item'>
                  <button
                    id='profile-button'
                    onClick={this.handleSubmit.bind(this, fave.favorite_id)}>Unfavorite
                  </button>
                </div>
              </li>
            ))
          }
        </ul>
      );
    }
  }
}

export default UserProfileFavorites;
