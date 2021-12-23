import React from "react";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";

export default function HeartFracture() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blenderold/heart-fracture"
          render={() => (
            <div>
              <TitleDate title="Shot Through The Heart" date="30th Dec. 2015" />
              <p>
                Experimenting with the{" "}
                <a
                  href="https://blenderphysics.com/fracturemodifier/"
                  className="link"
                >
                  fracture modifier build
                </a>{" "}
                of blender, I fractured the heart model I had already made. This
                was inspired from the Bon Jovi song{" "}
                <a
                  href="https://www.youtube.com/watch?v=KrZHPOeOxQQ"
                  className="link"
                >
                  You Give Love A Bad Name
                </a>{" "}
                in which the first line is "Shot through the heart".
              </p>
              <iframe
                width="800vw"
                height="450vw"
                src="https://www.youtube-nocookie.com/embed/OCU-DiBvAkg"
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
