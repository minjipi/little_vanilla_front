import React from "react";
import styled from "styled-components";

function MainTop() {
  return (
    <>
      <FullW>
        <BannerTitle>
          <BannerImg
            src="https://image.idus.com/image/files/21a2e3e78f25429d8aedb913e96b3d55.jpg"
            alt="banner"
          />
          <Col>
            <ShowroomArticle>
              <Title>⏰마감임박⏰설 예약할인 기획전</Title>
              <Desc>
                아직 설날이 실감 나지 않으셨던 분도🙋‍♀️ 언제 선물을 준비해야 할지
                고민이셨던 분도🙋‍♂️ ✨바로 바로~ 지금이 마지막 절호의 기회!✨ 지금
                구매해야 설 전에 받을 수 있어요📢 오직 설 예약 할인전에서만 만날
                수 있는 최대 85% 할인 혜택, 끝까지 놓치지 말고 지금 바로
                만나보세요🚚🎁
              </Desc>
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
  background: rgb(198, 183, 162);
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
