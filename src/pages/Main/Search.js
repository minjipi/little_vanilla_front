import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import axios from "axios";
import Header from "../../components/Nav/Header";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function Search() {
  const [searchData, setSearchData] = useState([]);
  const [selector, setSelector] = useState("");
  const [sort, setSort] = useState("");
  const [extend, setExtend] = useState(false);
  const [checked, setChecked] = useState("가격대 전체");
  const [catechecked, setCateChecked] = useState("가격대 전체");
  const [priceChecked, setPriceChecked] = useState("");

  const params = useParams();

  async function fetchData() {
    if (params.word === null) {
      console.log("검색어 없음.");
    }

    if (checked === "가격대 전체") {
    }

    if (checked === "가격대 전체") {
      if (priceChecked === "1만5천원이하") {
        console.log("priceChecked: " + priceChecked);
        const result = await axios.get(
          "http://localhost:8080/product/search?word=" +
            params.word +
            "&gte=0&lte=15000"
        );
        setSearchData(result.data.result);
      } else if (priceChecked === "1만5천원3만원") {
        console.log("priceChecked: " + priceChecked);
        const result = await axios.get(
          "http://localhost:8080/product/search?word=" +
            params.word +
            "&gte=15000&lte=30000"
        );
        setSearchData(result.data.result);
      } else {
        const result = await axios.get(
          "http://localhost:8080/product/search?word=" + params.word
        );
        setSearchData(result.data.result);
      }
    } else if (checked === "isDelFree") {
      if (priceChecked === "1만5천원이하") {
        console.log("priceChecked: " + priceChecked);
        const result = await axios.get(
          "http://localhost:8080/product/search?word=" +
            params.word +
            "&gte=0&lte=15000"
        );
        setSearchData(result.data.result);
      } else if (priceChecked === "1만5천원3만원") {
        console.log("priceChecked: " + priceChecked);
        const result = await axios.get(
          "http://localhost:8080/product/search?word=" +
            params.word +
            "&gte=15000&lte=30000"
        );
        setSearchData(result.data.result);
      } else {
        const result = await axios.get(
          "http://localhost:8080/product/search?word=" +
            params.word +
            "&isDelFree=1"
        );
        setSearchData(result.data.result);
      }
    }
  }

  useEffect(() => {
    fetchData();
  }, [checked, priceChecked]);

  const handleClickRadioButton = () => {
    fetchData();
  };

  return (
    <>
      <Header />
      <DimmedBackground />
      <Contents>
        <InnerWMobileFull>
          <UiTabGroup>
            <UiTabGroupTab className="active">
              <TxtDesktop>
                <Em>"{params.word}"</Em>에 대한 작품 검색 결과
              </TxtDesktop>
              <TextMobile>작품 검색결과</TextMobile>
            </UiTabGroupTab>

            <UiTabGroupTab>
              <TxtDesktop>
                <Em>"{params.word}"</Em>에 대한 클래스 검색 결과
              </TxtDesktop>
              <TextMobile>클래스 검색결과</TextMobile>
            </UiTabGroupTab>
          </UiTabGroup>

          <SearchFilter>
            <ProductFilter>
              <DesktopProductFilter>
                <DesktopProductFilterGroup>
                  <DesktopProductFilterColumn>
                    <DesktopRadioFilterRow>
                      <DesktopRadioFilterRowHead>
                        배송비
                      </DesktopRadioFilterRowHead>
                      <DesktopRadioFilterRowBody>
                        <DesktopRadioFilterRowItem>
                          <BaseRadio type="radio">
                            <BaseRadioBtn
                              type="radio"
                              value="가격대 전체"
                              checked={checked === "가격대 전체"}
                              onChange={() => {
                                setChecked("가격대 전체");
                                handleClickRadioButton(checked);
                                console.log(
                                  "onChange 발생. " + "checked: " + checked
                                );
                              }}
                            ></BaseRadioBtn>
                            <BaseRadioLabel></BaseRadioLabel>
                          </BaseRadio>

                          <DesktopRadioFilterRowLabel>
                            전체
                          </DesktopRadioFilterRowLabel>
                        </DesktopRadioFilterRowItem>
                        {/*  */}
                        <DesktopRadioFilterRowItem>
                          <BaseRadio type="radio">
                            <BaseRadioBtn
                              type="radio"
                              value="isFreeDel"
                              checked={checked === "isDelFree"}
                              onChange={() => {
                                setChecked("isDelFree");
                                handleClickRadioButton(checked);
                                console.log(
                                  "onChange 발생. " + "checked: " + checked
                                );
                              }}
                            ></BaseRadioBtn>
                            <BaseRadioLabel></BaseRadioLabel>
                          </BaseRadio>

                          <DesktopRadioFilterRowLabel>
                            무료배송만 보기
                          </DesktopRadioFilterRowLabel>
                        </DesktopRadioFilterRowItem>
                      </DesktopRadioFilterRowBody>
                    </DesktopRadioFilterRow>
                    {/*  */}
                    {/*  */}
                    <DesktopRadioFilterRow>
                      <DesktopRadioFilterRowHead>
                        가격대
                      </DesktopRadioFilterRowHead>
                      <DesktopRadioFilterRowBody>
                        <DesktopRadioFilterRowItem>
                          <FilterItem>
                            <CheckBox>
                              <InputCheckBox>
                                <CheckcheckBox
                                  type="checkbox"
                                  autoComplete="off"
                                  onChange={() => {
                                    setPriceChecked("1만5천원이하");
                                  }}
                                  checked={priceChecked === "1만5천원이하"}
                                />
                              </InputCheckBox>
                              <CheckBoxLabel>1만5천원 이하</CheckBoxLabel>
                            </CheckBox>
                          </FilterItem>
                        </DesktopRadioFilterRowItem>

                        <DesktopRadioFilterRowItem>
                          <FilterItem>
                            <CheckBox>
                              <InputCheckBox>
                                <CheckcheckBox
                                  type="checkbox"
                                  autoComplete="off"
                                  onChange={() => {
                                    setPriceChecked("1만5천원3만원");
                                  }}
                                  checked={priceChecked === "1만5천원3만원"}
                                />
                              </InputCheckBox>
                              <CheckBoxLabel>1만5천원~3만원</CheckBoxLabel>
                            </CheckBox>
                          </FilterItem>
                        </DesktopRadioFilterRowItem>
                      </DesktopRadioFilterRowBody>
                    </DesktopRadioFilterRow>

                    <DesktopCheckBoxFilterRow
                      className={extend === true ? "extend" : ""}
                    >
                      <DesktopRadioFilterRowHead>
                        <DesktopRadioFilterRowHeadInner>
                          카테고리
                        </DesktopRadioFilterRowHeadInner>
                        <FilterRowExtendBtn
                          onClick={() => {
                            console.log(extend);
                            setExtend(!extend);
                          }}
                        >
                          {extend === true ? "-" : "+"}
                        </FilterRowExtendBtn>
                      </DesktopRadioFilterRowHead>

                      <DesktopRadioFilterRowBody>
                        {/* 1 */}
                        <DesktopRadioFilterRowItem>
                          <FilterItem>
                            <CheckBox>
                              <InputCheckBox>
                                <CheckcheckBox
                                  type="checkbox"
                                  autoComplete="off"
                                  onChange={() => {
                                    setCateChecked("디저트베이커리떡");
                                  }}
                                  checked={catechecked === "디저트베이커리떡"}
                                />
                              </InputCheckBox>
                              <CheckBoxLabel>
                                디저트, 베이커리, 떡
                              </CheckBoxLabel>
                            </CheckBox>
                          </FilterItem>
                        </DesktopRadioFilterRowItem>
                        {/* 2 */}
                        <DesktopRadioFilterRowItem>
                          <FilterItem>
                            <CheckBox>
                              <InputCheckBox>
                                <CheckcheckBox
                                  type="checkbox"
                                  autoComplete="off"
                                  onChange={() => {
                                    setCateChecked("음료");
                                  }}
                                  checked={catechecked === "음료"}
                                />
                              </InputCheckBox>
                              <CheckBoxLabel>음료(커피, 차 등)</CheckBoxLabel>
                            </CheckBox>
                          </FilterItem>
                        </DesktopRadioFilterRowItem>

                        {/* 3 */}
                        <DesktopRadioFilterRowItem>
                          <FilterItem>
                            <CheckBox>
                              <InputCheckBox>
                                <CheckcheckBox
                                  type="checkbox"
                                  autoComplete="off"
                                />
                              </InputCheckBox>
                              <CheckBoxLabel>1만5천원 이하</CheckBoxLabel>
                            </CheckBox>
                          </FilterItem>
                        </DesktopRadioFilterRowItem>

                        {/* 4 */}
                        <DesktopRadioFilterRowItem>
                          <FilterItem>
                            <CheckBox>
                              <InputCheckBox>
                                <CheckcheckBox
                                  type="checkbox"
                                  autoComplete="off"
                                />
                              </InputCheckBox>
                              <CheckBoxLabel>1만5천원 이하</CheckBoxLabel>
                            </CheckBox>
                          </FilterItem>
                        </DesktopRadioFilterRowItem>

                        {/* 5 */}
                        <DesktopRadioFilterRowItem>
                          <FilterItem>
                            <CheckBox>
                              <InputCheckBox>
                                <CheckcheckBox
                                  type="checkbox"
                                  autoComplete="off"
                                />
                              </InputCheckBox>
                              <CheckBoxLabel>1만5천원 이하</CheckBoxLabel>
                            </CheckBox>
                          </FilterItem>
                        </DesktopRadioFilterRowItem>

                        {/* 6 */}
                        <DesktopRadioFilterRowItem>
                          <FilterItem>
                            <CheckBox>
                              <InputCheckBox>
                                <CheckcheckBox
                                  type="checkbox"
                                  autoComplete="off"
                                />
                              </InputCheckBox>
                              <CheckBoxLabel>1만5천원 이하</CheckBoxLabel>
                            </CheckBox>
                          </FilterItem>
                        </DesktopRadioFilterRowItem>

                        {/* 7 */}
                        <DesktopRadioFilterRowItem>
                          <FilterItem>
                            <CheckBox>
                              <InputCheckBox>
                                <CheckcheckBox
                                  type="checkbox"
                                  autoComplete="off"
                                />
                              </InputCheckBox>
                              <CheckBoxLabel>Last</CheckBoxLabel>
                            </CheckBox>
                          </FilterItem>
                        </DesktopRadioFilterRowItem>

                        {/*  */}
                        {/*  */}
                      </DesktopRadioFilterRowBody>
                    </DesktopCheckBoxFilterRow>
                  </DesktopProductFilterColumn>
                </DesktopProductFilterGroup>

                <DesktopProductFilterBottom>
                  <OnlyImgBtn type="button">
                    <OnlyImgBox>
                      <CheckBox>
                        <CheckBox>
                          <CheckBoxInput
                            type="checkbox"
                            autoComplete="off"
                          ></CheckBoxInput>
                        </CheckBox>
                      </CheckBox>
                      <OnlyImgMarginL>이미지만 볼래요</OnlyImgMarginL>
                    </OnlyImgBox>
                  </OnlyImgBtn>
                  <DesktopProductFilterSort>
                    <SingleSelector>
                      <BaseSelector>
                        <BaseSelectorselector></BaseSelectorselector>
                        <BaseSelectorTriggerBtn
                          type="button"
                          onClick={() => setSelector(!selector)}
                        >
                          <BaseSelectorSelectedItem>
                            인기순
                          </BaseSelectorSelectedItem>
                          <i
                            className={
                              selector === true
                                ? "fas fa-chevron-up"
                                : "fas fa-chevron-down"
                            }
                          ></i>
                        </BaseSelectorTriggerBtn>
                        <BaseSelectorOptionItemList
                          className={selector === true ? "active" : ""}
                        >
                          <BaseSelectorOptionItem
                            onClick={() => {
                              sort = "최신순";
                              setSort(sort);
                            }}
                          >
                            최신순
                          </BaseSelectorOptionItem>
                        </BaseSelectorOptionItemList>
                      </BaseSelector>
                    </SingleSelector>
                  </DesktopProductFilterSort>
                </DesktopProductFilterBottom>
              </DesktopProductFilter>
            </ProductFilter>
          </SearchFilter>
        </InnerWMobileFull>

        {/*  */}
        <InnerW>
          <SearchResultList>
            {searchData &&
              searchData.map((product) => {
                return (
                  <SearchResultList key={product.idx} className="grid">
                    <SearchProductCard>
                      <SearchProductCard className="verticalProduct">
                        <CardThumbCover>
                          <Link to={"/product/" + product.idx}>
                            <CardThumbImg
                              filename={product.filename.split(",")[0]}
                            ></CardThumbImg>
                          </Link>
                          <CardInfoProductInfo>
                            {product.name}
                          </CardInfoProductInfo>
                        </CardThumbCover>
                      </SearchProductCard>
                    </SearchProductCard>
                  </SearchResultList>
                );
              })}
          </SearchResultList>
        </InnerW>
      </Contents>
    </>
  );
}

const FilterRowExtendBtn = styled.button`
  border: 1px solid #d9d9d9;
  width: 16px;
  height: 16px;
  line-height: 16px;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  color: #666666;
  font-weight: 900;
  float: right;
  margin-left: 8px;
  margin-right: 28px;
`;

const CardInfoProductInfo = styled.div`
  padding: 12px 8px;
  height: 204px;
`;

const CardThumbImg = styled.div`
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  width: 100%;
  height: auto;
  display: block;
  position: relative;
  background-image: url(http://localhost:8080/product/display?fileName=${(
    props
  ) => props.filename});
`;

const CardThumbCover = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 2px;
`;

const SearchProductCard = styled.div`
  width: 100%;
  &.verticalProduct {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    display: block !important;
    border-radius: 2px;
    transition: all 0.3s;
    flex-direction: column;
  }
`;

const SearchResultList = styled.div`
  &.grid {
    width: calc(25% - 16px);
    margin: 16px 0 0 16px;
  }
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  margin: -16px 0 0 -16px;
`;

const InnerW = styled.div`
  width: 1056px;
  margin: 0 auto;
  position: relative;
`;

const OnlyImgMarginL = styled.p`
  @media (min-width: 720px) {
    font-weight: bold;
  }
  margin-left: 6px;
  font-size: 12px;
  line-height: 1.5;
  color: #666666;
`;

const CheckBoxInput = styled.input`
  -webkit-appearance: none;
  background: transparent;
  display: inline-block;
  position: relative;
  height: 18px;
  width: 18px;
  vertical-align: middle;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border: 0;
  margin: 0;
  width: 14px;
  height: 14px;
  ine-height: 14px;

  &:before {
    cursor: pointer;
    content: "";
    display: inline-block;
    line-height: 16px;
    width: 16px;
    height: 16px;
    background: #fff;
    position: absolute;
    top: 0px;
    left: 0px;
    border: 1px solid #acacac;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    text-align: center;

    width: 12px;
    height: 12px;
    line-height: 14px;
  }
`;
const CheckBox = styled.div`
  display: inline-block;
`;

const OnlyImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OnlyImgBtn = styled.button`
  @media (min-width: 720px) {
    width: 120px;
    height: 32px;
    border-radius: 2px;
    border: solid 1px #d9d9d9;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  outline: none;
`;

const BaseSelectorOptionItem = styled.li`
  padding: 8px 12px;
  border-bottom: 1px solid #d9d9d9;
  transition: background-color 0.3s ease;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const BaseSelectorOptionItemList = styled.ul`
  z-index: 101;
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 0;
  max-height: 400px;
  overflow-y: auto;
  background: #ffffff;
  border: 1px solid #f1c333;
  border-top: 0 none;
  border-bottom: 0 none;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  cursor: pointer;

  &.active {
    height: auto;
    border-bottom: 1px solid #f1c333;
  }
`;

const BaseSelectorSelectedItem = styled.span`
  display: inline-block;
  vertical-align: middle;
  width: 90%;
  padding-right: 12px;
`;

const BaseSelectorTriggerBtn = styled.button`
  // outline: none;
  padding: 0px 12px;
  line-height: 30px;
  margin: 0;
  position: relative;
  width: 100%;
  border: 1px solid #b4b4b4;
  border-radius: 2px;
  transition: border 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BaseSelectorselector = styled.select`
  display: none;
`;

const BaseSelector = styled.div`
  width: 100%;
  color: #333333;
  position: relative;
  display: inline-block;
  transition: opacity 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
`;

const SingleSelector = styled.div`
  width: 100%;
  display: inline-block;
`;

const DesktopProductFilterSort = styled.div`
  display: inline-block;
  width: 160px;
`;

const DesktopRadioFilterRowLabel = styled.span``;

const BaseRadioLabel = styled.span`
  color: #333333;
  font-size: 12px;
  padding-left: 4px;
`;
const BaseRadioBtn = styled.input`
  width: 11px;
  height: 8px;
  font-size: 14px;
  position: relative;

  margin: 0;
  background: #ffffff;
  vertical-align: middle;

  &:before {
    width: 15px;
    height: 18px;
    color: #f1c333;
  }
`;
const BaseRadio = styled.label``;

const CheckBoxLabel = styled.span`
  color: #333333;
  font-size: 12px;
  letter-spacing: -0.2px;
  margin-left: 4px;
`;

const CheckcheckBox = styled.input`
  width: 14px;
  height: 14px;

  &:before {
    width: 12px;
    height: 12px;
    line-height: 14px;
  }
`;

const InputCheckBox = styled.div`
  display: inline-block;
`;
const FilterItem = styled.div`
  display: flex;
`;
const DesktopRadioFilterRowHeadInner = styled.div`
  display: flex;
`;

const DesktopCheckBoxFilterRow = styled.div`
  &.extend {
    height: initial;
    overflow: visible;
  }
  display: flex;
  height: 48px;
  overflow: hidden;
  padding-left: 24px;
  font-size: 12px;
  color: #333333;
  border-bottom: 1px solid #f5f5f5;

  &:last-child {
    border: none;
  }
`;

const DesktopRadioFilterRowItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: calc(100% / 6);
  height: 48px;
`;

const DesktopRadioFilterRowHead = styled.div`
  display: flex;
  align-items: center;
  color: #999;
  width: 10%;
`;

const DesktopRadioFilterRowBody = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: start;
  align-items: center;
`;

const DesktopRadioFilterRow = styled.div`
  ${DesktopRadioFilterRowLabel} {
    color: #333333;
    font-size: 12px;
    letter-spacing: -0.2px;
    margin-left: 4px;
  }

  display: flex;
  height: 48px;
  overflow: hidden;
  padding-left: 24px;
  font-size: 12px;
  color: #333333;
  border-bottom: 1px solid #f5f5f5;
`;

const DesktopProductFilterGroup = styled.div`
  border-bottom: 1px solid #d9d9d9;
  border-left: 1px solid #d9d9d9;
  border-right: 1px solid #d9d9d9;
`;

const DesktopProductFilterColumn = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`;

const DesktopProductFilterBottom = styled.div`
  height: 48px;
  margin-top: 26px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DesktopProductFilter = styled.div``;

const ProductFilter = styled.div``;

const SearchFilter = styled.div``;

const TextMobile = styled.span`
  display: none;
`;

const Em = styled.em``;

const TxtDesktop = styled.span`
  @media (min-width: 720px) {
    display: inline;
  }
  display: none;
`;

const UiTabGroupTab = styled.span`
  &.active {
    ${Em} {
      color: #333;
      font-weight: bold;
    }
    background: #fff;
    color: #acacac;
    border-bottom-width: 1px;
    border-bottom-color: #fff;
  }

  ${Em} {
    font-weight: bold;
  }

  &:first-child {
    border-right: 0px;
  }

  padding: 20px 0 17px;
  display: inline-block;
  vertical-align: middle;
  width: 50%;
  font-size: 16px;
  text-align: center;
  color: #acacac;
  border: 1px solid #d9d9d9;
  border-bottom-color: #d9d9d9;
  background-color: #f5f5f5;
`;

const UiTabGroup = styled.nav`
  @media (min-width: 720px) {
    margin-top: 15px;
  }

  font-size: 0;
  display: inline-block;
  width: 100%;
  color: #333;
  background: #f5f5f5;
`;

const InnerWMobileFull = styled.div`
  width: 1056px;
  margin: 0 auto;
  position: relative;
`;

const Contents = styled.div`
  padding-bottom: 64px;
  background: #fff;
`;

const DimmedBackground = styled.div`
  display: none;
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: #333;
  opacity: 0.5;
  z-index: 150;
`;

export default Search;
