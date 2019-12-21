import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.div`
  padding: 10px 20px;
  text-align: center;
  background: #6d3d6d;
`;

const Heading = styled.h1`
  margin: 10px 0;
`;

const StyledLink = styled(Link)`
  color: white;
  align: left;
`;

export { Nav, Heading, StyledLink };
