import React from "react";
import Interactive from "react-interactive";
import { Link, Route, Switch } from "react-router-dom";
import Carousel from "../Carousel";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";

export default function RPCAnim() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blenderold/rpc-anim"
          render={() => (
            <div>
              <TitleDate title="RPC Title Animation" date="20th Sep. 2014" />
              <p>
                I got the idea for this from sci-fi/spy movies where they user
                lasers to scan objects. In this case my logo is being scanned
                and then finally it appears. I imitated a tubelight by flashing
                the image. I then added a printer scanner sound for the scanning
                part and tubelight sounds. I am very proud of this one.
              </p>
              <iframe
                width="800vw"
                height="450vw"
                src="https://www.youtube-nocookie.com/embed/r6QUKpr5tPo"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="1"
                className="youtube"
              ></iframe>
              <p style={{ marginTop: "1em" }}>
                I use the final frame as my desktop wallpaper, and{" "}
                <Interactive as={Link} to="/blender/rp-anim" className="link">
                  a modified version
                </Interactive>{" "}
                for{" "}
                <a
                  href="https://www.youtube.com/channel/UCuP4DBqZZAC-PPleJTnQspA"
                  className="link"
                >
                  my YouTube channel
                </a>
                .
              </p>
              <Carousel folder="../../assets/rpc-anim" captions={[""]} />
            </div>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
