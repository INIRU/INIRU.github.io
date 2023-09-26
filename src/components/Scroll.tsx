import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

function Scroll(): JSX.Element {
  let [scroll, setScroll] = useState<{ up: boolean; down: boolean }>({
    up: false,
    down: true,
  });

  function Scroll(): void {
    let { scrollY } = window;
    let scrollLimit =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    if (scrollY > 10 && !scroll.up) {
      let temp = { ...scroll };
      temp['up'] = true;
      setScroll(temp);
    } else if (scrollY <= 10 && scroll.up) {
      let temp = { ...scroll };
      temp['up'] = false;
      setScroll(temp);
    }
    if (scrollLimit - scrollY <= 10 && scroll.down) {
      let temp = { ...scroll };
      temp['down'] = false;
      setScroll(temp);
    } else if (scrollLimit - scrollY > 10 && !scroll.down) {
      let temp = { ...scroll };
      temp['down'] = true;
      setScroll(temp);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', Scroll);

    return () => {
      window.removeEventListener('scroll', Scroll);
    };
  }, [scroll]);

  return (
    <div className="scroll-container position-fixed d-flex flex-column gap-3 align-items-end justify-content-end p-3">
      {scroll.up ? (
        <div
          className="scroll shadow-sm d-flex justify-content-center align-items-center text-center"
          onClick={() => {
            window.scrollTo({ top: 0 });
          }}
        >
          <FontAwesomeIcon icon={faChevronUp} />
        </div>
      ) : null}
      {scroll.down ? (
        <div
          className="scroll shadow-sm d-flex justify-content-center align-items-center"
          onClick={() => {
            window.scrollTo({ top: document.documentElement.scrollHeight });
          }}
        >
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      ) : null}
    </div>
  );
}

export default Scroll;
