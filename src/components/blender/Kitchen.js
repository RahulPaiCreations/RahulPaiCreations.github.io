import React from "react";
import { Route, Switch } from "react-router-dom";
import Carousel from "../Carousel";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";

export default function Kitchen() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blenderold/kitchen"
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
