import React from "react";
import styled from "styled-components";
import Header from "../../components/Nav/Header";
<<<<<<< HEAD
=======
import Footer from "./Footer";
import MainTop from "./MainTop";
>>>>>>> 03f6dfbe75fb260e8e81bcd80ed744a0bf0e1ad1

function Main() {
  return (
    <>
      <Header />
<<<<<<< HEAD
      <Contents></Contents>
=======
      <Contents>
        <MainTop></MainTop>
      </Contents>
      <Footer />
>>>>>>> 03f6dfbe75fb260e8e81bcd80ed744a0bf0e1ad1
    </>
  );
}

const Contents = styled.div`
  padding-bottom: 64px;
  background: #fff;
`;

export default Main;
