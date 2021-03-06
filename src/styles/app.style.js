import style from './style';


const s = Object.create(style);

let Background = 'https://raw.githubusercontent.com/htmercury/phoneHabitBreaker/master/docs/images/iphoneTemplate.png';

s.root = {
  fontFamily: 'Roboto, helvetica, sans-serif',
  fontWeight: '300',
  fontSize: '16px',
  letterSpacing: '0.025em',
  padding: '3vh 0 12vh 0',
  width: '500px',
  // use responsive max-width to simulate padding/margin to allow
  // space for vertical scroll bar without creating horizontal scroll bar
  // (if there is padding, the window will scroll horizontally to show the padding)
  maxWidth: 'calc(100vw - 40px)',

  // center based on vw to prevent content jump when vertical scroll bar show/hide
  // note: vw/vh include the width of scroll bars. Note that centering using margin auto
  // or % (which doesn't include scroll bars, so changes when scroll bars shown) causes a page jump
  position: 'relative',
  left: '50vw',
  WebkitTransform: 'translate(-50%, 0)',
  MozTransform: 'translate(-50%, 0)',
  msTransform: 'translate(-50%, 0)',
  OTransform: 'translate(-50%, 0)',
  transform: 'translate(-50%, 0)',

  WebkitTextSizeAdjust: 'none',
  MozTextSizeAdjust: 'none',
  msTextSizeAdjust: 'none',
  textSizeAdjust: 'none',
};

s.title = {
  fontSize: '20px',
  marginBottom: '0.5vh',
};

s.repoLink = {
  fontSize: '14px',
};

s.breadcrumbs = {
  margin: '3vh 0',
};

s.phone = {
  backgroundImage: `url(${Background})`,
	backgroundRepeat: 'no-repeat',
  padding: '5px',
  height: '940px',
	width: '472px'
};

s.screen = {
  backgroundColor: '#F0F0F0',
  height: '710px',
	width: '400px',
	margin: '112px 23px',
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'column'
};

s.filler = {
  flex: '1'
};

s.navBar = {
  alignSelf: 'flex-end'
};

s.creditLine = {
  color: '#A0A0A0',
  fontSize: '14px',
  marginTop: '50px',
};

export default s;
