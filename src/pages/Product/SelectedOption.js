import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

function SelectedOption(props) {
  let totalPrice = 0;

  const minusNum = () => {
    props.isTotalValue[props.index].num =
      props.isTotalValue[props.index].num - 1;
    props.setIsTotalValue(props.isTotalValue);
    props.setTotalPrice(props.totalPrice - totalPrice);
  };

  return (
    <SelectedOptionsD>
      <OptionCardD>
        <p>
          {props.isTotalValue[props.index].selected.map((val) => {
            return <>{val.name + " / "}</>;
          })}
        </p>
        <OptionCardlignerD>
          <OptionCardCounterD>
            <UiMiniBtn
              type="button"
              className={
                props.isTotalValue[props.index].num === 1 ? "disabled" : ""
              }
              onClick={() => {
                props.isTotalValue[props.index].num === 1 ? <></> : minusNum();
              }}
              type="button"
            >
              -<i></i>
            </UiMiniBtn>
            <input
              type="number"
              min="1"
              max="999"
              value={props.isTotalValue[props.index].num}
              onChange={(e) => props.isTotalValue[props.index].num}
            />
            <UiMiniBtn
              onClick={() => {
                props.isTotalValue[props.index].num =
                  props.isTotalValue[props.index].num + 1;
                props.setIsTotalValue(props.isTotalValue);
                props.setTotalPrice(props.totalPrice + totalPrice);
              }}
              type="button"
            >
              +<i></i>
            </UiMiniBtn>
          </OptionCardCounterD>
          <div>
            <span>
              <b>
                {props.isTotalValue[props.index].selected.map((item) => {
                  totalPrice += item.price;
                })}
                {totalPrice * props.isTotalValue[props.index].num}
              </b>
              원
            </span>
            <UiMiniBtnClose
              type="button"
              onClick={() => {
                props.onRemove(props.isTotalValue[props.index].id);
              }}
            >
              <i className="fas fa-times" />
            </UiMiniBtnClose>
          </div>
        </OptionCardlignerD>
      </OptionCardD>
    </SelectedOptionsD>
  );
}

const OptionCardD = styled.div`
  background: #f5f5f5;
  display: table;
  width: 100%;
  padding: 16px;
  border-top: 1px solid #ccc;

  &:last-child {
    border-bottom: 1px solid #ccc;
  }

  p {
    color: #666666;
    width: 100%;
    display: block;
    font-size: 12px;
    white-space: pre-line;
  }

  b {
    font-weight: bold;
    color: #666666;
  }
`;

const SelectedOptionsD = styled.div`
  max-height: 175px;
  overflow-y: auto;

  ${OptionCardD} {
    &:first-child {
      margin-top: 5px;
    }
  }
`;

const OptionCardlignerD = styled.div`
  margin-top: 8px;
  display: table;
  width: 100%;

  > * {
    &:last-child {
      text-align: right;
    }

    vertical-align: middle;
    display: table-cell;
  }
`;

const UiMiniBtn = styled.button`
  font-size: 10px;
  padding: 0 8px;
  line-height: 20px;

  box-shadow: 0 1px 3px 0 hsl(0deg 0% 86% / 30%);
  font-weight: 400;
  box-sizing: border-box;
  display: inline-block;
  border-radius: 2px;
  background: #fff;
  border: 1px solid #d9d9d9;
  vertical-align: middle;
  transition: background-color 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  transition: border-color 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  margin: 0;
  padding: 0;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  color: #333;
  cursor: pointer;
`;

const UiMiniBtnClose = styled(UiMiniBtn)`
  line-height: 22px;
  padding: 0 5px;
  margin-left: 5px;

  i {
    font-size: 12px;
  }
`;

const OptionCardCounterD = styled.div`
  display: inline-block;
  vertical-align: middle;
  font-size: 0;
  box-shadow: none;

  > * {
    display: inline-block;
    vertical-align: middle;
  }

  input {
    font-size: 10px;
    width: 40px;
    line-height: 22px;
    height: 24px;
    border: 1px solid #acacac;
    border-left: 0;
    border-right: 0;
    padding: 0;
    text-align: center;
    -webkit-border-radius: 0;
    border-radius: 0;
    box-shadow: none !important;

    &::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      margin: 0;
      -webkit-appearance: none;
    }
  }
  ${UiMiniBtn} {
    width: 24px;
    height: 24px;
    padding: 0;
    text-align: center;
    line-height: 1;
    border: 1px solid #acacac;

    &:first-child {
      border-radius: 2px 0 0 2px;
    }

    &:last-child {
      border-radius: 0 2px 2px 0;
    }

    &.disabled {
      background-color: #f5f5f5;
      color: #d9d9d9;
    }
  }

  ${OptionCardlignerD} {
    > * {
      vertical-align: middle;
      display: table-cell;
    }
  }
`;

export default SelectedOption;
