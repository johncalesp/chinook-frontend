import React from 'react';
import TableGenerator from './TableGenerator';
// import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Invoices = ({ accessToken, identifier }) => {
  const endpoint = 'invoice_customer';
  //   "BillingAddress": "Theodor-Heuss-Straße 34",
  //   "BillingCity": "Stuttgart",
  //   "BillingCountry": "Germany",
  //   "BillingPostalCode": "70174",
  //   "BillingState": null,
  //   "CustomerId": 2,
  //   "InvoiceDate": "2009-01-01T00:00:00",
  //   "InvoiceId": 1,
  //   "Total": "1.98"
  const columns = [
    { field: 'InvoiceDate', headerName: 'Invoice Date', minWidth: 150 },
    { field: 'BillingAddress', headerName: 'Billing Address', minWidth: 150 },
    { field: 'BillingCity', headerName: 'Billing City', minWidth: 150 },
    { field: 'BillingCountry', headerName: 'Billing Country', minWidth: 150 },
    {
      field: 'BillingPostalCode',
      headerName: 'Billing Postal Code',
      minWidth: 150,
    },
    { field: 'BillingState', headerName: 'Billing State', minWidth: 150 },
    { field: 'Total', headerName: 'Total (USD)', minWidth: 100 },
    {
      field: 'InvoiceId',
      headerName: 'Details',
      width: 100,
      renderCell: (params) => (
        <strong>
          <Link to={`/invoice/${params.value}`} className="btn">
            View Songs
          </Link>
          {/* <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16 }}
            onClick={() => console.log(params.value)}
          >
            View
          </Button> */}
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
