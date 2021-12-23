import React from "react";
import { Route, Switch } from "react-router-dom";
import Carousel from "../Carousel";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";

export default function RandomCubes() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blenderold/random-cubes"
          render={() => (
            <div>
              <TitleDate title="Random Cubes" date="25th Dec. 2014" />
              <p>
                This is another wallpaper I made, but this is simply a copy of
                another wallpaper I saw on my friend{" "}
                <strong>James Fraser</strong>'s phone. I challenged myself to
                recreate it and I think I was quite successful. In retrospect,
                the bevel on the cubes should have been sharper, and there
                should have been more red cubes.
              </p>
              <Carousel
                folder="../../assets/random-cubes"
                captions={[""]}
                aspectRatio={[18, 16]}
              />
              <p style={{ marginTop: "1em" }}>
                Below is the original that I tried to copy:
              </p>
              <a href="http://www.alltechsols.com/media/images/abstract_black_and_red_cubes-1920x1080_1.jpg">
                <img
                  className="extraImage"
                  src="http://www.alltechsols.com/media/images/abstract_black_and_red_cubes-1920x1080_1.jpg"
                />
              </a>
            </div>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
