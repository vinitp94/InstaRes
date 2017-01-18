import React from 'react';
import Modal from 'react-modal';
import { ModalStyle } from '../modal_styles';

class ReviewModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 1,
      body: "",
      modalOpen: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({
      rating: 0,
      body: "",
      modalOpen: false,
    });
    this.props.emptyErrors();
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((err, idx) => (
          <li key={idx + err}>
            {err}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className='review-modal'>
        <button onClick={this.handleClick}>
          Add a Review
        </button>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={ModalStyle}
          contentLabel='Review Modal'>

          <form className='review-form' onSubmit={this.handleSubmit}>
            <h2>Add Review</h2>

            <span className='error'>
              {this.renderErrors()}
            </span>

            <div className='rating'>
              <input type='radio' id='star5' value='5'
                checked={this.state.rating.toString() === '5'}
                onChange={this.update('rating')}/>
              <label htmlFor='star5' title='text'>5 stars</label>
              <input type='radio' id='star4' value='4'
                checked={this.state.rating.toString() === '4'}
                onChange={this.update('rating')}/>
              <label htmlFor='star4' title='text'>4 stars</label>
              <input type='radio' id='star3' value='3'
                checked={this.state.rating.toString() === '3'}
                onChange={this.update('rating')}/>
              <label htmlFor='star3' title='text'>3 stars</label>
              <input type='radio' id='star2' value='2'
                checked={this.state.rating.toString() === '2'}
                onChange={this.update('rating')}/>
              <label htmlFor='star2' title='text'>2 stars</label>
              <input type='radio' id='star1' value='1'
                checked={this.state.rating.toString() === '1'}
                onChange={this.update('rating')}/>
              <label htmlFor='star1' title='text'>1 star</label>
            </div>

            <div className='review-input'>
              <textarea
                type='text'
                placeholder='Review Body'
                value={this.state.body}
                onChange={this.update('body')}
                rows='6' cols='50'
                autoFocus/>
            </div>

            <div className='review-form-button'>
              <button>Submit</button>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

export default ReviewModal;
