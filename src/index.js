import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import { UserProvider } from './components/contexts/user.context';
import { BrowserRouter } from 'react-router-dom';
import { Categoriesprovider } from './components/contexts/categories.context';
import App from './App';
import { CartProvider } from './components/contexts/cart.context';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <UserProvider>
        <Categoriesprovider>
          <CartProvider>
            <App/>
          </CartProvider>
        </Categoriesprovider>
      </UserProvider>
    </BrowserRouter>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
