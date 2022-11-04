import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Header from "../../components/Nav/Header";
import Footer from "../../components/Footer/Footer";
import ProductDetail from "./ProductDetail";
import $ from "jquery";
import axios from "axios";
import jwt_decode from "jwt-decode";
import sale from "../../Images/sale.png";

function ProductWrite() {
  const [isScroll, setIsScroll] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [imageFiles, setImageFiles] = useState([]);
  const [selectedImg, setSelectedImg] = useState(0);
  const [name, setName] = useState(null);

  const [categoryIdx, setCategory] = useState(null);
  const [price, setPrice] = useState(null);
  const [salePrice, setSalePrice] = useState(null);
  const [deliveryType, setDeliveryType] = useState(null);
  const [isTodayDeal, setIsTodayDeal] = useState(null);
  const [contents, setContents] = useState("");
  const [file, setFile] = useState(null);

  const onReset = () => {
    setName("");
  };

  let body = {
    name: name,
    categoryIdx: Number(categoryIdx),
    price: Number(price),
    salePrice: Number(salePrice),
    deliveryType: deliveryType,
    isTodayDeal: isTodayDeal ? "y" : "n",
    contents: contents,
  };

  const formData = new FormData();

  formData.append(
    "postProductReq",
    new Blob([JSON.stringify(body)], { type: "application/json" })
  );

  file &&
    file.map((image) => {
      formData.append("uploadFiles", image);
    });

  // useEffect(() => {
  //     if (jwt_decode(localStorage.getItem("token")) == null) {
  //       alert("판매자만 접근할 수 있는 페이지 입니다.");
  //       window.location.href = "/";
  //     }

  // }, []);

  const onSubmit = async () => {
    try {
      let response = "";
      if (
        new Date(jwt_decode(localStorage.getItem("token")).exp) < new Date()
      ) {
        console.log("토큰 만료");
        localStorage.clear();
        document.location.href = "/login";
      } else {
        response = await axios.post(
          "https://backend.alittlevanilla.kro.kr/product/create",
          formData,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
              "Content-Type": "multipart/form-data",
            },
          }
        );
      }

      if (response.data.code === 1000) {
        window.location.href = "/product/" + response.data.result.idx;
      } else {
        alert(response.data.message);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const fileHandler = (e) => {
    setFile(Array.prototype.slice.call(e.target.files));
    setImageFiles(Array.prototype.slice.call(e.target.files));
  };

  return (
    <>
      <Header />
      <DimmedBackground />
      <ContentRel>
        <StickyStart />
        <InnerWMobileFull>
          <form>
            <ImgSection>
              <input
                id="file"
                type="file"
                multiple="multiple"
                onChange={(e) => {
                  fileHandler(e);
                }}
              ></input>
              <ImagePreviewUiSlider>
                <OuterFrame>
                  <ImgViewInnerFrame id="ImgViewInnerFrame">
                    <div className="imgBox" />
                    {imageFiles &&
                      imageFiles.map((imageFiles) => (
                        <UiSlider
                          style={{
                            width: "560px",
                            backgroundImage:
                              "url(" + URL.createObjectURL(imageFiles) + ")",
                          }}
                        >
                          {isTodayDeal ? <WelcomeDeal src={sale} /> : <></>}
                        </UiSlider>
                      ))}
                  </ImgViewInnerFrame>
                </OuterFrame>
                <FieldsetUiControl>
                  <BtnPrev
                    type="button"
                    disabled={isClicked ? "disabled" : ""}
                    onClick={() => {
                      setIsClicked(true);

                      setSelectedImg(
                        (selectedImg + imageFiles.length - 1) %
                          imageFiles.length
                      );

                      let popedImg = imageFiles.pop();
                      imageFiles.unshift(popedImg);
                      setImageFiles(imageFiles);

                      $("#ImgViewInnerFrame").attr(
                        "style",
                        "margin-left:-560px"
                      );

                      $("#ImgViewInnerFrame").animate(
                        { marginLeft: "0" },
                        300,
                        "linear",
                        function () {
                          setIsClicked(false);
                        }
                      );
                    }}
                  >
                    <ImgListI className="fas fa-chevron-left" />
                  </BtnPrev>
                  <ImgListIndicator></ImgListIndicator>

                  <BtnNext
                    type="button"
                    disabled={isClicked ? "disabled" : ""}
                    onClick={() => {
                      setIsClicked(true);

                      $("#ImgViewInnerFrame").animate(
                        { marginLeft: "-560px" },
                        300,
                        "linear",
                        function () {
                          $("#ImgViewInnerFrame").attr(
                            "style",
                            "margin-left:0"
                          );
                          let shiftedImg = imageFiles.shift();
                          imageFiles.push(shiftedImg);
                          setImageFiles(imageFiles);
                          setSelectedImg((selectedImg + 1) % imageFiles.length);
                          setIsClicked(false);
                        }
                      );
                    }}
                  >
                    <ImgListI className="fas fa-chevron-right" />
                  </BtnNext>
                </FieldsetUiControl>
              </ImagePreviewUiSlider>

              <DataRowTable>
                <tbody>
                  <tr>
                    <td>
                      <PContents
                        placeholder="상품 내용"
                        value={contents == null ? "" : contents}
                        onChange={(e) => {
                          setContents(e.target.value);
                        }}
                      ></PContents>
                    </td>
                  </tr>
                </tbody>
              </DataRowTable>
            </ImgSection>

            <StickyAsideProductD
              className={isScroll ? "product_detail fixed" : "product_detail"}
            >
              <div>
                <div>
                  <StickyAsideDiv>
                    <ArtistCard>
                      <ArtistCardSplit>
                        <ArtistCardSplitA>
                          <ArtistCardImg />
                          <ArtistCardLabel>
                            <TitleDiv>
                              {
                                jwt_decode(localStorage.getItem("token"))
                                  .nickname
                              }
                            </TitleDiv>
                            {/* <ArrowR className="fas fa-chevron-right" /> */}
                          </ArtistCardLabel>
                        </ArtistCardSplitA>
                      </ArtistCardSplit>
                      <ArtistCardSplitt />
                    </ArtistCard>
                    <StickyAsideProducTitle>
                      상품명:
                      <input
                        id="name"
                        type="text"
                        value={name == null ? "" : name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      ></input>
                      <br />
                      상품 카테고리:
                      <input
                        id="categoryIdx"
                        value={categoryIdx == null ? "" : categoryIdx}
                        onChange={(e) => {
                          setCategory(e.target.value);
                        }}
                      ></input>
                    </StickyAsideProducTitle>

                    <div>
                      <PriceTagD>
                        {/* <StickyAsideMRight>
                          <LikeBtn>
                            <ProductDetailStarTxt1>
                              <ProductDetailStarTxt2>
                                <ProductDetailStarTxt2I className="far fa-heart" />
                              </ProductDetailStarTxt2>
                              <ProductDetailStarTxt3>
                                <ProductDetailStarTxt3P></ProductDetailStarTxt3P>
                              </ProductDetailStarTxt3>
                            </ProductDetailStarTxt1>
                          </LikeBtn>
                          <ProductDetailShareBtn>
                            <ProductDetailShare>
                              <ShareIcon className="fas fa-share-alt" />
                            </ProductDetailShare>
                          </ProductDetailShareBtn>
                        </StickyAsideMRight> */}

                        <ProductDetailSpan>
                          <PriceTagStrong>
                            할인가:
                            <input
                              id="salePrice"
                              type="text"
                              value={salePrice == null ? "" : salePrice}
                              onChange={(e) => {
                                setSalePrice(e.target.value);
                              }}
                            ></input>
                            원
                          </PriceTagStrong>
                          <br />
                          <PriceTagCrossout>
                            원가:
                            <input
                              id="price"
                              type="text"
                              value={price == null ? "" : price}
                              onChange={(e) => {
                                setPrice(e.target.value);
                              }}
                            ></input>
                          </PriceTagCrossout>
                        </ProductDetailSpan>
                        <Maker></Maker>
                      </PriceTagD>
                      {/* <PricetagD2>
                        <MarkR>
                          <CountUp>750 명</CountUp>
                          <DarkSpan>구매</DarkSpan>
                        </MarkR>
                      </PricetagD2> */}
                      <div>
                        <DataRow>
                          {/* <DataRowTable>
                            <tbody>
                              <DataRowTr>
                                <TitleTd>적립금</TitleTd>
                                <ContenetTd>
                                  <span>
                                    최대 <DataRowSpan>35P</DataRowSpan>
                                  </span>
                                  <Balloon>
                                    <BalloonIcon className="fas fa-info-circle"></BalloonIcon>
                                  </Balloon>
                                </ContenetTd>
                              </DataRowTr>
                            </tbody>
                          </DataRowTable> */}

                          <BalloonContent>
                            <BalloonBtn>
                              <CloseIcon className="fas fa-times" />
                            </BalloonBtn>
                            <PointBal>
                              <PointBalTable>
                                <tbody>
                                  <PointBalTr>
                                    <PointBalTd>회원등급 적립률</PointBalTd>
                                    <PointBalTd2> 2% </PointBalTd2>
                                  </PointBalTr>
                                  <PointBalTr>
                                    <PointBalTd>
                                      {" "}
                                      VIP 클럽 추가 적립{" "}
                                    </PointBalTd>
                                    <PointBalTd2> +1% </PointBalTd2>
                                  </PointBalTr>
                                  <PointBalTr>
                                    <PointBalTd> 간편 결제 시 </PointBalTd>
                                    <PointBalTd2> +0.5% </PointBalTd2>
                                  </PointBalTr>
                                </tbody>
                              </PointBalTable>

                              {/* <div>
                                <VipSection>
                                  <VipSectionDiv />
                                  <tbody>
                                    <VipSectionTr>
                                      <VipSectionTd>
                                        <h4>아이디어스 VIP 클럽</h4>
                                      </VipSectionTd>
                                      <VipSectionTdR>
                                        <VipSectionA>더 알아보기</VipSectionA>
                                      </VipSectionTdR>
                                    </VipSectionTr>
                                  </tbody>
                                </VipSection>
                                <VipSectionDesc>
                                  핸드메이드를 사랑하는 회원님들에게 제공하는
                                  유료 서비스로 작품 금액의 1.0% 추가 적립 및
                                  배송비 무료 혜택을 제공합니다.
                                </VipSectionDesc>
                              </div> */}
                            </PointBal>
                          </BalloonContent>
                        </DataRow>

                        {/* <DataRow>
                          <DataRowTable>
                            <tbody>
                              <DataRowTr>
                                <TitleTd>구매후기</TitleTd>
                                <ContenetTd>
                                  <ReviewRateBox>
                                    <ReviewRateBoxA>
                                      <ReviewRateDiv>
                                        <ReviewRateSpan>
                                          <Star className="fas fa-star" />
                                          <Star className="fas fa-star" />
                                        </ReviewRateSpan>
                                      </ReviewRateDiv>
                                      <ReviewRateDivLeft>
                                        (116)
                                      </ReviewRateDivLeft>
                                      <ReviewRateDivTop>
                                        <ReviewRateDivTopI className="fas fa-chevron-right"></ReviewRateDivTopI>
                                      </ReviewRateDivTop>
                                    </ReviewRateBoxA>
                                  </ReviewRateBox>
                                </ContenetTd>
                              </DataRowTr>
                            </tbody>
                          </DataRowTable>
                        </DataRow> */}

                        {/* <DataRow>
                          <DataRowTable>
                            <tbody>
                              <DataRowTr>
                                <TitleTd>배송비</TitleTd>
                                <ContenetTd>
                                  <span>
                                    2,500 원
                                    <Subcontent>
                                      (8,000원 이상 무료배송)
                                    </Subcontent>
                                  </span>
                                  <Balloon>
                                    <BalloonIcon className="fas fa-info-circle"></BalloonIcon>
                                  </Balloon>
                                </ContenetTd>
                              </DataRowTr>
                            </tbody>
                          </DataRowTable>
                        </DataRow> */}

                        <DataRow>
                          <DataRowTable>
                            <tbody>
                              <DataRowTr>
                                <TitleTd>배송타입</TitleTd>
                                <ContenetTd>
                                  <input
                                    id="deliveryType"
                                    value={
                                      deliveryType == null ? "" : deliveryType
                                    }
                                    onChange={(e) => {
                                      setDeliveryType(e.target.value);
                                    }}
                                  ></input>
                                </ContenetTd>
                              </DataRowTr>
                            </tbody>
                          </DataRowTable>
                        </DataRow>

                        {/* <DataRow>
                          <DataRowTable>
                            <tbody>
                              <DataRowTr>
                                <TitleTd>배송 시작</TitleTd>
                                <ContenetTd>
                                  <DeliveryHeaderDiv>
                                    <DeliveryHeaderP>평균 </DeliveryHeaderP>
                                    <DeliveryHeaderPB>1일</DeliveryHeaderPB>
                                    <DeliveryHeaderPCom>, </DeliveryHeaderPCom>
                                    <DeliveryHeaderP>
                                      최대 2일 이내
                                    </DeliveryHeaderP>
                                  </DeliveryHeaderDiv>
                                </ContenetTd>
                              </DataRowTr>
                            </tbody>
                          </DataRowTable>
                        </DataRow>

                        <DataRow>
                          <DataRowTable>
                            <tbody>
                              <DataRowTr>
                                <TitleTd>수량</TitleTd>
                                <ContenetTd>
                                  <span>48 개 남음</span>
                                </ContenetTd>
                              </DataRowTr>
                            </tbody>
                          </DataRowTable>
                        </DataRow> */}

                        <DataRow>
                          <DataRowTable>
                            <tbody>
                              <DataRowTr>
                                <TitleTd>세일 여부</TitleTd>

                                <ContenetTd>
                                  <input
                                    type="checkbox"
                                    checked={isTodayDeal}
                                    onChange={() =>
                                      setIsTodayDeal(!isTodayDeal)
                                    }
                                  ></input>
                                </ContenetTd>
                              </DataRowTr>
                            </tbody>
                          </DataRowTable>
                        </DataRow>
                      </div>
                    </div>
                    {/*  */}
                    <div>
                      <BuyScrollable>
                        <div>
                          {/* <SelectGroupTriggerBtn type="button">
                            옵션 선택
                            <IdusIconArrowDown className="fas fa-chevron-down"></IdusIconArrowDown>
                          </SelectGroupTriggerBtn>
                          <QuotaMessageDiv>
                            <IdusIconIf />
                            웰컴딜 주문 가능 수량 : 1개
                          </QuotaMessageDiv> */}

                          <Submit type="button" onClick={onSubmit}>
                            제출
                          </Submit>
                          <Reset type="button" onClick={onReset}>
                            초기화
                          </Reset>
                        </div>
                      </BuyScrollable>
                    </div>
                  </StickyAsideDiv>
                </div>
              </div>
            </StickyAsideProductD>
          </form>
        </InnerWMobileFull>
        <ProductDetail />
      </ContentRel>
      <Footer />
    </>
  );
}

const PContents = styled.textarea`
  display: block;
  float: left;
  font-size: 14px;
  width: 560px;
  box-shadow: 0 1px 3px 0 hsl(0deg 0% 86% / 30%);
  box-sizing: border-box;
  border-radius: 2px;
  background: #fff;
  border: 1px solid #d9d9d9;

  cursor: pointer;
`;

const Reset = styled.button`
  display: block;
  float: left;
  padding: 0;
  line-height: 44px;
  font-size: 16px;
  width: calc((97% - 46px) / 3);
  margin-right: 0;
  height: 46px;
  box-shadow: 0 1px 3px 0 hsl(0deg 0% 86% / 30%);
  font-weight: 400;
  box-sizing: border-box;
  border-radius: 2px;
  background: #fff;
  border: 1px solid #d9d9d9;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  color: #333;
  cursor: pointer;
`;

const Submit = styled.button`
  flex: 1 1 0%;
  margin-right: 1%;

  display: block;
  float: left;
  padding: 0;
  line-height: 44px;
  font-size: 16px;
  width: calc((97% - 46px) / 3);
  height: 46px;
  border-color: transparent;
  background: #f1c333;
  color: #fff;
  box-shadow: 0 1px 3px 0 hsl(0deg 0% 86% / 30%);
  font-weight: 400;
  box-sizing: border-box;
  border-radius: 2px;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
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
  width: 520px;
  display: list-item;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  height: auto;
  float: left;
  list-style: none;

  &:first-child {
    display: block;
  }

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
  // opacity: 0;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
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
  // opacity: 0;
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

  li {
    cursor: pointer;
    font-size: 0;
    display: inline-block;
    margin-left: 2px;
    width: 56px;
    height: 56px;
    background-repeat: no-repeat;
    background-position: center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

    &:first-child {
      margin-left: 0;
    }

    &.active {
      border: 2px solid #f1c333;
    }
  }
`;

const StickyAsideProductD = styled.aside`
  padding: 12px;
  background-color: #fff;

  @media (min-width: 720px) {
    padding: 16px;
    position: absolute;
    right: 1px;
    top: 36px;
    width: 472px;
    z-index: 98;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    -webkit-box-shadow: 0 2px 4px 0 #0000001a;
    -moz-box-shadow: 0 2px 4px 0 #0000001a;
    box-shadow: 0 2px 4px 0 #0000001a;
    border: solid 1px #f5f5f5;

    &.fixed {
      position: fixed;
      left: 50%;
      margin-left: 55px;
      top: 10px;
    }
  }

  &.product_detail {
    padding: 0 !important;
    -webkit-box-shadow: none !important;
    -moz-box-shadow: none !important;
    box-shadow: none !important;
    border: none !important;
  }
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

const ArtistCardLabel = styled.div`
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
  font-size: 15px;
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
  font-size: 15px;
  color: #333;
`;

const PriceTagCrossout = styled.span`
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

const TitleDiv = styled.div`
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

const DataRowSpan = styled.span`
  font-weight: bold;
`;

const Balloon = styled.div`
  position: relative;
  display: inline-block;
  height: 18px;
  margin-left: 8px;
`;

const BalloonIcon = styled.i`
  font-size: 18px;
  color: #666666;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
`;

const BalloonContent = styled.div`
  display: none;
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

const VipSectionDiv = styled.p`
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
  color: #f1c333;
  color: #f1c333 !important;
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

const ReviewRateDivLeft = styled.div`
  margin-left: 3px;
`;

const ReviewRateDivTop = styled.div`
  margin-top: 2px;
`;

const ReviewRateDivTopI = styled.i`
  font-size: 12px;
  color: #999999;
`;

const Subcontent = styled.span`
  font-size: 12px;
  color: #999999;
`;

const DeliveryHeaderDiv = styled.div`
  display: flex;
  justify-content: left;
`;

const DeliveryHeaderP = styled.div`
  font-size: 14px;
  line-height: 1.5;
  color: #333333;
  display: inline-block;
`;

const DeliveryHeaderPB = styled.div`
  font-weight: bold;
  margin-left: 4px;
  font-size: 14px;
  line-height: 1.5;
  color: #333333;
  display: inline-block;
`;

const DeliveryHeaderPCom = styled.div`
  margin-right: 4px;
  font-size: 14px;
  line-height: 1.5;
  color: #333333;
  display: inline-block;
`;

const BuyScrollable = styled.div`
  margin-top: 16px;
  position: relative;
`;

const SelectGroupTriggerBtn = styled.button`
  width: 100%;
  color: #333;
  //   font-size: 12px;
  text-align: left;
  border-color: #666;
  position: relative;
  padding: 0 16px;
  line-height: 30px;

  box-shadow: 0 1px 3px 0 hsl(0deg 0% 86% / 30%);
  font-weight: 400;
  box-sizing: border-box;
  display: inline-block;
  border-radius: 2px;
  background: #fff;
  border: 1px solid #d9d9d9;
  vertical-align: middle;

  transition: border-color 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  margin: 0;
  text-decoration: none;
  cursor: pointer;
`;

const IdusIconArrowDown = styled.i`
  font-size: 12px;
  color: #333;
  position: absolute;
  right: 12px;
  top: 7px;
`;

const QuotaMessageDiv = styled.div`
  margin: 10px 0 5px;
  color: #666666;
  font-size: 12px;
`;

const IdusIconIf = styled.i`
  display: inline-block;
  vertical-align: middle;
  margin-right: 2px;
  font-size: 14px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
`;

export default ProductWrite;
