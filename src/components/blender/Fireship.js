import React from "react";
import Interactive from "react-interactive";
import { Switch, Route, Link } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";
import Carousel from "../Carousel";

export default function Fireship() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blender/fireship"
          render={() => (
            <div>
              <TitleDate
                title="Fireship"
                alias="Pidom Fighter 314"
                date="11th Sep. 2011"
              />
              <p>
                This amazing space ship was inspired from star wars, but is very
                different in many ways. It has a long front glass window that
                opens upwards and two laser guns at the sides. This was my first
                ever project in Blender and so it is quite special to me,
                despite its simplicity. I added the background using Photoshop
                because I didn't know about the compositor at the time.
              </p>
              <Carousel
                folder="../../assets/1-fireship"
                captions={["Main Render", "Front", "Back", "Window Open"]}
              />
            </div>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
