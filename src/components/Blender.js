import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import Fireship from './blender/Fireship';
import style from '../style';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ImageWithZoom, DotGroup } from 'pure-react-carousel';

const s = Object.create(style);

export default function Blender() {
  return (
    <div>
      <Switch>
        <Route exact path="/blender/fireship" component={Fireship}/>
        <Route
          exact path="/blender"
          render={() => (
            <div>
              <div style={s.pageLinkContainer}>
                <Interactive
                  as={Link}
                  to="/blender/fireship"
                ><img src="../../assets/1-fireship/1.png" /></Interactive>
              </div>
            </div>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
