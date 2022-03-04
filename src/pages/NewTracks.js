import React from 'react';
import { TracksNotOwned } from '../components';
import { useUserContext } from '../context/user_context';
import Container from '@mui/material/Container';

const NewTracks = () => {
  const {
    user: { accessToken, customerId },
  } = useUserContext();

  return (
    <>
      <Container maxWidth="lg">
        <div>
          <TracksNotOwned accessToken={accessToken} identifier={customerId} />
        </div>
      </Container>
    </>
  );
};

export default NewTracks;
