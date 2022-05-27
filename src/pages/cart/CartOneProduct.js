import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

function CartOneProduct(props) {
  //   console.log("===== " + JSON.stringify(props.data));

  const [isAllChecked, setIsAllChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);

  const agreeHandler = (checked, value) => {
    if (checked) {
      setCheckedItems([...checkedItems, value]);
    } else if (!checked && checkedItems.includes(value)) {
      setCheckedItems(checkedItems.filter((el) => el !== value));
    }
  };

  useEffect(() => {}, []);

  return (
    <>
      <div>
        <CartArtistItemList>
          <ul>
            <CartProductList>
              <CartProductListItem>
                <CartProductListItemPInfo>
                  <CartProductListItemCheckboxG>
                    <CartProductListItemCheckboxW>
                      <CheckBox>
                        <CheckBox>
                          <Check
                            type="checkbox"
                            value="provision"
                            onChange={(e) => {
                              agreeHandler(
                                e.currentTarget.checked,
                                e.target.value
                              );
                            }}
                            checked={
                              checkedItems.includes("provision") ? true : false
                            }
                          ></Check>
                        </CheckBox>
                      </CheckBox>
                    </CartProductListItemCheckboxW>
                    <CartProductListItemPI
                      src={
                        "http://localhost:8080/product/display?fileName=" +
                        props.data.filename
                      }
                    />
                  </CartProductListItemCheckboxG>
                  <CartProductListItemPInfoTextGroup>
                    <CartProductListItemPname>
                      {props.data.name}
                    </CartProductListItemPname>
                    <CartProductListItemC>주문시 제작</CartProductListItemC>
                  </CartProductListItemPInfoTextGroup>
                </CartProductListItemPInfo>
                <CartProductListItemOI>
                  <CartProductLists>
                    <CartOptionListItem>
                      <CartOptionListItemSplitL>
                        <CartOptionListItemOptionTxt>
                          • 엽서 동봉 • 무료배송
                        </CartOptionListItemOptionTxt>
                      </CartOptionListItemSplitL>
                      <CartOptionListItemSplitR>
                        <CartOptionListItemTotalP>
                          {props.data.salePrice}원
                        </CartOptionListItemTotalP>
                        <CartOptionListItemBtnG>
                          <CartOptionEditingButtonGroup>
                            <CartOptionEditingButtonGroupL>
                              <GroupLSet className="fas fa-solid fa-gear"></GroupLSet>
                            </CartOptionEditingButtonGroupL>
                            <CartOptionEditingButtonGroupR>
                              <GroupLSetX />
                            </CartOptionEditingButtonGroupR>
                          </CartOptionEditingButtonGroup>
                        </CartOptionListItemBtnG>
                      </CartOptionListItemSplitR>
                    </CartOptionListItem>
                  </CartProductLists>
                </CartProductListItemOI>

                <div>
                  <EditorProductOrderMessage>
                    <EditorProductForm autocomplete="off">
                      <CommonTextEditor>
                        <CommonTextEditorTxt placeholder="주문 요청사항을 입력해주세요"></CommonTextEditorTxt>
                        <CommonTextEditorMaxLength>
                          500
                        </CommonTextEditorMaxLength>
                      </CommonTextEditor>
                    </EditorProductForm>
                  </EditorProductOrderMessage>
                  <CommonTextEditorMaxBtn>
                    <CommonTextEditorMaxBtnM>저장</CommonTextEditorMaxBtnM>
                  </CommonTextEditorMaxBtn>
                </div>
              </CartProductListItem>
            </CartProductList>
          </ul>
        </CartArtistItemList>
        {/* </CartArtistItem>
        </CartArtistList> */}

        <VStickyPlaceholder />
        <CartListSticky>
          <br />
          <CartCheckout></CartCheckout>
        </CartListSticky>
      </div>
    </>
  );
}

const CartCheckout = styled.div`
  background-color: #ffffff;
`;

const CartListSticky = styled.div`
  position: static;
  top: auto;
  bottom: auto;
  left: auto;
  width: auto;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.9);
`;

const VStickyPlaceholder = styled.div`
  padding-top: 0px;
`;

const CommonTextEditorMaxBtnM = styled.button`
  width: 72px;
  height: 80px;
  font-weight: bold;
  line-height: 15px;
  padding: 0 20px;

  color: #d9d9d9;
  background: #f2f2f2;
  cursor: default;

  border: 1px solid #d9d9d9;
  font-size: 12px;
  display: inline-block;
  border-radius: 2px;
  box-shadow: 0 1px 3px 0 rgb(220 220 220 / 30%);
  box-sizing: border-box;

  text-align: center;
  text-decoration: none;
  transition: border-color 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  vertical-align: middle;
`;

const CommonTextEditorMaxBtn = styled.div`
  float: right;
`;

const CommonTextEditorMaxLength = styled.em`
  color: #999;
  position: absolute;
  bottom: 4px;
  right: 8px;
`;

const CommonTextEditorTxt = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 12px 30px 12px 12px;
  border-radius: 2px;
  resize: none;
  line-height: 1.33;
  border: 1px solid #ccc;
`;

const CommonTextEditor = styled.div`
  display: inline-block;
  width: 100%;
  height: 80px;
  overflow: hidden;
  position: relative;
`;

const EditorProductForm = styled.form``;

const EditorProductOrderMessage = styled.div`
  width: calc(100% - 80px);
  display: inline-block;
  vertical-align: middle;
`;

const CartOptionEditingButtonGroupR = styled.button`
  border-radius: 0;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  border: 1px solid #acacac;
  vertical-align: middle;
  padding: 0 8px;
  color: #acacac;
  background: #ffffff;
  font-size: 12px;
  font-weight: 400;
  line-height: 26px;
`;

const GroupLSetX = styled.i`
  display: inline-block;
  vertical-align: middle;
  color: #666666;
  font-size: 18px;

  &:before {
    content: "✖️";
  }
`;

const GroupLSet = styled.i`
  display: inline-block;
  vertical-align: middle;
  color: #666666;
  font-size: 18px;

  &:before {
    content: "⚙️";
  }
`;

const CartOptionEditingButtonGroupL = styled.button`
  border-radius: 0;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;

  border: 1px solid #acacac;
  vertical-align: middle;
  padding: 0 8px;
  color: #acacac;
  background: #ffffff;
  font-size: 12px;
  font-weight: 400;
  line-height: 26px;
`;

const CartOptionEditingButtonGroup = styled.div`
  display: inline-block;
  vertical-align: middle;
  font-size: 0;
`;

const CartOptionListItemBtnG = styled.div`
  display: inline-block;
  margin-left: 10px;
`;

const CartOptionListItemTotalP = styled.em`
  font-size: 12px;
  color: #333333;
`;

const CartOptionListItemSplitR = styled.div`
  display: table-cell;
  text-align: right;
  width: 25%;
  vertical-align: top;
  min-width: 85px;
`;

const CartOptionListItemOptionTxt = styled.em`
  display: inline-block;
  vertical-align: middle;
  width: 75%;
  min-height: 36px;
  font-size: 12px;
  color: #666666;
`;

const CartOptionListItemSplitL = styled.div`
  display: table-cell;
  width: 75%;
`;

const CartOptionListItem = styled.div`
  display: table;
  width: 100%;
  padding: 16px 0 18px 0;
  box-shadow: inset 0 -1px 0 0 #d9d9d9;

  &:last-child {
    box-shadow: none;
  }
`;

const CartProductLists = styled.div`
  margin-bottom: 12px;
`;

const CartProductListItemOI = styled.div`
  padding: 8px 18px 12px 126px;
`;

const CartProductListItemC = styled.em`
  color: #666666;
  display: block;
  font-size: 12px;
`;

const CartProductListItemPname = styled.a`
  font-size: 14px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 42px;
`;

const CartProductListItemPInfoTextGroup = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

const CartProductListItemPI = styled.img`
  display: inline-block;
  width: 72px;
  height: 72px;
  border-radius: 2px;
  vertical-align: middle;
`;

const CartProductListItemCheckboxW = styled.div`
  display: inline-block;
  padding-right: 12px;
`;

const CartProductListItemCheckboxG = styled.div`
  display: table-cell;
  width: 125px;
`;

const CartProductListItemPInfo = styled.div`
  display: table;
  width: 100%;
  height: 80px;
`;

const CartProductListItem = styled.div`
  width: 100%;
  max-width: 800px;
`;

const CartProductList = styled.div``;

const CartArtistItemList = styled.section`
  padding: 18px;
  word-break: break-all;
  display: block;
`;

const Check = styled.input`
  // -webkit-appearance: none;
  background: transparent;
  display: inline-block;
  // position: relative;
  height: 18px;
  width: 18px;
  vertical-align: middle;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border: 0;
  margin: 0;
`;

const CheckBox = styled.div`
  display: inline-block;
`;

export default CartOneProduct;
