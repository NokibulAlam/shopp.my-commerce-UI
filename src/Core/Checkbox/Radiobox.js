import React, { useState } from "react";

const RadioBox = ({ price, handelFilters }) => {
  let [value, setValue] = useState(0);

  const handelChnage = (event) => {
    handelFilters(event.target.value);
    setValue(event.target.value);
  };

  return price.map((p, i) => (
    <div key={i}>
      <input
        type="radio"
        onChange={handelChnage}
        name={p}
        value={`${p._id}`}
        className="mr-2 ml-4"
      />
      <label className="from-check-lable">{p.name}</label>
    </div>
  ));
};

export default RadioBox;
