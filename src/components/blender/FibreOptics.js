import React from "react";
import Interactive from "react-interactive";
import { Switch, Route, Link } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";
import Carousel from "../Carousel";

export default function FibreOptics() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blender/fibre-optics"
          render={() => (
            <div>
              <TitleDate title="Fibre Optics" date="7th Apr. 2014" />
              <p>
                These are some fibre optic cables I made using Andrew Price's{" "}
                <a
                  href="https://www.blenderguru.com/tutorials/make-an-abstract-background"
                  className="link"
                >
                  tutorial
                </a>
                . I made some variations to give different effects, using the
                compositor.
              </p>
              <Carousel
                folder="../../assets/fibre-optics"
                captions={["", "", "", "", "", "", "", "", "", ""]}
              />
            </div>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
