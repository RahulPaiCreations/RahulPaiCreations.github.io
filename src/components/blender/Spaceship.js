import React from "react";
import Interactive from "react-interactive";
import { Switch, Route, Link } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";
import Carousel from "../Carousel";

export default function Spaceship() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blender/spaceship"
          render={() => (
            <div>
              <TitleDate
                title="Spaceship"
                alias="tweezers"
                date="31st May 2013"
              />
              <p>
                This is a spaceship I made using Andre Price's{" "}
                <a
                  href="https://www.blenderguru.com/tutorials/create-a-spaceship-part-1"
                  className="link"
                >
                  tutorial
                </a>
                . I am very pleased with the result and I love the blue booster
                flames at the back. I kept it simple by leaving out the wacky
                blue lights from Andrew Price's. This project introduced me to
                the Color Ramp node which I really like to use to add more
                control. Probably my first Cycles Render.
              </p>
              <Carousel folder="../../assets/spaceship" captions={[""]} />
            </div>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
