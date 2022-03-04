import React from 'react';
import TableGenerator from './TableGenerator';
import { Link } from 'react-router-dom';

const Invoices = ({ accessToken, identifier }) => {
  const endpoint = 'invoice_customer';
  const columns = [
    { field: 'InvoiceDate', headerName: 'Invoice Date', minWidth: 150 },
    { field: 'BillingAddress', headerName: 'Billing Address', minWidth: 150 },
    { field: 'BillingCity', headerName: 'Billing City', minWidth: 150 },
    { field: 'BillingCountry', headerName: 'Billing Country', minWidth: 120 },
    {
      field: 'BillingPostalCode',
      headerName: 'Billing Postal Code',
      minWidth: 150,
    },
    { field: 'BillingState', headerName: 'Billing State', minWidth: 100 },
    { field: 'Total', headerName: 'Total (USD)', minWidth: 80, type: 'number' },
    {
      field: 'InvoiceId',
      headerName: 'Details',
      width: 150,
      renderCell: (params) => (
        <strong>
          <Link to={`/main/invoice/${params.value}`} className="btn">
            View Songs
          </Link>
        </strong>
      ),
    },
  ];
  return (
    <TableGenerator
      accessToken={accessToken}
      identifier={identifier}
      endpoint={endpoint}
      columns={columns}
    />
  );
};

export default Invoices;
