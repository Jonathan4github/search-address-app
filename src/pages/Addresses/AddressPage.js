import React, { useState, useEffect } from 'react';

import { Input, Button } from './style';
import AddressList from '../../components/address-list';
import Pagination from '../../components/pagination';

const AddressPage = () => {
  const [addresses, setAddresses] = useState({
    page: 1,
    itemsPerPage: 10,
    searchResult: {},
    searchQuery: 'a'
  });
  const [loading, setLoading] = useState(false);

  const onChangleHandler = e => {
    let data = e.target.value;
    setAddresses(prevState => ({ ...prevState, searchQuery: data }));
    e.preventDefault();
  };

  const handlePage = pageNum => {
    setAddresses(prevState => ({ ...prevState, page: pageNum }));
    fetchAddresses(addresses);
  };

  const fetchAddresses = async addresses => {
    const { page, itemsPerPage, searchQuery } = addresses;
    const start = (page - 1) * itemsPerPage;

    setLoading(true);
    const res = await fetch(
      `https://geodata.nationaalgeoregister.nl/locatieserver/v3/suggest?fq=type:adres&q=${searchQuery}&start=${start}&rows=${itemsPerPage}&fq=*:*`
    );
    const addressData = await res.json();
    setAddresses(prevState => ({ ...prevState, searchResult: { ...addressData.response } }));
    setLoading(false);
  };

  useEffect(() => {
    fetchAddresses(addresses);
  }, []);

  if (!addresses) {
    return <h1>Loading</h1>;
  }

  const { numFound } = addresses.searchResult;
  const page = addresses.page;

  return (
    <div>
      <Input type='search' placeholder='enter address' onChange={onChangleHandler} />
      <Button onClick={() => fetchAddresses(addresses)}>Click</Button>
      <AddressList addresses={addresses} loading={loading} />
      {numFound > 10 ? <Pagination numFound={numFound} page={page} handlePage={handlePage} /> : null}
    </div>
  );
};

export default AddressPage;
