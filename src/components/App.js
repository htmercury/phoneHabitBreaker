import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route} from 'react-router-dom';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import ExampleComponent from './ExampleComponent';
import PageNotFound from './PageNotFound';
import Breadcrumbs from './Breadcrumbs';
import HeadBar from './HeadBar';
import NavBar from './NavBar';
import s from '../styles/app.style';
// Material UI loader
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const iconStyles = {
  marginRight: 24,
};

class App extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  state = {
    open: false,
    destination: ''
  };

  render() {
    const { match, location, history } = this.props;
    let loggedIn = (location.pathname != '/' && location.pathname != '/register');

    //console.log(location.pathname);
    //console.log(loggedIn);

    return (
      <MuiThemeProvider>
      <div style={s.root}>
        <h1 style={s.title}>Phone Habit Breaker SPA for GitHub Pages</h1>
        <Interactive
          as="a"
          href="https://github.com/htmercury/phoneHabitBreaker"
          style={s.repoLink}
          {...s.link}
        >https://github.com/htmercury/phoneHabitBreaker</Interactive>

        <nav style={s.breadcrumbs}>
          <Breadcrumbs />
        </nav>

        <div style={s.phone}>
          <div style={s.screen}>
          <HeadBar />
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/example" component={ExampleComponent} />
              <Route component={PageNotFound} />
            </Switch>
            <div style={s.filler}>
            </div>
            <NavBar style={s.navBar} loginStatus={loggedIn}/>
          </div>
        </div>

        <div style={s.creditLine}>
          <Interactive
            as="a"
            href="https://www.mccormick.northwestern.edu/eecs/courses/descriptions/330.html"
            interactiveChild
            focus={{}}
            touchActive={{}}
            touchActiveTapOnly
          >
            Code and concept created for Northwestern&#39;s <span {...s.childLink}>EECS330 Course</span>
          </Interactive>
        </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(App);
