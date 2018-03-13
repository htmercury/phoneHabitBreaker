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
  width: '140px',
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
  width: '100%',
  height: '259px',
  overflowY: 'auto'
};

export default s;
