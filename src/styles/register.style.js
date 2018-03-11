import style from './style';


const s = Object.create(style);

s.title = {
  fontSize: '36px',
  marginTop: '10px',
  marginBottom: '0.5vh'
};

s.form = {
  margin: '10px 20px'
};

s.nameContainer = {
  display: 'flex'
}

s.buttonContainer = {
  display: 'flex',
  justifyContent: 'space-evenly',
  paddingTop: '40px'
};


s.filler = {
  width: '25px'
};

s.caption = {
  marginLeft: '10px'
};

s.loginWithContainer = {
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  fontSize: '18px',
  height: '50px'
};

s.button = {
  width: 72,
  height: 72,
  padding: 16
};

s.icon = {
  fontSize: '36px'
};

s.pageLinkContainer = {
  margin: '1vh 0',
  textAlign: 'center'
};

s.dialog = {
  width: '400px',
  maxWidth: 'none',
  paddingRight: '50px'
};

export default s;
