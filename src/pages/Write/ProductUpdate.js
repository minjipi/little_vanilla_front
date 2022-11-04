import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Header from "../../components/Nav/Header";
import Footer from "../../components/Footer/Footer";
import ProductDetail from "./ProductDetail";
import $ from "jquery";
import axios from "axios";
import jwt_decode from "jwt-decode";
import sale from "../../Images/sale.png";
import { useParams } from "react-router";

function ProductUpdate() {
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

  const [imageShow, setImageShow] = useState([]);
  const [data, setData] = useState(null);
  const [totalPrice2, setTotalPrice2] = useState(0);
  const [calSale, setCalSale] = useState(0);

  useEffect(() => {
    async function fetchData() {
      console.log(result);
      const result = await axios.get(
        "https://backend.alittlevanilla.kro.kr/product/" + useParams.idx
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

                      <div>
                        <DataRow>
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
                            </PointBal>
                          </BalloonContent>
                        </DataRow>

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
                          <Submit type="button" onClick={onSubmit}>
                            수정 완료
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

const DataRowTr = styled.tr`
  color: inherit;
  font-size: inherit;
`;

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

const ProductDetailSpan = styled.span``;

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

const DataRow = styled.div`
  padding-bottom: 8px;
  position: relative;
`;

const DataRowTable = styled.table`
  table-layout: fixed;
  width: 100%;
  box-sizing: border-box;
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

const BuyScrollable = styled.div`
  margin-top: 16px;
  position: relative;
`;

export default ProductUpdate;
