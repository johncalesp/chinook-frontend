import React from 'react';
import { Invoices, TracksNotOwned, TracksOwned } from '../components';
import { useUserContext } from '../context/user_context';
import { NavBar } from '../components';
import Container from '@mui/material/Container';

const MainMenu = () => {
  const {
    user: { accessToken, customerId },
  } = useUserContext();

  return (
    <>
      <NavBar />
      <Container maxWidth="lg">
        <div>
          <Invoices accessToken={accessToken} identifier={customerId} />
        </div>
        <div>
          <TracksNotOwned accessToken={accessToken} identifier={customerId} />
        </div>
        <div>
          <TracksOwned accessToken={accessToken} identifier={customerId} />
        </div>
      </Container>
    </>
  );
};

export default MainMenu;
