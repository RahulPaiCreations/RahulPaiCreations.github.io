import React from "react";
import { Route, Switch } from "react-router-dom";
import Carousel from "../Carousel";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";

export default function Bubble() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blenderold/bubble"
          render={() => (
            <div>
              <TitleDate title="Bubble" date="14th Feb. 2016" />
              <p>
                Attempt at a bubble material in Cycles. Quite happy with the
                result.
              </p>
              <Carousel
                folder="../../assets/bubble"
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
