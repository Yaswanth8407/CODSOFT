const buttons = document.querySelectorAll(".btn");
const label = document.querySelector(".label");

let num1 = "";
let num2 = "";
let op = "";
let isSecond = false;

const symbols = {
  plus: "+",
  minus: "-",
  multiply: "*",
  divide: "/",
};

const numbers = {
  zero: "0",
  dblzero: "00",
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
  dot: ".",
};

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const id = e.target.id;

    if (numbers[id]) {
      if (!isSecond) {
        num1 += numbers[id];
        label.innerText = num1;
      } else {
        num2 += numbers[id];
        label.innerText = num2;
      }
    } else if (symbols[id]) {
      if (num1 === "") return;
      op = symbols[id];
      isSecond = true;
      label.innerText = op;
    } else if (id === "equal") {
      if (num1 === "" || num2 === "" || op === "") return;

      let result = 0;

      if (op === "+") result = parseFloat(num1) + parseFloat(num2);
      else if (op === "-") result = parseFloat(num1) - parseFloat(num2);
      else if (op === "*") result = parseFloat(num1) * parseFloat(num2);
      else if (op === "/") result = parseFloat(num1) / parseFloat(num2);

      label.innerText = result;

      num1 = result.toString();
      num2 = "";
      op = "";
      isSecond = false;
    } else if (id === "reset") {
      label.innerText = "";
      num1 = "";
      num2 = "";
      op = "";
      isSecond = false;
    } else if (id === "del") {
      if (!isSecond) {
        num1 = num1.slice(0, -1);
        label.innerText = num1;
      } else {
        num2 = num2.slice(0, -1);
        label.innerText = num2;
      }
    } else if (id === "sq") {
      if (!isSecond && num1 !== "") {
        num1 = (parseFloat(num1) ** 2).toString();
        label.innerText = num1;
      } else if (isSecond && num2 !== "") {
        num2 = (parseFloat(num2) ** 2).toString();
        label.innerText = num2;
      }
    }
  });
});