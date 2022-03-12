import React, { useState } from "react";
import styled, { css } from "styled-components";

function Header() {
  const [isAppInstallHover, setIsAppInstallHover] = useState(false);
  const [isCallCenterHover, setIsCallCenterHover] = useState(false);
  const [isCategoryHover, setIsCategoryHover] = useState(false);

  const [word, setWord] = useState("");

  const onSubmit = async () => {
    window.location.href = "/search/" + word;
  };

  return (
    <HeaderTag>
      <TopNavigation>
        <InnerW>
          <NavBtnUiDropdown>
            <BtnDropdownReset
              onMouseOver={() => setIsAppInstallHover(true)}
              onMouseOut={() => setIsAppInstallHover(false)}
              readOnly
              value="아이디어스 앱 설치하기"
            />
            <MenuDropdownAppInstallGuide
              onMouseOver={() => setIsAppInstallHover(true)}
              onMouseOut={() => setIsAppInstallHover(false)}
              isAppInstallHover={isAppInstallHover}
            >
              <MenuDropdownAppH1>
                <SpIconImgAppicon />
                아이디어스를 스마트폰으로 더욱 편리하게 사용하세요.
              </MenuDropdownAppH1>
              <MenuDropdownAppOl>
                <MenuDropdownAppLi>
                  <MenuDropdownAppH2>
                    1. 문자로 앱설치 안내받기
                  </MenuDropdownAppH2>
                  <MenuDropdownAppForm>
                    <InputText>
                      <InputCellPhone />
                    </InputText>
                    <BtnPoint>전송</BtnPoint>
                  </MenuDropdownAppForm>
                  <MenuDropdownAppSpan>
                    앱 설치 URL 전송을 위하여 휴대폰번호를 입력하며 입력된
                    정보는 저장되지 않습니다.
                  </MenuDropdownAppSpan>
                </MenuDropdownAppLi>

                <MenuDropdownAppLiTwice>
                  <MenuDropdownAppH2>2. QR코드로 앱설치하기</MenuDropdownAppH2>
                  <QrImgicon></QrImgicon>
                </MenuDropdownAppLiTwice>
              </MenuDropdownAppOl>
            </MenuDropdownAppInstallGuide>
          </NavBtnUiDropdown>

          {/* 로그인 회원가입 */}
          <Fr>
            <GnbLoginBtn href="/login">로그인</GnbLoginBtn>
            <GnbLoginBtn href="/signup">회원가입</GnbLoginBtn>
            <NavBtnUiDropdown>
              <BtnDropdown
                onMouseOver={() => setIsCallCenterHover(true)}
                onMouseOut={() => setIsCallCenterHover(false)}
              >
                고객센터
              </BtnDropdown>
              <MenuDropdown
                onMouseOver={() => setIsCallCenterHover(true)}
                onMouseOut={() => setIsCallCenterHover(false)}
                isCallCenterHover={isCallCenterHover}
              >
                <CustomerLi>
                  <CustomerA>공지사항</CustomerA>
                </CustomerLi>
                <CustomerLi>
                  <CustomerA>자주 묻는 질문</CustomerA>
                </CustomerLi>
                <CustomerLi>
                  <CustomerA>메일로 문의</CustomerA>
                </CustomerLi>
              </MenuDropdown>
            </NavBtnUiDropdown>
          </Fr>
        </InnerW>
      </TopNavigation>
      <SearchHeaderDesktop>
        <SearchHeaderDesktopBar>
          <SearchHeaderDesktopLogo>
            <IconIduslogo>
              <Iduslogo src="https://www.idus.com/resources/dist/images/logo.svg" />
              {/* <Iduslogo src={require("./logo.png")} /> */}
            </IconIduslogo>
          </SearchHeaderDesktopLogo>
          {/* 작품, 클래스 */}
          <SearchHeaderDesktopServiceNav>
            <ServiceActive>작품</ServiceActive>
            <Service>클래스</Service>
          </SearchHeaderDesktopServiceNav>
          {/* 검색바 */}
          <SearchInputDesktop>
            <SearchInputDesktopForm>
              <HeaderSearch
                onChange={(e) => {
                  setWord(e.target.value);
                  console.log(word);
                }}
              ></HeaderSearch>
              <SearchRelated>
                <SearchResultUl>
                  <SearchResultLi>
                    <SearchResultLiKeyword>첫번재 검색어</SearchResultLiKeyword>
                  </SearchResultLi>
                </SearchResultUl>
              </SearchRelated>
              {/* 검색 아이콘 */}
              <HeaderSearchLabel>
                <SearchInputDesktopSearchButton
                  type="button"
                  onClick={() => {
                    onSubmit();
                  }}
                >
                  <IdusIconSearch className="fa fa-search" />
                </SearchInputDesktopSearchButton>
              </HeaderSearchLabel>
            </SearchInputDesktopForm>
          </SearchInputDesktop>
          {/* 실시간 검색 */}
          <KeywordTrendingDesktop>
            <TrendingWordSlider>
              <TrendingSlideWordA>
                <TrendingSlideWordEm>1</TrendingSlideWordEm>
                민지쿠키
              </TrendingSlideWordA>
            </TrendingWordSlider>
          </KeywordTrendingDesktop>
          {/* 내 정보 */}
          <SearchHeaderProfileLinkNav>
            <ProfileA>
              <IconMypage className="far fa-user" />내 정보
            </ProfileA>
            <ProfileCartA>
              <ProfileBadge>0</ProfileBadge>
              <IdusIconCart className="fas fa-shopping-cart">
                {/* <i class="fas fa-shopping-cart"></i> */}
              </IdusIconCart>
              장바구니
            </ProfileCartA>
          </SearchHeaderProfileLinkNav>
        </SearchHeaderDesktopBar>
      </SearchHeaderDesktop>

      {/* 카테고리 */}
      <FullGnbScrollDiv>
        <InnerContainerGnb>
          <UiGnbUl>
            <UiGnbMenuLi>
              <MenuSpan
                onMouseOver={() => setIsCategoryHover(true)}
                onMouseOut={() => setIsCategoryHover(false)}
              >
                카테고리
              </MenuSpan>
              <CategorySubmenu
                onMouseOver={() => setIsCategoryHover(true)}
                onMouseOut={() => setIsCategoryHover(false)}
                isCategoryHover={isCategoryHover}
              >
                <CategorySubmenuUl>
                  <CategorySubmenuLi>
                    <CategorySubmenuA>디저트, 베이커리</CategorySubmenuA>
                  </CategorySubmenuLi>

                  <CategorySubmenuLi>
                    <CategorySubmenuA>음료(커피, 차)</CategorySubmenuA>
                  </CategorySubmenuLi>

                  <CategorySubmenuLi>
                    <CategorySubmenuA>전통주</CategorySubmenuA>
                  </CategorySubmenuLi>

                  <CategorySubmenuLi>
                    <CategorySubmenuA>수제반찬</CategorySubmenuA>
                  </CategorySubmenuLi>

                  <CategorySubmenuLi>
                    <CategorySubmenuA>그외 수제먹거리</CategorySubmenuA>
                  </CategorySubmenuLi>

                  <CategorySubmenuLi>
                    <CategorySubmenuA>농축수산물</CategorySubmenuA>
                  </CategorySubmenuLi>
                  <CategorySubmenuLi>
                    <CategorySubmenuA>의류</CategorySubmenuA>
                  </CategorySubmenuLi>
                </CategorySubmenuUl>
                <CategorySubmenuUl>
                  <CategorySubmenuLi>시계</CategorySubmenuLi>
                  <CategorySubmenuLi>섬유, 퀼트</CategorySubmenuLi>
                </CategorySubmenuUl>

                <CategorySubmenuUl>
                  <CategorySubmenuLi>꽃</CategorySubmenuLi>
                  <CategorySubmenuLi>캔들, 디퓨저, 방향제</CategorySubmenuLi>
                </CategorySubmenuUl>

                <CategorySubmenuUl>
                  <CategorySubmenuLi>휴대폰 케이스</CategorySubmenuLi>
                  <CategorySubmenuLi>전자기기 관련</CategorySubmenuLi>
                </CategorySubmenuUl>
              </CategorySubmenu>
              <UiGnbSubmenuDiv></UiGnbSubmenuDiv>
            </UiGnbMenuLi>

            <UiGnbMenuLi>
              <MenuA>홈</MenuA>
            </UiGnbMenuLi>

            <UiGnbMenuLi>
              <MenuA>오늘의 작품</MenuA>
            </UiGnbMenuLi>

            <UiGnbMenuLi>
              <MenuA>실시간 구매</MenuA>
            </UiGnbMenuLi>

            <UiGnbMenuLi>
              <MenuA>실시간 후기</MenuA>
            </UiGnbMenuLi>

            <UiGnbMenuLi>
              <MenuA>작가님 추천</MenuA>
            </UiGnbMenuLi>

            <UiGnbMenuLi>
              <MenuA>실시간 추천</MenuA>
            </UiGnbMenuLi>
          </UiGnbUl>
        </InnerContainerGnb>
      </FullGnbScrollDiv>
    </HeaderTag>
  );
}

const HeaderTag = styled.header`
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  display: block;

  &:after {
    content: "";
    display: block;
    width: 100%;
    padding-bottom: 40px;
  }
`;
const TopNavigation = styled.div`
  border-top: 0 none;
  background: #f5f5f5;
  color: #666;
  vertical-align: middle;
  height: 32px;
  width: 100%;
`;
const InnerW = styled.div`
  width: 1056px;
  margin: 0 auto;
  position: relative;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  -webkit-box-align: center;
  display: flex;
`;
const NavBtnUiDropdown = styled.div`
  display: inline-block;
  vertical-align: middle;
  padding: 0 13.5px;
  font-size: 11px;
  position: relative;
`;
const BtnDropdownReset = styled.input`
  cursor: pointer;
  padding: 0;
  background: transparent;
`;
const MenuDropdownAppInstallGuide = styled.section`
  display: none;
  position: absolute;
  width: auto;
  margin-top: 3px;
  margin-left: -33px;
  padding: 8px 12px;
  -webkit-box-shadow: 0 4px 8px 0 rgb(0 0 0 / 10%);
  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 10%);
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  border: solid 1px #d9d9d9;
  z-index: 111;
  background: #fff;
  width: 490px;
  padding: 24px;
  border: 1px solid #333;
  ${(props) =>
    props.isAppInstallHover &&
    css`
      display: block;
    `}

  &:before {
    content: "";
    position: absolute;
    border: 6px solid #d9d9d9;
    border-left-color: transparent;
    border-right-color: transparent;
    border-top-color: transparent;
    top: -12px;
    margin-left: -6px;
    border-bottom-color: #333;
    left: 75px;
  }

  &:after {
    content: "";
    position: absolute;
    border: 4px solid #fff;
    border-left-color: transparent;
    border-right-color: transparent;
    border-top-color: transparent;
    top: -8px;
    margin-left: -4px;
    left: 75px;
  }
`;

const MenuDropdownAppH1 = styled.h1`
  font-size: 18px;
  color: #333;
  border-bottom: 1px solid #333;
  padding-bottom: 13px;
`;

const SpIconImgAppicon = styled.span`
  height: 0;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  font-size: 0;
  line-height: 0;
  letter-spacing: 0;
  background-size: 787px 736px;
  background-image: url(https://www.idus.com/resources/dist/images/sp/sp-icon_1634026706070@2x.png);
  background-position: -689px -141px;
  width: 32px;
  padding-top: 32px;
  font-size: 10px;
  color: #666;
  margin-right: 8px;
`;

const MenuDropdownAppOl = styled.ol`
  overflow: hidden;
  list-style: none;
`;

const MenuDropdownAppLi = styled.li`
  padding: 4px 0;
  font-size: 11px;
  color: #666;
  float: left;
  width: 149px;

  &:first-child {
    margin-right: 10%;
    width: 238px;
  }
`;

const MenuDropdownAppH2 = styled.h2`
  font-size: 12px;
  color: #333;
  margin: 16px 0 0;
`;

const MenuDropdownAppForm = styled.form`
  margin: 16px 0 7px;
`;

const InputText = styled.label`
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
`;

const InputCellPhone = styled.input.attrs({
  placeholder: "'-' 없이 번호를 입력하세요",
})`
  -webkit-tap-highlight-color: transparent;
  background: #fff;
  font-size: 12px;
  line-height: 16px;
  border: 1px solid #acacac;
  box-sizing: border-box;
  padding: 2px 8px;
  border-radius: 2px;
  appearance: none;
  width: 180px;
  height: 29px;
`;

const BtnPoint = styled.button`
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  border-radius: 2px;
  text-align: center;
  white-space: nowrap;
  padding: 6px 12px;
  font-size: 12px;
  color: #fff;
  background: #ff7b30;
  border: 1px solid #ff7b30;
`;

const MenuDropdownAppSpan = styled.span`
  font-size: 10px;
  color: #666;
`;

const MenuDropdownAppLiTwice = styled.li`
  float: left;
  width: 149px;
  padding: 4px 0;
  font-size: 11px;
  color: #666;
`;

const QrImgicon = styled.img`
  display: block;
  width: 112px;
  height: 112px;
  background-image: url(https://www.idus.com/resources/dist/images/qrcode.png);
`;

const Fr = styled.nav`
display: block;
float: right;
}
`;

const GnbLoginBtn = styled.a`
  display: inline-block;
  vertical-align: middle;
  padding: 0 13.5px;
  font-size: 11px;
`;

const BtnDropdown = styled.button`
  height: 20px;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`;

// 고객센터drop
const MenuDropdown = styled.ul`
  display: none;
  position: absolute;
  width: auto;
  margin-top: 3px;
  margin-left: -33px;
  padding: 8px 12px;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 10%);

  border-radius: 4px;
  border: solid 1px #d9d9d9;
  z-index: 111;
  background: #fff;

  ${(props) =>
    props.isCallCenterHover &&
    css`
      display: block;
    `}

  &:before {
    content: "";
    position: absolute;
    border: 6px solid #d9d9d9;
    border-left-color: transparent;
    border-right-color: transparent;
    border-top-color: transparent;
    top: -12px;
    left: 50%;
    margin-left: -6px;
  }

  &:after {
    content: "";
    position: absolute;
    border: 4px solid #fff;
    border-left-color: transparent;
    border-right-color: transparent;
    border-top-color: transparent;
    top: -8px;
    left: 50%;
    margin-left: -4px;
  }
`;

const CustomerLi = styled.li`
  padding: 4px 0;
  width: 80px;
  font-size: 11px;
  color: #666;
  list-style: none;
`;

const CustomerA = styled.a`
  padding: 0 !important;
  width: 100%;
  height: 100%;
`;

const SearchHeaderDesktop = styled.div`
  padding: 8px 0 4px;
`;
const SearchHeaderDesktopBar = styled.div`
  width: 1056px;
  margin: 0 auto;
  position: relative;
`;
const SearchHeaderDesktopLogo = styled.h1`
  display: inline-block;
  width: 128px;
  height: 29px;
  padding: 0 27px;
  vertical-align: middle;
  margin-top: -8px;
`;
const IconIduslogo = styled.a`
  width: 74px;
  height: 29px;
  text-decoration: none;
`;
const Iduslogo = styled.img`
  display: block;
  width: 72.5px;
  height: 29px;
`;

const SearchHeaderDesktopServiceNav = styled.nav`
  display: inline-block;
  vertical-align: middle;
`;

const ServiceActive = styled.a`
  color: #ff7b30;
  font-weight: bold;
  font-size: 18px;
  margin-right: 30px;
  display: inline-block;
`;

const Service = styled.a`
  font-size: 18px;
  color: #666666;
  margin-right: 30px;
  display: inline-block;
`;

const SearchInputDesktop = styled.div`
  position: relative;
  margin-right: 24px;
  display: inline-block;
  vertical-align: middle;
  border: 1px solid #ff7b30;
  border-radius: 4px;
  height: 40px;
`;
const SearchInputDesktopForm = styled.form`
  height: 100%;
  overflow: hidden;
  background: #ffffff;
  border-radius: 4px;
`;
const HeaderSearch = styled.input.attrs({
  placeholder: "상품을 검색해보세요",
})`
  padding: 0;
  margin: 0;
  border: 0 none;
  text-align: left;
  text-indent: 12px;
  font-size: 14px;
  width: 285px;
  height: 36px;
  vertical-align: middle;
  line-height: 36px;
`;

const SearchRelated = styled.div`
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
  border-radius: 2px;
  position: absolute;
  z-index: 200;
  background: #ffffff;
  top: 39px;
  left: 0;
  right: 0;
  padding: 8px 12px 0;
  max-height: 538px;
  overflow-y: auto;
  display: none;
`;

const SearchResultUl = styled.ul`
  list-style: none;
`;

const SearchResultLi = styled.li`
  position: relative;
  cursor: pointer;
  padding: 11px 0;
  color: #333333;
  display: flex;
  align-items: center;
`;

const SearchResultLiKeyword = styled.span`
  list-style: none;
  // display: block;
  display: -webkit-box;
  height: 16.8px;
  font-size: 12px;
  line-height: 1.4;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 6px;
`;

const HeaderSearchLabel = styled.label`
  display: inline-block;
  width: 42px;
  height: 100%;
  font-weight: bold;
`;
const SearchInputDesktopSearchButton = styled.button`
  width: 100%;
  height: 100%;
  color: #ffffff;
  border: 0 none;
  background: none;
  text-align: center;
  font-size: 16px;
  vertical-align: middle;
`;
const IdusIconSearch = styled.i`
  color: #ff7b30;
  font-size: 24px;
  line-height: 38px;
`;

const KeywordTrendingDesktop = styled.div`
  display: inline-block;
  vertical-align: middle;
  height: 21px;
  position: relative;
`;

const TrendingWordSlider = styled.button`
  position: relative;
  width: 220px;
  height: 21px;
  overflow: hidden;
`;

const TrendingSlideWordA = styled.a`
  position: absolute;
  top: 0;
  color: #666666;
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 13px;
  text-align: left;
`;

const TrendingSlideWordEm = styled.em`
  color: #333333;
  margin-right: 6px;
  font-weight: bold;
`;

const SearchHeaderProfileLinkNav = styled.nav`
  display: inline-block;
  margin-left: 74px;
`;
const ProfileA = styled.a`
  margin-left: 0;
  display: inline-block;
  position: relative;
  font-size: 10px;
  color: #666666;
  text-align: center;
  vertical-align: middle;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 2px;
  white-space: nowrap;
  line-height: 1.4;
`;
const IconMypage = styled.i`
  display: block;
  font-size: 26px;
  padding: 7px 3px 3px;
  color: #333333;
`;

const ProfileCartA = styled.a`
  display: inline-block;
  position: relative;
  margin-left: 20px;
  font-size: 10px;
  color: #666666;
  text-align: center;
  vertical-align: middle;
  box-sizing: border-box;
  border-radius: 2px;
  white-space: nowrap;
  line-height: 1.4;
`;

const ProfileBadge = styled.span`
  position: absolute;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  color: #ffffff;
  background: #ff7b30;
  text-align: center;
  line-height: 18px;
  right: -3px;
  top: 0;
`;

const IdusIconCart = styled.i`
  display: block;
  font-size: 26px;
  padding: 7px 3px 3px;
  color: #333333;
  font-style: normal;
`;

const FullGnbScrollDiv = styled.div`
  border-top: 1px solid #d9d9d9;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 20%), 0 1px 0 0 #d9d9d9;
  position: absolute;
  width: 100%;
  z-index: 99;
`;

const InnerContainerGnb = styled.div`
  width: 1056px;
  margin: 0 auto;
  position: relative;
  transition: height 0.3s ease;
`;

const UiGnbUl = styled.ul`
  left: 0px;
  touch-action: pan-y;
  user-select: none;
  -webkit-user-drag: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-size: 0;
  position: relative;
  background: #fff;
  text-align: center;
`;

const UiGnbMenuLi = styled.li`
  display: inline-block;
  font-size: 13px;
  color: #666;
  text-align: center;
  position: relative;
  cursor: pointer;
`;
const UiGnbSubmenuDiv = styled.i`
  display: none;
  position: absolute;
  width: 850px;
  min-height: 100px;
  top: 38px;
  left: -64px;
  z-index: 110;
  padding: 18px 0;
  box-shadow: 0 4px 4px 0 #00000033;
  border: solid 1px #d9d9d9;
  background-color: #fff;
  vertical-align: middle;
  color: #666;
`;

const MenuSpan = styled.span`
  display: inline-block;
  vertical-align: middle;
  padding: 10px 11px;
  color: #666;

  &:hover {
    color: #ff7b30;
  }
`;

const CategorySubmenu = styled.div`
  display: none;
  position: absolute;
  width: 850px;
  min-height: 100px;
  top: 38px;
  left: -64px;
  z-index: 110;
  padding: 18px 0;
  box-shadow: 0 4px 4px 0 #00000033;
  border: solid 1px #d9d9d9;
  background-color: #fff;

  &:after {
    border: 8px solid #fff;
    top: -16px;
    left: 89px;
  }

  &:before {
    border: 9px solid #d9d9d9;
    top: -18px;
    left: 88px;
  }

  &:before,
  :after {
    content: "";
    display: block;
    position: absolute;
    border-top-color: transparent;
    border-right-color: transparent;
    border-left-color: transparent;
  }

  ${(props) =>
    props.isCategoryHover &&
    css`
      display: block;
    `}
`;

const CategorySubmenuUl = styled.ul`
  color: #333;
  width: 25%;
  float: left;
  text-align: left;
  border-right: 1px solid #d9d9d9;
  padding: 0 18px;
  height: 100%;
  position: relative;
`;

const CategorySubmenuLi = styled.li`
  &:first-child {
    margin-top: 0;
  }
  font-size: 12px;
  line-height: 24px;
  margin-top: 8px;
  padding: 0 12px;
  position: relative;

  &:hover {
    background: #faece5;
  }
`;

const CategorySubmenuA = styled.a`
  display: inline-block;
  width: 100%;
`;

const MenuA = styled.a`
  display: inline-block;
  vertical-align: middle;
  padding: 10px 11px;
  color: #666;

  &:hover {
    color: #ff7b30;
  }
`;

export default Header;
