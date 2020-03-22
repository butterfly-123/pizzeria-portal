import React from "react";
import PropTypes from "prop-types";
import PageNav from '../../layout/PageNav/PageNav';
 
const MainLayout = ({ children }) => 
  <div>
    {children}
    <PageNav />
  </div>;
 
MainLayout.propTypes = {
  children: PropTypes.node
};
 
export default MainLayout;