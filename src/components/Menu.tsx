import { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Selector from './Selector';
import { useSelector } from 'react-redux';
import { RootState } from '..';

function Menu(): JSX.Element {
  const navigate = useNavigate();

  let [menu, setMenu] = useState(false);
  let state = useSelector((state: RootState) => state);

  return (
    <>
      <div className="menu-btn h-100">
        <div
          className="menu-animation d-flex flex-column position-relative"
          onClick={() => {
            setMenu(!menu);
          }}
        >
          <div className={`menu-bar ${menu ? 'active' : ''}`}></div>
          <div className={`menu-bar ${menu ? 'active' : ''}`}></div>
          <div className={`menu-bar ${menu ? 'active' : ''}`}></div>
        </div>
      </div>

      <div
        className={`menu-selector position-absolute w-100 ${
          menu ? 'active' : ''
        }`}
      >
        {state.isMenuList.map(
          (
            data: { name: string; link?: string; redirect?: string },
            i: number
          ): JSX.Element => {
            return (
              <div className="p-3" key={i}>
                <Nav.Link
                  onClick={(e) => {
                    e.stopPropagation();
                    if (data.link) {
                      navigate(data.link);
                    } else if (data.redirect) {
                      navigate('/redirect', {
                        state: { url: data.redirect },
                      });
                    }
                    setMenu(!menu);
                  }}
                >
                  {data.name}
                </Nav.Link>
              </div>
            );
          }
        )}
        <div className="p-3 d-flex justify-content-end">
          <Selector />
        </div>
      </div>
    </>
  );
}

export default Menu;
