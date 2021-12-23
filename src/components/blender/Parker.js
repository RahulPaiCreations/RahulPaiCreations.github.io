import React from "react";
import { Route, Switch } from "react-router-dom";
import Carousel from "../Carousel";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";

export default function Parker() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blenderold/parker"
          render={() => (
            <div>
              <TitleDate title="Parker Pen" date="20th Sep. 2013" />
              <p>
                One day, in class, I sat bored, twiddling my pen....BOOM this
                project was born. My Grandfather gave this pen to me and its
                quite special to me (yes, I know it's just a pen). I liked
                working on this, because it was challenging to get the shape of
                the hook (is that what its called?) right, and to get the
                materials right. In retrospect I should have made the plane have
                a wall, in order to avoid the black space that is there now. I
                had hoped to add some details such as the logo engraving and
                maybe even rig it with the cartridge inside.
              </p>
              <Carousel folder="../../assets/parker" captions={[""]} />
            </div>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
