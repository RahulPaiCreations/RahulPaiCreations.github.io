import React from "react";
import Interactive from "react-interactive";
import { Switch, Route, Link } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";
import Carousel from "../Carousel";

export default function Cobra() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blender/cobra"
          render={() => (
            <div>
              <TitleDate title="AC Cobra" date="11th Nov. 2015" />
              <p>
                My favourite classic car and my first car model in blender. This
                is my first big project for which I did not use any tutorials. I
                experimented and tried many new things, learning a lot along the
                way. It took about 6 months; it's my biggest project.
              </p>
              <Carousel
                folder="../../assets/cobra"
                captions={[
                  "Main Render",
                  "Front",
                  "Internals",
                  "Side",
                  "Final Wheel",
                ]}
              />
              <p style={{ marginTop: "1em" }}>Some extras:</p>
              <Carousel
                folder="../../assets/cobra/extras"
                captions={[
                  "Mike Pan style early render",
                  "Herbie outfit, with the leather cover I had before the internals",
                  "AC Cobra rims",
                  "Unnecessary detail lol",
                ]}
              />
            </div>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
