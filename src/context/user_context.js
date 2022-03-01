import React, { useContext, useState } from 'react';
import axios from 'axios';

const UserContext = React.createContext();
const URL = process.env.REACT_APP_BACKEND;

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [errorLogin, setErrorLogin] = useState(false);

  const userLogin = async (email, password) => {
    await axios({
      method: 'post',
      url: `${URL}/api/customer_login`,
      data: {
        email,
        password,
      },
    })
      .then((resp) => {
        const { accessToken, customer } = resp.data;
        setUser({ accessToken, ...customer });
      })
      .catch((e) => {
        setUser(null);
        setErrorLogin(true);
      });
  };
  return (
    <UserContext.Provider value={{ user, userLogin, errorLogin }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
