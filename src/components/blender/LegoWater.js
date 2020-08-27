import React from "react";
import Interactive from "react-interactive";
import { Switch, Route, Link } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";
import Carousel from "../Carousel";

export default function LegoWater() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blender/lego-water"
          render={() => (
            <div>
              <TitleDate title="Lego Water" date="30th Mar. 2016" />
              <p>
                Fluid simulation then Remesh in Blocks mode, then DupliVerts
                using a single Lego piece. Not really sure why it jumps around
                occasionally, but otherwise quite happy with the result.
              </p>
              <iframe
                width="800vw"
                height="450vw"
                src="https://www.youtube-nocookie.com/embed/MHciGvJJa9k"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="1"
                className="youtube"
              ></iframe>
            </div>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
