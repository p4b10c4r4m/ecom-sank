import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDuDi_nmsJFdUqEs-eNn7C46qfIh4Lkhec",
  authDomain: "e-sankalpa.firebaseapp.com",
  projectId: "e-sankalpa",
  storageBucket: "e-sankalpa.appspot.com",
  messagingSenderId: "454737201997",
  appId: "1:454737201997:web:5b42acc299e85864d0c504",
  measurementId: "G-W6EVM0P3HX"
};

initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
