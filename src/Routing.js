import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/LoginSignUp/Login";
import Logout from "./pages/LoginSignUp/Logout";
import SignUp from "./pages/LoginSignUp/SignUp";
import Mypage from "./pages/mypage/Mypage";
import Order from "./pages/mypage/orderhistory/Order";
import Main from "./pages/Main/Main";
import Product from "./pages/Product/Product";
import ProductWrite from "./pages/Write/ProductWrite";
import Search from "./pages/Main/Search";
import SignUpEmail from "./pages/LoginSignUp/SignUpEmail";
import SignUpEmailSeller from "./pages/LoginSignUp/SignUpEmailSeller";

class Routing extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:idx" element={<Product />} />

          <Route path="/productWrite" element={<ProductWrite />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signupemail" element={<SignUpEmail />} />
          <Route path="/signupemailSeller" element={<SignUpEmailSeller />} />
          <Route path="/search/:word" element={<Search />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </Router>
    );
  }
}

export default Routing;
