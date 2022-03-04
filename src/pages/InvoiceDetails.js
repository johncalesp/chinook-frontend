import React from 'react';
import { useParams } from 'react-router-dom';
import { useUserContext } from '../context/user_context';
import { InvoiceSongs } from '../components';
import Container from '@mui/material/Container';

const InvoiceDetails = () => {
  const {
    user: { accessToken },
  } = useUserContext();
  const { id } = useParams();
  return (
    <Container maxWidth="lg">
      <InvoiceSongs accessToken={accessToken} identifier={id} />
    </Container>
  );
};

export default InvoiceDetails;
