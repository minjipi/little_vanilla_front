import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/LoginSignUp/Login";
import SignUp from "./pages/LoginSignUp/SignUp";
import Leave from "./pages/LoginSignUp/Leave";
import Mypage from "./pages/mypage/Mypage";
import Order from "./pages/mypage/orderhistory/Order";
import Main from "./pages/Main/Main";
import Product from "./pages/Product/Product";
import ProductWrite from "./pages/Write/ProductWrite";
import Search from "./pages/Main/Search";
import SignUpEmail from "./pages/LoginSignUp/SignUpEmail";
import SignUpEmailSeller from "./pages/LoginSignUp/SignUpEmailSeller";
import KakaoLoginRedirect from "./pages/LoginSignUp/KakaoLoginRedirect";
import SignUpEmailCheck from "./pages/LoginSignUp/SignUpEmailCheck";
import SignUpEmailConfirm from "./pages/LoginSignUp/SignUpEmailConfirm";
import EmailCertError from "./pages/LoginSignUp/EmailCertError";

import Cart from "./pages/cart/Cart";
import CartOrder from "./pages/cart/CartOrder";
import OrderDone from "./pages/cart/OrderDone";
import ProductUpdate from "./pages/Write/ProductUpdate";
import Likelist from "./pages/Main/Likelist";

class Routing extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:idx" element={<Product />} />

          <Route path="/productWrite" element={<ProductWrite />} />
          <Route path="/productupdate" element={<ProductUpdate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/leavemember" element={<Leave />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signupemail" element={<SignUpEmail />} />
          <Route path="/emailcheck" element={<SignUpEmailCheck />} />
          <Route path="/emailconfirm/:jwt" element={<SignUpEmailConfirm />} />
          <Route path="/signupemailseller" element={<SignUpEmailSeller />} />
          <Route path="/search/:word" element={<Search />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/order" element={<Order />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/cartorder" element={<CartOrder />} />
          <Route path="/orderdone" element={<OrderDone />} />
          <Route path="/likelist" element={<Likelist />} />
          <Route path="/emailCertError" element={<EmailCertError />} />

          <Route
            path="/oauth2/redirect/:token"
            element={<KakaoLoginRedirect />}
          />
        </Routes>
      </Router>
    );
  }
}

export default Routing;
