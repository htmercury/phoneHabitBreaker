import style from './style';

const s = Object.create(style);

s.title = {
  fontSize: '24px',
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

s.dialog = {
  width: '400px',
  maxWidth: 'none',
  paddingRight: '50px'
};

s.startThread = {
  margin: '20px'
}

s.commentContainer = {
  marginLeft: '55px'
}

s.comment = {
  color: 'grey',
  backgroundColor: 'antiquewhite',
  paddingRight: '0'
}

s.commentText = {
  width: '240px'
}

s.container = {
  width: '100%',
  height: '492px',
  overflowY: 'auto'
}

export default s;
