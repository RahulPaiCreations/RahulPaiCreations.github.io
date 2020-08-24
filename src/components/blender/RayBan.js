import React from "react";
import Interactive from "react-interactive";
import { Switch, Route, Link } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";
import Carousel from "../Carousel";

export default function RayBan() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blender/ray-ban"
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
