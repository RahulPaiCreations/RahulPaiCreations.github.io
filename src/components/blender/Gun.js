import React from "react";
import Interactive from "react-interactive";
import { Link, Route, Switch } from "react-router-dom";
import Carousel from "../Carousel";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";

export default function Gun() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blenderold/gun"
          render={() => (
            <div>
              <TitleDate title="Gun" date="24th Jun. 2016" />
              <p>
                As a modelling exercise I decided to make a gun. This is because
                of the relatively complex shapes. I really enjoyed this hard
                surface modelling. Then I made the materials, all procedurally,
                using vertex colours to create a mask for the grip displacement.
                I was quite happy with the lighting, aiming for a display kind
                of atmosphere. The wood material is the same as the steering
                wheel from my{" "}
                <Interactive as={Link} to="/blender/cobra" className="link">
                  AC Cobra
                </Interactive>
                .
              </p>
              <Carousel folder="../../assets/gun" captions={[""]} />
            </div>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
