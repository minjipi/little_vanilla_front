import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

function SignUpEmail() {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);

  const allAgreeHandler = (checked) => {
    setIsAllChecked(!isAllChecked);
    if (checked) {
      setCheckedItems([...checkedItems, "provision", "privacy"]);
    } else if (
      (!checked && checkedItems.includes("provision")) ||
      (!checked && checkedItems.includes("privacy"))
    ) {
      setCheckedItems([]);
    }
  };

  const agreeHandler = (checked, value) => {
    if (checked) {
      setCheckedItems([...checkedItems, value]);
    } else if (!checked && checkedItems.includes(value)) {
      setCheckedItems(checkedItems.filter((el) => el !== value));
    }
  };

  useEffect(() => {
    if (checkedItems.length >= 2) {
      setIsAllChecked(true);
    } else {
      setIsAllChecked(false);
    }
  }, [checkedItems]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  let body = {
    email: email,
    password: password,
    nickname: nickname,
  };

  const onSubmit = async () => {
    try {
      const response = await axios.post(
        "https://backend.alittlevanilla.kro.kr/member/sellersignup",
        body,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
    } catch (e) {
      console.log(e);
    }
  };

  const emailCheck = async () => {
    if (email === "") {
      setCheckedEmail("필수 항목입니다.");
    } else {
      var regex =
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
      console.log("비밀번호 유효성 검사 :: ", regex.test(email));

      if (regex.test(email)) {
        try {
          const response = await axios.get(
            "https://backend.alittlevanilla.kro.kr/member/" + email
          );
          if (response.data === true) {
            setCheckedEmail("이미 존재하는 이메일 입니다.");
          } else {
            setCheckedEmail("가능");
            console.log("가능");
          }
        } catch (e) {
          console.log(e);
        }
      } else {
        setCheckedEmail("이메일 주소를 확인해 주세요.");
      }
    }
  };

  const [checkedEmail, setCheckedEmail] = useState("");

  return (
    <WrapLogin>
      <HeadBannerGroup />
      <ReauthPhone>
        <LoginWrap>
          <LoginLogo>
            <h1>
              {/* <LogoA href="/">
                <SpIcon />
              </LogoA> */}
            </h1>
          </LoginLogo>

          <LoginSection>
            <LoginTitle>정말 간단한 회원가입하기</LoginTitle>
            <SignupStep className="wrap">
              <ul>
                <li>1</li>
                <IsActive>2</IsActive>
              </ul>
              <Title>가입 정보 입력하기</Title>
            </SignupStep>
            <FormBlock>
              <FormBlockHead>
                <AsteriskRed>*</AsteriskRed>이메일
              </FormBlockHead>
              <FormBlockBody>
                <InputTextSizeW>
                  <EmailInput
                    id="email"
                    type="email"
                    value={email}
                    placeholder="이메일을 입력해주세요."
                    required
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    onBlur={() => emailCheck()}
                  />
                </InputTextSizeW>
                <FormError>{checkedEmail}</FormError>
              </FormBlockBody>
            </FormBlock>
            <FormBlock>
              <FormBlockHead>
                <AsteriskRed>*</AsteriskRed> 비밀번호
              </FormBlockHead>
              <FormBlockBody>
                <InputTextSizeW>
                  <EmailInput
                    id="password"
                    // type="password"
                    value={password}
                    placeholder="비밀번호 (영문+숫자+특수문자 8자 이상)"
                    required
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </InputTextSizeW>
              </FormBlockBody>
              <FormBlockBody>
                <InputTextSizeW>
                  <EmailInput placeholder="비밀번호 확인" required />
                </InputTextSizeW>
              </FormBlockBody>
            </FormBlock>

            <FormBlock>
              <FormBlockHead>
                <AsteriskRed>*</AsteriskRed> 이름
              </FormBlockHead>
              <FormBlockBody>
                <InputTextSizeWTypeL>
                  <EmailInput
                    id="name"
                    value={nickname}
                    type="text"
                    placeholder="이름을 입력해 주세요"
                    required
                    onChange={(e) => {
                      setNickname(e.target.value);
                    }}
                  />
                </InputTextSizeWTypeL>
              </FormBlockBody>
            </FormBlock>

            {/* <FormBlock>
              <FormBlockHead>
                <AsteriskRed>*</AsteriskRed> 전화번호
              </FormBlockHead>
              <FormBlockBody>
                <UiInputBtnCombo>
                  <InputTextSizeWTypeL>
                    <EmailInput type="hidden" required />
                    <EmailInput
                      type="tel"
                      placeholder="010-1234-5678"
                      data-auth="cell_phone"
                      required
                    />
                  </InputTextSizeWTypeL>
                </UiInputBtnCombo>
              </FormBlockBody>
            </FormBlock> */}

            <FormBlockCheckAllWrap>
              <Terms>
                <TermsHead>
                  <InputCheckBox>
                    <input
                      type="checkbox"
                      value="agree"
                      onChange={(e) => {
                        allAgreeHandler(e.currentTarget.checked);
                      }}
                      checked={isAllChecked}
                    />
                  </InputCheckBox>
                  <TermsLabel>모두 동의합니다.</TermsLabel>
                </TermsHead>

                <TermsBody>
                  <TermsItem>
                    <InputCheckBox>
                      {/* <Terms1 type="checkbox"></Terms1> */}
                      <input
                        type="checkbox"
                        value="provision"
                        onChange={(e) => {
                          agreeHandler(e.currentTarget.checked, e.target.value);
                        }}
                        checked={
                          checkedItems.includes("provision") ? true : false
                        }
                      />
                    </InputCheckBox>
                    <Terms1Label>만 14세 이상입니다.</Terms1Label>
                  </TermsItem>
                  {/*  */}
                  <TermsItem>
                    <InputCheckBox>
                      {/* <Terms1 type="checkbox"></Terms1> */}
                      <input
                        type="checkbox"
                        value="privacy"
                        onChange={(e) => {
                          agreeHandler(e.currentTarget.checked, e.target.value);
                        }}
                        checked={
                          checkedItems.includes("privacy") ? true : false
                        }
                      />
                    </InputCheckBox>
                    <Terms2A>이용약관 필수 동의</Terms2A>
                  </TermsItem>
                  {/*  */}
                </TermsBody>
              </Terms>

              <Terms1Error />
              <TermsError />
            </FormBlockCheckAllWrap>

            <FormBlockSubmit>
              <FormBlockBody>
                <BtnLogin
                  type="button"
                  onClick={() => {
                    onSubmit();
                    console.log(
                      "body: " + email + ", " + password + ", " + nickname
                    );
                  }}
                >
                  회원가입하기
                </BtnLogin>
              </FormBlockBody>
            </FormBlockSubmit>
          </LoginSection>
        </LoginWrap>
      </ReauthPhone>
    </WrapLogin>
  );
}

const BtnLogin = styled.button`
  border-radius: 2px;
  text-align: center;
  white-space: nowrap;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;
  color: #fff;
  background: #f1c333;
  border: 1px solid #f1c333;
  width: 100%;
  height: 48px;
  line-height: 48px;
  font-size: 16px;
`;

const FormBlockSubmit = styled.div`
  text-align: left;
  margin: 20px 0 0;
`;

const TermsError = styled.span`
  display: none;
  cursor: default !important;
  color: #ff4b50;
  margin: 10px 0 0;
`;

const Terms1Error = styled.span`
  color: #ff4b50;
  margin: 10px 0 0;
  display: block !important;
  cursor: default !important;
`;
const Terms2A = styled.a`
  text-decoration: underline;
  overflow: hidden;
  display: block;
  font-size: 14px;
`;

const Terms1Label = styled.label`
  overflow: hidden;
  display: block;
  font-size: 14px;
`;

const Terms1 = styled.input`
  // -webkit-appearance: none;
  background: #f1c333;
  display: inline-block;
  position: relative;
  height: 18px;
  width: 18px;
  vertical-align: middle;
  box-sizing: border-box;
  border: 0;
  margin: 0;

  &:before {
    // content: ${(props) => (props.checked ? console.log("✓") : "")};
    cursor: pointer;
    // content: ${(props) => (props.checked ? console.log("✓") : "")};
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

const TermsItem = styled.div`
  margin-top: 5px;
`;

const TermsLabel = styled.label`
  overflow: hidden;
  display: block;
  font-size: 14px;
`;

// const BpCheckAll = styled.input`
//   -webkit-appearance: none;
//   background: transparent;
//   display: inline-block;
//   position: relative;
//   height: 18px;
//   width: 18px;
//   vertical-align: middle;
//   -webkit-box-sizing: border-box;
//   box-sizing: border-box;
//   border: 0;
//   margin: 0;

//   &:before {
//     font-size: 16px;
//     font-style: normal;
//     content: "✓";
//     border: 1px solid #f1c333	;
//     background: #f1c333	;
//     color: #fff;
//     cursor: pointer;
//     display: inline-block;
//     line-height: 16px;
//     width: 16px;
//     height: 16px;
//     position: absolute;
//     top: 0px;
//     left: 0px;
//     border-radius: 2px;
//     text-align: center;
//   }
// `;

const InputCheckBox = styled.div`
  float: left;
  margin-right: 10px;
  display: inline-block;
`;

const TermsBody = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid #333;
`;

const TermsHead = styled.div`
  border-bottom: 1px solid #333;
  padding: 5px 0;
`;

const Terms = styled.div`
  text-align: left;
  margin: 20px 0 0;
`;

const FormBlockCheckAllWrap = styled.div`
  text-align: left;
  margin: 20px 0 0;
`;

const UiInputBtnCombo = styled.div`
  position: relative;
  padding-right: 105px;
`;

const EmailInput = styled.input`
  font-size: 14px;
  height: 48px;
  background: #fff;
  line-height: 16px;
  border: 1px solid #acacac;
  width: 100%;
  box-sizing: border-box;
  padding: 2px 8px;
  border-radius: 2px;
  appearance: none;
`;

const InputTextSizeWTypeL = styled.div`
  box-sizing: border-box;
  vertical-align: middle;
  height: 48px;
  display: block;
  width: 100%;
  margin-top: 10px;
  text-align: left;
`;

const FormError = styled.span`
  color: #ff4b50;
  margin: 10px 0 0;
  display: block;
  cursor: default !important;
`;

const InputTextSizeW = styled.div`
  &.formError {
    cursor: default !important;
  }
  display: block;
  width: 100%;
  margin-top: 10px;
  text-align: left;
  vertical-align: middle;
  box-sizing: border-box;
`;

const FormBlockBody = styled.div`
  text-align: left;
`;

const AsteriskRed = styled.em`
  color: #ff4b50;
  font-size: 18px;
  display: inline-block;
`;

const FormBlockHead = styled.label`
  font-size: 14px;
`;

const FormBlock = styled.div`
  text-align: left;
  margin: 20px 0 0;
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
  padding-bottom: 100px;
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
  background-position: -91px -488px;
  width: 100px;
  padding-top: 40px;
`;

const LogoA = styled.div`
  display: block;
`;

const LoginLogo = styled.div`
  padding-top: 40px;
  text-align: center;
  padding: 40px 0 0;
`;

const LoginWrap = styled.div`
  padding: 1px 0 50px;
  min-height: 100%;
  background: #fff;
`;

const ReauthPhone = styled.form`
  width: 384px;
  display: block;
  margin: 0 auto;
`;

const HeadBannerGroup = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

const WrapLogin = styled.div`
  padding: 1px 0 50px;
  min-height: 100%;
  background: #fff;
`;

export default SignUpEmail;
