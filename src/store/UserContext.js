import React, { createContext, useState } from 'react';

import api from '../services/api';

const UserContext = createContext({
  email: '',
  cases: [],
  files: [],
  getCases: () => {},
  changeEmail: () => {},
  addFilesToCase: () => {},
  removeFile: () => {}
})

export const UserProvider = ({children}) => {
  const [email, setEmail] = useState('');
  const [cases, setCases] = useState([]);
  const [files, setFiles] = useState([]);

  const getCases = async () => {
    const response = await api.get();
    setCases(response.data.cases)
  }

  const changeEmail = (value) => {
    setEmail(value);
  }

  const addFilesToCase = (file, caseId) => {
    const newFile = [...files, {file, caseId}]
    setFiles(newFile);
  }

  const removeFile = (fileToRemove) => {
    let newArray = [...files];
    files.forEach((file, i) => {
      if (fileToRemove.file.name === file.file.name && file.caseId === fileToRemove.caseId) {
        newArray.splice(i, 1);
        setFiles(newArray);
      }
    })
  }

  return (
  <UserContext.Provider value={{ email, cases, getCases, changeEmail, files, addFilesToCase, removeFile }}>
    {children}
  </UserContext.Provider>
);
  }

export default UserContext;