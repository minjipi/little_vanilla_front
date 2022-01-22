import React from "react";
import styled from "styled-components";
import Header from "../../components/Nav/Header";

function Main() {
  return (
    <>
      <Header />
      <Contents></Contents>
    </>
  );
}

const Contents = styled.div`
  padding-bottom: 64px;
  background: #fff;
`;

export default Main;
