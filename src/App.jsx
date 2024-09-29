import { useEffect, useContext } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import ProductDetail from './features/products/ProductDetail';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Carts from './pages/Carts';
import NotFound from './pages/NotFound';
import Account from './pages/Account';
import WishList from "./pages/WishList";
import ProtectedRoute from './features/authentication/ProtectedRoute';
import SignupForm from './features/authentication/SignupForm';
import LoginForm from './features/authentication/LoginForm';
import { CartContext } from './context/CartContext';
import CartSideBar from './features/cart/CartSideBar';
import { MenuContext } from './context/MenuContext';
import MenuSidebar from './ui/MenuSidebar';
import Collections from './pages/Collections';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function Layout() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default function App() {
  const { cartOpen, isCartOpen } = useContext(CartContext);
  const { menuOpen } = useContext(MenuContext);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          {cartOpen && <CartSideBar />}
          {menuOpen && <MenuSidebar />}
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='/carts' element={<Carts />} />
              <Route path='/collections' element={<Collections />} />
              <Route path='/collections/:productId' element={<ProductDetail />} />
              <Route path='/login' element={<LoginForm />} />
              <Route path='/signup' element={<SignupForm />} />
              <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>} />
              <Route path='/wishlist' element={<WishList />} />
              <Route path='' />
            </Route>
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}


