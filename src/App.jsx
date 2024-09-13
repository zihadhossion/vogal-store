import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import ProductDetail from './features/products/ProductDetail';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Carts from './pages/Carts';
import Products from './pages/Products';
import NotFound from './pages/NotFound';
import Account from './pages/Account';
import WishList from "./pages/WishList";
import ProtectedRoute from './features/authentication/ProtectedRoute';
import SignupForm from './features/authentication/SignupForm';
import LoginForm from './features/authentication/LoginForm';



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

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='/carts' element={<Carts />} />
              <Route path='/products' element={<Products />} />
              <Route path='/products/:productId' element={<ProductDetail />} />
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


