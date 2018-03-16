import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { Code } from '../styles/style';
import s from '../styles/register.style';
// text fields
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      usernameError: '',
      passwordError: '',
      firstNameError: '',
      lastNameError: ''
    };
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstNameChange(event) {
    this.setState({firstName: event.target.value});
  }
  handleLastNameChange(event) {
    this.setState({lastName: event.target.value});
  }
  handleUsernameChange(event) {
    this.setState({username: event.target.value});
  }
  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    if (this.state.firstName == "") {
      this.setState({firstNameError: "This field is required."});
    }
    else {
      this.setState({firstNameError: ""});
    }
    if (this.state.lastName == "") {
      this.setState({lastNameError: "This field is required."});
    }
    else {
      this.setState({lastNameError: ""});
    }
    if (this.state.username == "") {
      this.setState({usernameError: "This field is required."});
    }
    else if (this.state.username.length < 4) {
      this.setState({usernameError: "Username needs to be at least 4 characters"});
    }
    else {
      this.setState({usernameError: ""});
    }
    if (this.state.password == "") {
      this.setState({passwordError: "This field is required."});
    }
    else if (this.state.password.length < 8) {
      this.setState({passwordError: "Password needs to be at least 8 characters"});
    }
    else {
      this.setState({passwordError: ""});
    }
    if (this.state.firstName && this.state.lastName && this.state.username >= 4 && this.state.password >= 8)
      this.props.history.push('/home');
    event.preventDefault();
  }
  render() {
    return (
      <form style={s.form} onSubmit={this.handleSubmit}>
        <h1 style={s.title}>Sign Up</h1>
        <p>It’s free and always will be.</p>
        <div style={s.nameContainer}>
        <TextField
        floatingLabelText="First Name"
        hintText="Enter First Name"
        errorText={this.state.firstNameError}
        value={this.state.firstName}
        onChange={this.handleFirstNameChange}
        />
        <div style={s.filler} />
        <TextField
        floatingLabelText="Last Name"
        hintText="Enter Last Name"
        errorText={this.state.lastNameError}
        value={this.state.lastName}
        onChange={this.handleLastNameChange}
        />
        </div>
        <TextField
        floatingLabelText="Username"
        hintText="Enter Username"
        fullWidth={true}
        errorText={this.state.usernameError}
        value={this.state.username}
        onChange={this.handleUsernameChange}
        />
        <TextField
        floatingLabelText="Password"
        hintText="Enter Password"
        type='password'
        fullWidth={true}
        errorText={this.state.passwordError}
        value={this.state.password}
        onChange={this.handlePasswordChange}
        />
        <div style={s.buttonContainer}>
          <RaisedButton
            label="Cancel"
            containerElement={<Link to="/"></Link>} />
          <RaisedButton
            label="Register"
            type="submit" />
        </div>
      </form>
    );
  }
}

export default withRouter(Register);
