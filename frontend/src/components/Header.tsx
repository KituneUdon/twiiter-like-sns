import React, { FC } from 'react';
import styled from 'styled-components';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const ExtendNavbar = styled(Navbar)`
  margin-bottom: 5vh;
`;

const Header: FC = () => (
  <ExtendNavbar bg="dark" variant="dark">
    <Nav className="mr-auto">
      <Navbar.Brand href="http://localhost:4000">SAMPLE APP</Navbar.Brand>
    </Nav>
    <Nav>
      <Nav.Link href="http://localhost:4000">Home</Nav.Link>
      <Nav.Link href="http://localhost:4000">Help</Nav.Link>
      <Nav.Link href="http://localhost:4000">Users</Nav.Link>
      <NavDropdown title="Account" id="collasible-nav-dropdown">
        <NavDropdown.Item href="http://localhost:4000">test</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </ExtendNavbar>
);

export default Header;
