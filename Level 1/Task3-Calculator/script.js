const buttons = document.querySelectorAll(".btn");
const op = document.querySelector(".op");
const num = document.querySelector(".num");

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

    if (symbols[id]) {
      op.innerText = symbols[id];
    } else if (id === "sq") {
      op.innerHTML = `x<sup>2</sup>`;
      num.innerText = `${parseFloat(num.innerText) * parseFloat(num.innerText)}`;
    } else if (id === "reset") {
      op.innerHTML = ``;
      num.innerText = ``;
    } else if (id === "del") {
      let n = num.innerText;
      num.innerText = n.slice(0, -1);
    } else if (numbers[id]) {
      num.innerText += numbers[id];
    }
  });
});
