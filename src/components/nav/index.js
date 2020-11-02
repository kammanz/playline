import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

import styles from './index.module.scss';

const Nav = () => {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Route>
          <NavLink className={styles.navItem} to="/about">
            <span>About</span>
          </NavLink>
        </Route>
        <Route>
          <NavLink className={styles.navItem} to="/bonus">
            PLB Bonus
          </NavLink>
        </Route>
        <Route>
          <NavLink className={styles.navItem} to="/contact">
            Contact
          </NavLink>
        </Route>
        <Route>
          <NavLink className={styles.navItem} to="/security">
            Security
          </NavLink>
        </Route>
        <Route>
          <NavLink className={styles.navItem} to="/responsible-play">
            Responsible Play
          </NavLink>
        </Route>
        <Route>
          <NavLink className={styles.navItem} to="/privacy">
            Privacy
          </NavLink>
        </Route>
        <Route>
          <NavLink className={styles.navItem} to="/terms">
            Terms
          </NavLink>
        </Route>
      </BrowserRouter>
    </div>
  );
};

export default Nav;