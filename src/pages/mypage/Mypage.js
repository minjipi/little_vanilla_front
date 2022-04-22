import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import Header from "../../components/Nav/Header";
import Footer from "../../components/Footer/Footer";
import jwt_decode from "jwt-decode";

function Mypage() {
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
                  <span>아기손</span>
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
                <MyA href="/order/paymemt">주문내역</MyA>
                <MyA href="/order/paymemt">취소/환불내역</MyA>

                <MyInfoB>
                  <MyInfoSpan>알림 및 메시지</MyInfoSpan>
                </MyInfoB>
                <MyA href="/notification">알림</MyA>
                <MyA href="/message">메시지</MyA>

                <MyInfoB>
                  <MyInfoSpan>나의 구매후기</MyInfoSpan>
                </MyInfoB>
                <MyA href="/notification">후기 쓰기</MyA>
                <MyA href="/message">내가 쓴 후기</MyA>

                <MyInfoB>
                  <MyInfoSpan>관심 리스트</MyInfoSpan>
                </MyInfoB>
                <MyA href="/product/likelist">찜 목록</MyA>
                <MyA href="/followingstore">팔로우하는 상점</MyA>
                <MyA href="/recentproduct">최근 본 상품</MyA>
              </MyInfoNav>
            </div>
          </MyInfo>

          {/*  */}
          <Section>
            <form>
              <TitleStyleClf>
                <Textfl>회원 정보 관리</Textfl>
              </TitleStyleClf>

              <TableStyleHeadLeft>
                <Tbody>
                  <tr>
                    <Leftth>이름</Leftth>
                    <LeftTd>
                      <InputText>
                        <input
                          type="text"
                          value={
                            jwt_decode(localStorage.getItem("token")).nickname
                          }
                        ></input>
                      </InputText>
                    </LeftTd>
                  </tr>

                  <tr>
                    <Leftth>이메일</Leftth>
                    <LeftTd>
                      <span>
                        {jwt_decode(localStorage.getItem("token")).nickname}
                      </span>
                      <Button type="button">변경하기</Button>
                      <NewEmailBlock>
                        <NewEmailBlockM>
                          변경할 이메일 주소를 입력해주세요. (예.abcd@minji.me)
                        </NewEmailBlockM>
                        <Mt5>
                          <InputText>
                            <InputTextInput />
                          </InputText>
                          <Button type="button">인증메일 발송</Button>
                        </Mt5>
                      </NewEmailBlock>
                    </LeftTd>
                  </tr>

                  <tr>
                    <Leftth>전화</Leftth>
                    <LeftTd>
                      <span>
                        {jwt_decode(localStorage.getItem("token")).nickname}
                      </span>
                      <Button type="button">변경하기</Button>
                      <NewEmailBlockM className="fcomment">
                        주문, 배송시 등록된 번호로 SMS를 발송해 드립니다.
                      </NewEmailBlockM>
                      <DataAuth>
                        <NewEmailBlockM>
                          <p>변경할 전화번호를 입력해주세요.</p>
                        </NewEmailBlockM>
                        <NewEmailBlockM>
                          <DataAuthCodeB>
                            <ComboTypeStatic>
                              <InputTextSizeM>
                                <InputTextInput></InputTextInput>
                                <TimeLimit></TimeLimit>
                              </InputTextSizeM>
                              <AuthButton type="button">
                                인증번호 요청
                              </AuthButton>
                            </ComboTypeStatic>
                          </DataAuthCodeB>
                        </NewEmailBlockM>
                        <NewEmailBlockM>
                          <DataAuthCodeB>
                            <ComboTypeStatic>
                              <InputTextSizeM>
                                <InputTextInput></InputTextInput>
                                <TimeLimit></TimeLimit>
                              </InputTextSizeM>
                              <AuthButton type="button">확인</AuthButton>
                            </ComboTypeStatic>
                          </DataAuthCodeB>
                        </NewEmailBlockM>
                      </DataAuth>
                    </LeftTd>
                  </tr>
                </Tbody>
              </TableStyleHeadLeft>
            </form>
          </Section>
        </InnerwLayoutSplit>
      </ContentDiv>
      <Footer />
    </>
  );
}
const TimeLimit = styled.div`
  position: absolute;
  top: 2px;
  right: 20px;
  font-size: 14px;
  color: #ff7b30;
`;

const InputTextSizeM = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 200px;
`;

const ComboTypeStatic = styled.div`
  position: relative;
  padding-right: 105px;
`;

const DataAuthCodeB = styled.div`
  position: relative;
`;

const DataAuth = styled.div`
  // display: none;
`;

const InputTextInput = styled.div`
  background: #fff;
  font-size: 12px;
  line-height: 16px;
  border: 1px solid #acacac;
  width: 100%;
  height: 32px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 2px 8px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -webkit-appearance: none;
  appearance: none;
`;

const Mt5 = styled.div`
  margin-top: 5px;
`;

const NewEmailBlockM = styled.p`
  margin-top: 10px;
  &.fcomment {
    color: #999;
  }
`;

const NewEmailBlock = styled.div`
  //   display: none;
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
  border: 1px solid #ff7b30;
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
  background: #ff7b30;
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

const Section = styled.section`
  margin-left: 24px;
  width: 852px;
`;

const TitleStyleClf = styled.div`
  vertical-align: bottom;
  padding-bottom: 4px;
  margin-bottom: 32px;
  position: relative;
  vertical-align: middle;
`;

const Textfl = styled.a`
  display: block;
  float: left;
  font-size: 24px;
  font-weight: bold;
  vertical-align: middle;
  color: #333;
`;

const TableStyleHeadLeft = styled.table`
  border-top: 1px solid #d9d9d9;
  table-layout: fixed;
  width: 100%;
  box-sizing: border-box;
`;

const Tbody = styled.tbody`
  color: inherit;
  font-size: inherit;
`;

const InputText = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 200px;
`;

const LeftTd = styled.td`
  padding: 12px 10px;
  border-bottom: 1px solid #d9d9d9;
  height: 48px;
`;

const Leftth = styled.td`
  background: #f5f5f5;
  font-weight: normal;
  width: 120px;
  text-align: left;
  color: #666;
  padding: 12px 10px;
  border-bottom: 1px solid #d9d9d9;
  height: 48px;
`;

const Button = styled.button`
  eight: 32px;
  padding: 15px 0;
  padding: 8px 15px;
  font-size: 12px;
  line-height: 14px;
  color: #333;
  border: 1px solid #ccc;
  background: #fff;
`;

const AuthButton = styled.button`
  eight: 32px;
  padding: 15px 0;
  padding: 8px 15px;
  font-size: 12px;
  line-height: 14px;
  color: #333;
  border: 1px solid #ccc;
  background: #fff;
`;

export default Mypage;
