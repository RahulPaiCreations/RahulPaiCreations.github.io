import React from "react";
import Interactive from "react-interactive";
import { Switch, Route, Link } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";
import Carousel from "../Carousel";

export default function Window() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blender/window"
          render={() => (
            <div>
              <TitleDate title="Window" date="31st Mar. 2015" />
              <p>
                This project uses camera tracking. I added a window and some
                objects to my wall. I think this turned out really well. I had
                intended to add spaceships flying outside (hence the sci-fi
                outdoors), but didn't get around to it.
              </p>
              <iframe
                width="800vw"
                height="450vw"
                src="https://www.youtube-nocookie.com/embed/sfMxgde4bQ8"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="1"
                className="youtube"
              ></iframe>
              <p style={{ marginTop: "1em" }}>
                Below is the original footage. The blue tac pieces on the wall
                are used to track the camera position and rotation.
              </p>
              <iframe
                width="800vw"
                height="450vw"
                src="https://www.youtube-nocookie.com/embed/LMpxi6eqAGQ"
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
