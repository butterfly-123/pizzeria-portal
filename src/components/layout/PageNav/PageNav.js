import React from "react";
import { NavLink, } from 'react-router-dom';
 
const PageNav = () => 
  <div>
    <nav>
      <button color="primary" style={{ margin: 20 }}>
        <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Dashboard</NavLink> 
      </button>
      <button>
        <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</NavLink> 
      </button>
      <button>
        <NavLink to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen</NavLink> 
      </button>
      <button>
        <NavLink to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables</NavLink> 
      </button>
      <button>
        <NavLink to={`${process.env.PUBLIC_URL}/ordering`} activeClassName='active'>Ordering</NavLink> 
      </button>
    </nav>
  </div>
 
export default PageNav;