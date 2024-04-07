import React, { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import { AppContext } from "../context/contextWrapper";

function SuccessToast() {
    const {showToast, toggleShowToast} = useContext(AppContext)

  return (
    <Row>
        <Toast show={showToast} onClose={toggleShowToast}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
    </Row>
  );
}

export default SuccessToast;