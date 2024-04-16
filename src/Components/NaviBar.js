import React,{useState} from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, NavLink,  } from 'react-router-dom';
import './NaviBar.css'

const NaviBar = () => {
  const [expanded, setExpanded] = useState(false);

const handleNavCollapse = () => {
  setExpanded(false);
};

const handleNavDropdownToggleClick = (e) => {
  e.stopPropagation()
  setExpanded(expanded);
};

const handleNavDropdownItemClick = (e) => {
  e.stopPropagation()
  setExpanded(false);
}

  return (
    <Navbar 
        className='Navi fixed-top ' id='navi' expand="lg"  expanded={expanded} onToggle={(isExpanded)=>setExpanded(isExpanded)}        >
      <Navbar.Brand as={Link} to="/" className='Brand'>JobSearch</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
      <Navbar.Collapse id="responsive-navbar-nav"  className='justify-content-end' onClick={handleNavCollapse} >
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/"  className='Navi-child'>Home</Nav.Link>
         <NavDropdown title="Jobs" id="basic-nav-dropdown" onClick={handleNavDropdownToggleClick} >
            <NavDropdown.Item as={NavLink}  to='/services1'onClick={handleNavDropdownItemClick} className='List' >Engineering</NavDropdown.Item>
            <NavDropdown.Item as={NavLink}    to='/services2' onClick={handleNavDropdownItemClick} className='List'  >Mangement</NavDropdown.Item>
            <NavDropdown.Item as={NavLink}  to='/services3' onClick={handleNavDropdownItemClick} className='List' >Marketing</NavDropdown.Item>
         </NavDropdown>
         <Nav.Link as={NavLink} to="/about"  className='Navi-child'>About</Nav.Link>
          <Nav.Link as={NavLink} to="/contact" className='Navi-child'>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NaviBar;
