import React from 'react';
import { withRouter } from 'react-router-dom';

import { List, AddressTitle, AddressScore } from './style';

const AddressItem = ({ address, score, id, history }) => {
  return (
    <List key={id} onClick={() => history.push(`search/${id}`)}>
      <AddressTitle>{address}</AddressTitle>
      <AddressScore>{score}</AddressScore>
    </List>
  );
};

export default withRouter(AddressItem);
