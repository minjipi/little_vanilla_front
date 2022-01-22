import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterTag>
      <FullW>
        <NavLinks>
          <MShow to="/test">이용 약관</MShow>
          <span>|</span>
          <MShow to="/test">개인정보 처리방침</MShow>
          <span>|</span>
          <MShow to="/test">공지사랑</MShow>
          <span>|</span>
          <MShow to="/test">자주 묻는 질문</MShow>
          <span>|</span>
          <MShow to="/test">이벤트</MShow>
          <span>|</span>
          <MShow to="/test">입점문의</MShow>
          <span>|</span>
          <MShow to="/test">About idus</MShow>
          <span>|</span>
          <MShow to="/test">인재영입</MShow>
        </NavLinks>
      </FullW>
    </FooterTag>
  );
}

const FooterTag = styled.footer`
  color: #666;
  position: relative;
  background: #fff;
  z-index: 99;
`;

const FullW = styled.div`
  width: 100%;
  border-bottom: 1px solid #acacac;
  border-top: 3px solid #ff7b30;
`;

const NavLinks = styled.nav`
  text-align: center;
`;

const MShow = styled.a`
  display: inline-block;
  padding: 10px 14px 11px;
  font-size: 12px;
  color: #666;
  letter-spacing: -0.5px;
  @media (max-width: 719px) {
    padding-left: 0;
}
  @media (max-width: 719px) {
  {
    display: inline-block !important;
  }
  @media (max-width: 719px) {
    padding-top: 16px;
    padding-bottom: 16px px;
  }
  @media (max-width: 719px) {
    display: none;
  }
`;

export default Footer;
