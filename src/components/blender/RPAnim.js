import React from "react";
import Interactive from "react-interactive";
import { Link, Route, Switch } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";

export default function RPAnim() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blenderold/rp-anim"
          render={() => (
            <div>
              <TitleDate
                title="Rahul Pai Title Animation"
                date="18th Jul. 2017"
              />
              <p>
                When I was starting{" "}
                <a
                  href="https://www.youtube.com/channel/UCuP4DBqZZAC-PPleJTnQspA"
                  className="link"
                >
                  my YouTube channel
                </a>{" "}
                I modified{" "}
                <Interactive as={Link} to="/blender/rpc-anim" className="link">
                  my previous animation
                </Interactive>{" "}
                too just be my name. I use this as the intro for all{" "}
                <a
                  href="https://www.youtube.com/playlist?list=PLRL_yqRoHeK5m2uDthUII_t6TRA487kBG"
                  className="link"
                >
                  my guitar videos
                </a>
                .
              </p>
              <iframe
                width="800vw"
                height="450vw"
                src="https://www.youtube-nocookie.com/embed/c58yjUr8d5M"
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
