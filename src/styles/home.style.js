import style from './style';

const s = Object.create(style);

s.title = {
  fontSize: '28px',
  marginTop: '10px',
  marginBottom: '0.5vh',
  textAlign: 'center'
};

s.subtitle = {
  fontSize: '18px',
  marginTop: '10px',
  marginBottom: '0.5vh',
  textAlign: 'center'
};

s.circular = {
  display: 'flex',
  justifyContent: 'center'
}

s.home = {
  margin: '10px 30px'
};

s.dialog = {
  width: '400px',
  maxWidth: 'none',
  paddingRight: '50px'
};

s.pageLinkContainer = {
  margin: '1vh 0',
};

export default s;
