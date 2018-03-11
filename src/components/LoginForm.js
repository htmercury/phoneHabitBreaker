import React from 'react';
import s from '../styles/loginForm.style';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
// text fields
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      name: '',
      password: '',
      nameError: '',
      passwordError: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }
  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    if (this.state.name == "") {
      this.setState({nameError: "This field is required."});
    }
    else {
      this.setState({nameError: ""});
    }
    if (this.state.password == "") {
      this.setState({passwordError: "This field is required."});
    }
    else {
      this.setState({passwordError: ""});
    }
    if (this.state.name && this.state.password)
      this.props.history.push('/home');
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1 style={s.title}>Welcome.</h1>
        <br />
        <div style={s.fieldContainer}>
        <h1 style={s.subtitle}>Please login or register to get started!</h1>
        <TextField
        floatingLabelText="Username"
        hintText="Enter Username"
        errorText={this.state.nameError}
        fullWidth={true}
        value={this.state.name}
        onChange={this.handleNameChange}
        />
        <TextField
        floatingLabelText="Password"
        hintText="Enter Password"
        errorText={this.state.passwordError}
        type="password"
        fullWidth={true}
        value={this.state.password}
        onChange={this.handlePasswordChange}
        />
        <br />
        </div>
        <div style={s.buttonContainer}>
          <RaisedButton
            label="Login"
            type="submit" />
          <RaisedButton
            label="Register"
            containerElement={<Link to="/register"></Link>} />
        </div>
      </form>
    );
  }
}

export default withRouter(LoginForm);
