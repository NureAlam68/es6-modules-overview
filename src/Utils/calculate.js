const add = (first, second) => {
  return first + second;
};

const multiply = (first, second) => {
  return first * second;
};

const dividedFirstNumberBySecondNumber = (first, second) => {
    return first / second;
}

export { add, multiply,dividedFirstNumberBySecondNumber }; //when have more than one component then export using object

// export default add;  // default export
// const calculator = {add: add};   // object hisabe export
// export default calculator;
