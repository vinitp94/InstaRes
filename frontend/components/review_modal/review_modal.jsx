import React from 'react';
import Modal from 'react-modal';
import { ModalStyle } from '../modal_styles';

class ReviewModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
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

          <h2>Add Review</h2>

          <form className='review-form' onSubmit={this.handleSubmit}>
            <span className='error'>
              {this.renderErrors()}
            </span>

            <div className='review-input'>
              <input
                type='text'
                placeholder='Review Body'
                value={this.state.body}
                onChange={this.update('body')}
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
