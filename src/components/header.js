// imported react-bootstrap 
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
// imported react-fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    // here i used fragment tag in wjich enclose all the code 
    <>
      <Navbar className="bg-body-tertiary justify-content-between" style={{ maxHeight: '50px', overflow: 'hidden' }}>
      <Form inline>
        <InputGroup>
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Form>
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Search</Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
{/* i used two navbar one for sreaching purpose and one for all links  */}
      <Navbar bg="info" sticky="top" data-bs-theme="dark" >
        <Container >
          <Navbar.Brand href="/home">e-com</Navbar.Brand>
          <Nav >
            <Nav.Link href="/home">Home</Nav.Link>
            <NavDropdown title="products" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action2">Shoes</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Dresses</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Make Overs</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/sign-up">Sign-up</Nav.Link>
            {/* font awesome icon for cart */}
            <Nav.Link href="/cart"><FontAwesomeIcon className="cart" icon={faCartShopping} /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;