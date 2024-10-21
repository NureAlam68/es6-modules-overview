import React, { useEffect } from "react";

import "./Sunglass.css";
import Watch from "../Watch/Watch";
import { add, multiply, dividedFirstNumberBySecondNumber as divide } from "../../Utils/calculate";
// import add from '../../Utils/calculate';

const Sunglass = () => {
  const first = 10;
  const second = 20;
  const sum = add(first, second);
  const mult = multiply(first, second);
  const vaag = divide(first, second);

  useEffect

  return (
    <div>
      <Watch></Watch>
    </div>
  );
};

export default Sunglass;
