import React from "react";
import Interactive from "react-interactive";
import { Switch, Route, Link } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";
import Carousel from "../Carousel";

export default function CharlieBrown() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blender/charlie-brown"
          render={() => (
            <div>
              <TitleDate title="Charlie Brown" date="16th Oct. 2016" />
              <p>
                Quite happy with this one. I painted a displacement map for the
                mouth, which I also used as a mask in the material shader. I had
                planned to then modify it into a representation of myself, but
                didn't get round to it.
              </p>
              <Carousel
                folder="../../assets/charlie-brown"
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
