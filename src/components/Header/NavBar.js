import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import Contacto from "../Contacto/Contacto"

function Example(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
      <Link to="/"><h1 className="header-title">Decilo con Vida</h1></Link>
      <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
            <Link to='/ItemListContainer/' className="header-navlink">Productos</Link>
            </NavItem>
            <NavItem>
            <Link to='/Contacto/' className="header-navlink">Contacto</Link>
            </NavItem>
          </Nav>
        </Collapse>
    
        
      </Navbar>
    </div>
  );
}

export default Example;