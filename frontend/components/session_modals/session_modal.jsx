import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router';
import { sessionModalStyle } from './session_modal_styles';

class SessionModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      email: "",
      modalOpen: false,
      formType: this.props.formType
    };

    this._handleClick = this._handleClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
  }

  _handleClick() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({
      username: "",
      password: "",
      email: "",
      modalOpen: false,
      formType: this.props.formType
    });
  }

  handleGuest(e) {
    e.preventDefault();

    this.props.login({
      username: 'Demo',
      password: 'demopassword'
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.formType === 'Log In') {
      this.props.login({
        username: this.state.username,
        password: this.state.password
      });
    } else {
      this.props.signup({
        username: this.state.username,
        password: this.state.password,
        email: this.state.email
      });
    }
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  handleAltClick(newformType) {
    return e => {
      this.setState({
        username: "",
        email: "",
        password: "",
        formType: newformType});
      this.props.emptyErrors();
    };
  }

  renderAlternative() {
    if (this.state.formType === 'Log In') {
      return (
        <div className='session-alt'>
          <p>Don't have an account{'?'}</p>
          <p id='alt-link'><Link onClick={this.handleAltClick('Sign Up')}>Sign Up</Link></p>
        </div>
      );
    } else {
      return (
        <div className='session-alt'>
          <p>Already have an account{'?'}</p>
          <p id='alt-link'><Link onClick={this.handleAltClick('Log In')}>Log In</Link></p>
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

  renderEmail() {
    if (this.state.formType === 'Sign Up') {
      return (
        <input
          type='text'
          placeholder='Email Address'
          value={this.state.email}
          onChange={this.update('email')}/>
      );
    }
    return;
  }

  renderGuest() {
    if (this.state.formType === 'Log In') {
      return <button onClick={this.handleGuest}>Guest Login</button>;
    }
    return;
  }

  render() {
    return (
      <div className='session-modal'>
        <Link onClick={this._handleClick}>
          {this.props.buttonLabel}
        </Link>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={sessionModalStyle}>

          <form className='session-form' onSubmit={this.handleSubmit}>
            <span className='error'>
              {this.renderErrors()}
            </span>

            <div className='session-input'>

              <input
                type='text'
                placeholder='Username'
                value={this.state.username}
                onChange={this.update('username')}
                autoFocus/>

              {this.renderEmail()}

              <input
                type='password'
                placeholder='Password'
                value={this.state.password}
                onChange={this.update('password')}/>
            </div>

            <div className='session-button'>
              <button>{this.state.formType}</button>
              {this.renderGuest()}
            </div>

            {this.renderAlternative()}
          </form>
        </Modal>
      </div>
    );
  }
}

export default SessionModal;
