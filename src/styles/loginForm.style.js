import style from './style';


const s = Object.create(style);

s.title = {
  fontSize: '26px',
  marginTop: '10px',
  marginBottom: '0.5vh',
  textAlign: 'center'
};

s.subtitle = {
  fontSize: '18px',
  marginBottom: '0.5vh',
  display: 'inline-block',
};

s.fieldContainer = {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '45px',
  width: '310px'
};

s.buttonContainer = {
  display: 'flex',
  justifyContent: 'space-evenly'
};

export default s;
