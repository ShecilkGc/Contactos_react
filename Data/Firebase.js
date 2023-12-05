import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyCnjgmV1Yh31LrqDEpl60lHdg1Ed5Ov31M",
    authDomain: "reacnative-a3aa1.firebaseapp.com",
    projectId: "reacnative-a3aa1",
    storageBucket: "reacnative-a3aa1.appspot.com",
    messagingSenderId: "1078093153805",
    appId: "1:1078093153805:web:abfead69a2156ffdf67744"
  };


const fb = firebase.initializeApp(firebaseConfig);

  export const db = fb.firestore();