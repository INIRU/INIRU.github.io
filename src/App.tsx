import React from 'react';
import NavBar from './components/Nav';
import Intro from './components/Intro';
import About from './components/About';
import Skill from './components/Skill';
import './App.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Intro></Intro>
      <About></About>
      <Skill></Skill>
    </div>
  );
}

export default App;
