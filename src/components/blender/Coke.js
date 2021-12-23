import React from "react";
import { Route, Switch } from "react-router-dom";
import Carousel from "../Carousel";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";

export default function Coke() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blenderold/coke"
          render={() => (
            <div>
              <TitleDate title="Coke Bottles" date="15th May 2012" />
              <p>
                These are simply three coke bottles that I made using a
                cylinder. This was my first endeavour with textures. This was
                rendered in Blender Internal.
              </p>
              <Carousel
                folder="../../assets/coke"
                captions={[""]}
                aspectRatio={[65, 57]}
              />
            </div>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
