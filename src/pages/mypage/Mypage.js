import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import Header from "../../components/Nav/Header";
import Footer from "../../components/Footer/Footer";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useParams } from "react-router";

function Mypage(props) {
  if (localStorage.getItem("token") === null) {
    alert("로그인 해주세요.");
    document.location.href = "/";
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [noti, setNoti] = useState("");
  const [emailChangeBtn, setEmailChangeBtn] = useState(true);
  const [phoneChangeBtn, setPhoneChangeBtn] = useState(false);
  const [result, setResult] = useState("");
  const params = useParams();

  const handleRadioBtn = (e) => {
    setGender(e.target.value);
  };

  const review = () => {
    alert("기능 준비중입니다!");
  };

  let body = {
    email: email,
    nickname: name,
    phoneNum: phonenumber,
    gender: gender,
    birthday: birthday,
    notification: noti,
  };

  const token = jwt_decode(localStorage.getItem("token"));

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://backend.alittlevanilla.kro.kr/member/modify",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        }
      );

      setResult(response.data.result);
      setName(result.nickname);
      setEmail(result.email);
      setPhonenumber(result.phoneNum);
    }
    fetchData();
  }, []);

  const onModify = async () => {
    if (name == "") {
      alert("한 글자 이상의 이름을 입력해 주세요.");
    } else if (email == "") {
      alert("이메일이 입력되지 않았습니다.");
    } else if (phonenumber == "") {
      alert("전화번호를 입력해 주세요.");
    } else {
      try {
        let response = "";
        if (
          new Date(jwt_decode(localStorage.getItem("token")).exp) < new Date()
        ) {
          console.log("토큰 만료");
          localStorage.clear();
          document.location.href = "/login";
        } else {
          response = await axios.patch(
            "https://backend.alittlevanilla.kro.kr/member/modify/" +
              jwt_decode(localStorage.getItem("token")).idx,
            body,
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
                "Content-Type": "application/json",
              },
            }
          );
        }

        if (response.data.code === 1000) {
          alert("변경 성공! 다시 로그인 해주세요.");
          localStorage.clear();
          document.location.href = "/";
        } else {
          alert(response.data.message);
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  const onLeave = async () => {
    try {
      let response = "";

      response = await axios.patch(
        "https://backend.alittlevanilla.kro.kr/member/delete/" +
          jwt_decode(localStorage.getItem("token")).idx,
        body,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data.code);

      if (response.data.code === 1000) {
        alert("회원 탈퇴처리 되었습니다. 다음에 또 만나요!😻");
        localStorage.clear();
        document.location.href = "/";
      } else {
        alert(response.data.message);
      }
    } catch (e) {
      console.log(e);
    }
  };

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
                <StrongName>{token.nickname}님</StrongName>
              </AreaText>
            </ProfileArea>
            {/*  */}
            <div>
              <MyMenuEm>MY MENU</MyMenuEm>
              <MyInfoNav>
                <MyInfoB>
                  <MyInfoSpan>주문배송</MyInfoSpan>
                </MyInfoB>
                <MyAa href="/order">주문내역</MyAa>
                <MyAa onClick={review}>취소/환불내역</MyAa>

                {/* <MyInfoB>
                  <MyInfoSpan>알림 및 메시지</MyInfoSpan>
                </MyInfoB>
                <MyA href="/notification">알림</MyA>
                <MyA href="/message">메시지</MyA> */}

                <MyInfoB>
                  <MyInfoSpan>나의 구매후기</MyInfoSpan>
                </MyInfoB>
                <MyA type="button" onClick={review}>
                  후기 쓰기
                </MyA>
                <MyA type="button" onClick={review}>
                  내가 쓴 후기
                </MyA>

                <MyInfoB>
                  <MyInfoSpan>관심 리스트</MyInfoSpan>
                </MyInfoB>
                <MyA href="/likelist">찜 목록</MyA>
                <MyA href="/followingstore" type="button" onClick={review}>
                  팔로우하는 상점
                </MyA>
                <MyA href="/recentproduct" type="button" onClick={review}>
                  최근 본 상품
                </MyA>
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
                        <InputFilldis
                          placeholder={token.nickname}
                          type="text"
                          defaultValue={result.nickname || ""}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        ></InputFilldis>
                      </InputText>
                    </LeftTd>
                  </tr>

                  <tr>
                    <Leftth>이메일</Leftth>
                    <LeftTd>
                      <span>{result.email}</span>
                      <Button
                        type="button"
                        onClick={() => {
                          setEmailChangeBtn(!emailChangeBtn);
                        }}
                      >
                        변경하기
                      </Button>

                      <NewEmailBlock isClicked={emailChangeBtn}>
                        <NewEmailBlockM>
                          변경할 이메일 주소를 입력해주세요. (예.abcd@minji.me)
                        </NewEmailBlockM>
                        <Mt5>
                          <InputText>
                            <InputTextInput type="text" />
                          </InputText>
                          <Button type="button">인증메일 발송</Button>
                        </Mt5>
                      </NewEmailBlock>
                    </LeftTd>
                  </tr>

                  <tr>
                    <Leftth>전화</Leftth>
                    <LeftTd>
                      <span>{result.phoneNum}</span>
                      <Button
                        type="button"
                        onClick={() => {
                          setPhoneChangeBtn(!phoneChangeBtn);
                        }}
                      >
                        변경하기
                      </Button>
                      <NewEmailBlockM className="fcomment">
                        주문, 배송시 등록된 번호로 SMS를 발송해 드립니다.
                      </NewEmailBlockM>
                      <DataAuth isClicked={phoneChangeBtn}>
                        <NewEmailBlockM>
                          <p>변경할 전화번호를 입력해주세요.</p>
                        </NewEmailBlockM>
                        <NewEmailBlockM>
                          <DataAuthCodeB>
                            <ComboTypeStatic>
                              <InputTextSizeM>
                                <InputTextInput placeholder="개인 정보 처리법에 의해"></InputTextInput>
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
                                <InputTextInput placeholder="해당 기능은 준비중 입니다!"></InputTextInput>
                                <TimeLimit></TimeLimit>
                              </InputTextSizeM>
                              <AuthButton type="button">확인</AuthButton>
                            </ComboTypeStatic>
                          </DataAuthCodeB>
                        </NewEmailBlockM>
                      </DataAuth>
                    </LeftTd>
                  </tr>

                  <tr>
                    <Leftth>성별</Leftth>
                    <LeftTd>
                      <div>
                        <RadioLabel>
                          <IconRadio
                            type="radio"
                            value="F"
                            checked={gender === "F"}
                            onChange={handleRadioBtn}
                          ></IconRadio>
                          여성
                        </RadioLabel>
                      </div>
                      <div>
                        <RadioLabel>
                          <IconRadio
                            type="radio"
                            value="M"
                            checked={gender === "M"}
                            onChange={handleRadioBtn}
                          ></IconRadio>
                          남성
                        </RadioLabel>
                      </div>
                    </LeftTd>
                  </tr>

                  <tr>
                    <Leftth>생일</Leftth>
                    <LeftTd>
                      <InputTextS>
                        <InputFilldis
                          type="text"
                          defaultValue={result.birthday || ""}
                          onChange={(e) => {
                            setBirthday(e.target.value);
                          }}
                        ></InputFilldis>
                      </InputTextS>
                    </LeftTd>
                  </tr>
                  {/* 
                  <tr>
                    <Leftth>알림설정</Leftth>
                    <LeftTd>
                      할인쿠폰/이벤트/감동적인 뉴스레터를 받아보시겠습니까?
                      <Mt10>
                        <div>
                          <Label>
                            <CheckBox type="checkbox"></CheckBox>
                          </Label>
                        </div>
                      </Mt10>
                    </LeftTd>
                  </tr> */}
                </Tbody>
              </TableStyleHeadLeft>

              <TarMt10>
                <BtnSWhite href="/" onClick={() => onLeave()}>
                  회원탈퇴
                </BtnSWhite>
              </TarMt10>

              <br />
              <FormSubmitTac>
                <BtnMPoint type="button" onClick={() => onModify()}>
                  회원 정보 수정하기
                </BtnMPoint>
              </FormSubmitTac>
            </form>
          </Section>
        </InnerwLayoutSplit>
      </ContentDiv>
      <Footer />
    </>
  );
}

const CheckBox = styled.input`
  -webkit-appearance: none;
  background: transparent;
  display: inline-block;
  position: relative;
  height: 18px;
  width: 18px;
  vertical-align: middle;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border: 0;
  margin: 0;
  background: #fff;
  -webkit-tap-highlight-color: transparent;

  &:before {
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    content: "v";
    border: 1px solid #f1c333;
    background: #f1c333;
    color: #fff;

    cursor: pointer;

    display: inline-block;
    line-height: 16px;
    width: 16px;
    height: 16px;
    background: #fff;
    position: absolute;
    top: 0px;
    left: 0px;
    border: 1px solid #acacac;
    border-radius: 2px;
    text-align: center;
  }
`;

const Label = styled.label`
  cursor: pointer;
`;

const InputFilldis = styled.input`
  -webkit-tap-highlight-color: transparent;
  background: #fff;
  font-size: 12px;
  line-height: 16px;
  border: 1px solid #acacac;
  width: 100%;
  height: 32px;
  box-sizing: border-box;
  padding: 2px 8px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -webkit-appearance: none;
  appearance: none;
`;

const IconRadio = styled.input`
  position: relative;
  font-size: 16px;
  width: 13px;
  height: 10px;
  margin: 0;
  background: #fff;
  vertical-align: middle;
`;

const RadioLabel = styled.label`
  margin-right: 3px;
  cursor: pointer;
`;

const BtnMPoint = styled.button`
  width: 140px;
  color: #fff;
  background: #f1c333;
  border: 1px solid #f1c333;
  height: 32px;
  padding: 15px 0;
  padding: 8px 15px;

  line-height: 14px;
  display: inline-block;
  vertical-align: middle;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  font-size: 12px;
  text-align: center;
  white-space: nowrap;
  line-height: 1.4;
`;

const FormSubmitTac = styled.div`
  text-align: center !important;
`;

const BtnSWhite = styled.a`
  color: #333;
  border: 1px solid #ccc;
  background: #fff;
  padding: 6px 12px;
  font-size: 12px;
  display: inline-block;
  vertical-align: middle;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  text-align: center;
  white-space: nowrap;
  line-height: 1.4;
`;

const Mt10 = styled.div`
  margin-top: 10px;
`;

const TarMt10 = styled.div`
  text-align: right !important;
  margin-top: 10px;
`;

const TimeLimit = styled.div`
  position: absolute;
  top: 2px;
  right: 20px;
  font-size: 14px;
  color: #f1c333;
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
  max-height: 0rem;
  overflow: hidden;
  margin-top: 0;
  padding-top: 0;
  margin-bottom: 0;
  padding-bottom: 0;
  -webkit-transition-duration: 0.1s;
  transition-duration: 0.1s;
  ${(props) =>
    props.isClicked &&
    css`
      max-height: 200rem;
      -webkit-transition-duration: 1s;
      transition-duration: 1s;
    `}
`;

const InputTextInput = styled.input`
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

const NewEmailBlockM = styled.div`
  margin-top: 10px;
  &.fcomment {
    color: #999;
  }
`;

const NewEmailBlock = styled.div`
  // display: none;

  ${(props) =>
    props.isClicked &&
    css`
      overflow: hidden;
      height: 0;
      margin-top: 0;
      padding-top: 0;
      margin-bottom: 0;
      padding-bottom: 0;
    `}
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
  border: 1px solid #f1c333;
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
  background: #f1c333;
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

const MyAa = styled.a`
  padding-left: 16px;
  color: #666;
  display: block;
  margin-top: 8px;
`;

const MyA = styled.button`
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

const InputTextS = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 100px;
`;

const InputText = styled.p`
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
  background: #f7f3df;
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
