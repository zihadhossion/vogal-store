import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import './index.css';
import store from './app/store.js';
import { CartContextProvider } from './context/CartContext.jsx';
import { MenuContextProvider } from './context/MenuContext.jsx';
import { DrawerContextProvider } from './context/DrawerContext.jsx';
import { register } from 'swiper/element/bundle';
register();// register Swiper custom elements

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CartContextProvider>
          <MenuContextProvider>
            <DrawerContextProvider>
              <App />
            </DrawerContextProvider>
          </MenuContextProvider>
        </CartContextProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
