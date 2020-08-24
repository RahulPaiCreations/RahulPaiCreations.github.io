import React from "react";
import Interactive from "react-interactive";
import { Switch, Route, Link } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";
import Carousel from "../Carousel";

export default function Kitchen() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blender/kitchen"
          render={() => (
            <div>
              <TitleDate title="Kitchen" date="11th Jan. 2014" />
              <p>An unfinished attempt at a kitchen.</p>
              <Carousel folder="../../assets/kitchen" captions={[""]} />
            </div>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
