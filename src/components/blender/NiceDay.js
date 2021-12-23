import React from "react";
import { Route, Switch } from "react-router-dom";
import Carousel from "../Carousel";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";

export default function NiceDay() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blenderold/have-a-nice-day"
          render={() => (
            <div>
              <TitleDate title="Have A Nice Day" date="26th Feb. 2016" />
              <p>
                Exercise using Bezier Curves in Blender. It's the logo from Bon
                Jovi song{" "}
                <a
                  href="https://www.youtube.com/watch?v=uCg2BoKiuOM"
                  className="link"
                >
                  Have A Nice Day
                </a>
                . I think I also made the red part leather.
              </p>
              <Carousel folder="../../assets/have-a-nice-day" captions={[""]} />
            </div>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
