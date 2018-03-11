import React from 'react';
import s from '../styles/headBar.style';
// buttons
import SettingsButton from './SettingsButton';
import ShareButton from './ShareButton';

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
