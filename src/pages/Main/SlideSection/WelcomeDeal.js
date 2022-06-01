import react, { useState } from "react";
import styled, { css } from "styled-components";
import WelcomeDealItem from "./WelcomeDealItem";

function WelcomeDeal(props) {
  return (
    <SsScSActive>
      <div>
        <UiGridMt10>
          <UiGridCols4>
            {props.welcomeDealData.map((welcomeDeal, index) => {
              return <WelcomeDealItem key={index} welcomeDeal={welcomeDeal} />;
            })}
          </UiGridCols4>
        </UiGridMt10>
      </div>
    </SsScSActive>
  );
}
const SsScSActive = styled.div`
  width: 1056px;
  display: block;
  float: left;
  height: 100%;
  min-height: 1px;
`;

const UiGridMt10 = styled.div`
  width: 100%;
  display: inline-block;
  position: relative;
  overflow: hidden;
`;

const UiGridCols4 = styled.div`
  margin-left: -16px;
  margin-top: -16px;
  height: 100%;
  overflow: hidden;

  //   margin-left: -14px !important;
  //   margin-top: -16px;
  //   height: 100%;
  //   overflow: hidden;
`;

const UiGridItem = styled.div`
  position: relative;
  width: 25%;
  float: left;
`;

const BaseCardVertical = styled.div`
  flex-direction: column;
  border-radius: 2px;
  transition: all 0.3s;
  display: block !important;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  margin-left: 16px;
  margin-top: 16px;
`;

const BaseCardVerticalA = styled.a`
  -webkit-tap-highlight-color: transparent;
`;

const CardThumbCover = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 2px;
`;

const CardThumbImg = styled.img`
  width: 51px;
  height: 51px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 7;
  display: block;
`;

const CardThumbDiv = styled.div`
  background-image: url(${(props) => props.backImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  width: 100%;
  height: auto;
  display: block;
  position: relative;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

const ProductBookmark = styled.div`
  position: absolute;
  right: 8px;
  top: 8px;
  z-index: 9;
`;

const ProductBookmarkBtn = styled.div`
  width: 24px;
  height: 24px;
`;

const IconFavorite = styled.button`
  &.active {
    background-position: -689px -430px;
    width: 24px;
    padding-top: 24px;
  }

  text-align: left;
  box-sizing: border-box;
  position: absolute;
  top: 7px;
  right: 9px;
  background-image: url(https://www.idus.com/resources/dist/images/sp/sp-icon_1634026706070.png);
  height: 0;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  font-size: 0;
  line-height: 0;
  letter-spacing: 0;
  z-index: 80;
  background-position: -689px -469px;
  width: 24px;
  padding-top: 24px;
`;

const CardInfoProductInfo = styled.div`
  padding: 12px 8px;
  height: 204px;
`;

const ProductInfoArtistName = styled.div`
  font-size: 12px;
  color: #999999;
  height: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ProductInfoName = styled.div`
  display: -webkit-box;
  max-height: 35.88px;
  font-size: 13px;
  line-height: 1.38;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  margin: 4px 0 8px 0;
  color: #333333;
`;

const ProductInfoPrice = styled.div`
  font-size: 15px;
  font-weight: bold;
  line-height: 1;
  color: #333333;
`;

const SaleRate = styled.span`
  color: #ff4b50;
`;

const PriceSale = styled.span``;

const PriceSaleWon = styled.span`
  font-size: 14px;
`;

const PriceOriginBeforeSale = styled.div`
  font-size: 11px;
  font-weight: normal;
  color: #999999;
  line-height: 1.36;
  margin-top: 4px;
`;

const PriceOriginBeforeSaleDel = styled.del``;

const ProductInfoBadgeGroup = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const BadgeFood = styled.div`
  margin-right: 0;
  background-color: #f1c333;
  color: #39af4d;
  padding: 5px 6px 4px;
  height: 20px;
  font-size: 11px;
  font-weight: bold;
  border-radius: 2px;
  line-height: 1;
`;

const ProductInfoReview = styled.div`
  margin-top: 12px;
`;

const ReviewRating = styled.div`
  display: flex;
  align-items: center;
`;

const UiRatingFr = styled.span`
  display: flex;
  margin-bottom: 4px;
  vertical-align: middle;
  box-sizing: border-box;
  line-height: 1.5;
`;

const Star = styled.i`
  font-size: 11px;
  color: #ffc500 !important;
  display: inline-block;
  vertical-align: middle;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
`;

const ReviewCount = styled.span`
  font-size: 11px;
  color: #666666;
  line-height: 1;
  margin-left: 4px;
  margin-bottom: 2px;
`;

const ReviewComment = styled.span`
  display: flex;
  align-items: center;
  white-space: nowrap;
  margin-top: 4px;
`;

const ReviewCommentBadge = styled.div`
  font-size: 10px;
  font-weight: bold;
  border-radius: 7px;
  color: #999999;
  background-color: #f5f5f5;
  padding: 2px 6px;
  margin-right: 4px;
  line-height: 1;
`;

const ReviewCommentComments = styled.div`
  color: #666666;
  font-size: 11px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.1;
`;

export default WelcomeDeal;
