import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/LoginSignUp/Login";
import SignUp from "./pages/LoginSignUp/SignUp";
import Main from "./pages/Main/Main";
import Product from "./pages/Product/Product";
import ProductWrite from "./pages/Write/ProductWrite";

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
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    );
  }
}

export default Routing;
