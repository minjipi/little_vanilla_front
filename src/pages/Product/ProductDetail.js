// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import jwt_decode from "jwt-decode";
// import axios from "axios";

// function Product() {
//   const vip = () => {
//     alert("기능 준비중입니다!");
//   };

//   // useEffect(() => {
//   //   async function fetchData() {
//   //     const result = await axios.get(
//   //       "https://backend.alittlevanilla.kro.kr/product/" + params.idx
//   //     );

//   //     let images = [];
//   //     result.data.result.filename.split(",").map((filename, idx) => {
//   //       const img = {
//   //         id: idx + 1,
//   //         url: "https://backend.alittlevanilla.kro.kr/product/display?fileName=" + filename,
//   //       };
//   //       images.push(img);
//   //     });
//   //     setImageShow(images);

//   //     setData(result.data.result);
//   //     setTotalPrice2(result.data.result.salePrice);
//   //     setCalSale(
//   //       ((result.data.result.price - result.data.result.salePrice) /
//   //         result.data.result.price) *
//   //         100
//   //     );
//   //   }
//   //   fetchData();
//   // }, []);

//   return (
//     <InnerWMobileFull>
//       <ProductDetailNoticeBox>
//         <VipBanner>
//           <BannerWrapper>
//             <BannerDesc>
//               배송비 내지 마세요! <br />월 2,500원으로
//               <strong>무제한 무료배송</strong>
//             </BannerDesc>
//             <VipCashback />
//             <TimeCounter />
//             <VipClubBtn onClick={vip}>VIP 클럽</VipClubBtn>
//           </BannerWrapper>
//         </VipBanner>

//         {/* <InfoLabel>
//           <InfoLabelTitle>배송시작</InfoLabelTitle>
//           <span>
//             <InfoText>평균</InfoText>
//             <InfoTextBold>2일</InfoTextBold>
//             <InfoTextComma>/</InfoTextComma> <InfoText>최대 4일 이내</InfoText>
//           </span>
//         </InfoLabel> */}
//         {/* <DeliveryGraphWrapper>
//           <DeliveryGraphBox>
//             <div>
//               <GraphLineBox>
//                 <GraphLineDay>당일</GraphLineDay>
//                 <GraphLineBar>
//                   <GraphBarBox>
//                     <GraphBarRate className="black" rate="3" />
//                   </GraphBarBox>
//                 </GraphLineBar>
//               </GraphLineBox>
//               <GraphLineBox>
//                 <GraphLineDay className="red">1일</GraphLineDay>
//                 <GraphLineBar>
//                   <GraphBarBox>
//                     <GraphBarRate className="red" rate="66" />
//                   </GraphBarBox>
//                 </GraphLineBar>
//               </GraphLineBox>
//               <GraphLineBox>
//                 <GraphLineDay>2일</GraphLineDay>
//                 <GraphLineBar>
//                   <GraphBarBox>
//                     <GraphBarRate className="black" rate="19" />
//                   </GraphBarBox>
//                 </GraphLineBar>
//               </GraphLineBox>
//               <GraphLineBox>
//                 <GraphLineDay>3일</GraphLineDay>
//                 <GraphLineBar>
//                   <GraphBarBox>
//                     <GraphBarRate className="black" rate="4" />
//                   </GraphBarBox>
//                 </GraphLineBar>
//               </GraphLineBox>
//               <GraphLineBox>
//                 <GraphLineDay>4일 이상</GraphLineDay>
//                 <GraphLineBar>
//                   <GraphBarBox>
//                     <GraphBarRate className="black" rate="8" />
//                   </GraphBarBox>
//                 </GraphLineBar>
//               </GraphLineBox>
//             </div>
//             <DeliveryFooterTextBox>
//               최근 3개월 주문의 배송준비 기간 (주말, 공휴일 제외)
//             </DeliveryFooterTextBox>
//           </DeliveryGraphBox>
//         </DeliveryGraphWrapper> */}
//         {/* <ProductDetailNoticeBoxDivider /> */}
//         {/* <InfoLabel>
//           <InfoLabelTitle>수량</InfoLabelTitle>
//           <span>
//             <InfoText>17 개 남음</InfoText>
//           </span>
//         </InfoLabel> */}
//       </ProductDetailNoticeBox>
//       {/* <DataTriggerDetail /> */}
//       {/* <FixPosition /> */}
//       {/* <FlexNavStyle> */}
//       {/* <a href="#prd-info" className="active"></a>
//         <a href="#prd-enquiries">배송 / 교환 / 환불</a> */}
//       {/* <a href="#prd-review">구매후기(758)</a> */}
//       {/* <a href="#prd-comments">댓글</a> */}
//       {/* </FlexNavStyle> */}
//       <PrdDetailSection>
//         {/* <ProductDetailDescription>
//           <ProductDetailDescriptionContent>
//             <ProductDetailDescriptionTextItem>
//               내용
//               <br />
//               <br />
//             </ProductDetailDescriptionTextItem>
//           </ProductDetailDescriptionContent>
//           <ProductDetailDescriptionExpandWrapper>
//             <ProductDetailDescriptionExpandWrapperGradient />
//           </ProductDetailDescriptionExpandWrapper>
//         </ProductDetailDescription> */}
//         <TabStyle>
//           {/* <Split>
//             <Tab>
//               <span>작품 정보제공 고시</span>
//             </Tab>
//           </Split> */}
//           <Split>
//             <Tab>
//               <span>판매자 정보:</span>
//               {/* {jwt_decode(localStorage.getItem("token")).nickname} */}
//               바닐라
//             </Tab>
//           </Split>
//         </TabStyle>
//       </PrdDetailSection>
//     </InnerWMobileFull>
//   );
// }

// const InnerWMobileFull = styled.div`
//   width: 1056px;
//   margin: 0 auto;
//   position: relative;
// `;
// const ProductDetailNoticeBox = styled.div`
//   width: 560px;
// `;
// const VipBanner = styled.section`
//   padding: 0 12px 12px 12px;
// `;
// const BannerWrapper = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 24px;
//   width: 560px;
//   background: #f8f8f8;
//   border-radius: 4px;
// `;
// const BannerDesc = styled.span`
//   font-size: 14px;
//   color: #333333;
//   line-height: 1.5;

//   strong {
//     font-weight: bold;
//   }

//   br {
//     display: none;
//   }
// `;

// const VipCashback = styled.div``;
// const TimeCounter = styled.div`
//   display: none;
// `;
// const VipClubBtn = styled.button`
//   height: 36px;
//   border-radius: 4px;
//   border: 1px solid #f1c333;
//   background-color: #ffffff;
//   color: #f1c333;
//   padding: 0 24px;
// `;

// const InfoLabel = styled.section`
//   display: flex;
//   align-items: center;
//   padding: 0 24px;
//   margin-bottom: 12px;
// `;

// const InfoLabelTitle = styled.span`
//   width: 96px;
//   font-size: 16px;
//   color: #666666;
// `;

// const InfoText = styled.span`
//   font-size: 16px;
//   color: #333333;
// `;

// const InfoTextBold = styled.span`
//   font-size: 16px;
//   color: #333333;
//   font-weight: bold;
//   margin-left: 4px;
// `;

// const InfoTextComma = styled.span`
//   font-size: 16px;
//   color: #333333;
//   margin-right: 4px;
// `;

// const DeliveryGraphWrapper = styled.section`
//   padding: 0 12px;
//   margin-bottom: 20px;
// `;

// const DeliveryGraphBox = styled.div`
//   padding: 0 24px 0 24px;
// `;
// const GraphLineBox = styled.div`
//   margin: 8px 0;
//   width: 100%;
//   display: flex;
//   flex-shrink: 1;
//   justify-content: center;
//   align-items: center;
// `;

// const GraphLineDay = styled.div`
//   font-size: 12px;
//   line-height: 1.5;
//   color: #666666;
//   text-align: left;
//   width: 55px;
//   flex-shrink: 0;

//   &.red {
//     color: #f1c333;
//     font-weight: bold;
//   }
// `;

// const GraphLineBar = styled.div`
//   flex-grow: 1;
// `;
// const GraphBarBox = styled.div`
//   position: relative;
//   width: 100%;
//   height: 6px;
//   border-radius: 3px;
//   background-color: #f5f5f5;
// `;

// const GraphBarRate = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   height: 6px;
//   border-radius: 3px;
//   min-width: 6px;

//   &.black {
//     background-color: #acacac;
//     width: ${(props) => props.rate}%;
//   }

//   &.red {
//     background-color: #f1c333;
//     width: ${(props) => props.rate}%;
//   }
// `;

// const DeliveryFooterTextBox = styled.div`
//   text-align: center;
//   margin-top: 12px;
//   font-size: 12px;
//   line-height: 1.5;
//   color: #999999;
// `;

// const ProductDetailNoticeBoxDivider = styled.div`
//   width: 100%;
//   height: 1px;
//   background: #d9d9d9;
//   margin-bottom: 12px;
// `;
// const DataTriggerDetail = styled.div``;
// const FixPosition = styled.div`
//   height: 0px;
// `;
// const FlexNavStyle = styled.nav`
//   border-top: 1px solid #d9d9d9;
//   border-bottom: 1px solid #d9d9d9;
//   z-index: 96;
//   background: #fff;
//   width: 560px;
//   margin: 0;
//   height: 57px;
//   display: -webkit-box;
//   display: -webkit-flex;
//   display: -moz-box;
//   display: -ms-flexbox;
//   display: flex;

//   a {
//     position: relative;
//     display: block;
//     padding: 18px 0 17px;
//     float: left;
//     font-size: 16px;
//     color: #666;
//     text-align: center;
//     -webkit-box-flex: 1;
//     -webkit-flex-grow: 1;
//     -moz-box-flex: 1;
//     -ms-flex-positive: 1;
//     flex-grow: 1;
//   }

//   a.active {
//     color: #f1c333;
//   }
// `;

// const PrdDetailSection = styled.div`
//   width: 560px;
// `;

// const ProductDetailDescription = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const ProductDetailDescriptionContent = styled.div`
//   max-height: 2000px;
//   overflow: hidden;
// `;

// const ProductDetailDescriptionTextItem = styled.p`
//   font-size: 14px;
//   color: #333333;
//   padding: 20px 16px;
//   word-break: break-all;
//   text-align: center;
// `;

// const ProductDetailDescriptionExpandWrapper = styled.div`
//   width: 100%;
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

// const ProductDetailDescriptionExpandWrapperGradient = styled.div`
//   background: linear-gradient(to bottom, rgba(255, 255, 255, 0), #fff);
//   width: 100%;
//   height: 16px;

//   .overlay {
//     position: absolute;
//     top: -16px;
//   }
// `;

// const TabStyle = styled.div`
//   width: 100%;
//   font-size: 12px;
//   color: #999;
//   overflow: hidden;
// `;
// const Split = styled.div``;
// const Tab = styled.div`
//   position: relative;
//   padding: 18px 16px;
//   margin: 0;
//   width: 100%;
//   text-align: left;
//   border-top: 1px solid #d9d9d9;
//   color: #333;
//   font-size: 14px;
//   cursor: pointer;
// `;

// export default Product;
