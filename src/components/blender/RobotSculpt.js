import React from "react";
import { Route, Switch } from "react-router-dom";
import Carousel from "../Carousel";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";

export default function RobotSculpt() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blenderold/robot-sculpt"
          render={() => (
            <div>
              <TitleDate title="Robot Sculpt" date="2nd May 2016" />
              <p>An unfinished attempt to sculpt a robot head.</p>
              <Carousel folder="../../assets/robot-sculpt" captions={[""]} />
            </div>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
