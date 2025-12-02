function calculator(num1, num2, opt) {
  switch (opt) {
    case "+":
      return num1 + num2;
    case "/":
      return num1 / num2;
    case "*":
      return num1 * num2;
    case "-":
      return num1 - num2;
    default:
      throw new Error("Invalid operator");
  }
}

module.exports = calculator;
