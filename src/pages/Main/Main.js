import React from "react";
import styled from "styled-components";
import Header from "../../components/Nav/Header";
import Footer from "./Footer";
import MainTop from "./MainTop";

function Main() {
  return (
    <>
      <Header />
      <Contents>
        <MainTop></MainTop>
      </Contents>
      <Footer />
    </>
  );
}

const Contents = styled.div`
  padding-bottom: 64px;
  background: #fff;
`;

export default Main;
