import React from "react";
import Interactive from "react-interactive";
import { Link, Switch, Route, NavLink, Redirect } from "react-router-dom";
import Home from "./Home";
import Blender from "./Blender";
import About from "./About";
import PageNotFound from "./PageNotFound";

export default function App() {
  return (
    <div className="appRoot">
      <Link to="/home">
        <img src="../../assets/rpc_logo.svg" className="logo" />
      </Link>

      <nav>
        <NavLink to="/home" activeClassName="activeNav">
          Home
        </NavLink>
        <NavLink to="/blender" activeClassName="activeNav">
          Blender
        </NavLink>
        <NavLink to="/about" activeClassName="activeNav">
          About
        </NavLink>
      </nav>

      <div className="appContent">
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route exact path="/home" component={Home} />
          <Route path="/blender" component={Blender} />
          <Route path="/about" component={About} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </div>
  );
}
