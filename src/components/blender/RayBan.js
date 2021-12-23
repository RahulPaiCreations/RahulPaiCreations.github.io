import React from "react";
import { Route, Switch } from "react-router-dom";
import Carousel from "../Carousel";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";

export default function RayBan() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blenderold/ray-ban"
          render={() => (
            <div>
              <TitleDate title="Ray Ban Glasses" date="14th May 2015" />
              <p>
                Ray Ban Glasses were a nice modelling exercise. Dodgy attempt at
                the logo texture. For some reason I made a kind of pedestal to
                put it on.
              </p>
              <Carousel folder="../../assets/ray-ban" captions={["", ""]} />
            </div>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
