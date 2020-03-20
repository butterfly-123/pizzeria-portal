import React from "react";
import PropTypes from "prop-types";
import Login from '../../views/Login/Login';
 
const MainLayout = ({ children }) => 
  <div>
    {children}
    <Login />
  </div>;
 
MainLayout.propTypes = {
  children: PropTypes.node
};
 
export default MainLayout;