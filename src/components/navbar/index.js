import React from 'react';
import { Link } from 'react-router-dom';

import { Nav, Heading, StyledLink } from './style';

const Navbar = () => {
  return (
    <Nav>
      <Heading>Dutch government find address APP</Heading>
      <StyledLink to='/'>Home</StyledLink>
    </Nav>
  );
};

export default Navbar;
