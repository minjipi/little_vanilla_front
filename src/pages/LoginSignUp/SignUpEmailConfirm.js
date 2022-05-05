import React from "react";
import { useParams } from "react-router";

function SignUpEmailConfirm() {
  const params = useParams();

  if (params.jwt !== null) {
    localStorage.clear();
    localStorage.setItem("token", params.jwt);
    console.log("response.data.token:  " + params.jwt);

    // 사용하려면 App.js에서 /로 라우팅해야 한다
    window.location.replace("/");
  }

  return <></>;
}

export default SignUpEmailConfirm;
