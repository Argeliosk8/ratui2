import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ratLogoSolo from '../pictures/rat-logo-solo.png'
import DropdownButtonNav from './dropDownButtonNav.js'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function SideNavBar() {
  const navigate = useNavigate()
  const [activeItem, setActiveItem] = useState('tracker')

  const handleClick = (option) => {
    setActiveItem(option)
    navigate(`/${option}`)
  }

  return (
    <Navbar id="sideNav" expand="lg" className='h-100 p-0'>
      <Container className='flex-column h-100 w-100 p-0 ms-2 me-2'>
        <Nav className="flex-column h-100 w-100 justify-content-center">
            <div className="mb-auto me-0 ms-1 mt-3 d-flex justify-content-center" href="#">
            <div className="w-50">
                    <img src={ratLogoSolo} class="img-fluid" alt="..."/>
                    </div>
            </div>
            <Nav.Link id={activeItem === 'tracker' ? "activeNav" : "navLink"} className="text-center" onClick={()=>handleClick('tracker')}>Tracker</Nav.Link>
            <Nav.Link id={activeItem === 'projects' ? "activeNav" : "navLink"} className="text-center"onClick={()=>handleClick('projects')}>Projects</Nav.Link>
            <Nav.Link id={activeItem === 'templates' ? "activeNav" : "navLink"} className="text-center"onClick={()=>handleClick('templates')}>Templates</Nav.Link>
            <Nav.Link id={activeItem === 'contact' ? "activeNav" : "navLink"} className="text-center"onClick={()=>handleClick('contact')}>Contact</Nav.Link>
            <Navbar.Brand className="mt-auto me-0 text-center" href="#">
            <DropdownButtonNav></DropdownButtonNav>
            </Navbar.Brand>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default SideNavBar;