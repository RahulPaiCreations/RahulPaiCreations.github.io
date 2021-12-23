import React from "react";
import { Route, Switch } from "react-router-dom";
import Carousel from "../Carousel";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";

export default function Blerb() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blenderold/blerb"
          render={() => (
            <div>
              <TitleDate title="Blerb" date="14th May 2015" />
              <p>
                Some random abstract works I made one day when I was bored.
                Couldn't think of a name for the files, so I just used a random
                word: "blerb".
              </p>
              <Carousel
                folder="../../assets/blerb"
                captions={["", "", "", "", "", "", ""]}
              />
            </div>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
