import React from "react";
import Interactive from "react-interactive";
import { Switch, Route, Link } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";
import Carousel from "../Carousel";

export default function Glasses() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blender/glasses"
          render={() => (
            <div>
              <TitleDate
                title="Glasses"
                alias="How Many Fingers?"
                date="2nd Apr. 2015"
              />
              <p>
                I got frustrated by people thinking I can't count fingers
                properly just because I haven't got my glasses on. Unless you're
                really far away, I can still make out the shapes.
              </p>
              <iframe
                width="800vw"
                height="450vw"
                src="https://www.youtube-nocookie.com/embed/W4B3iLPGOKU"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="1"
                className="youtube"
              ></iframe>
            </div>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
