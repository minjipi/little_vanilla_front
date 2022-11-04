import react, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import axios from "axios";

function TodayProductItem(props) {
  const [like, setLike] = useState(false);
  useEffect(() => {}, [like]);
  const productLike = async (idx) => {
    try {
      if (localStorage.getItem("token") !== null) {
        const response = await axios.get(
          "https://backend.alittlevanilla.kro.kr/product/like/" + idx,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
      } else {
        window.location.href = "/login";
      }
    } catch (e) {
      window.location.href = "/login";
      console.log(e);
    }
  };

  return (
    <UiGridItem key={props.product.idx}>
      <UiCard>
        <IconFavorite
          className={
            props.product.like_check === like
              ? "icon-favorite"
              : "icon-favorite active"
          }
          onClick={() => {
            setLike(!like);
            productLike(props.product.idx);
          }}
        />
        <UiCardImgcover>
          <UiCardImgcoverA
            imageurl={
              "https://backend.alittlevanilla.kro.kr/product/display?fileName=" +
              props.product.filename.split(",")[0]
            }
            href={"/product/" + props.product.idx}
          ></UiCardImgcoverA>
        </UiCardImgcover>
        <UiCardInfo>
          <UiCardInfoLabel>{props.product.idx}</UiCardInfoLabel>
          <UiCardInfoTitle>{props.product.name}</UiCardInfoTitle>
          <UiCardInfoLabel>{props.product.salePrice}</UiCardInfoLabel>
        </UiCardInfo>
        <UiCardRating>
          <UiCardVcenter>
            <UiRating>
              <IconStarFill className="fa fa-star" />
              <IconStarFill className="fa fa-star" />
              <IconStarFill className="fa fa-star" />
              <IconStarFill className="fa fa-star" />
              <IconStarFill className="fa fa-star" />
            </UiRating>
          </UiCardVcenter>
          <UiCardComment>{props.product.comment}</UiCardComment>
        </UiCardRating>
      </UiCard>
    </UiGridItem>
  );
}

const UiGridItem = styled.li`
  list-style: none;
  position: relative;
  float: left;
  width: 20%;
`;

const UiCard = styled.div`
  overflow: hidden;
  position: relative;
  display: block;
  background: #f8f9fb;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  font-size: 12px;
  box-shadow: 0 1px 3px 0 hsl(0deg 0% 86% / 30%);
  margin-left: 16px;
  margin-top: 16px;

  &:after {
    ontent: "";
    display: block;
    clear: both;
  }
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

const UiCardImgcover = styled.div`
  text-align: left;
  box-sizing: border-box;
  overflow: hidden;
`;

const UiCardImgcoverA = styled.a`
  overflow: hidden;
  position: relative;
  display: block;
  width: 100%;
  height: auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  transition: transform 0.5s ease-in-out;
  transform: scale(1.01);
  text-decoration: none;
  background-image: url(${(props) => props.imageurl});

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

const UiCardInfo = styled.div`
  text-align: left;
  box-sizing: border-box;
  padding: 8px 10px;
  height: 96px;
`;
const UiCardInfoLabel = styled.a`
  display: block;
  width: 100%;
  height: 15px;
  font-size: 12px;
  color: #999;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-bottom: 4px;
  text-decoration: none;
`;
const UiCardInfoTitle = styled.a`
  color: #333;
  display: block;
  display: -webkit-box;
  height: 42px;
  font-size: 14px;
  line-height: 1.5;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
`;
const UiCardRating = styled.div`
  text-align: left;
  padding: 0 10px;
  border-top: 1px solid #d9d9d9;
  height: 56px;
  display: table;
  width: 100%;
  box-sizing: border-box;
  vertical-align: middle;
`;
const UiCardVcenter = styled.div`
  display: table-row;
  width: 100%;
  margin-bottom: 0;
  vertical-align: middle;
`;

const UiRating = styled.div`
  display: table-cell;
  font-size: 12px;
  padding: 6px 0 4px;
  vertical-align: middle;
  box-sizing: border-box;
  line-height: 1.5;
`;

const IconStarFill = styled.i`
  color: #ffc801;
`;

const UiCardComment = styled.span`
  color: #666;
  display: block;
  display: -webkit-box;
  height: 18px;
  font-size: 12px;
  line-height: 1.5;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default TodayProductItem;
