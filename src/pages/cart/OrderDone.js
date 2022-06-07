import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import Header from "../../components/Nav/Header";
import Footer from "../../components/Footer/Footer";

function CartOrder() {
  const [emailChangeBtn, setEmailChangeBtn] = useState(true);

  return (
    <>
      <Header />
      <DimmedBackground />
      <ContentDiv>
        <FormPayment>
          <CartPage>
            <CartPageHeader>
              <PageHeaderTitle>주문 결제하기</PageHeaderTitle>
              <PageHeaderSteps>
                <PageHeaderStepsLi>
                  <em>1.</em>
                  <span>장바구니</span>
                  <Icon className="fas fa-chevron-right"></Icon>
                </PageHeaderStepsLi>

                <PageHeaderStepsLi>
                  <em>2.</em>
                  <span>주문결제</span>
                  <Icon className="fas fa-chevron-right"></Icon>
                </PageHeaderStepsLi>

                <PageHeaderStepsLi className="active">
                  <em>3.</em>
                  <span>주문완료</span>
                </PageHeaderStepsLi>
              </PageHeaderSteps>
            </CartPageHeader>

            <LayoutSplit>
              <ToggleTab>
                <UiTitleSub>
                  <UiTitleTxt>주문이 완료되었습니다!</UiTitleTxt>
                </UiTitleSub>
              </ToggleTab>
            </LayoutSplit>
          </CartPage>
        </FormPayment>
      </ContentDiv>
      <Footer />
    </>
  );
}

const UiTitleTxt = styled.span`
  font-weight: 700;
  overflow: visible;
  display: table-cell;
  vertical-align: middle;
  font-size: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 75%;
  color: #333;
  text-decoration: none;
  &:first-child {
    width: 25%;
  }
`;

const UiTitleSub = styled.div`
  padding: 20px 18px;
  cursor: pointer;
  border-bottom: 0;
  margin-bottom: 0;
  font-size: 16px;
  box-sizing: border-box;
  display: table;
  table-layout: fixed;
  width: 100%;
`;

const SegmentNospacing = styled.div`
  padding: 0;
  background: #fff;
  box-shadow: 3px 3px 4px 0 #f1c333;
  border: solid 1px #f1c333;
  &:first-child {
    margin-top: 0;
  }
`;

const ToggleTab = styled.section`
  float: left;
  &:first-child {
    margin-left: 0;
    width: 440px;
  }
`;

const LayoutSplit = styled.div`
  padding-top: 0;
  padding-bottom: 70px;
  position: relative;
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
  text-align: left;
  font-size: 24px;
  font-weight: bold;
  vertical-align: middle;
  color: #333333;
  display: block;
`;

const CartPageHeader = styled.div`
  padding-bottom: 4px;
  margin-bottom: 32px;
  position: relative;
  padding-top: 40px;
  vertical-align: middle;
`;

const CartPage = styled.div`
  width: 800px;
  margin: 0 auto;
  position: relative;
`;

const FormPayment = styled.form``;

const ContentDiv = styled.div`
  padding-bottom: 0px;
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

export default CartOrder;
