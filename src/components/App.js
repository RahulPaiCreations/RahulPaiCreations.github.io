import React from 'react';
import Interactive from 'react-interactive';
import { Link, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import Home from './Home';
import Blender from './Blender';
import About from './About';
import PageNotFound from './PageNotFound';
import style from '../style';

const s = Object.create(style);

export default function App() {
  return (
    <div className="appRoot">
      <Link to="/home"><img src="../../assets/rpc_logo.svg" className="logo"/></Link>
      
      <nav>
        <NavLink to="/home" activeClassName="activeNav" >Home</NavLink>
        <NavLink to="/blender" activeClassName="activeNav" >Blender</NavLink>
        <NavLink to="/about" activeClassName="activeNav" >About</NavLink>
      </nav>

      <div className="appContent">
        <Switch>
          <Route exact path="/" render={()=>(<Redirect to="/home" />)} />
          <Route exact path="/home" component={Home} />
          <Route path="/blender" component={Blender} />
          <Route path="/about" component={About} />
          <Route component={PageNotFound} />
        </Switch>

        {/* <div style={{color: '#A0A0A0', fontSize: '14px', marginTop: '50px'}}>
          <Interactive
            as="a"
            href="http://www.rafaelpedicini.com"
            interactiveChild
            focus={{}}
            touchActive={{}}
            touchActiveTapOnly
          >
            Code and concept by <span {...s.childLink}>Rafael Pedicini</span>
          </Interactive>
        </div> */}
      </div>
    </div>
  );
}
