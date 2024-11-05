import { useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";
import { useGetProductsQuery } from './services/apiProducts';
import ProtectedRoute from './features/authentication/ProtectedRoute';
import ProductDetail from './features/products/ProductDetail';
import SignupForm from './features/authentication/SignupForm';
import LoginForm from './features/authentication/LoginForm';
import CartSideBar from './features/cart/CartSideBar';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Carts from './pages/Carts';
import NotFound from './pages/NotFound';
import Account from './pages/Account';
import Collections from './pages/Collections';
import MenuSidebar from './ui/MenuSidebar';
import Loader from './ui/Loader';

function Layout() {
  const { pathname } = useLocation();
  const { isLoading } = useGetProductsQuery();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  function Spinner() {
    return (
      <div className="min-h-screen grid place-items-center">
        <Loader />
      </div>
    )
  };

  if (isLoading) return <Spinner />

  return (
    <>
      <MenuSidebar />
      <CartSideBar />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/carts' element={<Carts />} />
          <Route path='/collections' element={<Collections />} />
          <Route path='/collections/:productId' element={<ProductDetail />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/signup' element={<SignupForm />} />
          <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>} />
        </Route>
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            color: "#fff",
            backgroundColor: "black",
          },
        }}
      />
    </>
  )
}