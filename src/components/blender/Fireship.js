import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';
import PageNotFound from '../PageNotFound';
import TitleDate from '../TitleDate'
import style from '../../style';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ImageWithZoom, DotGroup } from 'pure-react-carousel';

const s = Object.create(style);

export default function Fireship() {
  return (
<div>
    <Switch>
      <Route exact path="/blender/fireship" render={() => (
          <div>
            <TitleDate title="Fireship" alias="Pidom Fighter 314" date="Circa. 2011"/>
            <p>
              This amazing space ship was inspired from star wars, but is very different in many ways.
              It has a long front glass window that opens upwards and two laser guns at the sides.
              This was my first ever project in Blender and so it is quite special to me, despite its simplicity.
              I added the background using Photoshop because I didn't know about the compositor at the time.
            </p>
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={60}
              totalSlides={4}
              infinite
            >
              <div style={{position: "relative"}}>
                <Slider style={{borderRadius:"3vmin"}}>
                  <Slide index={0}> 
                    <ImageWithZoom src="../../assets/1-fireship/1.png" />
                    <div className="caption">Main Render</div>
                  </Slide>
                  <Slide index={1}>
                    <ImageWithZoom src="../../assets/1-fireship/2.png" />
                    <div className="caption">Front</div>
                  </Slide>
                  <Slide index={2}>
                    <ImageWithZoom src="../../assets/1-fireship/3.png" />
                    <div className="caption">Back</div>
                  </Slide>
                  <Slide index={3}>
                    <ImageWithZoom src="../../assets/1-fireship/4.png" />
                    <div className="caption">Window Open</div>
                  </Slide>
                </Slider>
                <ButtonBack className="buttonBack buttonCarousel"><img src="../../assets/arrow_left.svg"/></ButtonBack>
                <ButtonNext className="buttonNext buttonCarousel"><img src="../../assets/arrow_right.svg"/></ButtonNext>
              </div>
              <DotGroup className="dotGroup" />
            </CarouselProvider>
          </div>
        )}/>
      <Route component={PageNotFound} />
    </Switch>
    </div>
  );
}
