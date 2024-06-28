
import Modal from 'react-bootstrap/Modal';

function FullScreenModal({show, setShow, text}) {

  return (
    <>

      <Modal size="lg" id="Modal" show={show} onHide={() => setShow(false)}>
        <Modal.Header id="custom-bg-color" closeButton>
          <Modal.Title id="whiteText">Great Question!</Modal.Title>
        </Modal.Header>
        <Modal.Body id="custom-bg-color">
            <h3>{text}</h3> <br></br>
            <h3>Thanks,</h3>
            <h3>Argelio Baca</h3>            
        </Modal.Body>
      </Modal>
    </>
  );
}

export default FullScreenModal;