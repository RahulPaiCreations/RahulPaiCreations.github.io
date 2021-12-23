import React from "react";
import { Route, Switch } from "react-router-dom";
import Carousel from "../Carousel";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";

export default function Batman() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blenderold/batman"
          render={() => (
            <div>
              <TitleDate title="Batman" date="17th Jun. 2015" />
              <p>
                My first attempt at sculpting and retopo. I am very happy with
                how it turned out, although I now see the proportions are a bit
                off. I used all procedural textures for the eyes, skin etc.,
                which I was quite proud of.
              </p>
              <Carousel
                folder="../../assets/batman"
                captions={[
                  "Main Render",
                  "Mouth",
                  "Eye",
                  "Fun early render, using a car paint material and the Ray Ban glasses from before",
                ]}
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
