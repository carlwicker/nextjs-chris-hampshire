import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";

export default function TopNav() {
  return (
    <>
      <Navbar variant="dark" expand="lg">
        <Link href="./" passHref>
          <Nav.Link>
            <Navbar.Brand>Chris Hampshire</Navbar.Brand>
          </Nav.Link>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="./" passHref>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href="/about" passHref>
              <Nav.Link>About</Nav.Link>
            </Link>
            <Link href="/discography" passHref>
              <Nav.Link>Discography</Nav.Link>
            </Link>
            <Link href="/contact" passHref>
              <Nav.Link>Contact</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
