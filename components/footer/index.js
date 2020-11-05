import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

import styles from './index.module.scss';

const Footer = () => {
  return (
    <nav className={styles.container}>
      <BrowserRouter>
        <Route>
          <NavLink to="/about">About</NavLink>
        </Route>
        <Route>
          <NavLink to="/bonus">PLB Bonus</NavLink>
        </Route>
        <Route>
          <NavLink to="/contact">Contact</NavLink>
        </Route>
        <Route>
          <NavLink to="/security">Security</NavLink>
        </Route>
        <Route>
          <NavLink to="/responsible-play">Responsible Play</NavLink>
        </Route>
        <Route>
          <NavLink to="/privacy">Privacy</NavLink>
        </Route>
        <Route>
          <NavLink to="/terms">Terms</NavLink>
        </Route>
      </BrowserRouter>
    </nav>
  );
};

export default Footer;
