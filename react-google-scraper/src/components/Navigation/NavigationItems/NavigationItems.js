import React from 'react';
import { Nav } from 'reactstrap'
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = (props) => (
  <Nav>
    { props.isAuthenticated ? <NavigationItem link="/">Reports</NavigationItem> : null }
    {
      props.isAuthenticated
        ? <NavigationItem link="/logout">Logout</NavigationItem>
        : <NavigationItem link="/login">Login</NavigationItem>
    }
  </Nav>
);

export default navigationItems;
