// firebase.js

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDew8hnNkGbUJa5Cc4fublC-w22JSDAQXY",
  authDomain: "my-babyblog.firebaseapp.com",
  projectId: "my-babyblog",
  storageBucket: "my-babyblog.appspot.com",
  messagingSenderId: "511233116397",
  appId:
    "511233116397-b00buaoaljv0aimuud8gps3n1977lo3v.apps.googleusercontent.com",
};

firebase.initializeApp(config);

export default function getFirebase() {
  return firebase;
}