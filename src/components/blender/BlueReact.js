import React from "react";
import Interactive from "react-interactive";
import { Switch, Route, Link } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";
import Carousel from "../Carousel";

export default function BlueReact() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blender/blue-react"
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
