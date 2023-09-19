import React from 'react';
import NavBar from './components/Nav';
import Intro from './components/Intro';
import './App.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Intro></Intro>
    </div>
  );
}

export default App;
