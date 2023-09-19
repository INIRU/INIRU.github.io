import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '..';
import { setDarkMode } from '../store';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useTranslation } from 'react-i18next';

function NavBar(): JSX.Element {
  const { i18n } = useTranslation();
  let langs: { [key: string]: string } = {
    ko: '한국어',
    en: 'English',
  };

  let [image, setImage] = useState<string>('.png');
  let state = useSelector((state: RootState) => state);
  let dispatch = useDispatch();

  const toggleDarkMode = (checked: boolean) => {
    dispatch(setDarkMode(checked));
  };

  return (
    <div className="navbar-container position-relative w-100">
      <Navbar
        className="navbar bg-body-tertiary w-100 ps-4 pe-4"
        data-bs-theme="dark"
      >
        <Navbar.Brand
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
            className="d-inline-block align-top"
          />{' '}
          INIRU
        </Navbar.Brand>
        <Nav className="me-auto navbar-link">
          <Nav.Link href="#home">Blog</Nav.Link>
          <Nav.Link href="#home">Contect</Nav.Link>
        </Nav>

        <Row>
          <Col xs="auto">
            <NavDropdown
              align={{ lg: 'end' }}
              title={
                langs[
                  typeof i18n.resolvedLanguage == 'string'
                    ? i18n.resolvedLanguage
                    : 'en'
                ]
              }
              id="basic-nav-dropdown"
            >
              {Object.keys(langs).map((key: string, i: number): JSX.Element => {
                return (
                  <NavDropdown.Item
                    key={i}
                    onClick={() => {
                      i18n.changeLanguage(key);
                    }}
                  >
                    {langs[key]}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
          </Col>
          <Col xs="auto">
            <DarkModeSwitch
              size={25}
              checked={state.isDarkMode.value}
              onChange={toggleDarkMode}
            />
          </Col>
        </Row>
      </Navbar>
    </div>
  );
}

export default NavBar;
