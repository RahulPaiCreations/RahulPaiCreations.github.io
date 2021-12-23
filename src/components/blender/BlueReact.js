import React from "react";
import { Route, Switch } from "react-router-dom";
import Carousel from "../Carousel";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";

export default function BlueReact() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blenderold/blue-react"
          render={() => (
            <div>
              <TitleDate title="Blue React" date="4th Dec. 2018" />
              <p>
                Inspired by the new Facebook angry react, I decided to create
                some of my own.
              </p>
              <Carousel
                folder="../../assets/blue-react"
                captions={["", "", "", ""]}
                aspectRatio={[1, 1]}
              />
            </div>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
