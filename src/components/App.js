import React from 'react';
import Interactive from 'react-interactive';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './Home';
import ExampleComponent from './ExampleComponent';
import Blender from './Blender';
import PageNotFound from './PageNotFound';
import s from '../styles/app.style';

export default function App() {
  return (
    <div style={s.root}>
      <h1 style={s.title}>Rahul Pai Creations</h1>
      <Interactive
        as="a"
        href="https://github.com/RahulPaiCreations/rahulpaicreations.github.io"
        style={s.repoLink}
        {...s.link}
      >https://github.com/RahulPaiCreations/rahulpaicreations.github.io</Interactive>

      <nav style={s.nav}>
        <Interactive
          as={Link}
          {...s.link}
          to="/"
        >Home</Interactive>
        &nbsp;|&nbsp;
        <Interactive
          as={Link}
          {...s.link}
          to="/blender"
        >Blender</Interactive>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/example" component={ExampleComponent} />
        <Route path="/blender" component={Blender} />
        <Route component={PageNotFound} />
      </Switch>

      <div style={s.creditLine}>
        <Interactive
          as="a"
          href="http://www.rafaelpedicini.com"
          interactiveChild
          focus={{}}
          touchActive={{}}
          touchActiveTapOnly
        >
          Code and concept by <span {...s.childLink}>Rafael Pedicini</span>
        </Interactive>
      </div>
    </div>
  );
}
