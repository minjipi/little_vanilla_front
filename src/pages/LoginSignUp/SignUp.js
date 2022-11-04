import React, { useState } from "react";
import styled from "styled-components";

function SignUp() {
  const [emailVisible, setEmailVisible] = useState(false);

  return (
    <>
      <LoginWrap>
        <HeadBannerGroup />
        <LoginSectionRoot>
          <LoginHeadLogo>
            <h1>
              <a>{/* <IconLogo /> */}</a>
            </h1>
          </LoginHeadLogo>
          <LoginHeadText>
            <NeedLogin></NeedLogin>
            <CouponImg src="https://image.idus.com/static/signup/web_benefit_signup.png" />
          </LoginHeadText>
          <LoginSection>
            <LoginTitle>정말 간단한 회원가입하기</LoginTitle>
            <SignupStep className="wrap">
              <ul>
                <IsActive>1</IsActive>
                <li>2</li>
              </ul>
              <Title>회원가입 방법 선택하기</Title>
            </SignupStep>
            <LoginSns className="wrap">
              <Item>
                <Kakaotalk href="https://backend.alittlevanilla.kro.kr/oauth2/authorization/kakao">
                  <SpIcon className="Kakaotalk" />
                  "카카오톡으로 가입하기"
                </Kakaotalk>
              </Item>
              {emailVisible ? (
                <></>
              ) : (
                <Item>
                  <More
                    onClick={() => {
                      setEmailVisible(true);
                    }}
                  >
                    다른 방법으로 가입하기
                  </More>
                </Item>
              )}

              <Hidden className={emailVisible ? "" : "HiddenTag"}>
                <Item>
                  <Naver>
                    <SpIcon className="SpNaver" />
                    네이버로 가입하기
                  </Naver>
                </Item>
                <Item>
                  <Facebook>
                    <SpIcon className="Facebook" />
                    페이스북으로 가입하기
                  </Facebook>
                </Item>
                <Item>
                  <Twitter>
                    <SpIcon className="Twitter" />
                    트위터로 가입하기
                  </Twitter>
                </Item>

                <Item>
                  <Email href="/signupemail">이메일로 가입하기</Email>
                </Item>
              </Hidden>
              <AdditionTxt>
                이미 가입하셨다면
                <a href="/login">바로 로그인하기</a>
              </AdditionTxt>
            </LoginSns>
          </LoginSection>
        </LoginSectionRoot>
      </LoginWrap>
    </>
  );
}
const AdditionTxt = styled.button`
  margin-top: 30px;
  color: #666;
  font-size: 14px;
  a {
    text-decoration: underline;
  }
`;
const Email = styled.a``;
const Twitter = styled.a``;
const Facebook = styled.a``;
const Naver = styled.a``;
const Hidden = styled.div`
  &.HiddenTag {
    display: none !important; */
  }
`;
const More = styled.button``;
const Kakaotalk = styled.a``;
const Item = styled.div``;

const LoginSns = styled.div`
  &.wrap {
    overflow: hidden;

    ${Item} {
      &:first-child {
        width: 100%;
        -webkit-border-radius: 8px;
        border-radius: 8px;
      }

      a {
        padding: 6px 0;
        margin-top: 10px;
        display: block;
        color: #fff;
        font-size: 14px;
        position: relative;
        -webkit-border-radius: 2px;
        border-radius: 2px;
        min-height: 44px;
      }

      ${Email} {
        border: 2px solid #f1c333;
        background: #fff;
        color: #f1c333;
        line-height: 28px;
      }
      ${Twitter} {
        background: #69aaeb;
      }
      ${Facebook} {
        background: #435a92;
      }

      ${Naver} {
        background: #63c33d;
      }

      ${Kakaotalk} {
        background: #fce84d;
        color: #333;
      }

      ${More} {
        font-size: 14px !important;
        line-height: 18px !important;
        width: 100%;
        background: #fff;
        border: 1px solid #d9d9d9;
        color: #333;
        padding: 12px;
        margin-top: 10px;
        margin-left: 0;
        outline: none;
      }
    }
  }
`;

const Title = styled.h3``;
const IsActive = styled.li``;

const SignupStep = styled.div`
  text-align: center;
  margin: 45px 0 20px;

  ${Title} {
    font-size: 18px;
    font-weight: normal;
  }

  &.wrap {
    text-align: center;
    margin: 45px 0 20px;

    ${IsActive} {
      color: #fff;
      border-color: #f1c333;
      background: #f1c333;
    }

    ul {
      display: inline-block;
      position: relative;
      border-top: 1px solid #aaa;
    }

    li {
      position: relative;
      top: -15px;
      z-index: 10;
      background: #fff;
      color: #999;
      border: 1px solid #999;
      display: inline-block;
      width: 32px;
      height: 32px;
      line-height: 32px;
      font-size: 14px;
      -webkit-border-radius: 20px;
      border-radius: 20px;
    }

    li + li {
      margin-left: 50px;
    }
  }
`;

const LoginTitle = styled.h2`
  font-size: 14px;
  color: #333;
  text-align: center;
  position: relative;
  top: -10px;
  background: #fff;
  display: inline-block;
  padding: 0 10px;
`;

const LoginSection = styled.section`
  text-align: center;
  margin-top: 50px;
  border-top: 1px solid #333;
`;

const SpIcon = styled.span`
  background-image: url(https://www.idus.com/resources/dist/images/sp/sp-icon_1634026706070.png);
  height: 0;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  font-size: 0;
  line-height: 0;
  letter-spacing: 0;

  @media (-webkit-min-device-pixel-ratio: 2),
    not all,
    not all,
    (min-resolution: 192dpi) {
    background-image: url(https://www.idus.com/resources/dist/images/sp/sp-icon_1634026706070@2x.png);
    -webkit-background-size: 787px 736px;
    background-size: 787px 736px;
  }

  &.Twitter {
    background-position: -689px -94px;
    width: 32px;
    padding-top: 32px;
  }

  &.Facebook {
    background-position: -537px -626px;
    width: 32px;
    padding-top: 32px;
  }

  &.SpNaver {
    background-position: -689px 0px;
    width: 32px;
    padding-top: 32px;
  }

  &.Kakaotalk {
    background-position: -631px -626px;
    width: 32px;
    padding-top: 32px;
  }
`;

const CouponImg = styled.img``;
const NeedLogin = styled.p``;

const LoginHeadText = styled.div`
  margin-bottom: 30px;

  p {
    color: #333333;
    text-align: center;
  }

  ${NeedLogin} {
    display: flex;
    justify-content: center;
    font-size: 16px;
  }

  ${CouponImg} {
    width: 100%;
    margin-top: 5px;
  }
`;

const IconLogo = styled.span`
  background-position: -91px -488px;
  width: 100px;
  padding-top: 40px;

  background-image: url(https://www.idus.com/resources/dist/images/sp/sp-icon_1634026706070.png);
  height: 0;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  font-size: 0;
  line-height: 0;
  letter-spacing: 0;

  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-image: url(https://www.idus.com/resources/dist/images/sp/sp-icon_1634026706070@2x.png);
    -webkit-background-size: 787px 736px;
    -moz-background-size: 787px 736px;
    -o-background-size: 787px 736px;
    background-size: 787px 736px;
  }
`;

const LoginHeadLogo = styled.div`
  text-align: center;
  padding-top: 40px;
  margin-bottom: 10px;
`;

const LoginSectionRoot = styled.div`
  width: 384px;
  display: block;
  margin: 0 auto;
  border-top: 0;
  text-align: center;
`;

const HeadBannerGroup = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

const LoginWrap = styled.div`
  padding: 1px 0 50px;
  min-height: 100%;
  background: #fff;
`;
export default SignUp;
