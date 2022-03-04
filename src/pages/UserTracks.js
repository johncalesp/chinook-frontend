import React from 'react';
import { TracksOwned } from '../components';
import { useUserContext } from '../context/user_context';
import Container from '@mui/material/Container';

const UserTracks = () => {
  const {
    user: { accessToken, customerId },
  } = useUserContext();

  return (
    <>
      <Container maxWidth="lg">
        <div>
          <TracksOwned accessToken={accessToken} identifier={customerId} />
        </div>
      </Container>
    </>
  );
};

export default UserTracks;
