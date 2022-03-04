import React from 'react';
import TableGenerator from './TableGenerator';

const TracksNotOwned = ({ accessToken, identifier }) => {
  const endpoint = 'tracks_not_owned';
  const columns = [
    { field: 'Name', headerName: 'Name', minWidth: 150 },
    { field: 'Album', headerName: 'Album', minWidth: 150 },
    { field: 'Artist', headerName: 'Artist', minWidth: 150 },
    { field: 'Composer', headerName: 'Composer', minWidth: 150 },
    { field: 'Duration', headerName: 'Duration (Min)', minWidth: 100 },
    { field: 'Genre', headerName: 'Genre', minWidth: 150 },
    { field: 'MediaType', headerName: 'MediaType', minWidth: 150 },
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

export default TracksNotOwned;
