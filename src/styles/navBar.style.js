import style from './style';


const s = Object.create(style);

s.navBar = {
  height: '50px',
  width: '400px',
  backgroundColor: '#401f68',
  borderRadius: '2px',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center'
}

s.button = {
  height: '50px',
  color: '#ECEFF1'
}

s.title = {
  fontSize: '26px',
  marginBottom: '0.5vh',
  display: 'inline-block',
  color: '#ECEFF1'
};

s.dialog = {
  width: '400px',
  maxWidth: 'none',
  paddingRight: '50px'
};

export default s;
