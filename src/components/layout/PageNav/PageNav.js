import React from "react";
import { NavLink, } from 'react-router-dom';
 
const PageNav = () => 
  <div>
    <nav>
      <button style={{ margin: 20, padding: 10}}>
        <NavLink exact to={`${process.env.PUBLIC_URL}/`} style={{fontWeight: 'bold', textDecoration: 'none', backgroundColor: '#fff'}} activeClassName='active'>DASHBOARD</NavLink> 
      </button>
      <button style={{ margin: 20, padding: 10}}>
        <NavLink to={`${process.env.PUBLIC_URL}/login`} style={{fontWeight: 'bold', textDecoration: 'none', backgroundColor: '#fff'}} activeClassName='active'>LOGIN</NavLink> 
      </button>
      <button style={{ margin: 20, padding: 10, fontWeight: 'bold', textDecoration: 'none'}}>
        <NavLink to={`${process.env.PUBLIC_URL}/kitchen`} style={{fontWeight: 'bold', textDecoration: 'none', backgroundColor: '#fff'}} activeClassName='active'>KITCHEN</NavLink> 
      </button>
      <button style={{ margin: 20, padding: 10, fontWeight: 'bold', textDecoration: 'none'}}>
        <NavLink to={`${process.env.PUBLIC_URL}/tables`} style={{fontWeight: 'bold', textDecoration: 'none', backgroundColor: '#fff'}} activeClassName='active'>TABLES</NavLink> 
      </button>
      <button style={{ margin: 20, padding: 10, fontWeight: 'bold', textDecoration: 'none'}}>
        <NavLink to={`${process.env.PUBLIC_URL}/ordering`} style={{fontWeight: 'bold', textDecoration: 'none', backgroundColor: '#fff'}} activeClassName='active'>ORDERING</NavLink> 
      </button>
    </nav>
  </div>
 
export default PageNav;