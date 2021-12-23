import React from "react";
import { Route, Switch } from "react-router-dom";
import Carousel from "../Carousel";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";

export default function SteelHorse() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blenderold/steel-horse"
          render={() => (
            <div>
              <TitleDate title="Steel Horse" date="20th Dec. 2015" />
              <p>
                This is a reference to the Bon Jovi song{" "}
                <a
                  href="https://www.youtube.com/watch?v=SRvCvsRp5ho"
                  className="link"
                >
                  Wanted Dead or Alive
                </a>{" "}
                in which one of the lines is "I'm a cowboy, on a{" "}
                <em>steel horse</em> I ride". I used a diagram of a horse as a
                reference while modelling. I also looked a t a few pictures of
                rearing horses for the pose later. Rigging and posing the model
                was the hardest part as it was my first time. I've very happy
                with this. I think it looks cool, although mechanically it
                doesn't make sense!
              </p>
              <Carousel
                folder="../../assets/steel-horse"
                captions={[
                  "Final Render",
                  "Finished Model",
                  "Alternate View",
                  "Inside View",
                ]}
              />
              <p style={{ marginTop: "1em" }}>
                One time while navigating in Blender, I accidentally went inside
                the horse and discovered quite a cool view. Just for fun, I
                rendered this fly through animation:
              </p>
              <iframe
                width="800vw"
                height="450vw"
                src="https://www.youtube-nocookie.com/embed/jwcmGPCYfDs"
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
