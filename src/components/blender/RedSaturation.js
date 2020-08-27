import React from "react";
import Interactive from "react-interactive";
import { Switch, Route, Link } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";
import Carousel from "../Carousel";

export default function RedSaturation() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blender/red-saturation"
          render={() => (
            <div>
              <TitleDate title="Red Saturation" date="31st Jan. 2017" />
              <p>
                Although there is a significant learning curve, after some
                practice, I find the Blender compositor quite intuitive; and
                it's super power full. Occasionally I use it to edit photos.
                This time I challenged myself to mimic this mono color effect
                I've seen elsewhere.
              </p>
              <p>
                I created a Variable Saturation node, which just mixes between
                the image and its greyscale version. Then I used the Separate
                RGB node with some math as a mask for the Variable Saturation.
                Turned out quite nice.
              </p>
              <Carousel
                folder="../../assets/red-saturation"
                captions={["After", "Before"]}
              />
            </div>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
