import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '..';
import { setDarkMode } from '../store';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import Selector from './Selector';

function NavBar(props: { up: boolean; view: string }): JSX.Element {
  let [image, setImage] = useState<string>('.png');
  let state = useSelector((state: RootState) => state);
  let dispatch = useDispatch();

  const toggleDarkMode = (checked: boolean) => {
    dispatch(setDarkMode(checked));
  };

  return (
    <div className="navbar-container position-relative w-100">
      <Navbar
        className={`navbar bg-body-tertiary w-100 ps-4 pe-4 ${props.view} ${
          props.up ? 'nav-up' : ''
        }`}
      >
        <Navbar.Brand
          className="d-flex align-items-center gap-1"
          href="#home"
          onMouseOver={() => {
            setImage('.gif');
          }}
          onMouseOut={() => {
            setImage('.png');
          }}
        >
          <img
            alt=""
            src={process.env.PUBLIC_URL + '/INIRU' + image}
            width="30"
            className="d-inline-block align-top nav-image"
          />{' '}
          INIRU
        </Navbar.Brand>
        <Nav className="me-auto navbar-link">
          <Nav.Link>Blog</Nav.Link>
        </Nav>

        <div className="d-flex gap-4 align-items-center h-100">
          <Selector />
          <DarkModeSwitch
            className="nav-mode"
            checked={state.isDarkMode.value}
            onChange={toggleDarkMode}
          />
        </div>
      </Navbar>
    </div>
  );
}

export default NavBar;
