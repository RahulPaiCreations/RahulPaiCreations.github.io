import React from "react";
import { Route, Switch } from "react-router-dom";
import Carousel from "../Carousel";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";

export default function HeartRiver() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blenderold/heart-river"
          render={() => (
            <div>
              <TitleDate title="Left My Heart In Tokyo" date="21st Jun. 2015" />
              <p>
                A reference to{" "}
                <a
                  href="https://www.youtube.com/watch?v=6gviIbLw2AU"
                  className="link"
                >
                  this song
                </a>
                . Used the heart from before. It is supposed to be laying on the
                grass "down by the river". The reflections in the water are
                skyscrapers with Japansese neon writing as you'd expect in
                Tokyo. Not my most realistic render...
              </p>
              <Carousel folder="../../assets/heart-river" captions={[""]} />
            </div>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
