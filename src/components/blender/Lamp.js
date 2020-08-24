import React from "react";
import Interactive from "react-interactive";
import { Switch, Route, Link } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";
import Carousel from "../Carousel";

export default function Lamp() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blender/lamp"
          render={() => (
            <div>
              <TitleDate title="Desk Lamp" date="21st Jan. 2013" />
              <p>
                A simple attempt at a lamp. I didn't even smooth the lamp's
                neck. You can't see easily in the render, but I wrote ON and OFF
                on the two sides of the switch.
              </p>
              <Carousel folder="../../assets/lamp" captions={[""]} />
            </div>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
