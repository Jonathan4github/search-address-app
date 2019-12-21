import React from 'react';

import { AddressContainer, AddressTitle, AddressContent } from './style';

const AddressDetail = ({ address, loading }) => {
  console.log(address[0]);

  const keys = Object.keys(address[0]);
  return keys.map((key, index) => {
    return (
      <AddressContainer key={index}>
        <AddressTitle>{key}</AddressTitle>
        <AddressContent>{address[0][`${key}`]}</AddressContent>
      </AddressContainer>
    );
  });
};

export default AddressDetail;
