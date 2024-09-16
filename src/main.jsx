import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import './index.css';
import store from './app/store.js';
import { CartContextProvider } from './context/CartContext.jsx';
import { MenuContextProvider } from './context/MenuContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <CartContextProvider>
        <MenuContextProvider>
          <App />
        </MenuContextProvider>
      </CartContextProvider>
    </Provider>
  </React.StrictMode>,
)


// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();