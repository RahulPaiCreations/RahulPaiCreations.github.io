import React from "react";
import Interactive from "react-interactive";
import { Switch, Route, Link } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";
import Carousel from "../Carousel";

export default function Cityscape() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blender/cityscape"
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
              <Carousel folder="../../assets/9-cityscape" captions={[""]} />
            </div>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
