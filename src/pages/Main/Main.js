import React from "react";
import styled from "styled-components";
import Header from "../../components/Nav/Header";
import Footer from "../../components/Footer/Footer";
import SlideSection from "./SlideSection/SlideSection";
import MainTop from "./MainBannerSection/MainTop";
import WelcomeDeal from "./SlideSection/WelcomeDeal";
function Main() {
  return (
    <>
      <Header />
      <DimmedBackground></DimmedBackground>
      <Contents>
        <MainTop></MainTop>
        <SlideSection
          title="첫구매, 인기작품 100원부터"
          contents={<WelcomeDeal />}
        />
        <SlideSection title="오늘의 작품" contents="test2" />
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
