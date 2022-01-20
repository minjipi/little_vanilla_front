import React, { useState } from "react";
import styled, { css } from "styled-components";

function Header() {
  const [isHover, setIsHover] = useState(false);

  return (
    <HeaderTag>
      <TopNavigation>
        <InnerW>
          <NavBtnUiDropdown>
            <BtnDropdownReset
              onMouseOver={() => setIsHover(true)}
              onMouseOut={() => setIsHover(false)}
              readOnly
              value="아이디어스 앱 설치하기"
            />
            <MenuDropdownAppInstallGuide isHover={isHover}>
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
                    정보는 저장되지 않습니다.zzzzzzz
                  </MenuDropdownAppSpan>
                </MenuDropdownAppLi>
              </MenuDropdownAppOl>
            </MenuDropdownAppInstallGuide>
          </NavBtnUiDropdown>
        </InnerW>
      </TopNavigation>
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
    props.isHover &&
    css`
      display: block;
    `}
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

export default Header;
