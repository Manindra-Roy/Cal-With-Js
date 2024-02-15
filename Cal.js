//let's make a very very simple calulator****
//function for sum**
let sum = (firstValueOfSum, secondValueOfSum) => {
  return firstValueOfSum + secondValueOfSum;
};
//function for sum**
let sub = (firstValueOfSub, secondValueOfSub) => {
  return firstValueOfSub - secondValueOfSub;
};
//function for multiplication**
let product = (firstValueOfPrd, secondValueOfPrd) => {
  return firstValueOfPrd * secondValueOfPrd;
};
//function for divition**
let div = (firstValueOfDiv, secondValueOfDiv) => {
  return firstValueOfDiv / secondValueOfDiv;
};

//coditions**//
///////////////
let firstValue, secondValue, operator;
///////////////
firstValue = 50;
secondValue = 50;
///////////////
operator = "+";
///////////////
switch (operator) {
  case "+":
    console.log(
      `${firstValue} + ${secondValue} = ${sum(firstValue, secondValue)}`
    );
    break;
  case "-":
    console.log(
      `${firstValue} - ${secondValue} = ${sub(firstValue, secondValue)}`
    );
    break;
  case "*":
    console.log(
      `${firstValue} * ${secondValue} = ${product(firstValue, secondValue)}`
    );
    break;
  case "/":
    console.log(
      `${firstValue} / ${secondValue} = ${div(firstValue, secondValue)}`
    );
    break;

  default:
    console.log(
      `"${operator}"is an invalid operator please enter one of [ +, -, *, / ]`
    );
    break;
}
