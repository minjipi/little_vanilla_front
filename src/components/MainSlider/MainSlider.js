import React, { useState } from "react";
import styled, { css } from "styled-components";

function MainSlider(props) {
  return (
    <LegacySliderHeader>
      <LegacySliderTitle>{props.title}</LegacySliderTitle>
      {/* <LegacySliderControl>
        <LegacySliderPosition>
          <LegacySliderPositionCurrent>3</LegacySliderPositionCurrent>/
          <LegacySliderPositionTotal>5</LegacySliderPositionTotal>
        </LegacySliderPosition>
        <LegacySliderArrowButtonPrev>
          <LegacySliderArrowButtonIcon className="fas fa-chevron-left"></LegacySliderArrowButtonIcon>
        </LegacySliderArrowButtonPrev>
        <LegacySliderArrowButtonNext>
          <LegacySliderArrowButtonIcon className="fas fa-chevron-right"></LegacySliderArrowButtonIcon>
        </LegacySliderArrowButtonNext>
      </LegacySliderControl> */}
    </LegacySliderHeader>
  );
}

const LegacySliderHeader = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  display: table;
  table-layout: fixed;
  width: 100%;
  padding-top: 40px;
  margin-bottom: 24px;
  padding-bottom: 4px;
  border-bottom: 1px solid #d9d9d9;
`;

const LegacySliderTitle = styled.a`
  font-size: 20px;
  font-weight: 700;
  display: table-cell;
  vertical-align: middle;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 75%;
  color: #333333;
  text-decoration: none;
`;

const LegacySliderControl = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: right;
  font-size: 0;
  color: #999999;
`;

const LegacySliderPosition = styled.div`
  font-size: 14px;
  display: inline-block;
  vertical-align: middle;
  color: #999999;
  margin: 0 16px;
`;

const LegacySliderPositionCurrent = styled.span`
  color: #333333;
  font-weight: bold;
`;

const LegacySliderPositionTotal = styled.span``;

const LegacySliderArrowButtonPrev = styled.button`
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  text-align: center;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  outline: none;
`;

const LegacySliderArrowButtonNext = styled.button`
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  text-align: center;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  outline: none;
`;

const LegacySliderArrowButtonIcon = styled.i`
  display: inline-block;
  font-weight: bold;
  color: #9b9b9b;
  font-size: 10px;
  line-height: 16px;
`;

export default MainSlider;
