import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/LoginSignUp/Login";
import SignUp from "./pages/LoginSignUp/SignUp";
import Main from "./pages/Main/Main";
import Product from "./pages/Product/Product";
import ProductWrite from "./pages/Write/ProductWrite";
import TestForm from "./pages/Write/TestForm";

class Routing extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productWrite" element={<ProductWrite />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/test" element={<TestForm />} />
        </Routes>
      </Router>
    );
  }
}

export default Routing;
