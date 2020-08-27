import React from "react";
import Interactive from "react-interactive";
import { Switch, Route, Link } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";
import Carousel from "../Carousel";

export default function RobotSculpt() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blender/robot-sculpt"
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
