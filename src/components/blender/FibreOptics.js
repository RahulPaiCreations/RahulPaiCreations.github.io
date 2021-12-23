import React from "react";
import { Route, Switch } from "react-router-dom";
import Carousel from "../Carousel";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";

export default function FibreOptics() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blenderold/fibre-optics"
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
