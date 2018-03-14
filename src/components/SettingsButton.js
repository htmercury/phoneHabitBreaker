import React from 'react';
import s from '../styles/headBar.style';
import { Link } from 'react-router-dom';
// font icons
import FontIcon from 'material-ui/FontIcon';
import {blueGrey50, deepPurple800, blue500} from 'material-ui/styles/colors';
// buttons
import FlatButton from 'material-ui/FlatButton';
// pop up menu
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const iconStyles = {
};

export default class SettingsButton extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleClick = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
  return (
        <div>
          <FlatButton
            style={s.button}
            onClick={this.handleClick}
            icon={<FontIcon className="material-icons" style={iconStyles} color={blueGrey50}>settings</FontIcon>}
          />
          <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
          animation={PopoverAnimationVertical}
          >
            <Menu>
              <MenuItem primaryText="Refresh" />
              <MenuItem primaryText="Help &amp; feedback" containerElement={<Link to="/community"></Link>} />
              <MenuItem primaryText="Settings" containerElement={<Link to="/profile"></Link>} />
              <MenuItem primaryText="Sign out" containerElement={<Link to="/"></Link>} />
            </Menu>
          </Popover>
        </div>
    );
  }
}
