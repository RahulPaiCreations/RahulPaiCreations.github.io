import React from "react";
import { Route, Switch } from "react-router-dom";
import Carousel from "../Carousel";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";

export default function RPC() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blenderold/rpc"
          render={() => (
            <div>
              <TitleDate title="RPC Logo" date="3rd Aug. 2013" />
              <p>
                {/* TODO: This is the main logo which you can see on the home page. */}
                I made this using Andrew Price's{" "}
                <a
                  href="https://www.blenderguru.com/tutorials/how-to-make-metallic-text"
                  className="link"
                >
                  tutorial
                </a>{" "}
                but I modified certain parts of it such as changing the colour
                to blue and adding Egyptian Hieroglyph engravings on the sides.
                At this stage I was still very new to Cycles and I learnt about
                Bump maps and material nodes in general.
              </p>
              <Carousel
                folder="../../assets/rpc"
                captions={[
                  "Final Render",
                  "Alternate Textures",
                  "First Render",
                ]}
              />
              <p>
                Then I modified it slightly and played with the font and added a
                more dramatic camera angle to make this icon:
              </p>
              <div style={{ width: "50%", margin: "0 auto" }}>
                <Carousel
                  folder="../../assets/rpc/icon"
                  captions={[""]}
                  aspectRatio={[1, 1]}
                />
              </div>
            </div>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
