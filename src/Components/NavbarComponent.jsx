import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'

function NavbarComponent() {
  return <>
  <Navbar bg="white"className="nav " data-bs-theme="light">
          <Nav className="me-auto align">
           < Link to="/"className="design" >ALL</Link>
            <Link to="/full-stack" className="design"  >FULL STACK DEVELOPMENT</Link>
            <Link to="/data-science" className="design">DATA SCIENCE</Link>
            <Link to="/cyber"className="design" >CYBER SECURITY</Link>
            <Link to="/career"className="design"  >CAREER</Link>
          </Nav>
        
      </Navbar>
  </>
}

export default NavbarComponent
