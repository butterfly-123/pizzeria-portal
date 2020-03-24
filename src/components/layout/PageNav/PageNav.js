import React from "react";
import { NavLink, } from 'react-router-dom';
 
const PageNav = () => 
  <div>
    <nav>
      <button style={{ margin: 20, padding: 10, fontWeight: 'bold', textDecoration: 'none', backgroundColor: '#fff'}}>
        <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>DASHBOARD</NavLink> 
      </button>
      <button style={{ margin: 20, padding: 10, fontWeight: 'bold', textDecoration: 'none'}}>
        <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>LOGIN</NavLink> 
      </button>
      <button style={{ margin: 20, padding: 10, fontWeight: 'bold', textDecoration: 'none'}}>
        <NavLink to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>KITCHEN</NavLink> 
      </button>
      <button style={{ margin: 20, padding: 10, fontWeight: 'bold', textDecoration: 'none'}}>
        <NavLink to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>TABLES</NavLink> 
      </button>
      <button style={{ margin: 20, padding: 10, fontWeight: 'bold', textDecoration: 'none'}}>
        <NavLink to={`${process.env.PUBLIC_URL}/ordering`} activeClassName='active'>ORDERING</NavLink> 
      </button>
    </nav>
  </div>
 
export default PageNav;