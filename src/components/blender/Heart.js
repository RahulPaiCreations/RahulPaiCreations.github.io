import React from "react";
import Interactive from "react-interactive";
import { Switch, Route, Link } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";
import Carousel from "../Carousel";

export default function Heart() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blender/heart"
          render={() => (
            <div>
              <TitleDate title="Heart" date="18th Jun. 2015" />
              <p>
                Another{" "}
                <Interactive as={Link} to="/blender/fireship" className="link">
                  wacky
                </Interactive>{" "}
                <Interactive as={Link} to="/blender/diglett" className="link">
                  background
                </Interactive>
                . Randomly decided to model a heart. Based heavily on a single
                reference image I found of another model. If I recall correctly,
                I used the skin modifier for the surface vessels. Quite happy
                with the result, and I used the model for two more projects. The
                background is using a radial Voronoi texture.
              </p>
              <Carousel
                folder="../../assets/heart"
                captions={[""]}
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
