import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';


const AddFile = ({ file, setFile, text, setText, author, setAuthor, title, setTitle, submit, setSubmit }) => {
  const { progress, url } = useStorage(file, text, author, title);

  useEffect(() => {
    if (url) {
      setFile(null);
      setText('');
      setAuthor('');
      setTitle('');
      setSubmit(false);
    }
  }, [url, setFile, setText, setAuthor, setTitle, setSubmit]);

  return (
    <h2>Created</h2>
  );
} 

export default AddFile;