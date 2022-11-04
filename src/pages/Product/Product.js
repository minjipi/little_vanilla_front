import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import Header from "../../components/Nav/Header";
import Footer from "../../components/Footer/Footer";
import SelectedOption from "./SelectedOption";
import $ from "jquery";
import axios from "axios";
import { useParams } from "react-router";

function Product() {
  const [isOptionVisible, setIsOptionVisible] = useState(false);
  const [isSelectVisible, setIsSelectVisible] = useState(0);
  const [isTotalValue, setIsTotalValue] = useState([]);
  const [isSelectedValue, setIsSelectedValue] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalPrice2, setTotalPrice2] = useState(0);
  const [isScroll, setIsScroll] = useState(false);
  const [selectedImg, setSelectedImg] = useState(0);
  const [imageShow, setImageShow] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  const [data, setData] = useState(null);
  const [calSale, setCalSale] = useState(0);
  const params = useParams();

  const [isCartClicked, setIsCartClicked] = useState(false);

  const [loginCheck, SetLoginCheck] = useState("");

  const [popup, setPopup] = useState(true);

  useEffect(() => {
    try {
      if (localStorage.getItem("token") !== null) {
        SetLoginCheck(true);
      } else {
        SetLoginCheck(false);
      }
    } catch (error) {
      console.log(
        "문제가 생겼습니다.. "
        // error: " + error + JSON.stringify(localStorage)
      );
      alert("문제가 생겼습니다..");
      window.location.href = "/";
    }
  }, []);

  const review = () => {
    alert("기능 준비중입니다!");
  };

  const cartIn = async () => {
    let body = {
      productIdx: params.idx,
      amount: 1,
    };
    // const result =
    await axios.post("https://backend.alittlevanilla.kro.kr/cart/in", body, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    });
  };

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        "https://backend.alittlevanilla.kro.kr/product/" + params.idx
      );

      let images = [];
      result.data.result.filename.split(",").map((filename, idx) => {
        const img = {
          id: idx + 1,
          url:
            "https://backend.alittlevanilla.kro.kr/product/display?fileName=" +
            filename,
        };
        images.push(img);
      });
      setImageShow(images);

      setData(result.data.result);

      setTotalPrice2(result.data.result.salePrice);
      setCalSale(
        ((result.data.result.price - result.data.result.salePrice) /
          result.data.result.price) *
          100
      );
    }
    fetchData();
  }, []);

  // useEffect(() => {
  //   let timer = setTimeout(() => {
  //     setAlert(false);
  //   }, 2000);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // });

  const inputPriceFormat = (str) => {
    const comma = (str) => {
      str = String(str);
      return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
    };
    const uncomma = (str) => {
      str = String(str);
      return str.replace(/[^\d]+/g, "");
    };
    return comma(uncomma(str));
  };

  const optionData = [
    {
      id: 1,
      title: "옵션1",
      select: [
        { id: 1, name: "값1-1", price: 1000 },
        { id: 2, name: "값1-2", price: 2000 },
      ],
    },
    {
      id: 2,
      title: "옵션2",
      select: [
        { id: 3, name: "값2-1", price: 3000 },
        { id: 4, name: "값2-2", price: 4000 },
        { id: 5, name: "값2-3", price: 5000 },
      ],
    },
    {
      id: 3,
      title: "옵션3",
      select: [
        { id: 6, name: "값3-1", price: 6000 },
        { id: 7, name: "값3-2", price: 7000 },
        { id: 8, name: "값3-3", price: 8000 },
      ],
    },
  ];

  const nextId = useRef(1);

  const onRemove = (id) => {
    setIsTotalValue(isTotalValue.filter((total) => total.id !== id));
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset > 155 ? setIsScroll(true) : setIsScroll(false);
    });

    if (isSelectVisible === optionData.length) {
      setIsOptionVisible(false);
      const selectedList = [];
      let same = false;

      isSelectedValue.map((selected) => selectedList.push(selected.id));

      isTotalValue.map((total, index) => {
        const totalList = [];
        total.selected.map((val) => totalList.push(val.id));

        if (
          Object.entries(selectedList).toString() ===
          Object.entries(totalList).toString()
        ) {
          same = true;
          isTotalValue[index].num = isTotalValue[index].num + 1;
          setIsTotalValue(isTotalValue);
          let selectedPrice = 0;
          isTotalValue[index].selected.map((item) => {
            selectedPrice += item.price;
          });
          setTotalPrice(totalPrice + selectedPrice);
        }
      });

      if (same === false) {
        let tempPrice = 0;

        isSelectedValue.map((item) => {
          tempPrice += item.price;
        });
        setTotalPrice(totalPrice + tempPrice);
        setIsTotalValue(
          isTotalValue.concat({
            id: nextId.current,
            num: 1,
            selected: isSelectedValue,
          })
        );
        nextId.current += 1;
      }
      setIsSelectVisible(0);
    }

    let total = 0;
    isTotalValue.map((item) => {
      let temp = 0;
      item.selected.map((val) => {
        temp += val.price;
      });
      temp = temp * item.num;
      total += temp;
    });
    setTotalPrice(total);
  });

  if (data === null) {
    return null;
  }

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
                <ImgViewInnerFrame id="ImgViewInnerFrame">
                  {imageShow.map((img, index) => {
                    return (
                      <UiSlider
                        key={index}
                        id={"img_" + img.id}
                        style={{
                          width: "560px",
                          backgroundImage: "url(" + img.url + ")",
                        }}
                      >
                        {/* <WelcomeDeal src="https://image.idus.com/static/ticketdeal/badge_welcomedeal.png" /> */}
                      </UiSlider>
                    );
                  })}
                </ImgViewInnerFrame>
              </OuterFrame>
              <FieldsetUiControl>
                <BtnPrev
                  disabled={isClicked ? "disabled" : ""}
                  onClick={() => {
                    setIsClicked(true);

                    setSelectedImg(
                      (selectedImg + data.filename.split(",").length - 1) %
                        data.filename.split(",").length
                    );

                    let popedImg = imageShow.pop();
                    imageShow.unshift(popedImg);
                    setImageShow(imageShow);

                    $("#ImgViewInnerFrame").attr("style", "margin-left:-560px");

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
                <ImgListIndicator>
                  {data.filename.split(",").map((filename, index) => {
                    return (
                      <li
                        onClick={() => {
                          if (index > selectedImg) {
                            $("#ImgViewInnerFrame").animate(
                              {
                                marginLeft:
                                  "-" + 560 * (index - selectedImg) + "px",
                              },
                              300,
                              "linear",
                              function () {
                                $("#ImgViewInnerFrame").attr(
                                  "style",
                                  "margin-left:0"
                                );
                                for (let i = 0; i < index - selectedImg; i++) {
                                  let shiftedImg = imageShow.shift();
                                  imageShow.push(shiftedImg);
                                  setImageShow(imageShow);
                                }
                                setSelectedImg(index);
                              }
                            );
                          } else if (index < selectedImg) {
                            setSelectedImg(index);

                            for (let i = 0; i < selectedImg - index; i++) {
                              let popedImg = imageShow.pop();
                              imageShow.unshift(popedImg);
                              setImageShow(imageShow);
                            }

                            $("#ImgViewInnerFrame").attr(
                              "style",
                              "margin-left:-" +
                                560 * (selectedImg - index) +
                                "px"
                            );

                            $("#ImgViewInnerFrame").animate(
                              { marginLeft: "0" },
                              300,
                              "linear",
                              function () {
                                setIsClicked(false);
                              }
                            );
                          }
                        }}
                        className={selectedImg === index ? "active" : ""}
                        key={index}
                        style={{
                          backgroundImage:
                            "url(https://backend.alittlevanilla.kro.kr/product/display?fileName=" +
                            filename +
                            ")",
                        }}
                      />
                    );
                  })}
                </ImgListIndicator>
                <BtnNext
                  disabled={isClicked ? "disabled" : ""}
                  onClick={(e) => {
                    setIsClicked(true);

                    $("#ImgViewInnerFrame").animate(
                      { marginLeft: "-560px" },
                      300,
                      "linear",
                      function () {
                        $("#ImgViewInnerFrame").attr("style", "margin-left:0");
                        let shiftedImg = imageShow.shift();
                        imageShow.push(shiftedImg);
                        setImageShow(imageShow);
                        setSelectedImg(
                          (selectedImg + 1) % data.filename.split(",").length
                        );
                        setIsClicked(false);
                      }
                    );
                  }}
                >
                  <ImgListI className="fas fa-chevron-right" />
                </BtnNext>
              </FieldsetUiControl>
            </ImagePreviewUiSlider>
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
                          {data.brandIdx}
                          <ArrowR className="fas fa-chevron-right" />
                        </ArtistCardLabel>
                      </ArtistCardSplitA>
                    </ArtistCardSplit>
                    <ArtistCardSplitt />
                  </ArtistCard>
                  <StickyAsideProducTitle>{data.name}</StickyAsideProducTitle>
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
                                {data.likeCount}
                              </ProductDetailStarTxt3P>
                            </ProductDetailStarTxt3>
                          </ProductDetailStarTxt1>
                        </LikeBtn>
                        {/* <ProductDetailShareBtn>
                          <ProductDetailShare>
                            <ShareIcon className="fas fa-share-alt" />
                          </ProductDetailShare>
                        </ProductDetailShareBtn> */}
                      </StickyAsideMRight>

                      <ProductDetailSpan>
                        <PriceTagHilight>
                          <PriceTagHilightEm>
                            {Math.ceil(calSale)}
                          </PriceTagHilightEm>
                          %
                        </PriceTagHilight>
                        <PriceTagStrong>
                          <Strong>{inputPriceFormat(data.salePrice)}</Strong>원
                        </PriceTagStrong>
                        <PriceTagCrossout>
                          {inputPriceFormat(data.price)}
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
                        <DataRowTable>
                          <tbody>
                            <DataRowTr>
                              <TitleTd>적립금</TitleTd>
                              <ContenetTd>
                                <span>
                                  최대 <DataRowSpan>35P</DataRowSpan>
                                </span>
                                <Balloon onClick={review} type="button">
                                  <BalloonIcon className="fas fa-info-circle"></BalloonIcon>
                                </Balloon>
                              </ContenetTd>
                            </DataRowTr>
                          </tbody>
                        </DataRowTable>

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
                                  <PointBalTd> VIP 클럽 추가 적립 </PointBalTd>
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
                                      <h4> VIP 클럽</h4>
                                    </VipSectionTd>
                                    <VipSectionTdR>
                                      <VipSectionA>더 알아보기</VipSectionA>
                                    </VipSectionTdR>
                                  </VipSectionTr>
                                </tbody>
                              </VipSection>
                              <VipSectionDesc>
                                핸드메이드를 사랑하는 회원님들에게 제공하는 유료
                                서비스로 작품 금액의 1.0% 추가 적립 및 배송비
                                무료 혜택을 제공합니다.
                              </VipSectionDesc>
                            </div> */}
                          </PointBal>
                        </BalloonContent>
                      </DataRow>

                      <DataRow>
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
                                    <ReviewRateDivLeft>(1)</ReviewRateDivLeft>
                                    <ReviewRateDivTop>
                                      <ReviewRateDivTopI className="fas fa-chevron-right"></ReviewRateDivTopI>
                                    </ReviewRateDivTop>
                                  </ReviewRateBoxA>
                                </ReviewRateBox>
                              </ContenetTd>
                            </DataRowTr>
                          </tbody>
                        </DataRowTable>
                      </DataRow>

                      <DataRow>
                        <DataRowTable>
                          <tbody>
                            <DataRowTr>
                              <TitleTd>배송비</TitleTd>
                              <ContenetTd>
                                <span>
                                  {data.deliveryType}
                                  {/* <Subcontent>
                                    (8,000원 이상 무료배송)
                                  </Subcontent> */}
                                </span>
                                {/* <Balloon onClick={review} type="button">
                                  <BalloonIcon className="fas fa-info-circle"></BalloonIcon>
                                </Balloon> */}
                              </ContenetTd>
                            </DataRowTr>
                          </tbody>
                        </DataRowTable>
                      </DataRow>

                      <DataRow>
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

                      {/* <DataRow>
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
                              <TitleTd>제품 소개</TitleTd>
                              <ContenetTd>
                                <DeliveryHeaderDiv>
                                  {data.contents}
                                </DeliveryHeaderDiv>
                              </ContenetTd>
                            </DataRowTr>
                          </tbody>
                        </DataRowTable>
                      </DataRow>
                    </div>
                  </div>

                  <div>
                    <BuyScrollable>
                      <div>
                        {/* <SelectGroupTriggerBtn
                          type="button"
                          onClick={() => {
                            setIsSelectVisible(0);
                            setIsSelectedValue([]);
                            setIsOptionVisible(!isOptionVisible);
                          }}
                        >
                          옵션 선택
                          <IdusIconArrowDown className="fas fa-chevron-down"></IdusIconArrowDown>
                        </SelectGroupTriggerBtn>
                        <QuotaMessageDiv>
                          <IdusIconIf />
                          웰컴딜 주문 가능 수량 : 1개
                        </QuotaMessageDiv>

                        <OptionScrollableD isOptionVisible={isOptionVisible}>
                          <SelectGroupHeaderD>
                            <SelectGroupTitleS>
                              옵션을 모두 선택해주세요.
                            </SelectGroupTitleS>

                            <SelectGroupBtn
                              type="button"
                              onClick={() => {
                                if (isSelectVisible === optionData.length) {
                                  setIsSelectVisible(0);
                                }
                                setIsOptionVisible(!isOptionVisible);
                              }}
                            >
                              <SelectGroupCloseIcon className="fas fa-times" />
                            </SelectGroupBtn>
                          </SelectGroupHeaderD>

                          <SelectGBodyD>
                            {optionData.map((option, index) => {
                              return (
                                <Option
                                  key={option.id}
                                  index={index}
                                  isSelectVisible={isSelectVisible}
                                  setIsSelectVisible={setIsSelectVisible}
                                  isSelectedValue={isSelectedValue}
                                  setIsSelectedValue={setIsSelectedValue}
                                  optionData={option}
                                />
                              );
                            })}
                          </SelectGBodyD>
                        </OptionScrollableD> */}
                        {isTotalValue.map((total, index) => {
                          return (
                            <SelectedOption
                              key={index}
                              index={index}
                              isTotalValue={isTotalValue}
                              setIsTotalValue={setIsTotalValue}
                              totalPrice={totalPrice}
                              setTotalPrice={setTotalPrice}
                              onRemove={onRemove}
                            />
                          );
                        })}
                        <CheckoutProductCostDl>
                          <span>
                            <span>
                              배송비
                              <b>{data.price} 원</b>
                            </span>
                          </span>

                          <span>
                            <Subtitle>총 작품금액</Subtitle>
                            {totalPrice2}원
                          </span>
                        </CheckoutProductCostDl>
                      </div>
                      {/*  */}
                      <CheckOutProduct>
                        <Cart
                          onClick={() => {
                            cartIn();
                            setIsCartClicked(!isCartClicked);
                          }}
                          type="button"
                        >
                          장바구니
                        </Cart>
                        {/* <Cart className="npay" type="button" onClick={review}>
                          <NpayImg src="https://www.idus.com/resources/dist/images/npay.svg" />
                        </Cart> */}
                        {loginCheck ? (
                          <>
                            <Update onClick={() => {}} type="button">
                              수정하기
                            </Update>
                          </>
                        ) : (
                          <></>
                        )}

                        <RedBuy
                          type="button"
                          onClick={() => {
                            cartIn();
                            window.location.href = "/cart";
                          }}
                        >
                          구매하기
                        </RedBuy>
                      </CheckOutProduct>

                      <Alertmsg isCartClicked={isCartClicked}>
                        <CloseBtn>
                          <CloseI
                            onClick={() => {
                              setIsCartClicked(!isCartClicked);
                            }}
                            className="fa-solid fa-xmark"
                          ></CloseI>
                        </CloseBtn>
                        <Ptag>장바구니에 작품이 담겼습니다.</Ptag>
                        <Atag href="/cart">장바구니 가기</Atag>
                      </Alertmsg>
                    </BuyScrollable>
                  </div>
                </StickyAsideDiv>
              </div>
            </div>
          </StickyAsideProductD>
        </InnerWMobileFull>

        <InnerWMobileFull>
          <ProductDetailNoticeBox>
            <VipBanner>
              <BannerWrapper>
                <BannerDesc>
                  배송비 내지 마세요! <br />월 2,500원으로
                  <strong>무제한 무료배송</strong>
                </BannerDesc>
                <VipCashback />
                <TimeCounter />
                <VipClubBtn onClick={review}>VIP 클럽</VipClubBtn>
              </BannerWrapper>
            </VipBanner>
          </ProductDetailNoticeBox>

          <PrdDetailSection>
            <TabStyle>
              <Split>
                <Tab>
                  <span>판매자 정보: </span>
                  {data.brandIdx}
                </Tab>
              </Split>
            </TabStyle>
          </PrdDetailSection>
        </InnerWMobileFull>
      </ContentRel>
      <Footer />
    </>
  );
}

const TabStyle = styled.div`
  width: 100%;
  font-size: 12px;
  color: #999;
  overflow: hidden;
`;
const Split = styled.div``;
const Tab = styled.div`
  position: relative;
  padding: 18px 16px;
  margin: 0;
  width: 100%;
  text-align: left;
  border-top: 1px solid #d9d9d9;
  color: #333;
  font-size: 14px;
  cursor: pointer;
`;

const PrdDetailSection = styled.div`
  width: 560px;
`;

const InnerWMobileFull = styled.div`
  width: 1056px;
  margin: 0 auto;
  position: relative;
`;
const ProductDetailNoticeBox = styled.div`
  width: 560px;
`;
const VipBanner = styled.section`
  padding: 0 12px 12px 12px;
`;
const BannerWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  width: 560px;
  background: #f8f8f8;
  border-radius: 4px;
`;
const BannerDesc = styled.span`
  font-size: 14px;
  color: #333333;
  line-height: 1.5;

  strong {
    font-weight: bold;
  }

  br {
    display: none;
  }
`;

const VipCashback = styled.div``;
const TimeCounter = styled.div`
  display: none;
`;
const VipClubBtn = styled.button`
  height: 36px;
  border-radius: 4px;
  border: 1px solid #f1c333;
  background-color: #ffffff;
  color: #f1c333;
  padding: 0 24px;
`;

const Atag = styled.a`
  display: inline-block;
  vertical-align: middle;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  font-size: 10px;
  text-align: center;
  white-space: nowrap;
  line-height: 1.4;

  padding: 6px 12px;
  font-size: 12px;

  color: #fff;
  background: #f1c333;
  border: 1px solid #f1c333;

  width: 80px;
  font-size: 10px;
  padding: 6px 10px;
`;
const Ptag = styled.p``;

const CloseI = styled.i`
  display: inline;
  vertical-align: middle;
  font-size: 10px;

  &:before {
    content: "X";
  }
`;

const CloseBtn = styled.span`
  position: absolute;
  padding: 0;
  width: 24px;
  height: 24px;
  right: 0;
  top: 0;
  line-height: 24px;
  text-align: center;
  font-size: 16px;
`;

const Alertmsg = styled.div`
  ${Ptag} {
    padding: 8px 0 16px;
    font-size: 12px;
  }

  display: none;

  ${(props) =>
    props.isCartClicked &&
    css`
      display: block;
      padding: 12px 18px;
      position: absolute;
      top: 0px;
      left: -30px;
      width: 202px;
      -webkit-box-shadow: 0 4px 8px 0 #00000033;
      box-shadow: 0 4px 8px 0 #00000033;
      border: solid 1px #d9d9d9;
      background: #fff;
      text-align: center;

      &:before {
        content: "";
        position: absolute;
        bottom: -16px;
        left: 50%;
        margin-left: -8px;
        border: 8px solid #fff;
        border-bottom-color: transparent;
        border-right-color: transparent;
        border-left-color: transparent;
      }
    `};
`;

const RedBuy = styled.button`
  box-shadow: 0 1px 3px 0 hsl(0deg 0% 86% / 30%);
  font-weight: 400;
  box-sizing: border-box;
  display: inline-block;
  border-radius: 2px;
  background: #fff;
  border: 1px solid #d9d9d9;
  vertical-align: middle;
  transition: background-color 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  transition: border-color 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  margin: 0;
  padding: 0;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  color: #333;
  cursor: pointer;
  font-size: 12px;
  padding: 0 16px;
  line-height: 30px;
  border-color: transparent;
  background: #f1c333;
  color: #fff;
  display: block;
  float: left;
  padding: 0;
  line-height: 44px;
  font-size: 16px;
  width: calc((97% - 46px) / 3);
  margin-right: 1%;
  height: 46px;
`;

const NpayImg = styled.img`
  display: inline-block;
  vertical-align: middle;
  font-size: inherit;
  color: inherit;
  width: 52px;
`;

const Update = styled.button`
  box-shadow: 0 1px 3px 0 hsl(0deg 0% 86% / 30%);
  font-weight: 400;
  box-sizing: border-box;
  display: inline-block;
  border-radius: 2px;
  background: #fff;
  border: 1px solid #d9d9d9;
  vertical-align: middle;
  transition: background-color 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  transition: border-color 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  margin: 0;
  padding: 0;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  font-size: 12px;
  padding: 0 16px;
  line-height: 30px;
  border-color: #d9d9d9;
  background: #ffecbb;
  color: darkslategray;
  display: block;
  float: left;
  padding: 0;
  line-height: 44px;
  font-size: 16px;
  width: calc((97% - 46px) / 3);
  margin-right: 1%;
  height: 46px;
`;

const Cart = styled.button`
  &.npay {
    font-size: 12px;
    padding: 0 16px;
    line-height: 30px;
    background: #30c612;
    border-color: #30c612;
  }

  box-shadow: 0 1px 3px 0 hsl(0deg 0% 86% / 30%);
  font-weight: 400;
  box-sizing: border-box;
  display: inline-block;
  border-radius: 2px;
  background: #fff;
  border: 1px solid #d9d9d9;
  vertical-align: middle;
  transition: background-color 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  transition: border-color 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  margin: 0;
  padding: 0;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  color: #333;
  cursor: pointer;

  font-size: 16px;
  width: calc((97% - 46px) / 3);
  margin-right: 1%;
  height: 46px;

  display: block;
  float: left;
  padding: 0;
  line-height: 44px;
`;

const CheckOutProduct = styled.fieldset`
  margin-top: 16px;
  border: 0 none;

  &:after {
    content: "";
    display: block;
    clear: both;
  }
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
    // height: 56px;
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

const DataRowSpan = styled.span`
  font-weight: bold;
`;

const Balloon = styled.button`
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

const BuyScrollable = styled.form`
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

const OptionScrollableD = styled.div`
  display: none;
  position: absolute;
  width: 100%;
  top: 0;
  border: 1px solid #333;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  background-color: #fff;
  @media (min-width: 720px) {
    z-index: 1;
    top: -68px;
  }

  ${(props) =>
    props.isOptionVisible &&
    css`
      display: block;
    `}
`;

const SelectGroupHeaderD = styled.div`
  position: relative;
  background: #333;
`;

const SelectGroupTitleS = styled.span`
  padding: 8px 12px;
  display: block;
  font-size: 12px;
  color: #fff;
`;

const SelectGroupBtn = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  padding: 0 12px;
  vertical-align: middle;
  height: 100%;
`;

const SelectGroupCloseIcon = styled.i`
  display: inline-block;
  vertical-align: middle;
  font-weight: bold;
  font-size: 12px;
  color: #fff;
`;

const SelectGBodyD = styled.div`
  max-height: 350px;
  overflow: auto;
`;

const AlignRightSpan = styled.span``;

const SGParentListOl = styled.ol`
  margin: 0 12px;

  &.active {
    border: 1px solid #333;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    margin-top: -2px;

    > li {
      -webkit-border-radius: 4px 4px 0 0;
      -moz-border-radius: 4px 4px 0 0;
      border-radius: 4px 4px 0 0;
      color: #333;
      background: #f5f5f5;
    }
  }

  @media (min-width: 720px) {
    margin-top: 11px;
  }

  > li {
    position: relative;
    padding: 12px;
    font-size: 12px;
    font-weight: bold;
    color: #acacac;
    -webkit-box-shadow: inset 0 -1px 0 0 #d9d9d9;
    -moz-box-shadow: inset 0 -1px 0 0 #d9d9d9;
    box-shadow: inset 0 -1px 0 0 #d9d9d9;
    vertical-align: middle;

    > span {
      display: inline-block;
      width: 30%;
      vertical-align: middle;
    }

    > ${AlignRightSpan} {
      width: 60%;
      font-size: 12px;
      text-align: right;
      color: #666;
      font-weight: normal;
    }
  }

  &.complete {
    > li {
      color: #666;
    }
  }
`;

const SGChildList = styled.ul`
  @media (min-width: 720px) {
    max-height: 140px;
    overflow-y: scroll;
  }

  &.active {
    -webkit-border-radius: 0 0 4px 4px;
    -moz-border-radius: 0 0 4px 4px;
    border-radius: 0 0 4px 4px;
  }

  > li {
    font-size: 12px;
    color: #333;
    background: #fff;
    padding: 12px;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    border-bottom: 1px solid #d9d9d9;

    &:last-child {
      -webkit-border-radius: 4px;
      -moz-border-radius: 4px;
      border-radius: 4px;
      border-bottom: 0px;
    }
  }
`;

const Subtitle = styled.span``;

const CheckoutProductCostDl = styled.dl`
  padding-top: 16px;
  width: 100%;
  display: table;
  vertical-align: middle;

  @media (min-width: 720px) {
    > *:first-child {
      display: none;
    }

    > *:last-child {
      ${Subtitle} {
        float: left;
        font-size: 14px;
      }
    }
  }

  > * {
    display: table-cell;
    vertical-align: middle;
    width: 25%;

    &:first-child {
      width: 50%;
      font-size: 14px;
      color: #666666;

      b {
        color: #333333;
        font-weight: bold;
      }
    }

    &:last-child {
      font-size: 20px;
      font-weight: bold;
      color: #333333;
      width: 50%;
      text-align: right;
      vertical-align: middle;
      line-height: 30px;
    }
  }
`;

export default Product;
