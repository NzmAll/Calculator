const operator = prompt("Enter operator: ");

const number1 = parseFloat(prompt("Enter first number: "));
const number2 = parseFloat(prompt("Enter second number: "));

let result;

if (operator === "+") {
  result = number1 + number2;
} else if (operator === "-") {
  result = number1 - number2;
} else if (operator === "*") {
  result = number1 * number2;
} else if (operator === "/") {
  result = number1 / number2;
} else {
  console.log("Not found operator");
  result = 0;
}

alert(`${number1} ${operator} ${number2} = ${result}`);
