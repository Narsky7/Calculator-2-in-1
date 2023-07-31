//selecting HTML entities

const switchCalcDef = document.querySelector("#button-def");
const switchCalcQua = document.querySelector("#button-qua");
const calculator = document.querySelector(".default-calculator");
const calculatorQuadratic = document.querySelector(".quadratic-calculator");
const deltaDisplay = document.querySelector(".delta");
const zeroOfAFunction = document.querySelector(".zeros");
const submitQua = document.querySelector(".quadratic-submit");
const numbers = document.querySelectorAll(".number-button");
const display = document.querySelector(".display");
const equals = document.querySelector(".equals");
const squareRoot = document.querySelector("#pierwiastek");
const square = document.querySelector("#square");
const divide = document.querySelector("#divide");
const times = document.querySelector("#times");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");

//switching between calculators

switchCalcDef.addEventListener("click", () => {
  calculator.classList.remove("default-calculator-disabled");
  calculatorQuadratic.classList.remove("quadratic-calculator-activated");
  switchCalcDef.classList.add("button-switch-activated");
  switchCalcQua.classList.remove("button-switch-activated");
});

switchCalcQua.addEventListener("click", () => {
  calculator.classList.add("default-calculator-disabled");
  calculatorQuadratic.classList.add("quadratic-calculator-activated");
  switchCalcDef.classList.remove("button-switch-activated");
  switchCalcQua.classList.add("button-switch-activated");
});

// Quadratic equation solver

submitQua.addEventListener("click", () => {
  const a = parseFloat(document.querySelector("#a").value);
  const b = parseFloat(document.querySelector("#b").value);
  const c = parseFloat(document.querySelector("#c").value);

  if (a == 0) {
    deltaDisplay.textContent = "a cannot be equal to 0";
    zeroOfAFunction.textContent = "";
    return;
  } else {
    let delta = Math.pow(b, 2) - 4 * a * c;
    if (delta > 0) {
      let sqrRootDelty = Math.sqrt(delta);
      let xOne = (-b + sqrRootDelty) / (2 * a);
      let xTwo = (-b - sqrRootDelty) / (2 * a);
      deltaDisplay.textContent = "Δ = " + delta;
      zeroOfAFunction.textContent =
        "0's of a function: " + xOne.toFixed(2) + " and " + xTwo.toFixed(2);
      return;
    } else if (delta == 0) {
      deltaDisplay.textContent = "Δ = 0";
      let x = (-b / 2) * a;
      zeroOfAFunction.textContent = "0's of a function: " + x.toFixed(2);
      return;
    } else if (delta < 0) {
      deltaDisplay.textContent = "Δ = " + delta;
      zeroOfAFunction.textContent = "0's of a function: none";
      return;
    }
  }
  return;
});

// calculator

//adding numbers to display

numbers.forEach((button) => {
  button.addEventListener("click", () => {
    let number = button.textContent;
    let addNumber = document.createTextNode(number);
    display.append(addNumber);
  });
});

// adding buttons to raise to the power of 2 and to display square root of a number

square.addEventListener("click", () => {
  let firstNumber = parseFloat(display.textContent);
  if (isNaN(firstNumber)) {
    firstNumber = 0;
  }
  let result = Math.pow(firstNumber, 2);
  display.textContent = result;
});

squareRoot.addEventListener("click", () => {
  let firstNumber = parseFloat(display.textContent);
  if (isNaN(firstNumber)) {
    firstNumber = 0;
  }
  let result = Math.sqrt(firstNumber);
  display.textContent = result;
});

// adding operator buttons

let action, firstNumber;

divide.addEventListener("click", () => {
  firstNumber = parseFloat(display.textContent);
  if (isNaN(firstNumber)) {
    firstNumber = 0;
  }
  action = "divide";
  display.textContent = "";
});

times.addEventListener("click", () => {
  firstNumber = parseFloat(display.textContent);
  if (isNaN(firstNumber)) {
    firstNumber = 0;
  }
  action = "times";
  display.textContent = "";
});

minus.addEventListener("click", () => {
  firstNumber = parseFloat(display.textContent);
  if (isNaN(firstNumber)) {
    firstNumber = 0;
  }
  action = "minus";
  display.textContent = "";
});

plus.addEventListener("click", () => {
  firstNumber = parseFloat(display.textContent);
  if (isNaN(firstNumber)) {
    firstNumber = 0;
  }
  action = "plus";
  display.textContent = "";
});

//switch statemant to select chosen operation and show the result

equals.addEventListener("click", () => {
  let secondNumber = parseFloat(display.textContent);
  if (
    firstNumber !== undefined &&
    !isNaN(firstNumber) &&
    action !== undefined
  ) {
    let result;
    switch (action) {
      case "divide":
        result = firstNumber / secondNumber;
        break;
      case "times":
        result = firstNumber * secondNumber;
        break;
      case "plus":
        result = firstNumber + secondNumber;
        break;
      case "minus":
        result = firstNumber - secondNumber;
        break;
    }

    display.textContent = result;
  } else {
  }
});
