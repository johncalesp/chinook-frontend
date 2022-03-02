import React from 'react';
import { TableGenerator } from '../components';
import { useUserContext } from '../context/user_context';

const MainMenu = () => {
  const {
    user: { accessToken, customerId },
  } = useUserContext();

  return (
    <div>
      <TableGenerator accessToken={accessToken} customerId={customerId} />
    </div>
  );
};

export default MainMenu;
