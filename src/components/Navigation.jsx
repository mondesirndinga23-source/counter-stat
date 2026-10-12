import { Container, Nav, Navbar } from "react-bootstrap";

const Navigation = () => (
  <Navbar expand="lg" className="bg-dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">React-State</Navbar.Brand>
      <Navbar.Toggle aria-controls="main-navigation" />
      <Navbar.Collapse id="main-navigation">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <Nav.Link href="#dropdown">Dropdown</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;
