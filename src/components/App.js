import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import ExampleComponent from './ExampleComponent';
import PageNotFound from './PageNotFound';
import Breadcrumbs from './Breadcrumbs';
import s from '../styles/app.style';

export default function App() {
  return (
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

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/example" component={ExampleComponent} />
        <Route component={PageNotFound} />
      </Switch>

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
  );
}
