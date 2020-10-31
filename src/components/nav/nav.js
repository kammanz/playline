import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <BrowserRouter>
        <Route>
          <Link to="/about">About</Link>
        </Route>
        <Route>
          <Link to="/bonus">PLB Bonus</Link>
        </Route>
        <Route>
          <Link to="/contact">Contact</Link>
        </Route>
        <Route>
          <Link to="/security">Security</Link>
        </Route>
        <Route>
          <Link to="/responsible-play">Responsible Play</Link>
        </Route>
        <Route>
          <Link to="/privacy">Privacy</Link>
        </Route>
        <Route>
          <Link to="/terms">Terms</Link>
        </Route>
      </BrowserRouter>
    </div>
  );
};

export default Nav;
