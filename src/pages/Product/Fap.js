import React from "react";
import styled from "styled-components";
import FaqAccordion from "./FaqAccordion";

function Faq() {
  return (
    <CourseDetailContainerFaq>
      <FAQSection>
        <FAQSectionTitle>FAQ</FAQSectionTitle>
        <FAQSectionDescription>
          강의에 대해 궁금한 점이 있으신가요?
        </FAQSectionDescription>
        <FAQSectionContent>
          <FaqAccordion
            id="1"
            title="레슨, 챕터, 토픽, 코스가 무엇인가요?"
            contents={[
              <FAQSectionContentP>
                코드잇 강의 구조는 다음과 같이 이루어져 있어요.
              </FAQSectionContentP>,
              <FAQSectionContentStrong>
                레슨(강의/노트/퀴즈/과제) &lt; 챕터 &lt; 토픽 &lt; 코스
              </FAQSectionContentStrong>,
              <FAQSectionContentP>
                <FAQSectionContentStrong>레슨</FAQSectionContentStrong>은 동영상
                강의, 노트, 퀴즈, 과제를 나타내는 가장 작은 단위의 수업이에요.
                이를 묶어 놓은 것이
                <FAQSectionContentStrong>챕터</FAQSectionContentStrong>, 그리고
                챕터를 묶어 수강할 수 있도록 만든 것이{" "}
                <FAQSectionContentStrong>토픽</FAQSectionContentStrong>입니다.{" "}
                <FAQSectionContentStrong>코스</FAQSectionContentStrong>는 이
                모든 과정을 가장 효과적으로 학습할 수 있도록 단계별로 배치한
                것입니다.
              </FAQSectionContentP>,
            ]}
          />
          <FaqAccordion
            id="2"
            title="동영상 강의는 몇 분 정도인가요?"
            contents={[
              <FAQSectionContentP>
                코드잇 강의는 5분 내외의 짧은 영상으로 이루져있어요. 예상 수강
                일은 각 코스와 토픽에서 확인하실 수 있습니다.
              </FAQSectionContentP>,
            ]}
          />
          <FaqAccordion
            id="3"
            title="강의를 듣다가 궁금증이 생기면 어떻게 해야 하나요?"
            contents={[
              <FAQSectionContentP>
                레슨 하단
                <FAQSectionContentStrong>질문하기</FAQSectionContentStrong>를
                통해 궁금증을 해결해보세요.
                <FAQSectionContentStrong>
                  커뮤니티 질문 작성 팁!
                </FAQSectionContentStrong>
                을 참고하시면 상세한 답변이 달릴 확률이 올라갑니다.
              </FAQSectionContentP>,
            ]}
          />
          <FaqAccordion
            title="강의 내용을 다운로드할 수 있나요?"
            contents={[
              <FAQSectionContentP>
                아니요. 강의 내용은 다운로드가 불가능합니다. 다만 노트북,
                태플릿, 스마트 폰 등 다양한 기기에서 언제든지 코드잇 강의를
                수강하실 수 있습니다.
              </FAQSectionContentP>,
            ]}
          />
        </FAQSectionContent>
      </FAQSection>
    </CourseDetailContainerFaq>
  );
}

const CourseDetailContainerFaq = styled.div`
  width: 92%;
  max-width: 110rem;
  margin: 0 auto;
`;

const FAQSection = styled.div``;

const FAQSectionTitle = styled.div`
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: -0.51px;
  color: #333236;
  padding-left: 1rem;
  margin-bottom: 0.8rem;
  @media (min-width: 48em) {
    padding-left: 1.5rem;
    margin-bottom: 1.2rem;
    font-size: 2.2rem;
  }
`;
const FAQSectionDescription = styled.div`
  font-size: 1.4rem;
  letter-spacing: -0.32px;
  color: #a9abb7;
  padding-left: 1rem;
  margin-bottom: 1.5rem;

  @media (min-width: 48em) {
    padding-left: 1.5rem;
    margin-bottom: 3rem;
    font-size: 1.6rem;
    color: #333236;
  }
`;

const FAQSectionContent = styled.div``;

const FAQSectionContentP = styled.p``;

const FAQSectionContentStrong = styled.strong``;

export default Faq;
