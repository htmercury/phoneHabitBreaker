import style from './style';

const s = Object.create(style);

s.title = {
  fontSize: '28px',
  marginTop: '20px',
  marginBottom: '0.5vh',
  textAlign: 'center'
};

s.subtitle = {
  fontSize: '18px',
  marginTop: '10px',
  marginBottom: '0.5vh',
  textAlign: 'center'
};

s.profileInfo = {
  width: '150px',
  marginTop: '30px'
};

s.userSpecific = {
  fontSize: '14px'
};

s.superContainer = {
  margin: '15px 0',
  display: 'flex',
  justifyContent: 'space-around'
};

s.settingsContainer = {
  marginTop: '20px'
};

s.directions = {
  marginLeft: '15px',
  fontSize: '14px',
  color: 'grey'
};

s.toggle = {
  margin: '10px 15px',
  width: '360px'
};

export default s;
