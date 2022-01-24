import react, { useState } from "react";
import styled, { css } from "styled-components";
import MainSlider from "../../../components/MainSlider/MainSlider";

function SlideSection(props) {
  const [isAppInstallHover, setIsAppInstallHover] = useState(false);

  return (
    <PageSectionInnerSec>
      <MainRelatedProductSection>
        <MainRelatedProductSection>
          <LegacySliderStickyparent>
            <MainSlider title={props.title} />
            <Outer>
              <Inner>{props.contents}</Inner>
            </Outer>
          </LegacySliderStickyparent>
        </MainRelatedProductSection>
      </MainRelatedProductSection>
    </PageSectionInnerSec>
  );
}

const PageSectionInnerSec = styled.section`
  width: 1056px;
  margin: 0 auto;
  position: relative;
`;

const MainRelatedProductSection = styled.div``;

const LegacySliderStickyparent = styled.div``;

const Outer = styled.div`
  overflow: hidden;
`;

const Inner = styled.div`
  overflow: hidden;
  width: 100000px;
  height: 100%;
  position: relative;

  &:before {
    display: table;
    content: "";
  }
`;

export default SlideSection;
