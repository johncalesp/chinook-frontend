import React, { useContext, useState } from 'react';
import axios from 'axios';

const UserContext = React.createContext();
const URL = process.env.REACT_APP_BACKEND;

const getSessionStorage = () => {
  return sessionStorage.getItem('user')
    ? JSON.parse(sessionStorage.getItem('user'))
    : null;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(getSessionStorage());
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
        sessionStorage.setItem(
          'user',
          JSON.stringify({ accessToken, ...customer })
        );
      })
      .catch((e) => {
        setUser(null);
        setErrorLogin(true);
      });
  };

  const updateUser = async (person) => {
    const { firstName, lastName, company, phone, address, city } = person;
    await axios({
      method: 'post',
      url: `${URL}/api/update_user`,
      headers: { Authorization: `Bearer ${user.accessToken}` },
      data: {
        id: user.customerId,
        firstName,
        lastName,
        company,
        phone,
        address,
        city,
      },
    })
      .then((resp) => {
        const { firstName, lastName, company, phone, address, city } =
          resp.data.customer;
        setUser({
          ...user,
          firstName,
          lastName,
          company,
          phone,
          address,
          city,
        });
      })
      .catch((e) => console.log(e));
  };

  const userLogout = () => {
    setUser(null);
    sessionStorage.clear();
  };

  return (
    <UserContext.Provider
      value={{ user, userLogin, errorLogin, userLogout, updateUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
