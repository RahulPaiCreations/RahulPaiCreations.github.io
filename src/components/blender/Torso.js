import React from "react";
import Interactive from "react-interactive";
import { Switch, Route, Link } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";
import Carousel from "../Carousel";

export default function Torso() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blender/torso"
          render={() => (
            <div>
              <TitleDate title="Torso" date="10th Aug. 2016" />
              <p>
                Two attempts at sculpting a torso. This was supposed to be
                practice for a character, but I never got to making the actual
                character...
              </p>
              <Carousel folder="../../assets/torso" captions={[""]} />
            </div>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
