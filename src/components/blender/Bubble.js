import React from "react";
import Interactive from "react-interactive";
import { Switch, Route, Link } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";
import Carousel from "../Carousel";

export default function Bubble() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blender/bubble"
          render={() => (
            <div>
              <TitleDate title="Bubble" date="14th Feb. 2016" />
              <p>
                Attempt at a bubble material in Cycles. Quite happy with the
                result.
              </p>
              <Carousel
                folder="../../assets/31-bubble"
                captions={["Render", "Material Nodes"]}
              />
            </div>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
