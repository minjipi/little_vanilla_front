import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";

function OrderEmpty() {
  return (
    <>
      <BannerEmpty>
        <IcoBlank>
          <LogoEmpty className="fa-solid fa-empty-set"></LogoEmpty>
        </IcoBlank>
        <BannerEmptyP>2022년에 주문한 내역이 없습니다.</BannerEmptyP>
        <BannerEmptyA>2021년 주문 보기]</BannerEmptyA>
        <BannerEmptyBtn>작품 구경하러 가기</BannerEmptyBtn>
      </BannerEmpty>
    </>
  );
}

const BannerEmptyBtn = styled.button`
  display: inline-block;
  vertical-align: middle;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  font-size: 10px;
  text-align: center;
  white-space: nowrap;
  line-height: 1.4;
  height: 48px;
  line-height: 45px;
  padding: 0 24px;
  color: #fff;
  background: #f1c333;
  border: 1px solid #f1c333;
  display: block;
  width: 246px;
  margin: 36px auto 0;
  font-size: 16px;
`;

const BannerEmptyA = styled.a`
  color: #00aa9b;
  margin-top: 8px;
  display: inline-block;
  text-align: center;
  width: 100%;
  font-size: 16px;
`;

const BannerEmptyP = styled.p`
  text-align: center;
  font-size: 16px;
  color: #666;
`;

const LogoEmpty = styled.i`
  vertical-align: middle;
  color: #f1c333;
  font-size: 120px !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  &:before {
    content: "d";
    // content: url(https://www.idus.com/resources/dist/images/sp/sp-icon_1634026706070.png);
  }
`;

const IcoBlank = styled.span`
  display: block;
  width: 120px;
  height: 120px;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  text-align: center;
  line-height: 120px;
  margin: 100px auto 20px;
`;

const BannerEmpty = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;

export default OrderEmpty;
