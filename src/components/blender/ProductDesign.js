import React from "react";
import { Route, Switch } from "react-router-dom";
import Carousel from "../Carousel";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";

export default function ProductDesign() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blenderold/product-design"
          render={() => (
            <div>
              <TitleDate title="Product Design" date="18th Apr. 2018" />
              <p>
                At uni we had a product design courswork, for which I designed
                solar street lights. I decided to use Blender to illustrate my
                idea.
              </p>
              <Carousel folder="../../assets/product-design" captions={[""]} />
            </div>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
