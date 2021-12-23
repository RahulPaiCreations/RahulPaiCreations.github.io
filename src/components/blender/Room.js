import React from "react";
import { Route, Switch } from "react-router-dom";
import Carousel from "../Carousel";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";

export default function Room() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blenderold/room"
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
