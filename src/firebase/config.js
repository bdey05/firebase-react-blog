import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyBx3OulnefDn36Qo9z6XOInjd55CGIoS0I",
    authDomain: "fir-blog-8ec38.firebaseapp.com",
    projectId: "fir-blog-8ec38",
    storageBucket: "fir-blog-8ec38.appspot.com",
    messagingSenderId: "1024050634897",
    appId: "1:1024050634897:web:d1861cef54094d8532df30"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };
  
  
