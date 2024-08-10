
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { AppContext } from "../context/contextWrapper";
import { useContext } from 'react';
function ShowEmailTemplateModal({show, setShow, promptInfo, saved, setSaved}) {
  
  const { saveNewTemplate } = useContext(AppContext)
  const handleClose = () => {
    setShow(false)
    setSaved(false)
  }

  const handleClick = async(e)=>{
    e.preventDefault()
    promptInfo.subject = promptInfo.msg.match(/^Subject: (.+)$/m)[1]
    promptInfo.body = promptInfo.msg.replace(/^Subject: .+\n/, '')
    console.log(promptInfo)
    
    const response = await saveNewTemplate(promptInfo)
    if(response.acknowledged){
      alert("all good")
      setSaved(true)
      console.log(response)
    } else {
      alert("error")
      console.log(response)
    }
  }
  return (
    <>
      <Modal size="lg" id="Modal" show={show} onHide={() => setShow(false)}>
        <Modal.Header id="custom-bg-color" closeButton>
          <Modal.Title id="whiteText">{promptInfo.msg ? promptInfo.msg.match(/^Subject: (.+)$/m)[1] : "Loading..."}</Modal.Title>
        </Modal.Header>
        <Modal.Body id="custom-bg-color">
            <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', width: '100%' }}>
              <code>
              {promptInfo.msg ? promptInfo.msg.replace(/^Subject: .+\n/, '') : "Loading..."}  
              </code>  
            </pre>     
        </Modal.Body>
        <Modal.Footer id="custom-bg-color" className="">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {
            saved ? (
              <Button variant="primary" onClick={handleClick} disabled = {saved}>
              Saved
            </Button>
            ) :
            <Button variant="primary" onClick={handleClick}>
            Save
          </Button>
          }
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ShowEmailTemplateModal;