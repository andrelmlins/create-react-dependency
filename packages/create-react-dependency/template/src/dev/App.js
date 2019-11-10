import React from 'react';
import Button from '../lib';
import logo from './logo.png';

const App = () => (
  <div className="content">
    <img src={logo} className="logo" alt="Logo Create React Dependency" />
    <h1 className="title">Create React Dependency</h1>
    <section className="library">
      <Button onClick={() => alert('button')}>My Library Button</Button>
    </section>
  </div>
);

export default App;
