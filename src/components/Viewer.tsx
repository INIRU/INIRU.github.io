import { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '..';
import { setViewer } from '../store';

function Viewer(): JSX.Element {
  let [alert, setAlert] = useState(false);
  let state = useSelector((state: RootState) => state);
  let dispatch = useDispatch();

  useEffect(() => {
    let fadeIn = setTimeout(() => setAlert(true), 300);
    let fadeOut = setTimeout(() => setAlert(false), 3_000);
    return () => {
      clearTimeout(fadeIn);
      clearTimeout(fadeOut);
    };
  }, []);

  return (
    <div
      className="image-viewer p-2 d-flex justify-content-center align-items-center w-100 h-100 position-fixed z-3"
      onClick={(e) => {
        e.stopPropagation();
        dispatch(setViewer(''));
      }}
    >
      <Alert
        data-bs-theme={state.isDarkMode.value ? 'dark' : 'light'}
        variant="info"
        className={`viewer-alert position-fixed mt-1 align-self-start ${
          alert ? 'active' : ''
        }`}
      >
        검은 바탕을 클릭하여 Viewer를 종료할 수 있습니다.
      </Alert>
      <img className="viewer-image" src={state.isViewer.value} alt="" />
    </div>
  );
}

export default Viewer;
