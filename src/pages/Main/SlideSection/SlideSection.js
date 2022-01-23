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

const SlickInitialized = styled.div`
  position: relative;
  display: block;
  box-sizing: border-box;
  user-select: none;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
`;

const SlickList = styled.div`
  position: relative;
  display: block;
  overflow: hidden;
  margin: 0;
  padding: 0;
`;

const SlickTrack = styled.div`
  transform: translate3d(0, 0, 0);
  opacity: 1;
  width: 5280px;
  left: 0px;
  position: relative;
  top: 0;
  left: 0;
  display: block;
  margin-left: auto;
  margin-right: auto;

  &:before {
    display: table;
    content: "";
  }
`;

const SsScSActive = styled.div`
  width: 1056px;
  display: block;
  float: left;
  height: 100%;
  min-height: 1px;
`;

const Outer = styled.div`
  overflow: hidden;
`;

const Inner = styled.div`
  overflow: hidden;
  width: 100000px;
  height: 100%;
  position: relative;
`;

export default SlideSection;