import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import Header from "../../../components/Nav/Header";
import OrderEmpty from "./OrderEmpty";
import Footer from "../../../components/Footer/Footer";
import jwt_decode from "jwt-decode";
import OrderList from "./OrderList";
import axios from "axios";

function Order() {
  const [selectYear, setSelectYear] = useState(false);
  const [clickYear, setClickYear] = useState(false);
  const [isOptionVisible, setIsOptionVisible] = useState(false);

  let [res, setRes] = useState(null);
  useEffect(() => {
    async function fetchData() {
      let response = await axios.get(
        "https://backend.alittlevanilla.kro.kr/order/list/",
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      let result = response.data.result;
      setRes(result);

      let productName = [];
      // result.split(",").map((filename, idx) => {
      //   const img = {
      //     id: idx + 1,
      //   };
      //   productName.push(img);
      // });
    }
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <DimmedBackground />
      <ContentDiv>
        <InnerwLayoutSplit>
          <MyInfo>
            <ProfileArea>
              <Outline>
                <Profile>
                  <ChangeProfile />
                  <LinkStyle>수정</LinkStyle>
                </Profile>
              </Outline>
              {/*  */}
              <AreaText>
                <AreaTextA href="/membership">
                  <span>Lv.1</span>
                </AreaTextA>
                <StrongName>
                  {jwt_decode(localStorage.getItem("token")).nickname}님
                </StrongName>
              </AreaText>
            </ProfileArea>

            <div>
              <MyMenuEm>MY MENU</MyMenuEm>
              <MyInfoNav>
                <MyInfoB>
                  <MyInfoSpan>주문배송</MyInfoSpan>
                </MyInfoB>
                <MyA href="/order">주문내역</MyA>
                <MyA>취소/환불내역</MyA>

                <MyInfoB>
                  <MyInfoSpan>알림 및 메시지</MyInfoSpan>
                </MyInfoB>
                <MyA>알림</MyA>
                <MyA>메시지</MyA>

                <MyInfoB>
                  <MyInfoSpan>나의 구매후기</MyInfoSpan>
                </MyInfoB>
                <MyA>후기 쓰기</MyA>
                <MyA>내가 쓴 후기</MyA>

                <MyInfoB>
                  <MyInfoSpan>관심 리스트</MyInfoSpan>
                </MyInfoB>
                <MyA href="/likelist">찜 목록</MyA>
                <MyA>팔로우하는 상점</MyA>
                <MyA>최근 본 상품</MyA>
              </MyInfoNav>
            </div>
          </MyInfo>

          {/*  */}
          <Section>
            <TitleStyleNoMt>
              <TitleStyleTxt>주문 내역</TitleStyleTxt>
              <Fr>
                <UiSelectboxS100
                  onClick={() => {
                    setIsOptionVisible(!isOptionVisible);
                  }}
                >
                  <SortByYear>
                    <UiOption
                      value="2022"
                      className={selectYear === true ? "active" : ""}
                    >
                      2022 년
                    </UiOption>
                    <UiOption value="2022">2021 년</UiOption>
                  </SortByYear>
                  {/* <SelectboxBtn
                    type="button"
                    className={isOptionVisible === true ? "active" : ""}
                  >
                    <UiSelected>2022 년</UiSelected>
                    <ArroeDown
                      className={
                        isOptionVisible === true
                          ? "fas fa-chevron-up"
                          : "fas fa-chevron-down"
                      }
                    ></ArroeDown>
                  </SelectboxBtn> */}
                  <UiSelectedul>
                    <UiOptionLi value="2022">2022 년</UiOptionLi>
                    <UiOptionLi value="2021">2021 년</UiOptionLi>
                  </UiSelectedul>
                </UiSelectboxS100>
              </Fr>
            </TitleStyleNoMt>
            <UiTabGroupFavorite>
              <UiTabGroupTab>상품</UiTabGroupTab>
              {/* <UiTabGroupTabA>온라인 클래스</UiTabGroupTabA>
              <UiTabGroupTabA>오프라인 클래스</UiTabGroupTabA> */}
            </UiTabGroupFavorite>
            {/*  */}

            {res ? (
              res.map((item) => <OrderList key={item.idx} item={item} />)
            ) : (
              <OrderEmpty />
            )}
            {/*  */}
            <Paging>
              <PagingNav>
                <Pagingnum>1</Pagingnum>
              </PagingNav>
            </Paging>
            <BannerTypeAroot>
              <BannerTypeAitem>
                <BannerTypeImg src="https://image.idus.com/image/files/2771de7cd2d64ae89eaf8a73362e31fa.jpg" />
              </BannerTypeAitem>
            </BannerTypeAroot>
          </Section>
        </InnerwLayoutSplit>
      </ContentDiv>
      <Footer />
    </>
  );
}

const Pagingnum = styled.div`
  border: 1px solid transparent;
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  line-height: 24px;
  font-size: 12px;
  font-weight: bold;
  border-color: #8b4513;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  color: #8b4513;

  &:first-child {
    margin-left: 0;
  }
`;

const PagingNav = styled.nav`
  display: block;
  text-align: center;
  vertical-align: middle;
`;

const Paging = styled.div`
  font-size: 0;
  margin-top: 24px;
`;
const BannerTypeImg = styled.img`
  display: block;
  height: 100%;
  margin: 0 auto;
`;

const BannerTypeAitem = styled.a`
  display: block;
  height: 108px;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center center;
  background: #f8fcff;
`;

const BannerTypeAroot = styled.div`
  margin-top: 40px;
`;

const UiTabGroupTabA = styled.a`
  padding: 20px 0 17px;
  display: inline-block;
  vertical-align: middle;
  width: 50%;
  font-size: 16px;
  text-align: center;
  color: #acacac;
  border: 1px solid #d9d9d9;
  border-bottom-color: #d9d9d9;
  background-color: #f5f5f5;
  width: 33.33333%;
`;

const UiTabGroupTab = styled.span`
  padding: 20px 0 17px;
  display: inline-block;
  vertical-align: middle;
  width: 50%;
  font-size: 16px;
  text-align: center;
  color: #acacac;
  border: 1px solid #d9d9d9;
  border-bottom-color: #d9d9d9;
  background-color: #f5f5f5;
  border-right: 0px;
  background: #fff;
  color: #acacac;
  border-bottom-width: 1px;
  border-bottom-color: #fff;
  width: 33.33333%;
  color: #333;
  border-bottom-color: #d9d9d9;
  font-weight: bold;
`;

const UiTabGroupFavorite = styled.div`
  font-size: 0;
  display: inline-block;
  width: 100%;
  color: #333;
  background: #f5f5f5;
`;

const UiOptionLi = styled.li`
  &:last-child {
    border-top: 0 none;
  }
  padding: 8px 12px;
  border-bottom: 1px solid #d9d9d9;
  -webkit-transition: background-color 0.3s ease;
  transition: background-color 0.3s ease;
  font-size: inherit;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const UiSelectedul = styled.ul`
  &.active {
    height: auto;
    border-bottom: 1px solid #8b4513;
  }

  z-index: 101;
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 0;
  max-height: 400px;
  overflow-y: auto;
  background: #fff;
  border: 1px solid #8b4513;
  border-top: 0 none;
  border-bottom: 0 none;
  -webkit-border-bottom-left-radius: 2px;
  border-bottom-left-radius: 2px;
  -webkit-border-bottom-right-radius: 2px;
  border-bottom-right-radius: 2px;
  cursor: pointer;
  font-size: inherit;
  color: inherit;
`;

const ArroeDown = styled.i`
  position: absolute;
  right: 12px;
  top: 8px;
  font-size: 12px;
  font-size: 18px;
  margin-left: 8px;
`;

const UiSelected = styled.span`
  font-size: inherit;
  display: inline-block;
  vertical-align: middle;
  width: 90%;
  padding-right: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const SelectboxBtn = styled.button`
  padding: 0px 12px;
  line-height: 30px;
  margin: 0;
  position: relative;
  width: 100%;
  border: 1px solid #b4b4b4;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -webkit-transition: border 0.2s;
  transition: border 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  text-align: left;
  cursor: pointer;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  font-size: inherit;
  color: inherit;
`;

const UiOption = styled.option`
  padding: 8px 12px;
  border-bottom: 1px solid #d9d9d9;
  -webkit-transition: background-color 0.3s ease;
  transition: background-color 0.3s ease;
  font-size: inherit;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const SortByYear = styled.select`
  margin-top: 8px;
  display: none !important;
  font-size: inherit;
  color: inherit;
`;

const UiSelectboxS100 = styled.div`
  width: 100px;
  -webkit-tap-highlight-color: transparent;
  color: #333;
  position: relative;
  display: inline-block;
  -webkit-transition: opacity 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  transition: opacity 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
`;

const Fr = styled.div`
  display: block;
  float: right;
`;

const TitleStyleTxt = styled.a`
  font-size: 24px;
  font-weight: bold;
  vertical-align: middle;
  color: #333;
  display: block;
  float: left;
`;

const TitleStyleNoMt = styled.div`
  margin-top: 0;
  padding-top: 0;
  vertical-align: bottom;
  padding-bottom: 4px;
  margin-bottom: 32px;
  position: relative;
  vertical-align: middle;

  &:after {
    content: "";
    display: block;
    clear: both;
  }
`;

const Section = styled.section`
  margin-left: 24px;
  width: 852px;
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

const ContentDiv = styled.div`
  padding-bottom: 64px;
  background: #fff;
`;

const InnerwLayoutSplit = styled.div`
  padding-top: 36px;
  position: relative;
  width: 1056px;
  margin: 0 auto;
  > * {
    float: left;
  }
  &:after {
    content: "";
    display: block;
    clear: both;
  }
`;

const MyInfo = styled.aside`
  margin-left: 0;
  width: 180px;
`;

const ProfileArea = styled.div`
  padding: 25px 0 28px;
  width: 100%;
  border: 1px solid #8b4513;
`;

const Outline = styled.div`
  width: 90px;
  height: 90px;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background: #fff;
  padding: 5px;
  margin: 0 auto;
`;

const Profile = styled.label`
  background-image: url("https://image.idus.com/image/files/b5b721bcb181484797e726ba90503777.jpg");
  margin: 0;
  display: block;
  width: 80px;
  height: 80px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  margin: 4px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const ChangeProfile = styled.input`
  display: none;
  background: #fff;
`;

const LinkStyle = styled.span`
  position: absolute;
  bottom: -16px;
  display: inline-block;
  width: 100%;
  text-align: center;
  height: 16px;
  line-height: 16px;
  background: #000000b3;
  font-size: 10px;
  color: #fff;
  padding: 0;
`;

const AreaText = styled.div`
  padding: 22px 0 0;
`;

const AreaTextA = styled.a`
  margin-bottom: 10px;
  font-size: 12px;
  display: block;
  text-align: center;
`;

const StrongName = styled.strong`
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
  display: block;
  text-align: center;
`;

const MyMenuEm = styled.em`
  display: block;
  background: #8b4513;
  padding: 9px 16px;
  color: #fff;
  font-size: 13px;
`;

const MyInfoNav = styled.nav`
  background: #fbfafa;
  padding-bottom: 11px;
`;

const MyInfoB = styled.b`
  display: block;
  width: 100%;
  padding: 11px 16px 3px 16px;
  margin-top: 8px;
  border-top: 1px solid #efe8e6;
  color: #333;
  font-weight: bold;
  font-size: 13px;
  display: inline-block;
  border: 0 none;
  margin-top: 0;
`;

const MyInfoSpan = styled.span`
  display: inline-block;
`;

const MyA = styled.a`
  padding-left: 16px;
  color: #666;
  display: block;
  margin-top: 8px;
`;

export default Order;
