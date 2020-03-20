import React from "react";
import PropTypes from "prop-types";
import Login from '../../views/Login/Login';
import PageNav from '../../layout/PageNav/PageNav';
 
const MainLayout = ({ children }) => 
  <div>
    {children}
    <Login />
    <PageNav />
  </div>;
 
MainLayout.propTypes = {
  children: PropTypes.node
};
 
export default MainLayout;