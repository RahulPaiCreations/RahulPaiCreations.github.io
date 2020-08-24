import React from "react";
import Interactive from "react-interactive";
import { Switch, Route, Link } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";
import Carousel from "../Carousel";

export default function Hexo() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blender/hexo"
          render={() => (
            <div>
              <TitleDate title="Hexo" date="8th Nov. 2014" />
              <p>
                I had a Oneplus One, and I really liked the use of hexagons in
                the Hexo theme, but for me the backgrounds were too simple and
                flat. I played with the idea of Hexagons and with inspiration
                from Tron, I made this Background, which I use now as the
                wallpaper on my phone, my PC and of course this website! Call me
                cocky but I love it! You probably have already guessed that blue
                is my favourite colour.
              </p>
              <Carousel
                folder="../../assets/hexo"
                captions={[""]}
                aspectRatio={[18, 16]}
              />
            </div>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
