import React, { useState } from "react";
import styled, { css } from "styled-components";

function FaqAccordion(props) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <FAQSectionAccordion isClicked={isClicked}>
      <FAQSectionAccordionTitle
        onClick={() => {
          setIsClicked(!isClicked);
        }}
      >
        <FAQSectionAccordionContent>
          <FAQSectionAccordionContentHeader>
            <div>Q</div>
          </FAQSectionAccordionContentHeader>
          <FAQSectionAccordionContentTitle isClicked={isClicked}>
            <div>{props.title}</div>
          </FAQSectionAccordionContentTitle>
          <FAQSectionAccordionContentIconWrapper>
            <FAQSectionAccordionContentIcon
              isClicked={isClicked}
              className={isClicked ? "fas fa-minus" : "fas fa-plus"}
            />
          </FAQSectionAccordionContentIconWrapper>
        </FAQSectionAccordionContent>
      </FAQSectionAccordionTitle>
      <FAQSectionAccordionChild>
        <FAQSectionAccordionChildAnswer isClicked={isClicked}>
          <FAQSectionAccordionChildContent>
            {props.contents.map((data, index) => {
              return <div key={index}>{data}</div>;
            })}
          </FAQSectionAccordionChildContent>
        </FAQSectionAccordionChildAnswer>
      </FAQSectionAccordionChild>
    </FAQSectionAccordion>
  );
}

const FAQSectionAccordion = styled.div`
  -webkit-box-shadow: 0 0.2rem 1rem 0 rgb(74 69 82 / 5%);
  box-shadow: 0 0.2rem 1rem 0 rgb(74 69 82 / 5%);
  padding: 2rem 1.6rem;
  margin-bottom: 1.5rem;
  border-radius: 0.8rem;
  background-color: #fff;
  max-height: 12.4rem;
  overflow: hidden;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  @media (min-width: 62em) {
    padding: 2rem 2.5rem 2rem 2.7rem;
  }

  @media (min-width: 48em) {
    padding: 2rem 2rem 2rem 1.7rem;
  }
  ${(props) =>
    props.isClicked &&
    css`
      max-height: 200rem;
    `}
`;

const FAQSectionAccordionTitle = styled.b`
  cursor: pointer;
`;
const FAQSectionAccordionContent = styled.div`
  display: flex;
  align-items: stretch;
  align-content: center;
`;
const FAQSectionAccordionContentHeader = styled.div`
  margin: 0.1rem 0 0;
  font-size: 1.6rem;
  font-weight: 500;
  color: #7c00ff;
  width: 2.6rem;
  @media (min-width: 48em) {
    width: 2.3rem;
  }
`;
const FAQSectionAccordionContentTitle = styled.div`
  flex-grow: 1;
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: -0.35px;
  color: #333236;
  @media (min-width: 48em) {
    font-size: 1.6rem;
  }
  ${(props) =>
    props.isClicked &&
    css`
      color: #7c00ff;
    `}
`;
const FAQSectionAccordionContentIconWrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  margin-left: 3rem;
  flex-shrink: 0;
`;
const FAQSectionAccordionContentIcon = styled.i`
  width: 1.5rem;
  height: 1.5rem;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;

  ${(props) =>
    props.isClicked &&
    css`
      color: #7c00ff;
    `}
`;

const FAQSectionAccordionChild = styled.ul``;
const FAQSectionAccordionChildAnswer = styled.li`
  font-size: 1.4rem;
  line-height: 1.57;
  color: #333236;
  max-height: 0;
  overflow: auto;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;

  ${(props) =>
    props.isClicked &&
    css`
      margin-top: 1.6rem;
      max-height: 20rem;
    `}

  @media (min-width: 48em) {
    font-size: 1.5rem;
    line-height: 1.47;
  }
`;

const FAQSectionAccordionChildContent = styled.div`
  padding-top: 1.7rem;
  margin-right: 1rem;
  font-size: 1.4rem;
  line-height: 1.64;
  color: #69666d;
  border-top: 0.1rem solid #dde0ea;
  margin-left: 2.6rem;

  @media (min-width: 48em) {
    font-size: 1.5rem;
    line-height: 1.6;
    margin-left: 2.3rem;
  }
`;

export default FaqAccordion;
