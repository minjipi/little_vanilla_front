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

          <StickyAsideProductD>
            <div>
              <div>
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

                  <div>
                    <PriceTagD>
                      <StickyAsideMRight>
                        <LikeBtn>
                          <ProductDetailStarTxt1>
                            <ProductDetailStarTxt2>
                              <ProductDetailStarTxt2I className="far fa-heart" />
                            </ProductDetailStarTxt2>
                            <ProductDetailStarTxt3>
                              <ProductDetailStarTxt3P>
                                1,000
                              </ProductDetailStarTxt3P>
                            </ProductDetailStarTxt3>
                          </ProductDetailStarTxt1>
                        </LikeBtn>
                        <ProductDetailShareBtn>
                          <ProductDetailShare>
                            <ShareIcon className="fas fa-share-alt" />
                          </ProductDetailShare>
                        </ProductDetailShareBtn>
                      </StickyAsideMRight>

                      <ProductDetailSpan>
                        <PriceTagHilight>
                          <PriceTagHilightEm>89</PriceTagHilightEm>%
                        </PriceTagHilight>
                        <PriceTagStrong>
                          <Strong>1,000</Strong>원
                        </PriceTagStrong>
                        <PriceTagCrossout>9,000원</PriceTagCrossout>
                      </ProductDetailSpan>
                      <Maker></Maker>
                    </PriceTagD>
                    <PricetagD2>
                      <MarkR>
                        <CountUp>750 명</CountUp>
                        <DarkSpan>구매</DarkSpan>
                      </MarkR>
                    </PricetagD2>
                    <div>
                      <DataRow>
                        <DataRowTable>
                          <DataRowTr>
                            <TitleTd>적립금</TitleTd>
                            <ContenetTd>
                              <span>
                                최대
                                <DataRowSpan>35P</DataRowSpan>
                              </span>
                            </ContenetTd>
                          </DataRowTr>
                        </DataRowTable>

                        <BalloonContent>
                          <BalloonBtn>
                            <CloseIcon className="fas fa-times" />
                          </BalloonBtn>
                          <PointBal>
                            <PointBalTable>
                              <PointBalTr>
                                <PointBalTd>회원등급 적립률</PointBalTd>
                                <PointBalTd2> 2% </PointBalTd2>
                              </PointBalTr>
                              <PointBalTr>
                                <PointBalTd> VIP 클럽 추가 적립 </PointBalTd>
                                <PointBalTd2> +1% </PointBalTd2>
                              </PointBalTr>
                              <PointBalTr>
                                <PointBalTd> 간편 결제 시 </PointBalTd>
                                <PointBalTd2> +0.5% </PointBalTd2>
                              </PointBalTr>
                            </PointBalTable>

                            <div>
                              <VipSection>
                                <VipSectionDiv />
                                <VipSectionTr>
                                  <VipSectionTd>
                                    <h4>아이디어스 VIP 클럽</h4>
                                  </VipSectionTd>
                                  <VipSectionTdR>
                                    <VipSectionA>더 알아보기</VipSectionA>
                                  </VipSectionTdR>
                                </VipSectionTr>
                              </VipSection>
                              <VipSectionDesc>
                                핸드메이드를 사랑하는 회원님들에게 제공하는 유료
                                서비스로 작품 금액의 1.0% 추가 적립 및 배송비
                                무료 혜택을 제공합니다.
                              </VipSectionDesc>
                            </div>
                          </PointBal>
                        </BalloonContent>
                      </DataRow>
                      <DataRow>
                        <DataRowTable>
                          <DataRowTr>
                            <TitleTd>구매후기</TitleTd>
                            <ContenetTd>
                              <ReviewRateBox>
                                <ReviewRateBoxA>
                                  <ReviewRateDiv>
                                    <ReviewRateSpan>
                                      <Star className="fas fa-star" />
                                    </ReviewRateSpan>
                                  </ReviewRateDiv>
                                  <ReviewRateDivLeft></ReviewRateDivLeft>
                                </ReviewRateBoxA>
                              </ReviewRateBox>
                            </ContenetTd>
                          </DataRowTr>
                        </DataRowTable>
                      </DataRow>
                      <DataRow></DataRow>
                      <DataRow></DataRow>
                    </div>
                  </div>
                </StickyAsideDiv>
              </div>
            </div>
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

const ProductDetailStarTxt2I = styled.i`
  font-size: 24px;
  color: #666666;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
`;

const ProductDetailStarTxt3 = styled.div`
  position: relative;
`;

const ProductDetailStarTxt3P = styled.p`
  position: absolute;
  top: 0;
  width: 100px;
  left: -39px;
  font-size: 10px;
  line-height: 1;
  color: #666666;
`;

const ProductDetailShareBtn = styled.button`
  margin-left: 16px;
  margin-right: 4px;
  margin-top: 2px;
`;

const ProductDetailShare = styled.div`
  height: 25px;
`;

const ShareIcon = styled.i`
  color: #666;
  font-size: 24px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
`;

const ProductDetailSpan = styled.span``;

const PriceTagHilight = styled.span`
  padding-right: 8px;
  color: #ff4b50;
  font-size: 24px;
`;

const PriceTagHilightEm = styled.em`
  font-size: 24px;
  font-weight: bold;
`;

const PriceTagStrong = styled.span`
  padding-right: 6px;
  font-size: 24px;
  color: #333;
`;

const Strong = styled.strong`
  font-size: 24px;
  font-weight: bold;
`;

const PriceTagCrossout = styled.del`
  font-size: 14px;
  color: #999;
`;

const Maker = styled.div``;

const PricetagD2 = styled.div`
  height: 20px;
  margin-bottom: 16px;
`;

const MarkR = styled.mark`
  float: right;
  color: #666666;
  font-size: 14px;
  background: none;
`;

const CountUp = styled.span`
  color: #666666;
  font-weight: bold;
`;

const DarkSpan = styled.span`
  color: #666666;
`;

const DataRow = styled.div`
  padding-bottom: 8px;
  position: relative;
`;

const DataRowTable = styled.table`
  table-layout: fixed;
  width: 100%;
  box-sizing: border-box;
`;

const DataRowTr = styled.tr`
  color: inherit;
  font-size: inherit;
`;

const TitleTd = styled.td`
  width: 80px;
  font-size: 14px;
  color: #666666;
`;

const ContenetTd = styled.td`
  color: #333333;
  font-size: 14px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const DataRowSpan = styled.div`
  font-weight: bold;
`;

const BalloonContent = styled.div`
  //   display: none;
  width: 220px;
  position: absolute;
  padding: 16px;
  border-radius: 4px;
  box-shadow: 2px 2px 4px 0 rgb(0 0 0 / 30%);
  border: solid 1px #666666;
  background-color: rgba(255, 255, 255, 0.92);
  left: 120px;
  top: 0;
  z-index: 101;
`;

const BalloonBtn = styled.button`
  font-size: 12px;
  text-align: left;
  display: inline-block;
  width: 100%;
  color: #666666;
  display: none !important;
`;

const CloseIcon = styled.i`
  font-family: "idus-icon" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
`;

const PointBal = styled.div`
  display: initial;
  font-size: 12px;
  text-align: left;
  display: inline-block;
  width: 100%;
  color: #666666;
`;

const PointBalTable = styled.table`
  display: table;
  table-layout: fixed;
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
`;

const PointBalTr = styled.tr`
  height: 20px;
  color: inherit;
  font-size: inherit;
`;

const PointBalTd = styled.td`
  width: 80%;
  text-align: left;
  display: table;
`;

const PointBalTd2 = styled.td`
  text-align: right;
  width: 20%;
`;

const VipSection = styled.table`
  margin-top: 8px;
  height: 40px;
  table-layout: fixed;
  width: 100%;
  box-sizing: border-box;
  table-layout: fixed;
  width: 100%;
  // -webkit-box-sizing: border-box;
  box-sizing: border-box;
`;

const VipSectionDiv = styled.div`
  border-top: 1px solid #d9d9d9;
  color: inherit;
  font-size: inherit;
`;

const VipSectionTr = styled.tr`
  color: inherit;
  font-size: inherit;
`;

const VipSectionTd = styled.td`
  float: left;
`;

const VipSectionTdR = styled.td`
  float: right;
`;

const VipSectionA = styled.a`
  color: #ff7b30;
  color: #ff7b30 !important;
`;

const VipSectionDesc = styled.p`
  font-size: 12px;
  color: #999999;
`;

const ReviewRateBox = styled.div`
  display: flex;
`;

const ReviewRateBoxA = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 1.5;
  color: #666666;
`;

const ReviewRateDiv = styled.div`
  padding-top: 1px;
`;

const ReviewRateSpan = styled.span`
  display: flex;
  margin-bottom: 4px;
  vertical-align: middle;
  box-sizing: border-box;
  line-height: 1.5;
`;

const Star = styled.i`
  font-size: 15px;
  color: #ffc500 !important;
  display: inline-block;
  vertical-align: middle;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
`;

const ReviewRateDivLeft = styled.span`
  margin-left: 3px;
`;

export default Product;
