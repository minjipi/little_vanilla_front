import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let body = {
    username: email,
    password: password,
  };

  const onSubmit = async () => {
    try {
      const response = await axios.post(
        "https://backend.alittlevanilla.kro.kr/member/authenticate",
        body,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log(response.data.token);

      if (response.data.token !== null) {
        localStorage.clear();
        localStorage.setItem("token", response.data.token);
        console.log("response.data.token:  " + response.data.token);

        window.location.replace("/");
      } else {
        setEmail("");
        setPassword("");
        localStorage.clear();
      }
    } catch (e) {
      alert(
        "회원 정보가 일치 하지 않습니다. 아이디와 비민번호를 다시 확인해 주세요!"
      );
      console.log(e);
    }
  };

  return (
    <>
      <LoginWrap>
        <LoginContainer>
          <LoginHeadLogo>
            <h1>
              <a>{/* <IconLogo /> */}</a>
            </h1>
          </LoginHeadLogo>
          <LoginHeadText>
            <NeedLogin>
              <BackgroundText>
                <Text>로그인</Text>
                <Background></Background>
              </BackgroundText>
              이 필요한 서비스 입니다.
            </NeedLogin>
            <CouponImg src="https://image.idus.com/static/signup/web_benefit_signup.png" />
          </LoginHeadText>
          <LoginSignupContent>
            <BorderAndText>
              <span>간편 로그인/회원가입</span>
            </BorderAndText>

            <VerticalButtons>
              <BarButton
                href="https://backend.alittlevanilla.kro.kr/oauth2/authorization/kakao"
                className="kakao"
              >
                <SpIcon className="Kakaotalk"></SpIcon>
                카카오로 3초만에 시작하기
              </BarButton>
              <BarButton className="email" href="/signupemail">
                이메일로 가입하기
              </BarButton>
            </VerticalButtons>

            <HorizontalButtons>
              <RadiusButton
                className="naver"
                href="/w/naver/login?redirect_uri=https%3A%2F%2Fwww.idus.com%2Fw%2Fmain%2Ftoday-recommend-product"
              >
                <SpIcon className="naver"></SpIcon>
              </RadiusButton>

              <RadiusButton className="facebook" href="">
                <SpIcon className="facebook"></SpIcon>
              </RadiusButton>

              <RadiusButton className="twitter" href="">
                <SpIcon className="twitter"></SpIcon>
              </RadiusButton>

              <RadiusButton className="apple" href="">
                <SpIcon className="apple"></SpIcon>
              </RadiusButton>
            </HorizontalButtons>
          </LoginSignupContent>
          <LoginSigninContent>
            <BorderAndText>
              <span>이메일 로그인</span>
            </BorderAndText>
            <EmailLoginContainer>
              <div>
                <EmailLoginInput
                  id="email"
                  type="email"
                  value={email}
                  placeholder="이메일"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <EmailLoginInput
                  id="password"
                  // type="password"
                  value={password}
                  placeholder="비밀번호"
                  required
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <EmailLoginOption>
                <div>
                  <InputCheckbox>
                    <Bp type="checkbox"></Bp>
                  </InputCheckbox>
                  <label>이메일 저장하기</label>
                </div>
                <a>아이디 / 비밀번호 찾기</a>
              </EmailLoginOption>
            </EmailLoginContainer>
            <CommonButton
              type="button"
              onClick={() => {
                onSubmit();
                console.log("body: " + email + ", " + password);
              }}
            >
              로그인
            </CommonButton>
          </LoginSigninContent>
        </LoginContainer>
      </LoginWrap>
    </>
  );
}

const CommonButton = styled.button`
  margin-top: 6px;
  width: 100%;
  height: 44px;
  border-radius: 2px;
  border: none;
  background: #f1c333;
  color: #ffffff;
  font-size: 16px;
  line-height: 30px;
  padding: 0 16px;
  display: inline-block;
  box-shadow: 0 1px 3px 0 rgb(220 220 220 / 30%);
  box-sizing: border-box;
  cursor: pointer;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  transition: border-color 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  vertical-align: middle;
`;

const Bp = styled.input`
  -webkit-appearance: none;
  background: transparent;
  display: inline-block;
  position: relative;
  height: 18px;
  width: 18px;
  vertical-align: middle;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border: 0;
  margin: 0;

  &:before {
    cursor: pointer;
    content: "";
    display: inline-block;
    line-height: 16px;
    width: 16px;
    height: 16px;
    background: #fff;
    position: absolute;
    top: 0px;
    left: 0px;
    border: 1px solid #acacac;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    text-align: center;
  }
`;

const InputCheckbox = styled.div`
  display: inline-block;
`;

const EmailLoginOption = styled.div`
  padding: 13px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #666666;
  font-size: 11px;
`;

const EmailLoginInput = styled.input`
  width: 100%;
  height: 44px;
  border-radius: 2px;
  border: 1px solid #b4b4b4;
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
  padding: 0 15px;
  font-size: 14px;
  outline: none;

  &:last-child {
    margin-bottom: 0;
  }
`;

const EmailLoginContainer = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const LoginSigninContent = styled.div``;

const RadiusButton = styled.a`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  margin-right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:last-child {
    margin-right: 0;
  }

  &.naver {
    background: #30c612;
  }

  &.facebook {
    padding-right: 4px;
    background: #3c5b96;
  }

  &.twitter {
    padding-left: 3px;
    background: #51acf1;
  }

  &.apple {
    background: #ffffff;
    border: 1px solid #000000;
  }
`;

const HorizontalButtons = styled.div`
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const BarButton = styled.a`
  display: block;
  width: 100%;
  height: 44px;
  margin-top: 12px;
  text-decoration: none;
  border-radius: 2px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;

  &.kakao {
    background: #fee500;
    color: #333333;
  }

  &.email {
    background: #ffffff;
    color: #f1c333;
    border: 1px solid #f1c333;
  }
`;

const VerticalButtons = styled.div`
  width: 100%;
`;

const BorderAndText = styled.div`
  border-top: 1px solid #999999;
  color: #999999;
  display: flex;
  justify-content: center;

  span {
    font-size: 12px;
    margin-top: -8px;
    background: #ffffff;
    width: 130px;
    text-align: center;
  }
`;

const SpIcon = styled.span`
  background-image: url("https://www.idus.com/resources/dist/images/sp/sp-icon_1634026706070.png");
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

  &.Kakaotalk {
    background-position: -631px -626px;
    width: 32px;
    padding-top: 32px;
  }

  &.naver {
    background-position: -689px 0px;
    width: 32px;
    padding-top: 32px;
  }

  &.facebook {
    background-position: -537px -626px;
    width: 32px;
    padding-top: 32px;
  }

  &.twitter {
    background-position: -689px -94px;
    width: 32px;
    padding-top: 32px;
  }

  &.apple {
    background-position: -563px -488px;
    width: 32px;
    padding-top: 32px;
  }
`;

const LoginSignupContent = styled.div``;

const CouponImg = styled.img``;
const NeedLogin = styled.p``;
const BackgroundText = styled.span``;
const Text = styled.strong``;
const Background = styled.span``;

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

  ${BackgroundText} {
    width: 50px;
    height: 19px;
    position: relative;

    > ${Text} {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }

    > ${Background} {
      width: 100%;
      height: 15px;
      background: #fbd3bc;
      position: absolute;
      top: 7px;
      left: 0;
    }
  }

  ${CouponImg} {
    width: 100%;
    margin-top: 5px;
  }
`;

// const IconLogo = styled.span`
//   background-position: -91px -488px;
//   width: 100px;
//   padding-top: 40px;
//   background-image: url(https://www.idus.com/resources/dist/images/sp/sp-icon_1634026706070.png);
//   height: 0;
//   overflow: hidden;
//   display: inline-block;
//   vertical-align: middle;
//   font-size: 0;
//   line-height: 0;
//   letter-spacing: 0;

//   @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
//     background-image: url(https://www.idus.com/resources/dist/images/sp/sp-icon_1634026706070@2x.png);
//     -webkit-background-size: 787px 736px;
//     -moz-background-size: 787px 736px;
//     -o-background-size: 787px 736px;
//     background-size: 787px 736px;
//   }
// `;

const LoginHeadLogo = styled.div`
  text-align: center;
  padding-top: 20px;
  margin-bottom: 10px;
`;

const LoginContainer = styled.div`
  background: #ffffff;

  @media (min-width: 720px) {
    padding: 1px 0 50px;
    width: 384px;
    display: block;
    margin: 0 auto;
  }
`;

const LoginWrap = styled.div`
  padding: 1px 0 50px;
  min-height: 100%;
  background: #fff;
`;
export default Login;
