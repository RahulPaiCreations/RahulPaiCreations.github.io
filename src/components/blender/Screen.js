import React from "react";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";

export default function Screen() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blenderold/screen"
          render={() => (
            <div>
              <TitleDate title="Screen" date="5th May 2015" />
              <p>
                This was a test to see if I can use a video as a texture. The
                answer is yes! I made a model of my monitor at the time and used
                a screen recording of blender. <strong>Blenderception</strong>
              </p>
              <iframe
                width="800vw"
                height="450vw"
                src="https://www.youtube-nocookie.com/embed/S6Y6JFZJfAU"
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
