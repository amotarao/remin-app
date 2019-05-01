import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: 'AIzaSyAhY1xwR0C2sgLULUjedH0gKJcGZ6Ml60U',
  authDomain: 'remin-app.firebaseapp.com',
  databaseURL: 'https://remin-app.firebaseio.com',
  projectId: 'remin-app',
  storageBucket: 'remin-app.appspot.com',
  messagingSenderId: '221657618594',
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();
