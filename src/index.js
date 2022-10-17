import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';
import Footer from "./components/footer/footer";
import Header from "./components/header/header";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header></Header>
    <App />
    <Footer></Footer>
  </React.StrictMode>
);


