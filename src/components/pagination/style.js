import styled from 'styled-components';

const Button = styled.button`
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  &:hover {
    background: purple;
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  display: inline-block;
`;

export { Button, Wrapper };
