import React from "react";
import { Route, Switch } from "react-router-dom";
import Carousel from "../Carousel";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";

export default function Cityscape() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blenderold/cityscape"
          render={() => (
            <div>
              <TitleDate title="Cityscape" date="28th Oct. 2013" />
              <p>
                This was an attempt at a city sunset view. I generated the land
                with some kind of procedural squares displacement. Then I
                created a house and a skyscraper and spawned them on the land
                using a particle system. Some are on the wrong land faces, so I
                said it was after an earthquake 😅.
              </p>
              <Carousel folder="../../assets/cityscape" captions={[""]} />
            </div>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
