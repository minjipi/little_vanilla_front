import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import jwt_decode from "jwt-decode";
import axios from "axios";

function CartList(props) {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [orderNames, setOrderNames] = useState("");
  const [orderIdxs, setOrderIdxs] = useState([]);
  const [check, setCheck] = useState("");

  const allAgreeHandler = (checked) => {
    setIsAllChecked(!isAllChecked);
    if (checked) {
      setCheckedItems([...checkedItems, "provision", "privacy"]);
    } else if (!checked && checkedItems.includes("provision")) {
      setCheckedItems([]);
    }
  };

  const agreeHandler = (checked, value) => {
    if (checked) {
      setCheckedItems([...checkedItems, value]);
    } else if (!checked && checkedItems.includes(value)) {
      setCheckedItems(checkedItems.filter((el) => el !== value));
    }
  };

  const showList = async () => {
    try {
      const result = await axios.get(
        "https://backend.alittlevanilla.kro.kr/cart/list",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        }
      );

      setCartItems(result.data.result);

      if (cartItems.length !== 0) {
        setCheck(true);
      } else {
        setCheck(false);
      }

      let total = 0;
      let orderName = "";
      let orderIdxArray = [];

      result.data.result.map((cartItem) => {
        total += cartItem.salePrice;
        orderName += cartItem.name + ",";
        orderIdxArray = orderIdxArray.concat(cartItem.productIdx);
      });
      setOrderNames(orderName.substr(0, orderName.length - 1));
      setTotalPrice(total);
      setOrderIdxs(orderIdxArray);
    } catch (e) {
      console.log("list error... " + e);
    }
  };

  const cancel = async (idx) => {
    try {
      await axios.get(
        "https://backend.alittlevanilla.kro.kr/cart/cancel/" + idx,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        }
      );

      window.location.reload();
    } catch (e) {
      console.log("cancel error... " + e);
    }
  };

  useEffect(() => {
    showList();
    const jquery = document.createElement("script");
    jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";
    const iamport = document.createElement("script");
    iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
    document.head.appendChild(jquery);
    document.head.appendChild(iamport);
    return () => {
      document.head.removeChild(jquery);
      document.head.removeChild(iamport);
    };
  }, [check]);

  const createOrderNum = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    let orderNum = year + month + day;
    for (let i = 0; i < 10; i++) {
      orderNum += Math.floor(Math.random() * 8);
    }
    return orderNum;
  };

  const paymentCheck = async (data) => {
    try {
      const response = await axios.post(
        "https://backend.alittlevanilla.kro.kr/pay/complete",
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      alert(response.data.message);

      if (response.data.isSuccess === true) {
        window.location.href = "/orderdone";
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onClickPayment = () => {
    console.log(orderIdxs);
    const { IMP } = window;
    IMP.init("imp14112312");
    const data = {
      pg: "html5_inicis", // PG사 (필수항목)
      pay_method: "card", // 결제수단 (필수항목)
      merchant_uid: createOrderNum(),
      name: orderNames, // 주문명 (필수항목)
      amount: totalPrice, // 금액 (필수항목)
      buyer_name: jwt_decode(localStorage.getItem("token")).nickname, // 구매자 이름
      buyer_email: jwt_decode(localStorage.getItem("token")).sub,
      impUid: "",
    };
    IMP.request_pay(
      {
        pg: data.pg,
        pay_method: data.pay_method,
        merchant_uid: data.merchant_uid,
        name: data.name,
        amount: data.amount,
        buyer_name: data.buyer_name,
        buyer_email: data.buyer_email,
      },
      function callback(response) {
        if (response.success) {
          data.idxList = orderIdxs;
          data.impUid = response.imp_uid;
          data.merchant_uid = response.merchant_uid;

          paymentCheck(data);
        } else {
          alert(`결제 실패 : ${response.error_msg}`);
        }
      }
    );
  };

  return (
    <>
      {check ? (
        <>
          <div>
            <StickyPlaceHolder />
            <HandleChangeStickTop />
            <CartArtistList>
              <CartArtistItem>
                <CartArtistItemHeader>
                  <CartArtistItemHLabel>
                    <CheckBox>
                      <CheckBox>
                        <Check
                          type="checkbox"
                          value="agree"
                          onChange={(e) => {
                            allAgreeHandler(e.currentTarget.checked);
                          }}
                          checked={isAllChecked}
                        ></Check>
                      </CheckBox>
                    </CheckBox>
                    {/* <CartArtistItemTitle>{props.data.brandIdx}</CartArtistItemTitle> */}
                  </CartArtistItemHLabel>
                </CartArtistItemHeader>

                {cartItems &&
                  cartItems.map((cartItem) => {
                    return (
                      <div key={cartItem.idx}>
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
                                              checkedItems.includes("provision")
                                                ? true
                                                : false
                                            }
                                          ></Check>
                                        </CheckBox>
                                      </CheckBox>
                                    </CartProductListItemCheckboxW>
                                    <CartProductListItemPI
                                      src={
                                        "https://backend.alittlevanilla.kro.kr/product/display?fileName=" +
                                        cartItem.filename
                                      }
                                    />
                                  </CartProductListItemCheckboxG>
                                  <CartProductListItemPInfoTextGroup>
                                    <CartProductListItemPname>
                                      {cartItem.name}
                                    </CartProductListItemPname>
                                    <CartProductListItemC>
                                      주문시 제작
                                    </CartProductListItemC>
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
                                          {cartItem.salePrice}원
                                        </CartOptionListItemTotalP>
                                        <CartOptionListItemBtnG>
                                          <CartOptionEditingButtonGroup>
                                            {/* <CartOptionEditingButtonGroupL>
                                        <GroupLSet className="fas fa-solid fa-gear"></GroupLSet>
                                      </CartOptionEditingButtonGroupL> */}
                                            <CartOptionEditingButtonGroupR>
                                              <GroupLSetX
                                                onClick={() =>
                                                  cancel(cartItem.idx)
                                                }
                                              />
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
                                    <CommonTextEditorMaxBtnM>
                                      저장
                                    </CommonTextEditorMaxBtnM>
                                  </CommonTextEditorMaxBtn>
                                </div>
                              </CartProductListItem>
                            </CartProductList>
                          </ul>
                        </CartArtistItemList>

                        <VStickyPlaceholder />
                        <CartListSticky>
                          <br />
                          <CartCheckout></CartCheckout>
                        </CartListSticky>
                      </div>
                    );
                  })}

                <CartArtistItemSec>
                  <CartArtistItemLab>상품가격</CartArtistItemLab>
                  <CartArtistItemPrice>{totalPrice}원</CartArtistItemPrice>
                </CartArtistItemSec>
                <CartArtistItemSec>
                  <CartArtistItemLab>배송비</CartArtistItemLab>
                  <CartArtistItemPrice>
                    <ShippingPrice>
                      <ShippingPriceP>0원</ShippingPriceP>
                      {/* <ShippingPriceDesc>30,000원 이상 무료배송</ShippingPriceDesc> */}
                    </ShippingPrice>
                  </CartArtistItemPrice>
                </CartArtistItemSec>
              </CartArtistItem>
            </CartArtistList>
            <VStickyPlaceholder />
            <CartListSticky>
              {/* <CartCheckboxControl>
            <CheckBox>
              <CheckBox>
                <CartPAllCheckI type="checkbox" />
              </CheckBox>
              <CartPAllCheck>
                <CartCheckboxControlLab>
                  전체선택 (<CartCheckboxControlLabB>1</CartCheckboxControlLabB>
                  /1)
                </CartCheckboxControlLab>
              </CartPAllCheck>
            </CheckBox>
            <BtnM>선택삭제</BtnM>
          </CartCheckboxControl> */}
              <br />
              <CartCheckout>
                <CartCheckoutDesktop>
                  <CartCheckoutDesktopItem>
                    <CartCheckoutDesktopLab>상품금액</CartCheckoutDesktopLab>
                    <CartCheckoutDesktopVal>
                      <span>{totalPrice}</span>
                      <CartCheckoutDesktopU>원</CartCheckoutDesktopU>
                    </CartCheckoutDesktopVal>
                  </CartCheckoutDesktopItem>

                  <CartCheckoutDesktopFix>+</CartCheckoutDesktopFix>
                  <CartCheckoutDesktopItem>
                    <CartCheckoutDesktopLab>배송비</CartCheckoutDesktopLab>
                    <CartCheckoutDesktopVal>
                      <span>0</span>
                      <CartCheckoutDesktopU>원</CartCheckoutDesktopU>
                    </CartCheckoutDesktopVal>
                  </CartCheckoutDesktopItem>

                  <CartCheckoutDesktopFix>=</CartCheckoutDesktopFix>
                  <CartCheckoutDesktopItem>
                    <CartCheckoutDesktopLab>
                      결제 예정금액
                    </CartCheckoutDesktopLab>
                    <CartCheckoutDesktopH>
                      <span> {totalPrice}</span>
                      <CartCheckoutDesktopU>원</CartCheckoutDesktopU>
                    </CartCheckoutDesktopH>
                  </CartCheckoutDesktopItem>
                </CartCheckoutDesktop>
              </CartCheckout>

              <CartPageBottom>
                <CartPageBottomR type="button" onClick={onClickPayment}>
                  주문하기
                </CartPageBottomR>
              </CartPageBottom>
            </CartListSticky>
          </div>
        </>
      ) : (
        <>
          <div>
            <EmptyList>
              <EmptyListLogo>
                <LogoEmpty className="fa-solid fa-empty-set"></LogoEmpty>
                <div>
                  <EmptyListText>
                    장바구니가 비었습니다.
                    <br />
                    다양한 상품을 담아보세요.
                  </EmptyListText>
                </div>
                <EmptyCartBtn
                  type="button"
                  onClick={() => window.location.replace("/")}
                >
                  상품 구경하러 가기
                </EmptyCartBtn>
              </EmptyListLogo>
            </EmptyList>
          </div>
        </>
      )}
    </>
  );
}

const EmptyCartBtn = styled.button`
  width: 246px;
  margin-top: 36px;
  background: #f1c333;
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

const EmptyListText = styled.p`
  text-align: center;
  font-size: 16px;
  color: #666666;
`;

const LogoEmpty = styled.i`
  vertical-align: middle;
  color: #f1c333;
  font-size: 120px !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  &:before {
    content: "!";
  }
`;

const EmptyListLogo = styled.div`
  margin-bottom: 40px;
`;

const EmptyList = styled.div`
  margin: 0 auto;
  padding: 50px 0;
  text-align: center;
`;

const CartPageBottom = styled.div`
  padding: 16px;
`;

const CartPageBottomR = styled.button`
  width: 100%;
  background: #f1c333;
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

const CartCheckoutDesktopH = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #f1c333;
`;

const CartCheckoutDesktopFix = styled.div`
  padding-top: 35px;
  font-size: 24px;
  font-weight: bold;
`;

const CartCheckoutDesktopU = styled.span`
  font-size: 18px;
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

const CartPAllCheckI = styled.input`
  -webkit-appearance: none;
  background: transparent;
  display: inline-block;
  position: relative;
  height: 18px;
  width: 18px;
  vertical-align: middle;
  box-sizing: border-box;
  border: 0;
  margin: 0;

  &:before {
    content: "v";
    font-size: 16px;
    border: 1px solid #f1c333;
    background: #f1c333;
    color: #fff;

    cursor: pointer;
    display: inline-block;
    line-height: 16px;
    width: 16px;
    height: 16px;
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 2px;
    text-align: center;
  }
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

const CartArtistItemLab = styled.div`
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

const StickyPlaceHolder = styled.div`
  padding-top: 0px;
`;

export default CartList;
