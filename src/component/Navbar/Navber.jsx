import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import myContext from '../../context/data/myContext';
// import { NavLink } from 'react-bootstrap';
import { CiSun } from "react-icons/ci";
import { FaSun } from "react-icons/fa";

function Navber() {
  const context = useContext(myContext);
  const {mode, toggleMode} = context;
  console.log(mode, toggleMode)
  
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" style={{ backgroundColor: mode === 'dark' ? 'rgb(40, 44, 52)' : '', color: mode === 'dark' ? 'white' : '', }}>
      <Container className='container-fluid' style={{ backgroundColor: mode === 'dark' ? 'rgb(40, 44, 52)' : '', color: mode === 'dark' ? 'white' : '', }}>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" style={{ color: mode === 'dark' ? 'white' : '', }}>  Home</Nav.Link>
            <Nav.Link href="/order" style={{ color: mode === 'dark' ? 'white' : '', }}> Order</Nav.Link>
            <Nav.Link href="/Cart" style={{ color: mode === 'dark' ? 'white' : '', }}>  Cart</Nav.Link>
            <Nav.Link href="/dashboard" style={{ color: mode === 'dark' ? 'white' : '', }}> Dashboard</Nav.Link>

            
          </Nav>
          <Nav>
            <Nav.Link  style={{ color: mode === 'dark' ? 'white' : '', }}>More deets</Nav.Link>
            <Nav.Link eventKey={2}  style={{ color: mode === 'dark' ? 'white' : '', }} >
              Dank memes
            </Nav.Link>
            <div className="flex lg:ml-6">
                  <button className='' onClick={toggleMode}>
                    {mode === 'light' ?
                      (<CiSun className='' size={30} />
                      ) : 'dark' ?
                        (<FaSun  size={30} />
                        ) : ''}
                  </button>
                </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navber;