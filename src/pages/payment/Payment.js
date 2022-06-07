import React, { useEffect } from "react";

function Payment() {
  useEffect(() => {
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
  }, []);

  const onClickPayment = () => {
    const { IMP } = window;
    IMP.init("imp77220765"); // 가맹점 식별코드 // 결제 데이터 정의
    const data = {
      pg: "html5_inicis", // PG사 (필수항목)
      pay_method: "card", // 결제수단 (필수항목)
      merchant_uid: `mid_${new Date().getTime()}`, // 결제금액 (필수항목)
      name: "결제 테스트", // 주문명 (필수항목)
      amount: "1000", // 금액 (필수항목)
      custom_data: { name: "부가정보", desc: "세부 부가정보" },
      buyer_name: "토찌", // 구매자 이름
      buyer_tel: "01099558701", // 구매자 전화번호 (필수항목)
      buyer_email: "l4279625@gmail.com", // 구매자 이메일
      buyer_addr: "주소",
      buyer_postalcode: "우편번호", // ....
    };
    IMP.request_pay(data, callback);
  };

  const callback = (response) => {
    const {
      success,
      error_msg,
      imp_uid,
      merchant_uid,
      pay_method,
      paid_amount,
      status,
    } = response;
    if (success) {
      alert("결제 성공");
    } else {
      alert(`결제 실패 : ${error_msg}`);
    }
  };
  return (
    <>
      <button onClick={onClickPayment}>결제하기</button>{" "}
    </>
  );
}

export default Payment;
