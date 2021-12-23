import React from "react";
import Interactive from "react-interactive";
import { Link, Route, Switch } from "react-router-dom";
import Carousel from "../Carousel";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";

export default function Alien() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blenderold/alien"
          render={() => (
            <div>
              <TitleDate title="Alien" date="23rd Aug. 2015" />
              <p>
                Attempt at an alien character. Characters are not my forté...
                Again, reused the eyes from{" "}
                <Interactive as={Link} to="/blender/batman" className="link">
                  Batman
                </Interactive>
                .
              </p>
              <Carousel
                folder="../../assets/alien"
                captions={["Final Render", "Model before materials and pose"]}
              />
            </div>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
