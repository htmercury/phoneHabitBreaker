import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
import { Code } from '../styles/style';
import s from '../styles/login.style';
//login form
import LoginForm from './LoginForm';
// font icons
import FontIcon from 'material-ui/FontIcon';
// buttons
import IconButton from 'material-ui/IconButton';
// colors
import {green700, indigo600, blue500} from 'material-ui/styles/colors';

export default function Login() {
  const repoReadmeLink = text => (
    <Interactive
      as="a"
      {...s.link}
      href="https://github.com/htmercury/phoneHabitBreaker#readme"
    >{text}</Interactive>
  );

  return (
    <div>
      <LoginForm />
      <div style={s.filler}></div>
      <div style={s.loginWithContainer}>
        <h1 style={s.caption}>Login with:</h1>
        <IconButton
          style={s.button}
          iconStyle={s.icon}
        >
          <FontIcon className="fab fa-google" color={green700} />
        </IconButton>
        <IconButton
          style={s.button}
          iconStyle={s.icon}
        >
          <FontIcon className="fab fa-facebook-square" color={indigo600} />
        </IconButton>
        <IconButton
          style={s.button}
          iconStyle={s.icon}
        >
          <FontIcon className="fab fa-twitter-square" color={blue500} />
        </IconButton>
      </div>
    </div>
  );
}
