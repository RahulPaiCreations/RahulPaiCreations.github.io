import React from "react";
import Interactive from "react-interactive";
import { Link, Route, Switch } from "react-router-dom";
import Carousel from "../Carousel";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";

export default function BadMedicine() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blenderold/bad-medicine"
          render={() => (
            <div>
              <TitleDate title="Bad Medicine" date="28th Feb. 2016" />
              <p>
                Another{" "}
                <Interactive
                  as={Link}
                  to="/blender/heart-fracture"
                  className="link"
                >
                  Bon Jovi reference
                </Interactive>
                . It's referencing{" "}
                <a
                  href="https://www.youtube.com/watch?v=uCg2BoKiuOM"
                  className="link"
                >
                  Bad Medicine
                </a>{" "}
                in which the first line is "Your love is like bad medicine". I
                got the skull texture from online. I used rigid body simulation
                for the heart pills. The floor is just something random I came
                up with. Very happy with the result.
              </p>
              <Carousel folder="../../assets/bad-medicine" captions={[""]} />
            </div>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
