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
    files.forEach((file, i) => {
      const hasTheSameName = fileToRemove.file.name === file.file.name;
      const hasTheSameId = file.caseId === fileToRemove.caseId;
      if (hasTheSameName && hasTheSameId) removeAttachmentFromFiles(i);
    })
  }

  const removeAttachmentFromFiles = (index) => {
    let newArray = [...files];
    newArray.splice(index, 1);
    setFiles(newArray);
  }

  return (
  <UserContext.Provider value={{ email, cases, getCases, changeEmail, files, addFilesToCase, removeFile }}>
    {children}
  </UserContext.Provider>
);
  }

export default UserContext;