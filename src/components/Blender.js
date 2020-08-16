import React from "react";
import Interactive from "react-interactive";
import { Switch, Route, Link } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import Fireship from "./blender/Fireship";

export default function Blender() {
  return (
    <div>
      <Switch>
        <Route exact path="/blender/fireship" component={Fireship} />
        <Route
          exact
          path="/blender"
          render={() => (
            <div>
              <h1 className="title">Blender</h1>
              <div className="blenderLink">
                <Interactive as={Link} to="/blender/fireship">
                  <img src="../../assets/1-fireship/1.png" />
                </Interactive>
              </div>
              <div className="blenderLink">
                <Interactive as={Link} to="/blender/fireship">
                  <img src="../../assets/1-fireship/1.png" />
                </Interactive>
              </div>
              <div className="blenderLink">
                <Interactive as={Link} to="/blender/fireship">
                  <img src="../../assets/1-fireship/1.png" />
                </Interactive>
              </div>
              <div className="blenderLink">
                <Interactive as={Link} to="/blender/fireship">
                  <img src="../../assets/1-fireship/1.png" />
                </Interactive>
              </div>
              <div className="blenderLink">
                <Interactive as={Link} to="/blender/fireship">
                  <img src="../../assets/1-fireship/1.png" />
                </Interactive>
              </div>
              <div className="blenderLink">
                <Interactive as={Link} to="/blender/fireship">
                  <img src="../../assets/1-fireship/1.png" />
                </Interactive>
              </div>
              <div className="blenderLink">
                <Interactive as={Link} to="/blender/fireship">
                  <img src="../../assets/1-fireship/1.png" />
                </Interactive>
              </div>
              <div className="blenderLink">
                <Interactive as={Link} to="/blender/fireship">
                  <img src="../../assets/1-fireship/1.png" />
                </Interactive>
              </div>
            </div>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
