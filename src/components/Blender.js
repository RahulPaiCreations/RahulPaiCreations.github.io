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
import Liquid from "./blender/Liquid";
import KEGS10Y from "./blender/KEGS10Y";
import Cityscape from "./blender/Cityscape";
import Pokeballs from "./blender/Pokeballs";
import Kitchen from "./blender/Kitchen";
import Diglett from "./blender/Diglett";
import FibreOptics from "./blender/FibreOptics";
import Hexo from "./blender/Hexo";
import RandomCubes from "./blender/RandomCubes";
import Fireball from "./blender/Fireball";
import Window from "./blender/Window";
import Glasses from "./blender/Glasses";

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
        <Route exact path="/blender/liquid" component={Liquid} />
        <Route exact path="/blender/kegs-10y" component={KEGS10Y} />
        <Route exact path="/blender/cityscape" component={Cityscape} />
        <Route exact path="/blender/pokeballs" component={Pokeballs} />
        <Route exact path="/blender/kitchen" component={Kitchen} />
        <Route exact path="/blender/diglett" component={Diglett} />
        <Route exact path="/blender/fibre-optics" component={FibreOptics} />
        <Route exact path="/blender/hexo" component={Hexo} />
        <Route exact path="/blender/random-cubes" component={RandomCubes} />
        <Route exact path="/blender/fireball" component={Fireball} />
        <Route exact path="/blender/window" component={Window} />
        <Route exact path="/blender/glasses" component={Glasses} />
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
              <div className="blenderLink">
                <Interactive as={Link} to="/blender/liquid">
                  <img src="../../assets/7-liquid/1.png" />
                </Interactive>
              </div>
              <div className="blenderLink">
                <Interactive as={Link} to="/blender/kegs-10y">
                  <img src="../../assets/8-kegs-10y/1.png" />
                </Interactive>
              </div>
              <div className="blenderLink">
                <Interactive as={Link} to="/blender/cityscape">
                  <img src="../../assets/9-cityscape/1.png" />
                </Interactive>
              </div>
              <div className="blenderLink">
                <Interactive as={Link} to="/blender/pokeballs">
                  <img src="../../assets/10-pokeballs/1.png" />
                </Interactive>
              </div>
              <div className="blenderLink">
                <Interactive as={Link} to="/blender/kitchen">
                  <img src="../../assets/11-kitchen/1.png" />
                </Interactive>
              </div>
              <div className="blenderLink">
                <Interactive as={Link} to="/blender/diglett">
                  <img src="../../assets/12-diglett/1.png" />
                </Interactive>
              </div>
              <div className="blenderLink">
                <Interactive as={Link} to="/blender/fibre-optics">
                  <img src="../../assets/13-fibre-optics/1.png" />
                </Interactive>
              </div>
              <div className="blenderLink">
                <Interactive as={Link} to="/blender/hexo">
                  <img src="../../assets/14-hexo/1.png" />
                </Interactive>
              </div>
              <div className="blenderLink">
                <Interactive as={Link} to="/blender/random-cubes">
                  <img src="../../assets/15-random-cubes/1.png" />
                </Interactive>
              </div>
              <div className="blenderLink">
                <Interactive as={Link} to="/blender/fireball">
                  <img src="../../assets/16-fireball/1.png" />
                </Interactive>
              </div>
              <div className="blenderLink">
                <Interactive as={Link} to="/blender/window">
                  <img src="../../assets/17-window/1.png" />
                </Interactive>
              </div>
              <div className="blenderLink">
                <Interactive as={Link} to="/blender/glasses">
                  <img src="../../assets/18-glasses/1.png" />
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
