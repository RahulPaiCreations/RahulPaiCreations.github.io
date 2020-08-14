import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import style from '../style';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ImageWithZoom, DotGroup } from 'pure-react-carousel';

const s = Object.create(style);

export default function Blender() {
  return (
<div>
    <Switch>
      <Route exact path="/blender/pidom-fighter" render={() => (
          <div>
            <h1>PIDOM FIGHTER</h1>
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={60}
              totalSlides={4}
            >
              <Slider style={{borderRadius:"3vh"}}>
                <Slide index={0}> 
                  <ImageWithZoom src="../../assets/1-fireship/1.png" />
                </Slide>
                <Slide index={1}>
                  <ImageWithZoom src="../../assets/1-fireship/2.png" />
                </Slide>
                <Slide index={2}>
                  <ImageWithZoom src="../../assets/1-fireship/3.png" />
                </Slide>
                <Slide index={3}>
                  <ImageWithZoom src="../../assets/1-fireship/4.png" />
                </Slide>
              </Slider>
              <ButtonBack>Back</ButtonBack>
              <ButtonNext>Next</ButtonNext>
              <DotGroup />
            </CarouselProvider>
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
    </div>
  );
}
