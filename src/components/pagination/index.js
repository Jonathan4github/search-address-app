import React from 'react';

import { Button, Wrapper } from './style';

const Pagination = ({ page, handlePage }) => {
  return (
    <Wrapper>
      {page > 1 ? (
        <Button
          onClick={() => {
            handlePage(page - 1);
          }}
        >
          &laquo; Previous
        </Button>
      ) : null}
      <Button
        onClick={() => {
          handlePage(page + 1);
        }}
      >
        &raquo; Next
      </Button>
    </Wrapper>
  );
};

export default Pagination;
