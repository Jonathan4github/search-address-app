import React from 'react';

import AddressItem from '../address-item';

import { List, ListItem } from './style';

const AddressList = ({ addresses, loading }) => {
  const { docs } = addresses.searchResult;
  if (loading || docs === undefined) {
    return <h2>Loading...</h2>;
  }
  return (
    <List>
      {docs.map(doc => (
        <ListItem key={doc.id}>
          <AddressItem score={doc.score} address={doc.weergavenaam} id={doc.id} />
        </ListItem>
      ))}
    </List>
  );
};

export default AddressList;
