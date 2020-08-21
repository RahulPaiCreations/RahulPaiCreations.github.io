import React from "react";
import Interactive from "react-interactive";
import { Switch, Route, Link } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";
import Carousel from "../Carousel";

export default function Flower() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blender/flower"
          render={() => (
            <div>
              <TitleDate title="Flower" date="28th Apr. 2015" />
              <p>
                An unfinished attempt at a flower. The petals are done with a
                procedural texture, based on a noise texture.
              </p>
              <Carousel folder="../../assets/19-flower" captions={[""]} />
            </div>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
