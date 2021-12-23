import React from "react";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";

export default function Liquid() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blenderold/liquid"
          render={() => (
            <div>
              <TitleDate title="Liquid" date="28th Aug. 2013" />
              <p>
                This was an experiment with the new water simulation, and
                frankly I was bored of homework xD. I made the text into a mesh,
                then made it into water, then rendered the animation backwards.
              </p>
              <iframe
                width="800vw"
                height="450vw"
                src="https://www.youtube-nocookie.com/embed/RyNOj-Ei-YM"
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
