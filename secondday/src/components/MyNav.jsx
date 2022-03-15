import { Navbar, Nav, Form, FormControl } from "react-bootstrap"
// import LatestReleases from "./LatestReleases"

const MyNav = () => {
  const query = document.getElementById("search").value

  const searcher = () => {}

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#browse">Browse</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            id="search"
            onChange={searcher(query)}
          />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNav
