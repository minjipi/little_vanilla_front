import React from "react";
import styled from "styled-components";
import Header from "../../components/Nav/Header";
import Footer from "../../components/Footer/Footer";

function Leave() {
  return (
    <>
      <Header />
      <DimmedBackground />
      <ContentDiv>
        <CartPage>
          <div>
            <EmptyList>
              <EmptyListLogo>
                <LogoEmpty className="fa-solid fa-empty-set"></LogoEmpty>
                <div>
                  <EmptyListText>
                    기존 회원가입 이력이 존재합니다.
                  </EmptyListText>
                </div>
                <EmptyCartBtn
                  type="button"
                  onClick={() =>
                    window.location.replace("https://blog.naver.com/ghdalswl77")
                  }
                >
                  관리자에게 문의
                </EmptyCartBtn>
              </EmptyListLogo>
            </EmptyList>
          </div>{" "}
        </CartPage>
      </ContentDiv>
      <Footer />
    </>
  );
}

const EmptyCartBtn = styled.button`
  width: 246px;
  margin-top: 36px;
  background: #f1c333;
  border: 1px solid transparent;
  color: #ffffff;
  font-size: 16px;
  line-height: 46px;
  padding: 0 24px;
  display: inline-block;
  border-radius: 2px;
  box-shadow: 0 1px 3px 0 rgb(220 220 220 / 30%);
  box-sizing: border-box;
  cursor: pointer;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  transition: border-color 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  vertical-align: middle;
`;

const EmptyListText = styled.p`
  text-align: center;
  font-size: 16px;
  color: #666666;
`;

const LogoEmpty = styled.i`
  vertical-align: middle;
  color: #f1c333;
  font-size: 120px !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  &:before {
    content: "!";
  }
`;

const EmptyListLogo = styled.div`
  margin-bottom: 40px;
`;

const EmptyList = styled.div`
  margin: 0 auto;
  padding: 50px 0;
  text-align: center;
`;

const Icon = styled.i`
  margin: 0 8px;
  display: inline-block;
  font: normal normal normal 14px/1;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
`;

const PageHeaderStepsLi = styled.li`
  &.active {
    color: #333333;
  }
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  color: #d9d9d9;
`;

const PageHeaderSteps = styled.ol`
  flex: 1 auto;
  text-align: right;
`;

const PageHeaderTitle = styled.h2`
  flex: 1 auto;
  text-align: left;
  font-size: 24px;
  font-weight: bold;
  vertical-align: middle;
  color: #333333;
`;

const CartPageHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-bottom: 4px;
  margin-bottom: 32px;
  padding-top: 40px;
  vertical-align: middle;
`;

const CartPage = styled.div`
  width: 800px;
  margin: 0 auto;
`;

const ContentDiv = styled.div`
  padding-bottom: 64px;
  background: #fdfdfd;
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

export default Leave;
