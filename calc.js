"use strict";
const output = document.querySelector(".output");
const buttons = document.querySelectorAll(".con");

let expression = [];

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let value = btn.innerText;

    if (value === "/") value = "/";
    if (value === "x") value = "*";
    if (value === "+") value = "+";
    if (value === "-") value = "-";

    if (value === "AC") {
      expression = [];
      output.innerText = "0";
    } else if (value === "DEL") {
      expression = expression.slice(0, -1);
      return expression.length === 0
        ? (output.innerText = "0")
        : (output.innerText = expression);
    } else if (value === "=") {
      try {
        if (expression === "") return;
        let finalExp = expression
          .replace(/x/g, "*")
          .replace(/÷/g, "/")
          .replace(/EXP/g, "*10**");
        let result = eval(finalExp);
        output.innerText = result;
        expression = result.toString();
      } catch {
        output.innerText = "error";
        expression = "";
      }
    } else if (value === "Ans") {
      try {
        if (expression === "") return;
        let finalExp = expression
          .replace(/x/g, "*")
          .replace(/÷/g, "/")
          .replace(/EXP/g, "*10**");
        let result = eval(finalExp);
        output.innerText = result;
        expression = result.toString();
      } catch {
        output.innerText = "error";
        expression = "";
      }
    } else {
      expression += value;
      output.innerText = expression;
    }
  });
});

output.innerText = "0";
