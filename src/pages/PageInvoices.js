import React from 'react';
import { Invoices } from '../components';
import { useUserContext } from '../context/user_context';
import Container from '@mui/material/Container';

const PageInvoices = () => {
  const {
    user: { accessToken, customerId },
  } = useUserContext();

  return (
    <>
      <Container maxWidth="lg">
        <div>
          <Invoices accessToken={accessToken} identifier={customerId} />
        </div>
      </Container>
    </>
  );
};

export default PageInvoices;
