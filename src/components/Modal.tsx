import { Button, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '..';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { setWarningModal } from '../store';

function Modal(): JSX.Element {
  let state = useSelector((state: RootState) => state);
  let dispatch = useDispatch();
  let [alert, setAlert] = useState<{ title: string; desc: string } | null>();
  let { t } = useTranslation();

  useEffect(() => {
    let trans: { title: string; desc: string } = t(state.isWarningModal.value, {
      returnObjects: true,
    });
    setAlert(trans);
  }, []);

  return (
    <div className="modal-container position-fixed w-100 h-100 d-flex justify-content-center align-items-center">
      <Alert variant="warning" data-bs-theme="dark">
        <Alert.Heading>{alert?.title}</Alert.Heading>
        <p className="alert-desc">{alert?.desc}</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button
            variant="outline-danger"
            onClick={() => {
              dispatch(setWarningModal(''));
            }}
          >
            Ok
          </Button>
        </div>
      </Alert>
    </div>
  );
}

export default Modal;
