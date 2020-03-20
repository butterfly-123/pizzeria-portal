import React from "react";
import { NavLink, Link } from 'react-router-dom';
 
const PageNav = () => 
  <nav>
    <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Home</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</NavLink>
    <Link to={`${process.env.PUBLIC_URL}/ordering/new`} activeClassName='active'>Ordering</Link>
    <Link to={`${process.env.PUBLIC_URL}/ordering/order/123abc`} activeClassName='active'>Ordering</Link>
    <Link to={`${process.env.PUBLIC_URL}/ordering/order/:id`} activeClassName='active'>Ordering</Link>
    <Link to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Dashboard</Link>
    <Link to={`${process.env.PUBLIC_URL}/homepage`} activeClassName='active'>Homepage</Link>
    <Link to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/:id`} activeClassName='active'>Tables</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/event/:id`} activeClassName='active'>Tables</Link>


  </nav>
 
export default PageNav;