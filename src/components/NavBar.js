import React from 'react';
import s from '../styles/navBar.style';
// font icons
import FontIcon from 'material-ui/FontIcon';
import {blueGrey50, deepPurple800, blue500} from 'material-ui/styles/colors';
// buttons
import IconButton from 'material-ui/IconButton';


const iconStyles = {
};

export default function NavBar() {
  return (
      <div style={s.navBar}>
        <IconButton
          style={s.button}
          tooltip='Home'
          tooltipPosition='top-center'
          touch={true}
        >
        <FontIcon className="material-icons" style={iconStyles} color={blueGrey50}>home</FontIcon>
        </IconButton>
        <IconButton
          style={s.button}
          tooltip='Usage'
          tooltipPosition='top-center'
          touch={true}
        >
        <FontIcon className="material-icons" style={iconStyles} color={blueGrey50}>trending_up</FontIcon>
        </IconButton>
        <IconButton
          style={s.button}
          tooltip='Community'
          tooltipPosition='top-center'
          touch={true}
        >
        <FontIcon className="material-icons" style={iconStyles} color={blueGrey50}>group</FontIcon>
        </IconButton>
        <IconButton
          style={s.button}
          tooltip='Profile'
          tooltipPosition='top-center'
          touch={true}
        >
        <FontIcon className="material-icons" style={iconStyles} color={blueGrey50}>person_pin</FontIcon>
        </IconButton>
      </div>
    );
}
