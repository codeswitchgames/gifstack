import * as firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: "gifstack",
  // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
});

var db = firebase.firestore();

export default db;
