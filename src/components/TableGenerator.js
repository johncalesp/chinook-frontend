import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import axios from 'axios';

const PAGE_SIZE = 10;

const TableGenerator = ({ accessToken, customerId }) => {
  console.log(accessToken, customerId);
  //   const { data } = useDemoData({
  //     dataSet: 'Commodity',
  //     rowLength: 100,
  //     maxColumns: 6,
  //   });

  const pagesNextCursor = React.useRef({});

  const [rows, setRows] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

  const loadServerRows = async (customerId, pageNum, accessToken) => {
    const url =
      process.env.REACT_APP_BACKEND +
      `/api/invoice_customer/${customerId}/${Number(pageNum) + 1}`;
    console.log(url);

    await axios
      .get(url, { headers: { Authorization: `Bearer ${accessToken}` } })
      .then((resp) => {
        setRows(resp.data.invoices);
        console.log(rows);
      })
      .catch((e) => console.log(e));
  };

  const handlePageChange = (newPage) => {
    // console.log(newPage);
    // We have the cursor, we can allow the page transition.
    // if (newPage === 0 || pagesNextCursor.current[newPage - 1]) {
    //   setPage(newPage);
    // }
    if (newPage >= 0 && newPage <= 20) setPage(newPage);
    // console.log(page);
  };

  React.useEffect(() => {
    loadServerRows(customerId, 0, accessToken);

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
  }, [page]);

  return (
    <div style={{ height: 400, width: '100%' }}>
      {/* <DataGrid
        rows={rows}
        columns={data.columns}
        pagination
        pageSize={5}
        rowsPerPageOptions={[5]}
        rowCount={100}
        paginationMode="server"
        onPageChange={handlePageChange}
        page={page}
        loading={loading}
      /> */}
      LOADED
    </div>
  );
};

export default TableGenerator;
