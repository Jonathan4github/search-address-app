import styled from 'styled-components';

const List = styled.ul`
  padding: 0;
  list-style-type: none;
`;

const ListItem = styled.li`
  background: #6d3d6d;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  margin: 10px 0;

  &:hover {
    opacity: 0.7;
  }
`;

export { List, ListItem };
