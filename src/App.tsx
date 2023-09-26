import React, { useEffect, useState, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  isSafari,
  isChrome,
  isEdge,
  isFirefox,
  isChromium,
} from 'react-device-detect';
import NavBar from './components/Nav';
import Intro from './components/Intro';
import About from './components/About';
import Reward from './components/Reward';
import Viewer from './components/Viewer';
import Modal from './components/Modal';
import Scroll from './components/Scroll';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '.';
import { setWarningModal } from './store';
import Redirect from './components/Redirect';

const Skill = lazy(() => import('./components/Skill'));
const Repo = lazy(() => import('./components/Repositories'));

let lastScrollTop = 0;

function App(): JSX.Element {
  let state = useSelector((state: RootState) => state);
  let dispatch = useDispatch();
  let [up, setUp] = useState(false);
  let [view, setView] = useState('');
  let [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function Browser(): void {
    if (!(isSafari || isChrome || isEdge || isFirefox || isChromium)) {
      dispatch(setWarningModal('browserCom'));
    }
  }

  function WindowWidth(): void {
    setWindowWidth(window.innerWidth);
  }

  function NavScrollEvent(): void {
    let { pageYOffset } = window;
    if (pageYOffset >= 300) {
      setUp(true);

      if (pageYOffset - lastScrollTop <= -10 && view !== 'nav-view') {
        setView('nav-view');
      } else if (pageYOffset > lastScrollTop && view === 'nav-view') {
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
    Browser();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', NavScrollEvent);
    window.addEventListener('resize', WindowWidth);

    return () => {
      window.removeEventListener('scroll', NavScrollEvent);
      window.removeEventListener('resize', WindowWidth);
    };
  }, [view, windowWidth]);

  return (
    <div className="App">
      {state.isWarningModal.value ? <Modal /> : null}
      {state.isViewer.value ? <Viewer /> : null}
      <Scroll />
      <NavBar up={up} view={view} windowWidth={windowWidth}></NavBar>
      <Intro></Intro>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <About></About>
              <Skill></Skill>
              <Repo></Repo>
            </>
          }
        />
        <Route path="/reward" element={<Reward></Reward>} />
        <Route path="/redirect" element={<Redirect />} />
      </Routes>
    </div>
  );
}

export default App;
