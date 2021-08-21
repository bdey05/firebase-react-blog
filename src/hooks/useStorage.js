import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

const useStorage = (file, text, author, title) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('blogs');
    
    storageRef.put(file).on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, async () => {
      const url = await storageRef.getDownloadURL();
      const createdAt = timestamp();
      await collectionRef.add({ url, createdAt, text, author, title });
      setUrl(url);
    });
  }, [file, author, text, title]);

  return { progress, url, error };
}

export default useStorage;