import React from "react";
import styled from "styled-components";
import Header from "../../components/Nav/Header";
import Footer from "../../components/Footer/Footer";
import WelcomeDeal from "./WelcomeDeal/WelcomeDeal";
import MainTop from "./MainBannerSection/MainTop";
import MainSlider from "../../components/MainSlider/MainSlider";

function Main() {
  return (
    <>
      <Header />
      <DimmedBackground></DimmedBackground>
      <Contents>
        <MainTop></MainTop>
        <WelcomeDeal></WelcomeDeal>
      </Contents>
      <Footer />
    </>
  );
}

const Contents = styled.div`
  padding-bottom: 64px;
  background: #fff;
`;
const DimmedBackground = styled.div`
  display: none;
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: #333;
  opacity: 0.5;
  z-index: 150;
`;
export default Main;
