
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
function ShowSavedTeamplate({templateToShow, show, setShow}) {

  const handleClose = () => {
    setShow(false)
  }
  return (
    <>
      <Modal size="lg" id="Modal" show={show} onHide={() => setShow(false)}>
        <Modal.Header id="custom-bg-color" closeButton>
        <Modal.Title id="whiteText">{templateToShow.subject ? templateToShow.subject : "Loading..."}</Modal.Title>
        </Modal.Header>
        <Modal.Body id="custom-bg-color">
            <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', width: '100%' }}>
              <code>
              {templateToShow.body ? templateToShow.body  : "Loading..."}  
              </code>  
            </pre>     
        </Modal.Body>
        <Modal.Footer id="custom-bg-color" className="">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ShowSavedTeamplate;