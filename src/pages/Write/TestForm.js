import axios from "axios";
import React, { useState } from "react";

function PasswordUpdate() {
  const [idx, SetIdx] = useState("");
  const [name, SetName] = useState("");
  const [brandIdx, SetBrandIdx] = useState("");
  const [categoryIdx, SetCategory] = useState("");
  const [price, SetPrice] = useState("");
  const [salePrice, SetSalePrice] = useState("");
  const [deliveryType, SetDeliveryType] = useState("");
  const [isTodayDeal, SetIsTodayDeal] = useState("");
  const [file, SetFile] = useState(null);

  const onReset = () => {
    SetIdx("");
  };

  const nameHandler = (e) => {
    e.preventDefault();
    SetName(e.target.value);
  };

  const bIdxHandler = (e) => {
    e.preventDefault();
    SetBrandIdx(e.target.value);
  };

  const cIdxHandler = (e) => {
    e.preventDefault();
    SetCategory(e.target.value);
  };

  const priceHandler = (e) => {
    e.preventDefault();
    SetPrice(e.target.value);
  };

  const salePriceHandler = (e) => {
    e.preventDefault();
    SetSalePrice(e.target.value);
  };

  const deliveryHandler = (e) => {
    e.preventDefault();
    SetDeliveryType(e.target.value);
  };

  const isTodayDealHandler = (e) => {
    e.preventDefault();
    SetIsTodayDeal(e.target.value);
  };

  const filenameHandler = (e) => {
    e.preventDefault();
    const image = e.target.files[0];
    SetFile(image);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // state에 저장한 값 가져옴.

    let body = {
      name: name,
      brandIdx: Number(brandIdx),
      categoryIdx: Number(categoryIdx),
      price: Number(price),
      salePrice: Number(salePrice),
      deliveryType: deliveryType,
      isTodayDeal: isTodayDeal,
    };

    const formData = new FormData();

    formData.append("body", JSON.stringify(body));

    formData.append("uploadFiles", file);

    for (var key of formData.keys()) {
      console.log(key);
    }

    for (var value of formData.values()) {
      console.log(value);
    }

    axios
      .post("http://localhost:8080/product/create", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(res);
        window.location.replace("/");
      });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <form
          onSubmit={submitHandler}
          style={{ display: "flex", flexDirection: "Column" }}
        >
          <label>name</label>
          <input value={name} onChange={nameHandler}></input>

          <label>브랜드idx</label>
          <input value={brandIdx} onChange={bIdxHandler}></input>

          <label>카테고리idx</label>
          <input value={categoryIdx} onChange={cIdxHandler}></input>

          <label>가격</label>
          <input value={price} onChange={priceHandler}></input>

          <label>세일가격</label>
          <input value={salePrice} onChange={salePriceHandler}></input>

          <label>택배타입</label>
          <input value={deliveryType} onChange={deliveryHandler}></input>

          <label>투데이딜</label>
          <input value={isTodayDeal} onChange={isTodayDealHandler}></input>

          <label>파일이름</label>
          <input type="file" onChange={filenameHandler}></input>

          <button onClick={onReset}>초기화</button>
          <button type="submit">제출</button>
        </form>
      </div>
    </>
  );
}
export default PasswordUpdate;
