import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Container>
                <Link to="/" className='nav-link'>
                    <Navbar.Brand>
                        <img src="/logo.png" height="50px" alt="logo" />
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="my-3 my-lg-0 mb-5 mb-lg-0">
                    <Nav className="me-auto">
                        <Link to="/all-beers" className="nav-link">All Beers</Link>
                        <Link to="/pricing" className="nav-link">Pricing</Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    
                    <Form className="d-flex mt-3 mt-lg-0">
                        <Form.Control
                            type="search"
                            placeholder="Search..."
                            className="me-2 rounded-0"
                            aria-label="Search"
                        />
                        <Button className='btn-custom-2'>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;