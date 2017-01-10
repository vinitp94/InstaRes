import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router';

const defaultState = {
  username: "",
  password: "",
  modalOpen: false
};

class SessionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState;

    this._handleClick = this._handleClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  _handleClick() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({
      username: "",
      password: "",
      modalOpen: false
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm({
      username: this.state.username,
      password: this.state.password
    });
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  renderAlternative() {
    if (this.props.formType === 'login') {
      return (
        <div>
          <p>Don't have an account{'?'}</p>
          <Link to={`/signup`}>Sign Up</Link>;
        </div>
      );
    } else {
      return (
        <div>
          <p>Already have an account{'?'}</p>
          <Link to={`/login`}>Log In</Link>;
        </div>
      );
    }
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

  renderButton() {
    if (this.props.formType === 'login') {
      return <button>Login</button>;
    } else {
      return <button>Signup</button>;
    }
  }

  render() {
    return (
      <div className='session_modal'>
        <button onClick={this._handleClick}>Click Me</button>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}>

          <form onSubmit={this.handleSubmit}>
            <label>Username:
              <input type='text'
                value={this.state.username}
                onChange={this.update('username')}/>
            </label>

            <label>Password:
              <input type='password'
                value={this.state.password}
                onChange={this.update('password')}/>
            </label>

            <div className='session-form-button'>
              {this.renderButton()}
            </div>

            <div>
              {this.renderAlternative()}
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

export default SessionModal;
