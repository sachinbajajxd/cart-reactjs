import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/app';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCICQp_ewKvW_j-eWUpAidW6W52fZyyrNI",
  authDomain: "cart-c899b.firebaseapp.com",
  projectId: "cart-c899b",
  storageBucket: "cart-c899b.appspot.com",
  messagingSenderId: "324197861174",
  appId: "1:324197861174:web:51cd4b9a850104205a9597"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

