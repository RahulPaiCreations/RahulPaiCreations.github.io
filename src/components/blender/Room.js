import React from "react";
import Interactive from "react-interactive";
import { Switch, Route, Link } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";
import Carousel from "../Carousel";

export default function Room() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blender/room"
          render={() => (
            <div>
              <TitleDate title="Room" date="23rd Mar. 2016" />
              <p>
                An unfinished attempt at my room. I painted some displacement
                maps for the PC details, rather than creating geometry, which
                was new for me.
              </p>
              <Carousel folder="../../assets/room" captions={[""]} />
            </div>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
