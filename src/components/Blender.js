import React from "react";
import Interactive from "react-interactive";
import { Switch, Route, Link } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import Fireship from "./blender/Fireship";
import Coke from "./blender/Coke";
import Lamp from "./blender/Lamp";
import Spaceship from "./blender/Spaceship";
import RPC from "./blender/RPC";
import Parker from "./blender/Parker";

export default function Blender() {
  return (
    <div>
      <Switch>
        <Route exact path="/blender/fireship" component={Fireship} />
        <Route exact path="/blender/coke" component={Coke} />
        <Route exact path="/blender/lamp" component={Lamp} />
        <Route exact path="/blender/spaceship" component={Spaceship} />
        <Route exact path="/blender/rpc" component={RPC} />
        <Route exact path="/blender/parker" component={Parker} />
        <Route
          exact
          path="/blender"
          render={() => (
            <div>
              <div className="otherBanner banner"></div>
              <h1 className="title">Blender</h1>
              <div className="blenderLink">
                <Interactive as={Link} to="/blender/fireship">
                  <img src="../../assets/1-fireship/1.png" />
                </Interactive>
              </div>
              <div className="blenderLink">
                <Interactive as={Link} to="/blender/coke">
                  <img src="../../assets/2-coke/1.png" />
                </Interactive>
              </div>
              <div className="blenderLink">
                <Interactive as={Link} to="/blender/lamp">
                  <img src="../../assets/3-lamp/1.png" />
                </Interactive>
              </div>
              <div className="blenderLink">
                <Interactive as={Link} to="/blender/spaceship">
                  <img src="../../assets/4-spaceship/1.png" />
                </Interactive>
              </div>
              <div className="blenderLink">
                <Interactive as={Link} to="/blender/rpc">
                  <img src="../../assets/5-rpc/1.png" />
                </Interactive>
              </div>
              <div className="blenderLink">
                <Interactive as={Link} to="/blender/parker">
                  <img src="../../assets/6-parker/1.png" />
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
