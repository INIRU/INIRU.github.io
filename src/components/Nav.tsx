import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '..';
import { setDarkMode } from '../store';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import Selector from './Selector';
import { useNavigate } from 'react-router-dom';
import Menu from './Menu';

function NavBar(props: {
  up: boolean;
  view: string;
  windowWidth: number;
}): JSX.Element {
  const navigate = useNavigate();

  let [image, setImage] = useState<string>('.png');
  let state = useSelector((state: RootState) => state);
  let dispatch = useDispatch();

  const toggleDarkMode = (checked: boolean) => {
    dispatch(setDarkMode(checked));
  };

  return (
    <div className="navbar-container position-relative w-100">
      <Navbar
        className={`d-flex align-items-center gap-1 navbar bg-body-tertiary w-100 ps-4 pe-4 ${
          props.view
        } ${props.up ? 'nav-up' : ''}`}
      >
        <Navbar.Brand
          className="d-flex align-items-center gap-1"
          onClick={() => {
            navigate('/');
          }}
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
          {props.windowWidth <= 768
            ? null
            : state.isMenuList.map(
                (
                  data: {
                    name: string;
                    link?: string;
                    redirect?: string;
                  },
                  i: number
                ): JSX.Element => {
                  return (
                    <Nav.Link
                      key={i}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (data.link) {
                          navigate(data.link);
                        } else if (data.redirect) {
                          navigate('/redirect', {
                            state: { url: data.redirect },
                          });
                        }
                      }}
                    >
                      {data.name}
                    </Nav.Link>
                  );
                }
              )}
        </Nav>

        <div className="d-flex gap-4 align-items-center h-100">
          {props.windowWidth <= 768 ? null : <Selector />}
          <DarkModeSwitch
            className="nav-mode"
            checked={state.isDarkMode.value}
            onChange={toggleDarkMode}
          />
          {props.windowWidth <= 768 ? <Menu /> : null}
        </div>
      </Navbar>
    </div>
  );
}

export default NavBar;
