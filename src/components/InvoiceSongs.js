import React from 'react';
import TableGenerator from './TableGenerator';

const InvoiceSongs = ({ accessToken, identifier }) => {
  // "Album": "Balls to the Wall",
  //         "Artist": "Accept",
  //         "Duration": 5.71,
  //         "Name": "Balls to the Wall",
  //         "TrackId": 2,
  //         "UnitPrice": "0.99"
  const endpoint = 'tracks_by_invoice';
  const columns = [
    { field: 'Name', headerName: 'Name', minWidth: 150 },
    { field: 'Album', headerName: 'Album', minWidth: 150 },
    { field: 'Artist', headerName: 'Artist', minWidth: 150 },
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
