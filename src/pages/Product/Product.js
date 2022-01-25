import React from "react";
import styled from "styled-components";
import Header from "../../components/Nav/Header";
import Footer from "../../components/Footer/Footer";

function Product() {
  return (
    <>
      <Header />
      <DimmedBackground />

      <ContentRel>
        <StickyStart />
        <InnerWMobileFull>
          <ImgSection>
            <ImagePreviewUiSlider>
              <OuterFrame>
                <ImgViewInnerFrame>
                  <UiSlider>
                    <WelcomeDeal src="https://image.idus.com/static/ticketdeal/badge_welcomedeal.png" />
                  </UiSlider>
                  <UiSliderNext></UiSliderNext>
                </ImgViewInnerFrame>
              </OuterFrame>
              <FieldsetUiControl>
                <BtnPrev>
                  <ImgListI className="fas fa-chevron-right" />
                </BtnPrev>
                <ImgListIndicator>
                  <IndicatorBtnLi />
                </ImgListIndicator>

                <BtnNext></BtnNext>
              </FieldsetUiControl>
            </ImagePreviewUiSlider>
          </ImgSection>
          {/*  */}
          <StickyAsideProductD>
            <ProductDetailBuyBox>
              <ProductDetailBuyBoxOld>
                <StickyAsideDiv>
                  <ArtistCard>
                    <ArtistCardSplit>
                      <ArtistCardSplitA>
                        <ArtistCardImg />
                        <ArtistCardLabel>
                          각인맛집 반지판다
                          <ArrowR className="fas fa-chevron-right" />
                        </ArtistCardLabel>
                      </ArtistCardSplitA>
                    </ArtistCardSplit>
                    <ArtistCardSplitt />
                  </ArtistCard>
                  <StickyAsideProducTitle>
                    [웰컴딜] 써지컬 우리말기념일목걸이🌙
                  </StickyAsideProducTitle>

                  <ProductDetailInfo />
                </StickyAsideDiv>
              </ProductDetailBuyBoxOld>
            </ProductDetailBuyBox>
          </StickyAsideProductD>
        </InnerWMobileFull>
      </ContentRel>
      <Footer />
    </>
  );
}

const DimmedBackground = styled.div`
  display: none;
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: #333;
  opacity: 0.5;
  z-index: 150;
`;

const ContentRel = styled.div`
  position: relative;
  padding-bottom: 64px;
  background: #fff;
`;
const StickyStart = styled.div`
  position: absolute;
  top: 25px;
`;

const InnerWMobileFull = styled.div`
  width: 1056px;
  margin: 0 auto;
  position: relative;
`;

const ImgSection = styled.section`
  padding: 36px 0;
  width: 560px;
  display: block;
`;

const ImagePreviewUiSlider = styled.div`
  touch-action: pan-y;
  user-select: none;
  -webkit-user-drag: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  position: relative;
`;

const OuterFrame = styled.div`
  overflow: hidden;
`;

const ImgViewInnerFrame = styled.ul`
  margin-left: 0px;
  overflow: hidden;
  cursor: zoom-in;
  width: 100000px;
  height: 100%;
  position: relative;
`;

const UiSlider = styled.li`
  background-image: url("http://image.idus.com/image/files/8085fa7c4a81475792dcec1d7d9a464f_720.jpg");
  width: 560px;
  display: list-item;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  height: auto;
  float: left;
  list-style: none;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

const WelcomeDeal = styled.img`
  position: absolute;
  width: 72px !important;
  height: 72px !important;
  left: 10px;
  bottom: 10px;
`;

const UiSliderNext = styled.li`
  background-image: url(https://image.idus.com/image/files/4c11fc0…_720.jpg);
  width: 560px;
  display: none;
`;

const FieldsetUiControl = styled.fieldset`
  margin-top: 0;
  display: block;
  border: 0 none;
  text-align: center;
  padding: 0;
  margin: 0;
`;

const BtnPrev = styled.button`
  left: 0;
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 0;
  border: 0 none;
  background: #0000004d;
  transition: opacity 0.3s ease;
  top: 50%;
  margin-top: -52px;
  opacity: 0;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
`;

const ImgListIndicator = styled.ul`
  margin: 0;
  margin-top: 8px;
  overflow: hidden;
  text-align: center;
  font-size: 0;
  display: inline-block;
  vertical-align: middle;
  padding: 0;
  border: 0 none;
`;

const BtnNext = styled.button`
  right: 0;
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 0;
  border: 0 none;
  background: #0000004d;
  transition: opacity 0.3s ease;
  top: 50%;
  margin-top: -52px;
  opacity: 0;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
`;

const ImgListI = styled.i`
  color: #fff;
  font-size: 16px;
  display: inline-block;
  font-weight: bold;
  line-height: 16px;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
`;

const IndicatorBtnLi = styled.li`
  background-image: url(http://image.idus.com/image/files/8085fa7c4a81475792dcec1d7d9a464f_720.jpg);
  margin-left: 0;
  cursor: pointer;
  font-size: 0;
  display: inline-block;
  width: 56px;
  height: 56px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  list-style: none;
`;

const StickyAsideProductD = styled.aside`
  padding: 0 !important;
  box-shadow: none !important;
  border: none !important;
  position: absolute;
  right: 1px;
  top: 36px;
  width: 472px;
  z-index: 98;
  border-radius: 4px;
  background-color: #fff;
  display: block;
`;

const ProductDetailBuyBox = styled.div``;

const ProductDetailBuyBoxOld = styled.div``;

const StickyAsideDiv = styled.div`
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 #0000001a;
  border: solid 1px #f5f5f5;
`;

const ArtistCard = styled.div`
  margin-bottom: 12px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
`;

const ArtistCardSplit = styled.div`
  display: table-cell;
  vertical-align: top;
  width: 75%;
`;

const ArtistCardSplitA = styled.a`
  display: block;
  width: 100%;
`;
const ArtistCardImg = styled.div`
  background-image: url("https://image.idus.com/image/files/7a637cb4c313453fb03bd1edbb0868c6_324.jpg");
  display: inline-block;
  vertical-align: top;
  font-size: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 6px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const ArtistCardLabel = styled.span`
  margin-top: 2px;
  display: inline-block;
  vertical-align: top;
  max-width: 80%;
  font-size: 14px;
  color: #666;
`;

const ArrowR = styled.i`
  color: #999;
  font-size: 12px;
  margin-bottom: 2px;
  margin-left: 2px;
  display: inline-block;
  vertical-align: middle;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  font-family: "Font Awesome 5 Free";

  //   &:before {
  //     content: "\e909";
  //   }
`;

const ArtistCardSplitt = styled.div`
  width: 25%;
  text-align: right;
  display: table-cell;
  vertical-align: top;
`;

const StickyAsideProducTitle = styled.h2`
  display: block;
  font-size: 20px;
  color: #333;
  margin-bottom: 12px;
`;

const ProductDetailInfo = styled.div``;

const PriceTagD = styled.div`
  margin-bottom: 8px;
`;

const StickyAsideMRight = styled.mark`
  display: flex;
  align-items: flex-start;
  float: right;
  color: #666666;
  font-size: 14px;
  background: none;
`;

const LikeBtn = styled.button`
  width: 24px;
  height: 100%;
  outline: none;
  -webkit-tap-highlight-color: transparent;
`;

const ProductDetailStarTxt1 = styled.div`
  height: 36px;
  width: 100%;
`;

const ProductDetailStarTxt2 = styled.div`
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductDetailStarTxt3 = styled.div`
  position: relative;
`;

export default Product;
