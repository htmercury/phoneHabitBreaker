import React from 'react';
import s from '../styles/navBar.style';
import { withRouter } from "react-router-dom";
// font icons
import FontIcon from 'material-ui/FontIcon';
import {blueGrey50, deepPurple800, blue500} from 'material-ui/styles/colors';
// buttons
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


const iconStyles = {
};

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homePath: '/home',
      usagePath: '/usage',
      communityPath: '/community',
      profilePath: '/profile',
      default: '/',
      open: false
    }
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleOpen(event, path) {
    if (!this.props.loginStatus) {
      this.setState({open: true});
    }
    else {
      this.props.history.push(path);
    }
  }

  handleClose = () => {
    this.setState({open: false});
  };

  handleLogin = () => {
    this.props.history.push('/home');
    this.setState({open: false});
  }

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
      <div>
         <Dialog
              title="Are you sure?"
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
              contentStyle={s.dialog}
              >
              Login without an account.
        </Dialog>
      </div>
        <div style={s.navBar}>
          <IconButton
            style={s.button}
            tooltip='Home'
            tooltipPosition='top-center'
            touch={true}
            onClick={(e) => this.handleOpen(e, this.state.homePath)}
          >
          <FontIcon className="material-icons" style={iconStyles} color={blueGrey50}>home</FontIcon>
          </IconButton>
          <IconButton
            style={s.button}
            tooltip='Usage'
            tooltipPosition='top-center'
            touch={true}
            onClick={(e) => this.handleOpen(e, this.state.usagePath)}
          >
          <FontIcon className="material-icons" style={iconStyles} color={blueGrey50}>trending_up</FontIcon>
          </IconButton>
          <IconButton
            style={s.button}
            tooltip='Community'
            tooltipPosition='top-center'
            touch={true}
            onClick={(e) => this.handleOpen(e, this.state.communityPath)}
          >
          <FontIcon className="material-icons" style={iconStyles} color={blueGrey50}>group</FontIcon>
          </IconButton>
          <IconButton
            style={s.button}
            tooltip='Profile'
            tooltipPosition='top-center'
            touch={true}
            onClick={(e) => this.handleOpen(e, this.state.profilePath)}
          >
          <FontIcon className="material-icons" style={iconStyles} color={blueGrey50}>person_pin</FontIcon>
          </IconButton>
        </div>
        </div>
      );
    }
}

export default withRouter(NavBar);
