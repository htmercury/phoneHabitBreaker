import React from 'react';
import s from '../styles/headBar.style';
// font icons
import FontIcon from 'material-ui/FontIcon';
import {blueGrey50, deepPurple800, blue500} from 'material-ui/styles/colors';
// buttons
import FlatButton from 'material-ui/FlatButton';

const iconStyles = {
};

export default function HeadBar() {
  return (
    <div style={s.headBar}>
      <FlatButton
        style={s.button}
        icon={<FontIcon className="material-icons" style={iconStyles} color={blueGrey50}>settings</FontIcon>}
      />
      <h1 style={s.title}>My Time</h1>
      <FlatButton
        style={s.button}
        icon={<FontIcon className="material-icons" style={iconStyles} color={blueGrey50}>share</FontIcon>}
      />

    </div>
  );
}
