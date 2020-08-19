import React from "react";
import Interactive from "react-interactive";
import { Switch, Route, Link } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";
import Carousel from "../Carousel";

export default function Pokeballs() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blender/pokeballs"
          render={() => (
            <div>
              <TitleDate title="Pokéballs" date="18th Dec. 2013" />
              <p>
                Yes. I am a Pokéfan. I have been a fan of Pokémon for a number
                of years, and that lead me to start this project. It is quite
                simple, since the Pokéballs are simply modified spheres, but I
                learnt to make my own textures, like in the Ultra Ball, and to
                add complexities, such as the details on the Master and Great
                Balls.
              </p>
              <Carousel
                folder="../../assets/10-pokeballs"
                captions={[
                  "Pokéball",
                  "Ultra Ball",
                  "Great Ball",
                  "Master Ball",
                ]}
              />
            </div>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
