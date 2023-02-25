import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginModal from "../Components/LoginModal/LoginModal";
import SignUp from "../Components/LoginModal/SignUp";
import Cart from "../Components/cart/Cart";
import ProtectedRoute from "../Components/LoginModal/ProtectedRoute";
import Home from "../Pages/Home/Home";
import Admin from "../Pages/Admin/Admin";
import SearchPage from "../Pages/Search/SearchPage";
import SingleProduct from "../Pages/SingleProductPage/SingleProduct";
const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LoginModal />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<h1>No Such Page Exist</h1>} />
        
        <Route path="/singleProduct" element={<SingleProduct/>} />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route path={"/admin"} element={<Admin />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
