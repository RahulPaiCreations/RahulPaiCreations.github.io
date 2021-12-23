import React from "react";
import { Route, Switch } from "react-router-dom";
import Carousel from "../Carousel";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";

export default function Flower() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blenderold/flower"
          render={() => (
            <div>
              <TitleDate title="Flower" date="28th Apr. 2015" />
              <p>
                An unfinished attempt at a flower. The petals are done with a
                procedural texture, based on a noise texture.
              </p>
              <Carousel folder="../../assets/flower" captions={[""]} />
            </div>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
