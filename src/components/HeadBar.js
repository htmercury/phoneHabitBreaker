import React from 'react';
import s from '../styles/headBar.style';
// font icons
import FontIcon from 'material-ui/FontIcon';
import {blueGrey50, deepPurple800, blue500} from 'material-ui/styles/colors';
// buttons
import FlatButton from 'material-ui/FlatButton';
import SettingsButton from './SettingsButton';
import ShareButton from './ShareButton';
// pop up menu
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const iconStyles = {
};

export default function HeadBar() {
  return (
      <div style={s.headBar}>
        <ShareButton />

        <h1 style={s.title}>My Time</h1>

        <SettingsButton />
      </div>
    );
}
