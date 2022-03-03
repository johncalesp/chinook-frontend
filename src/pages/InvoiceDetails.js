import React from 'react';
import { useParams } from 'react-router-dom';
import { useUserContext } from '../context/user_context';
import { InvoiceSongs } from '../components';

const InvoiceDetails = () => {
  const {
    user: { accessToken },
  } = useUserContext();
  const { id } = useParams();
  return <InvoiceSongs accessToken={accessToken} identifier={id} />;
};

export default InvoiceDetails;
