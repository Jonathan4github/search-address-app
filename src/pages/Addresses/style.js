import styled from 'styled-components';

const Input = styled.input`
  width: 70%;
  padding: 10px;
  box-sizing: border-box;
  margin: 6px 2px 7px 25px;
  background: #3c1f3c;
  color: #fff;
  border: 0;
`;

const Button = styled.button`
  width: 20%;
  padding: 10px;
  box-sizing: border-box;
  margin: 6px 0;
  background: purple;
  color: #fff;
  border: 0;
  margin-left: 4px;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export { Button, Input };
