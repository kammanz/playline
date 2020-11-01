import React from 'react';

import Card from './card/index';
import Nav from './nav/nav';

import './app.scss';

const App = () => {
  return (
    <div classname={'jojo'}>
      app for playline 2
      <Card />
      <Nav />
    </div>
  );
};

export default App;
