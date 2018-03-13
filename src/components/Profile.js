import React from 'react';
import s from '../styles/profile.style';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';


export default class Usage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: 'https://github.com/htmercury/phoneHabitBreaker/blob/master/docs/images/touxiang6.jpg?raw=true',

    }
  }

  render() {

    return (
      <div>
        <h1 style={s.title}>Profile</h1>
        <div style={s.superContainer}>
          <div style={s.userInfo}>
            <Avatar src={this.state.avatar} size={180} />
            <h1 style={s.subtitle}>Hang Wu</h1>
          </div>
          <div style={s.profileInfo}>
            <h1>Located at: <span style={s.userSpecific}>Evanston</span></h1>
            <h1>Age: <span style={s.userSpecific}>22</span></h1>
            <h1>Status: <span style={s.userSpecific}>Bring me a real challenge.</span></h1>
          </div>
        </div>
        <Divider />
        <Subheader style={{fontSize: '16px'}}>Your Settings</Subheader>
        <div style={s.settingsContainer}>
        </div>
      </div>
    );
  }
}
