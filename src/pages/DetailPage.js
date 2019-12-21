import React, { useEffect, useState } from 'react';

import AddressDetail from '../components/address-detail';

const DetailsComponent = props => {
  const { id } = props.match.params;
  const [address, setAddress] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAddresses = async id => {
      setLoading(true);
      const res = await fetch(
        `https://geodata.nationaalgeoregister.nl/locatieserver/v3/lookup?id=${id}`
      );
      const addressData = await res.json();
      setAddress(prevState => ({ ...prevState, details: { ...addressData.response } }));
      setLoading(false);
    };

    fetchAddresses(id);
  }, []);

  if (loading || address.details === undefined) {
    return <h1>Loading</h1>;
  }

  const { docs } = address.details;

  return <AddressDetail address={docs} loading={loading} />;
};

export default DetailsComponent;
