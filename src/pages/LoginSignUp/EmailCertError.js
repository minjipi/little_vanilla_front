import styled from "styled-components";

function EmailCertError() {
  return (
    <>
      <LoginWrap>
        <HeadBannerGroup />
        <LoginSectionRoot>
          <LoginSection>
            <LoginTitle>이메일 인증 실패</LoginTitle>
            <SignupStep className="wrap">
              <Title>
                이메일 인증 실패..🥺 <br /> 다른 이메일로 회원가입을 진행해
                주세요.
                <br /> <br /> <br />
              </Title>

              <CommonButton
                type="button"
                onClick={() => window.location.replace("/login")}
              >
                로그인 페이지
              </CommonButton>

              <CommonButton
                type="button"
                onClick={() => window.location.replace("/")}
              >
                메인 페이지
              </CommonButton>
            </SignupStep>
          </LoginSection>
        </LoginSectionRoot>
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
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  transition: border-color 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  vertical-align: middle;
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

export default EmailCertError;
