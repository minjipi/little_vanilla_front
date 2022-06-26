import React from "react";
import styled from "styled-components";
import mainad from "../../../Images/mainad.png";

function MainTop() {
  return (
    <>
      <FullW>
        <BannerTitle>
          <BannerImg src={mainad} alt="banner" />
          <Col>
            <ShowroomArticle>
              <Title>
                👋🏻 안녕하세요! <br />이 사이트는 실제 제품 판매 사이트가
                아닙니다.
                <br />
                결제 기능은 자정에 모두 환불 되고 있으니,
                <br />
                편하게 모든 기능들을 테스트 해보세요.
                <br />
                사이트에 궁금한 점이 있다면 언제든 연락주세요.🥰
              </Title>
              <Desc></Desc>
            </ShowroomArticle>
          </Col>
        </BannerTitle>
      </FullW>
    </>
  );
}

const FullW = styled.div`
  width: 100%;
`;
const BannerTitle = styled.section`
  background: rgb(247, 244, 226);
  position: relative;
  overflow: hidden;
  height: 420px;
  margin: 0 auto 40px auto;
  width: 100%;
  color: #fff;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.9;
  }
`;

const BannerImg = styled.img`
  display: block;
  position: absolute;
  height: 100%;
  top: 0;
  left: calc((100vw - 1493px) / 2);
`;

const Col = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 1046px;
  height: 100%;
  margin: 0 auto;
  &:after {
    content: "";
    display: table-cell;
    width: 52%;
  }
`;

const ShowroomArticle = styled.article`
  position: relative;
  z-index: 10;
  width: 478px;
  left: 0;
  max-height: 100%;
  padding: 24px 36px;
  background: #fff;
  opacity: 0.9;
  border-radius: 8px;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
`;

const Title = styled.h1`
  text-align: left;
  position: relative;
  white-space: pre-line;
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.5;
  color: #333;

  width: 100%;
  z-index: 1;
`;

const Desc = styled.p`
  color: #333;
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  white-space: pre-line;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;
  display: -webkit-box;
`;

export default MainTop;
