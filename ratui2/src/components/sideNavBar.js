import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ratLogoSolo from '../pictures/rat-logo-solo.png'

function SideNavBar() {
  return (
    <Navbar id="sideNav" expand="lg" className='h-100 p-0'>
      <Container className='flex-column h-100 w-100 p-0 ms-2 me-2'>
        <Nav id="navLinks"className="flex-column h-100 w-100 justify-content-center">
            <div className="mb-auto me-0 ms-1 mt-3 d-flex justify-content-center" href="#">
            <div className="w-50">
                    <img src={ratLogoSolo} class="img-fluid" alt="..."/>
                    </div>
            </div>
            <Nav.Link className="text-center" href="#">Home</Nav.Link>
            <Nav.Link className="text-center"  href="#">About</Nav.Link>
            <Nav.Link className="text-center" href="#">Services</Nav.Link>
            <Nav.Link className="text-center"  href="#">Contact</Nav.Link>
            <Navbar.Brand className="mt-auto me-0 text-center" href="#">Sidebar</Navbar.Brand>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default SideNavBar;