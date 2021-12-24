import React from "react";
import { Route, Switch } from "react-router-dom";
import Carousel from "../Carousel";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";

export default function Lamp() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blenderold/lamp"
          render={() => (
            <div>
              <TitleDate title="Desk Lamp" date="21st Jan. 2013" />
              <p>
                A simple attempt at a lamp. I didn&apos;t even smooth the
                lamp&apos;s neck. You can&apos;t see easily in the render, but I
                wrote ON and OFF on the two sides of the switch.
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
