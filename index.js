const screen = document.querySelector(".item1");

const btns = document.querySelectorAll("div[type]"); 
const clear = document.querySelector(".item2");

const delet = document.querySelector(".item3");

const operations = document.querySelectorAll("div[value]");

const equality = document.querySelector(".item18");

clear.addEventListener("click", function () {
  screen.innerText = "";
});

delet.addEventListener("click", function () {
  let str = screen.innerText;
  let newStr = str.slice(0, str.length - 1);
  screen.innerText = "";
  screen.append(newStr);
});

for (let btn of btns) {
  btn.addEventListener("click", function () {
    let num = btn.innerText;
    console.log(num);
    screen.append(num);
  });
}
let valeur1 = "";
let slectedOp = "";
for (let operation of operations) {
  operation.addEventListener("click", function () {
    valeur1 = screen.innerText;
    console.log(valeur1);
    screen.innerText = "";
    slectedOp = operation.innerText;
    console.log(slectedOp);
    screen.innerText = "";
  });
}

function calculate(x, op, y) {
  if (op === "+") {
    return Number(x) + Number(y);
  } else if (op === "÷") {
    return x / y;
  } else if (op === "×") {
    return x * y;
  } else if (op === "−") {
    return x - y;
  }
}

equality.addEventListener("click", function () {
  let valeur2 = screen.innerText;
  let result = "";
  screen.innerText = "";
  result = calculate(valeur1, slectedOp, valeur2);

  console.log(result);
  return screen.append(result);
});
