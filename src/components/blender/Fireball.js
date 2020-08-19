import React from "react";
import Interactive from "react-interactive";
import { Switch, Route, Link } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";
import Carousel from "../Carousel";

export default function Fireball() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blender/fireball"
          render={() => (
            <div>
              <TitleDate title="Fireball" date="20th Mar. 2014" />
              <p>
                This was an experiment with fire simulation. I had intended to
                use this with a camera tracking project but never got around to
                it. Maybe in the future?
              </p>
              <iframe
                width="800vw"
                height="450vw"
                src="https://www.youtube-nocookie.com/embed/ZGTW6HN8hKQ"
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
