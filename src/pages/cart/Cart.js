import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Header from "../../components/Nav/Header";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import CartList from "./CartList";

function Cart() {
  const location = useLocation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [noti, setNoti] = useState("");

  const handleRadioBtn = (e) => {
    setGender(e.target.value);
  };

  let body = {
    email: email,
    nickname: name,
    phoneNum: phonenumber,
    gender: gender,
    birthday: birthday,
    notification: noti,
  };

  // useEffect(() => {
  //   if (localStorage.getItem("token") === null) {
  //     alert("다시 로그인 해주세요.");
  //     document.location.href = "/";
  //   } else {
  //     async function fetchData() {
  //       const response = await axios.get("http://localhost:8080/order/list", {
  //         headers: {
  //           Authorization: "Bearer " + localStorage.getItem("token"),
  //           "Content-Type": "application/json",
  //         },
  //       });

  //       setResult(response.data.result);
  //       setName(result.nickname);
  //       setEmail(result.email);
  //       setPhonenumber(result.phoneNum);
  //     }
  //     fetchData();
  //   }
  // }, []);

  return (
    <>
      <Header />
      <DimmedBackground />
      <ContentDiv>
        <CartPage>
          <CartPageHeader>
            <PageHeaderTitle>장바구니</PageHeaderTitle>
            <PageHeaderSteps>
              <PageHeaderStepsLi className="active">
                <em>1.</em>
                <span>장바구니</span>
                <Icon className="fas fa-chevron-right"></Icon>
              </PageHeaderStepsLi>

              <PageHeaderStepsLi>
                <em>2.</em>
                <span>주문결제</span>
                <Icon className="fas fa-chevron-right"></Icon>
              </PageHeaderStepsLi>

              <PageHeaderStepsLi>
                <em>3.</em>
                <span>주문완료</span>
              </PageHeaderStepsLi>
            </PageHeaderSteps>
          </CartPageHeader>

          <CartList />

          {/* <CartEmpty /> */}
        </CartPage>
      </ContentDiv>
      <Footer />
    </>
  );
}

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

export default Cart;
