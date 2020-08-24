import React from "react";
import Interactive from "react-interactive";
import { Switch, Route, Link } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";
import Carousel from "../Carousel";

export default function Diglett() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blender/diglett"
          render={() => (
            <div>
              <TitleDate title="Diglett" date="3rd Feb. 2014" />
              <p>
                Return of the{" "}
                <Interactive as={Link} to="/blender/fireship" className="link">
                  wacky background
                </Interactive>
                . This is a model of the Pokémon{" "}
                <a
                  href="https://bulbapedia.bulbagarden.net/wiki/Diglett_(Pok%C3%A9mon)"
                  className="link"
                >
                  Diglett
                </a>
                . I spent most of the time on the rock part, which I textured
                using a normal rock texture. what made it interesting is that I
                used the HSB node to make it look how I wanted, as it was
                originally just sandstone. I also played with the displacement
                to make it not too sharp and not too smooth. Hope you like it!
              </p>
              <Carousel folder="../../assets/diglett" captions={[""]} />
            </div>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
