import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";

function CartList() {
  return (
    <>
      <div>
        <StickyPlaceHolder />
        <HandleChangeStickTop></HandleChangeStickTop>
        <CartArtistList />
        <CartArtistItem>
          <CartArtistItemHeader>
            <CartArtistItemHLabel>
              <CheckBox>
                <CheckBox>
                  <Check type="checkbox"></Check>
                </CheckBox>
              </CheckBox>
              <CartArtistItemTitle>어리틀바닐라</CartArtistItemTitle>
            </CartArtistItemHLabel>
          </CartArtistItemHeader>
          <CartArtistItemList>
            <ul>
              <CartProductList>
                <CartProductListItem>
                  <CartProductListItemPInfo>
                    <CartProductListItemCheckboxG>
                      <CartProductListItemCheckboxW>
                        <CheckBox>
                          <CheckBox>
                            <Check type="checkbox"></Check>
                          </CheckBox>
                        </CheckBox>
                      </CartProductListItemCheckboxW>
                      <CartProductListItemPI src="https://image.idus.com/image/files/7e014def875d47f5a85b10cd7a013296_320.jpg" />
                    </CartProductListItemCheckboxG>
                    <CartProductListItemPInfoTextGroup>
                      <CartProductListItemPname>
                        🤍🎀베이비핑크 칼사이트 팔찌🤍
                      </CartProductListItemPname>
                      <CartProductListItemC>주문시 제작</CartProductListItemC>
                    </CartProductListItemPInfoTextGroup>
                  </CartProductListItemPInfo>
                  <CartProductListItemOI>
                    <CartProductLists>
                      <CartOptionListItem>
                        <CartOptionListItemSplitL>
                          <CartOptionListItemOptionTxt>
                            • 착용방식 : 우레탄줄 (늘어나는 줄) • 실버볼 포인트
                            유무 : 실버볼 O • 사이즈 : 14cm
                          </CartOptionListItemOptionTxt>
                        </CartOptionListItemSplitL>
                        <CartOptionListItemSplitR>
                          <CartOptionListItemTotalP>
                            18,000원
                          </CartOptionListItemTotalP>
                          <CartOptionListItemBtnG>
                            <CartOptionEditingButtonGroup>
                              <CartOptionEditingButtonGroupL>
                                <GroupLSet className="fas fa-solid fa-gear"></GroupLSet>
                              </CartOptionEditingButtonGroupL>
                              <CartOptionEditingButtonGroupR>
                                <GroupLSet className="fas fa-times" />
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
          <CartArtistItemSec>
            <CartArtistItemLab>작품가격</CartArtistItemLab>
            <CartArtistItemPrice>18,000원</CartArtistItemPrice>
          </CartArtistItemSec>
          <CartArtistItemSec>
            <CartArtistItemLab>배송비</CartArtistItemLab>
            <CartArtistItemPrice>
              <ShippingPrice>
                <ShippingPriceP>2,500원</ShippingPriceP>
                <ShippingPriceDesc>30,000원 이상 무료배송</ShippingPriceDesc>
              </ShippingPrice>
            </CartArtistItemPrice>
          </CartArtistItemSec>
        </CartArtistItem>
      </div>
      <VStickyPlaceholder />
      <CartListSticky>
        <CartCheckboxControl>
          <CheckBox>
            <CheckBox>
              <Check type="checkbox"></Check>
            </CheckBox>
          </CheckBox>

          <CartPAllCheck>
            <CartCheckboxControlLab>
              전체선택 (<CartCheckboxControlLabB>1</CartCheckboxControlLabB>
              /1)
            </CartCheckboxControlLab>
          </CartPAllCheck>
        </CartCheckboxControl>
        <BtnM>선택삭제</BtnM>
      </CartListSticky>

      <CartCheckout>
        <CartCheckoutDesktop>
          <CartCheckoutDesktopItem>
            <CartCheckoutDesktopLab>작품금액</CartCheckoutDesktopLab>
            <CartCheckoutDesktopVal>
              <span>18,000원</span>
            </CartCheckoutDesktopVal>
          </CartCheckoutDesktopItem>

          <CartCheckoutDesktopFix>+</CartCheckoutDesktopFix>
          <CartCheckoutDesktopItem>
            <CartCheckoutDesktopLab>배송비</CartCheckoutDesktopLab>
            <CartCheckoutDesktopVal>
              <span>2,500</span>
              <CartCheckoutDesktopPU>원</CartCheckoutDesktopPU>
            </CartCheckoutDesktopVal>
          </CartCheckoutDesktopItem>

          <CartCheckoutDesktopFix>=</CartCheckoutDesktopFix>
          <CartCheckoutDesktopItem>
            <CartCheckoutDesktopLab>결제 예정금액</CartCheckoutDesktopLab>
            <CartCheckoutDesktopH>
              <span>2,500</span>
              <CartCheckoutDesktopPU>원</CartCheckoutDesktopPU>
            </CartCheckoutDesktopH>
          </CartCheckoutDesktopItem>
        </CartCheckoutDesktop>
      </CartCheckout>

      <CartPageBottomR>주문하기</CartPageBottomR>
    </>
  );
}

const CartPageBottomR = styled.button`
  width: 100%;
  background: #ff7b30;
  border: 1px solid transparent;
  color: #ffffff;
  font-size: 16px;
  line-height: 46px;
  padding: 0 24px;
  display: inline-block;
  border-radius: 2px;
  box-shadow: 0 1px 3px 0 rgb(220 220 220 / 30%);
  box-sizing: border-box;
  cursor: pointer;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  transition: border-color 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  vertical-align: middle;
`;

const CartPageBottom = styled.span`
  padding: 16px;
`;

const CartCheckoutDesktopH = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #ff7b30;
`;

const CartCheckoutDesktopPU = styled.span`
  padding-top: 35px;
  font-size: 24px;
  font-weight: bold;
`;

const CartCheckoutDesktopFix = styled.div`
  padding-top: 35px;
  font-size: 24px;
  font-weight: bold;
`;

const CartCheckoutDesktopVal = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #333333;
`;

const CartCheckoutDesktopLab = styled.div`
  color: #999999;
  padding-bottom: 18px;
  font-size: 12px;
`;

const CartCheckoutDesktopItem = styled.div`
  flex: 1 auto;
  text-align: center;
`;

const CartCheckoutDesktop = styled.div`
  display: flex;
  min-height: 120px;
  padding-top: 24px;
  border-radius: 4px;
  border: 1px solid #333333;
  overflow: hidden;
`;

const CartVipBan = styled.div`
  right: 311px;
  text-align: center;
  bottom: -8px;
  font-size: 12px;
  cursor: pointer;
  position: absolute;
  background-color: #fff0b4;
  color: #333333;
  border: 1px solid #ffd200;
  opacity: 0.95;
  border-radius: 5px;
  padding: 8px 12px 8px 12px;
`;

const CartVipBanner = styled.div`
  position: relative;
  width: 100%;
`;

const CartCheckout = styled.div`
  background-color: #ffffff;
`;

const BtnM = styled.button`
  background: #ffffff;
  border: 1px solid #d9d9d9;
  color: #333;
  font-size: 12px;
  line-height: 30px;
  padding: 0 16px;
  display: inline-block;
  border-radius: 2px;
  box-shadow: 0 1px 3px 0 rgb(220 220 220 / 30%);
  box-sizing: border-box;
  cursor: pointer;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  transition: border-color 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  vertical-align: middle;
`;

const CartCheckboxControlLabB = styled.span`
  font-weight: bold;
`;

const CartCheckboxControlLab = styled.span`
  margin-left: 4px;
  font-size: 12px;
`;

const CartPAllCheck = styled.label`
  cursor: pointer;
`;

const CartCheckboxControl = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  justify-content: space-between;
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

const ShippingPriceDesc = styled.div`
  margin-top: 2px;
  font-size: 12px;
  font-weight: normal;
  color: #999999;
  line-height: 1.5;
`;

const ShippingPriceP = styled.em`
  color: #333333;
  font-size: 14px;
  line-height: 1.2;
  font-weight: bold;
`;

const ShippingPrice = styled.div`
  text-align: right;
`;

const CartArtistItemPrice = styled.div`
  color: #333333;
  font-size: 14px;
  line-height: 1.2;
  font-weight: bold;
`;

const CartArtistItemLab = styled.section`
  display: inline-block;
  vertical-align: middle;
  color: #666666;
  font-size: 13px;
`;

const CartArtistItemSec = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 21px 18px 21px 48px;
  border-top: 1px solid #d9d9d9;
  margin-top: -1px;
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
  font-size: 12px;
  color: #333333;
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

const CartArtistItemTitle = styled.span`
  display: inline-block;
  vertical-align: middle;
  color: #333333;
  font-weight: bold;
  font-size: 14px;
  line-height: 1.2;
  margin-left: 12px;
`;

const Check = styled.input`
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

  &:before {
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    content: "v";
    border: 1px solid #ff7b30;
    background: #ff7b30;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    line-height: 16px;
    width: 16px;
    height: 16px;
    background: #fff;
    position: absolute;
    top: 0px;
    left: 0px;
    border: 1px solid #acacac;
    border-radius: 2px;
    text-align: center;
  }
`;

const CheckBox = styled.div`
  display: inline-block;
`;

const CartArtistItemHLabel = styled.label`
  cursor: pointer;
`;

const CartArtistItemHeader = styled.div`
  padding: 21px 18px;
  background-color: #f5f5f5;
`;

const CartArtistItem = styled.div`
  box-shadow: 3px 3px 4px 0 rgb(234 234 234 / 50%);
  background: #ffffff;
  border: 1px solid #d9d9d9;
  margin-top: 10px;
`;

const CartArtistList = styled.div``;
const HandleChangeStickTop = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  position: static;
  top: auto;
  bottom: auto;
  left: auto;
  width: auto;
  z-index: 201;
`;

const StickyPlaceHolder = styled.p`
  padding-top: 0px;
`;

export default CartList;
