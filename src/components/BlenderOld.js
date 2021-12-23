import React from "react";
import Interactive from "react-interactive";
import { Link, Route, Switch } from "react-router-dom";
import Alien from "./blender/Alien";
import BadMedicine from "./blender/BadMedicine";
import Batman from "./blender/Batman";
import Blerb from "./blender/Blerb";
import BlueReact from "./blender/BlueReact";
import Bubble from "./blender/Bubble";
import CharlieBrown from "./blender/CharlieBrown";
import Cityscape from "./blender/Cityscape";
import Cobra from "./blender/Cobra";
import Coke from "./blender/Coke";
import Diglett from "./blender/Diglett";
import Elucidator from "./blender/Elucidator";
import FibreOptics from "./blender/FibreOptics";
import Fireball from "./blender/Fireball";
import Fireship from "./blender/Fireship";
import Flower from "./blender/Flower";
import Glasses from "./blender/Glasses";
import Gun from "./blender/Gun";
import Heart from "./blender/Heart";
import HeartFracture from "./blender/HeartFracture";
import HeartRiver from "./blender/HeartRiver";
import Hexo from "./blender/Hexo";
import KEGS10Y from "./blender/KEGS10Y";
import Kitchen from "./blender/Kitchen";
import Lamp from "./blender/Lamp";
import LegoWater from "./blender/LegoWater";
import Liquid from "./blender/Liquid";
import Monkey from "./blender/Monkey";
import NiceDay from "./blender/NiceDay";
import Octagons from "./blender/Octagons";
import Parker from "./blender/Parker";
import Pokeballs from "./blender/Pokeballs";
import ProductDesign from "./blender/ProductDesign";
import RandomCubes from "./blender/RandomCubes";
import RayBan from "./blender/RayBan";
import RedSaturation from "./blender/RedSaturation";
import RobotSculpt from "./blender/RobotSculpt";
import Room from "./blender/Room";
// later
import RPAnim from "./blender/RPAnim";
import RPC from "./blender/RPC";
import RPCAnim from "./blender/RPCAnim";
import Screen from "./blender/Screen";
import Spaceship from "./blender/Spaceship";
import SteelHorse from "./blender/SteelHorse";
import Torso from "./blender/Torso";
import VolumeCube from "./blender/VolumeCube";
import Wavey from "./blender/Wavey";
import Window from "./blender/Window";
import PageNotFound from "./PageNotFound";

export default function BlenderOld() {
  const blenderProjects = {
    fireship: Fireship,
    coke: Coke,
    lamp: Lamp,
    spaceship: Spaceship,
    rpc: RPC,
    parker: Parker,
    liquid: Liquid,
    "kegs-10y": KEGS10Y,
    cityscape: Cityscape,
    pokeballs: Pokeballs,
    kitchen: Kitchen,
    diglett: Diglett,
    "fibre-optics": FibreOptics,
    "rpc-anim": RPCAnim,
    hexo: Hexo,
    "random-cubes": RandomCubes,
    fireball: Fireball,
    window: Window,
    glasses: Glasses,
    flower: Flower,
    screen: Screen,
    "ray-ban": RayBan,
    elucidator: Elucidator,
    batman: Batman,
    heart: Heart,
    "heart-river": HeartRiver,
    monkey: Monkey,
    alien: Alien,
    blerb: Blerb,
    cobra: Cobra,
    "steel-horse": SteelHorse,
    "heart-fracture": HeartFracture,
    bubble: Bubble,
    "have-a-nice-day": NiceDay,
    "bad-medicine": BadMedicine,
    wavey: Wavey,
    room: Room,
    "volume-cube": VolumeCube,
    octagons: Octagons,
    "lego-water": LegoWater,
    "robot-sculpt": RobotSculpt,
    gun: Gun,
    torso: Torso,
    "charlie-brown": CharlieBrown,
    "red-saturation": RedSaturation,
    "rp-anim": RPAnim,
    "product-design": ProductDesign,
    "blue-react": BlueReact,
  };
  return (
    <div>
      <Switch>
        {Object.keys(blenderProjects).map(
          (name) => (
            <Route
              exact
              path={`/blenderold/${name}`}
              component={blenderProjects[name]}
            />
          ),
          this,
        )}
        <Route
          exact
          path="/blenderold"
          render={() => (
            <div>
              <div className="otherBanner banner" />
              <h1 className="title titleLarge">BlenderOld</h1>
              {Object.keys(blenderProjects).map(
                (name, index) => (
                  <div className="blenderLink">
                    <Interactive as={Link} to={`/blenderold/${name}`}>
                      <img
                        src={`../../assets/${name}/thumbnail.jpg`}
                        alt="thumbnail"
                      />
                      <div className="title">
                        <em>
                          {index + 1}. {name.toUpperCase().replace("-", " ")}
                        </em>
                      </div>
                    </Interactive>
                  </div>
                ),
                this,
              )}
            </div>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
