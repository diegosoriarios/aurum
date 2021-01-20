import React, { createContext, useState } from 'react';

import api from '../services/api';

const UserContext = createContext({
  email: '',
  cases: [],
  getCases: () => {},
  changeEmail: () => {}
})

export const UserProvider = ({children}) => {
  const [email, setEmail] = useState('');
  const [cases, setCases] = useState([]);

  const getCases = async () => {
    const response = await api.get();
    setCases(response.data.cases)
  }

  const changeEmail = (value) => {
    setEmail(value);
  }

  return (
  <UserContext.Provider value={{ email, cases, getCases, changeEmail }}>
    {children}
  </UserContext.Provider>
);
  }

export default UserContext;