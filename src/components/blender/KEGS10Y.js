import React from "react";
import { Route, Switch } from "react-router-dom";
import Carousel from "../Carousel";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";

export default function KEGS10Y() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blenderold/kegs-10y"
          render={() => (
            <div>
              <TitleDate title="KEGS 10Y" date="3rd Oct. 2013" />
              <p>
                This is the logo/cover photo for my form's FB group. After many
                changes to the font, I started experimenting with a cool motion
                blur like effect using Color Ramp.
              </p>
              <Carousel
                folder="../../assets/kegs-10y"
                captions={["Final Version (V5)", "V1", "V2", "V3", "V4", "V6"]}
              />
            </div>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
