import React from "react";
import Interactive from "react-interactive";
import { Switch, Route, Link } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";
import Carousel from "../Carousel";

export default function Monkey() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blender/monkey"
          render={() => (
            <div>
              <TitleDate title="Hawaiian Suzanne" date="11th Jul. 2015" />
              <p>
                Tried to make something using{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Blender_(software)#Suzanne,_the_%22monkey%22_mascot"
                  className="link"
                >
                  Suzanne
                </a>
                . Reused the eyes from{" "}
                <Interactive as={Link} to="/blender/batman" className="link">
                  Batman
                </Interactive>
                .
              </p>
              <Carousel
                folder="../../assets/monkey"
                captions={[""]}
                aspectRatio={[9, 16]}
              />
            </div>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
