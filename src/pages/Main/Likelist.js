import React from "react";
import styled from "styled-components";
import Header from "../../components/Nav/Header";
import Footer from "../../components/Footer/Footer";
import SlideSection from "./SlideSection/SlideSection";
import TodayProduct from "./SlideSection/TodayProduct";
import productData from "../../data/productData.json";

import jwt_decode from "jwt-decode";
import axios from "axios";

function Likelist() {
  return (
    <>
      <Header />
      <DimmedBackground></DimmedBackground>

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
            {/*  */}
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
            <UiTabGroupFavorite>
              <UiTabGroupTab>좋아요 목록</UiTabGroupTab>
            </UiTabGroupFavorite>
            <Contents>
              <SlideSection
                contents={<TodayProduct productData={productData.results} />}
              />
            </Contents>
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

const Contents = styled.div`
  padding-bottom: 64px;
  background: #fff;
`;

export default Likelist;
