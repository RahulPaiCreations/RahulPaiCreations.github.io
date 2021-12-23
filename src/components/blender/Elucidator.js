import React from "react";
import { Route, Switch } from "react-router-dom";
import Carousel from "../Carousel";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";

export default function Elucidator() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blenderold/elucidator"
          render={() => (
            <div>
              <TitleDate title="Elucidator" date="2nd Jun. 2015" />
              <p>
                Elucidator, my favourite of Kirito's swords. A nice challenge,
                and I think it turned out great. For a while I used the final
                render as a cover photo. This is my first weapon model.
              </p>
              <Carousel
                folder="../../assets/elucidator"
                captions={["Final Render", "Final Model"]}
              />
            </div>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
