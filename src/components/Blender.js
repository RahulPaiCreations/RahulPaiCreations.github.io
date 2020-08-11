import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import s from '../styles/exampleComponent.style';

export default function Blender() {
  return (
    <Switch>
      <Route exact path="/blender/pidom-fighter" render={() => (
          <div>
            <h1>PIDOM FIGHTER</h1>
            <img src="../../assets/1-fireship/main.jpg"></img>
          </div>
        )}/>
      <Route
        exact path="/blender"
        render={() => (
          <div>
            <div style={s.pageLinkContainer}>
              <Interactive
                as={Link}
                {...s.link}
                to="/blender/pidom-fighter"
              >Pidom Fighter</Interactive>
            </div>
          </div>
        )}
      />
      <Route component={PageNotFound} />
    </Switch>
  );
}
