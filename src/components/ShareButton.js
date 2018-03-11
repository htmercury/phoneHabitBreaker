import React from 'react';
import s from '../styles/headBar.style';
// font icons
import FontIcon from 'material-ui/FontIcon';
import {blueGrey50, deepPurple800, blue500} from 'material-ui/styles/colors';
// buttons
import FlatButton from 'material-ui/FlatButton';
// pop up menu
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';

const iconStyles = {
};

export default class ShareButton extends React.Component {

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
            icon={<FontIcon className="material-icons" style={iconStyles} color={blueGrey50}>share</FontIcon>}
          />
          <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
          animation={PopoverAnimationVertical}
          >
            <Menu>
            <MenuItem
        primaryText="Share this:"
        rightIcon={<ArrowDropRight />}
        menuItems={[
              <MenuItem
                primaryText="Google+"
                rightIcon = {<FontIcon className="fab fa-google-plus" />}
              />,
              <MenuItem
                primaryText="Facebook"
                rightIcon = {<FontIcon className="fab fa-facebook" />}
              />,
              <MenuItem
                primaryText="Twitter"
                rightIcon = {<FontIcon className="fab fa-twitter" />}
              />,
            ]}
          />
            </Menu>
          </Popover>
        </div>
    );
  }
}
