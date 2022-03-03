import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const PAGE_SIZE = 10;

const TableGenerator = ({ accessToken, identifier, endpoint, columns }) => {
  console.log(accessToken, identifier);
  //   const { data } = useDemoData({
  //     dataSet: 'Commodity',
  //     rowLength: 100,
  //     maxColumns: 6,
  //   });

  // let totalNumPages = 1;
  // let totalNumItems = 1;

  const [totalNumPages, setTotalNumPages] = React.useState(1);
  const [totalNumItems, setTotalNumItems] = React.useState(1);

  const [rows, setRows] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

  const loadServerRows = async (identifier, pageNum, accessToken, endpoint) => {
    const url =
      process.env.REACT_APP_BACKEND +
      `/api/${endpoint}/${identifier}/${Number(pageNum) + 1}`;
    console.log(url);

    await axios
      .get(url, { headers: { Authorization: `Bearer ${accessToken}` } })
      .then((resp) => {
        if (endpoint === 'invoice_customer') {
          setRows(
            resp.data.data.map((item) => {
              const id = item.InvoiceId;
              const parsedDate = new Date(item.InvoiceDate).toDateString();
              return {
                ...item,
                InvoiceDate: parsedDate,
                id,
              };
            })
          );
        } else if (
          endpoint === 'tracks_not_owned' ||
          endpoint === 'tracks_by_customers' ||
          endpoint === 'tracks_by_invoice'
        ) {
          setRows(
            resp.data.data.map((item) => {
              const id = item.TrackId;
              return {
                ...item,
                id,
              };
            })
          );
        }
        setLoading(false);
        setTotalNumPages(resp.data.pages);
        setTotalNumItems(resp.data.totalItems);
      })
      .catch((e) => console.log(e));
  };

  const handlePageChange = (newPage) => {
    // console.log(newPage);
    // We have the cursor, we can allow the page transition.
    // if (newPage === 0 || pagesNextCursor.current[newPage - 1]) {
    //   setPage(newPage);
    // }
    if (newPage >= 0 && newPage <= totalNumPages) setPage(newPage);
    // console.log(page);
  };

  React.useEffect(() => {
    setLoading(true);
    loadServerRows(identifier, page, accessToken, endpoint);

    // let active = true;

    // (async () => {
    //   const nextCursor = pagesNextCursor.current[page - 1];

    //   if (!nextCursor && page > 0) {
    //     return;
    //   }

    //   setLoading(true);
    //   const response = await loadServerRows(nextCursor, data);

    //   if (response.nextCursor) {
    //     pagesNextCursor.current[page] = response.nextCursor;
    //   }

    //   if (!active) {
    //     return;
    //   }

    //   setRows(response.rows);
    //   setLoading(false);
    // })();

    // return () => {
    //   active = false;
    // };
  }, [identifier, page, accessToken, endpoint]);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pagination
        pageSize={PAGE_SIZE}
        rowsPerPageOptions={[PAGE_SIZE]}
        rowCount={totalNumItems}
        paginationMode="server"
        onPageChange={handlePageChange}
        page={page}
        loading={loading}
        disableSelectionOnClick
      />
    </div>
  );
};

export default TableGenerator;
