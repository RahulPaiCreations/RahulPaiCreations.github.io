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
import Flower from "./blender/Flower";
import Screen from "./blender/Screen";
import RayBan from "./blender/RayBan";
import Elucidator from "./blender/Elucidator";
import Batman from "./blender/Batman";
import Heart from "./blender/Heart";

export default function Blender() {
  const links = [
    "fireship",
    "coke",
    "lamp",
    "spaceship",
    "rpc",
    "parker",
    "liquid",
    "kegs-10y",
    "cityscape",
    "pokeballs",
    "kitchen",
    "diglett",
    "fibre-optics",
    "hexo",
    "random-cubes",
    "fireball",
    "window",
    "glasses",
    "flower",
    "screen",
    "ray-ban",
    "elucidator",
    "batman",
    "heart",
  ];
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
        <Route exact path="/blender/flower" component={Flower} />
        <Route exact path="/blender/screen" component={Screen} />
        <Route exact path="/blender/ray-ban" component={RayBan} />
        <Route exact path="/blender/elucidator" component={Elucidator} />
        <Route exact path="/blender/batman" component={Batman} />
        <Route exact path="/blender/heart" component={Heart} />
        <Route
          exact
          path="/blender"
          render={() => (
            <div>
              <div className="otherBanner banner"></div>
              <h1 className="title">Blender</h1>
              {links.map(
                (name, index) => (
                  <div className="blenderLink">
                    <Interactive as={Link} to={`/blender/${name}`}>
                      <img
                        src={`../../assets/${index + 1}-${name}/thumbnail.jpg`}
                      />
                    </Interactive>
                  </div>
                ),
                this
              )}
            </div>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
