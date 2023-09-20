import React, { useEffect, useState, lazy } from 'react';
import NavBar from './components/Nav';
import Intro from './components/Intro';
import About from './components/About';
import './App.css';

const Skill = lazy(() => import('./components/Skill'));
const Repo = lazy(() => import('./components/Repositories'));

let lastScrollTop = 0;

function App(): JSX.Element {
  let [up, setUp] = useState(false);
  let [view, setView] = useState('');

  function NavScrollEvent() {
    let { pageYOffset } = window;
    if (pageYOffset >= 300) {
      setUp(true);

      if (pageYOffset - lastScrollTop <= -10) {
        setView('nav-view');
      } else if (pageYOffset - lastScrollTop >= 10 && view === 'nav-view') {
        setView('nav-hide');
      }
      lastScrollTop = pageYOffset <= 0 ? 0 : pageYOffset;
    } else {
      if (view === 'nav-view') {
        setView('nav-hide');
      }
      setTimeout(() => {
        setUp(false);
        setView('');
      }, 100);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', NavScrollEvent);

    return () => {
      window.removeEventListener('scroll', NavScrollEvent);
    };
  });

  return (
    <div className="App">
      <NavBar up={up} view={view}></NavBar>
      <Intro></Intro>
      <About></About>
      <Skill></Skill>
      <Repo></Repo>
    </div>
  );
}

export default App;
