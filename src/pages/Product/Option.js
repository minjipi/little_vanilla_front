import React, { useState } from "react";
import styled, { css } from "styled-components";

function Option(props) {
  const [isSelectVisible, setIsSelectVisible] = useState(false);
  const [selectedVal, setSelectedVal] = useState("");

  return (
    <SGParentListOl className={isSelectVisible ? "active" : ""}>
      <li>
        <span>{props.optionData.title}</span>
        <AlignRightSpan>{selectedVal}</AlignRightSpan>
        <IdusIconArrowDown
          onClick={() => {
            setIsSelectVisible(!isSelectVisible);
          }}
          className={
            isSelectVisible ? "fas fa-chevron-up" : "fas fa-chevron-down"
          }
        />
      </li>
      <div></div>
      {isSelectVisible ? (
        <SGChildList className={isSelectVisible ? "active" : ""}>
          {props.optionData.select.map((select) => {
            return (
              <li>
                <span
                  onClick={() => {
                    setSelectedVal(select);
                    setIsSelectVisible(!isSelectVisible);
                  }}
                >
                  {select}
                </span>
              </li>
            );
          })}
        </SGChildList>
      ) : (
        ""
      )}
    </SGParentListOl>
  );
}
const AlignRightSpan = styled.span``;

const SGParentListOl = styled.ol`
  margin: 0 12px;

  &.active {
    border: 1px solid #333;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    margin-top: -2px;

    > li {
      -webkit-border-radius: 4px 4px 0 0;
      -moz-border-radius: 4px 4px 0 0;
      border-radius: 4px 4px 0 0;
      color: #333;
      background: #f5f5f5;
    }
  }

  @media (min-width: 720px) {
    :first-of-type {
      margin-top: 11px;
    }
  }

  > li {
    position: relative;
    padding: 12px;
    font-size: 12px;
    font-weight: bold;
    color: #acacac;
    -webkit-box-shadow: inset 0 -1px 0 0 #d9d9d9;
    -moz-box-shadow: inset 0 -1px 0 0 #d9d9d9;
    box-shadow: inset 0 -1px 0 0 #d9d9d9;
    vertical-align: middle;

    > span {
      display: inline-block;
      width: 30%;
      vertical-align: middle;
    }

    > ${AlignRightSpan} {
      width: 60%;
      font-size: 12px;
      text-align: right;
      color: #666;
      font-weight: normal;
    }
  }

  &.complete {
    > li {
      color: #666;
    }
  }
`;

const SGChildList = styled.ul`
  @media (min-width: 720px) {
    max-height: 140px;
    overflow-y: scroll;
  }

  &.active {
    -webkit-border-radius: 0 0 4px 4px;
    -moz-border-radius: 0 0 4px 4px;
    border-radius: 0 0 4px 4px;
  }

  > li {
    font-size: 12px;
    color: #333;
    background: #fff;
    padding: 12px;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    border-bottom: 1px solid #d9d9d9;

    &:last-child {
      -webkit-border-radius: 4px;
      -moz-border-radius: 4px;
      border-radius: 4px;
      border-bottom: 0px;
    }
  }
`;

const IdusIconArrowDown = styled.i`
  font-size: 12px;
  color: #333;
  position: absolute;
  right: 12px;
  top: 7px;
`;

export default Option;
