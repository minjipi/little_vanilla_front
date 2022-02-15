import React, { useState } from "react";
import axios from "axios";

const Test = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get("http://localhost:8080/product/1");
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
};

export default Test;
