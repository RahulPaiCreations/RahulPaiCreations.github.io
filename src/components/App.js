import React from "react";
import { Link, NavLink, Redirect, Route, Switch } from "react-router-dom";
import About from "./About";
import Blender from "./Blender";
import BlenderOld from "./BlenderOld";
import Home from "./Home";
import PageNotFound from "./PageNotFound";

export default function App() {
  return (
    <div className="appRoot">
      <Link to="/home">
        <img src="../../assets/rpc_logo.svg" alt="RPC Logo" className="logo" />
      </Link>

      <nav>
        <NavLink to="/home" activeClassName="activeNav">
          Home
        </NavLink>
        <NavLink to="/blender" activeClassName="activeNav">
          Blender
        </NavLink>
        <NavLink to="/blenderold" activeClassName="activeNav">
          BlenderOld
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
          <Route path="/blenderold" component={BlenderOld} />
          <Route path="/about" component={About} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </div>
  );
}
