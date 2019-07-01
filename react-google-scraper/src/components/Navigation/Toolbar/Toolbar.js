import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import NavigationItems from '../NavigationItems/NavigationItems';

import styles from './Toolbar.module.scss';

const toolbar = (props) => (
    <Navbar className={styles.Toolbar} fixed dark>
      <NavbarBrand>Keyword Scraper</NavbarBrand>
      <NavigationItems {...props} />
    </Navbar>
);

export default toolbar;
