import React from "react";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";

export default function Wavey() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blenderold/wavey"
          render={() => (
            <div>
              <TitleDate title="Wavey" date="16th Mar. 2016" />
              <p>
                Just messing around with the displacement modifier and a
                metallic shader.
              </p>
              <iframe
                width="800vw"
                height="450vw"
                src="https://www.youtube-nocookie.com/embed/GbezEqgokDg"
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
