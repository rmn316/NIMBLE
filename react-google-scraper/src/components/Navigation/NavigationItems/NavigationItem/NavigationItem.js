import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from 'reactstrap';

import styles from './NavigationItem.module.scss';

const navigationItem = (props) => (
  <NavItem className={styles.NavItem}>
    <NavLink to="">{props.children}</NavLink>
  </NavItem>
);

export default navigationItem;
