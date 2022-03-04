import React from 'react';
import TableGenerator from './TableGenerator';

const InvoiceSongs = ({ accessToken, identifier }) => {
  const endpoint = 'tracks_by_invoice';
  const columns = [
    { field: 'Name', headerName: 'Name', minWidth: 150 },
    { field: 'Album', headerName: 'Album', minWidth: 300 },
    { field: 'Artist', headerName: 'Artist', minWidth: 200 },
    { field: 'Duration', headerName: 'Duration (Min)', minWidth: 100 },
    { field: 'UnitPrice', headerName: 'Unit Price', minWidth: 150 },
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

export default InvoiceSongs;
