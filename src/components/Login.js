import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import s from '../styles/login.style';
//login form
import LoginForm from './LoginForm';
// font icons
import FontIcon from 'material-ui/FontIcon';
// buttons
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
// colors
import {green700, indigo600, blue500} from 'material-ui/styles/colors';
// dialog
import Dialog from 'material-ui/Dialog';

class Login extends React.Component {
  state = {
    open: false,
    app: ''
  };

  handleGoogleOpen = () => {
    this.setState({open: true});
    this.setState({app: 'Google+'});
  };

  handleFacebookOpen = () => {
    this.setState({open: true});
    this.setState({app: 'Facebook'});
  };

  handleTwitterOpen = () => {
    this.setState({open: true});
    this.setState({app: 'Twitter'});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleLogin = () => {
    this.setState({open: false});
    this.props.history.push('/home');
  };


  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Confirm"
        primary={true}
        onClick={this.handleLogin}
      />,
    ];

    return (
      <div>
        <LoginForm />
        <br />
        <div style={s.pageLinkContainer}>
          <Interactive
            as={Link}
            {...s.link}
            to="/home"
          >Login without an account</Interactive>
        </div>
        <div style={s.filler}></div>
        <div style={s.loginWithContainer}>
          <h1 style={s.caption}>Login with:</h1>
          <IconButton
            style={s.button}
            iconStyle={s.icon}
            onClick={this.handleGoogleOpen}
          >
            <FontIcon className="fab fa-google" color={green700} />
          </IconButton>
          <IconButton
            style={s.button}
            iconStyle={s.icon}
            onClick={this.handleFacebookOpen}
          >
            <FontIcon className="fab fa-facebook-square" color={indigo600} />
          </IconButton>
          <IconButton
            style={s.button}
            iconStyle={s.icon}
            onClick={this.handleTwitterOpen}
          >
            <FontIcon className="fab fa-twitter-square" color={blue500} />
          </IconButton>
          <Dialog
          title="Confirmation"
          actions={actions}
          modal={false}
          contentStyle={s.dialog}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Login with {this.state.app}
        </Dialog>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
