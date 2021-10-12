function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function createBackgroundEffect() {
  let objStorage = document.getElementById("geoObjStorage");
  while (true) {
    let element = document.createElement("div");
    element.className = "geoObj";
    objStorage.appendChild(element);
    element.style.top = (Math.random() * document.documentElement.clientHeight).toString() + "px";
    element.style.left = (Math.random() * document.documentElement.clientWidth).toString() + "px";
    element.style.borderRadius = Math.random() * 100 + "%";
    setTimeout(() => element.remove(), 10000);
    await sleep(1000);
  }
}

async function loadWebsite() {
  createBackgroundEffect();
}

loadWebsite();

// Calculator
let operatorsList = ["*", "/", "-", "+"];
let expressionWin = document.querySelector(".expressionWindow");
let outputWin = document.querySelector(".outputWindow");
let needOperator = false;

let rstButton = document.querySelector(".resetButton");
let delButton = document.querySelector(".deleteButton");

let numberButtons = Array.from(document.querySelectorAll(".number"));
let operatorButtons = Array.from(document.querySelectorAll(".operator"));

rstButton.addEventListener("click", () => {
  expressionWin.textContent = "";
  outputWin.textContent = "0";
});

delButton.addEventListener("click", (event) => {
  if (outputWin.textContent != "0") {
    outputWin.textContent = "0";
    return;
  }
  if (operatorsList.includes(expressionWin.textContent.at(-2))) {
    expressionWin.textContent = expressionWin.textContent.substring(0, expressionWin.textContent.length - 3);
    needOperator = true;
  }
});

numberButtons.forEach((value) => {
  value.addEventListener("click", (event) => {
    if (needOperator) return;
    if (value.classList.contains("dot") && outputWin.textContent.includes(".")) return;
    if (event.target.textContent == "0" && outputWin.textContent == "0") return;
    if (outputWin.textContent == "0" && !event.target.classList.contains("dot")) outputWin.textContent = "";
    if (outputWin.textContent == "-0" && !event.target.classList.contains("dot")) outputWin.textContent = "-";
    outputWin.textContent += event.target.textContent;
  });
});

operatorButtons.forEach((value) => {
  value.addEventListener("click", (event) => {
    if (operatorsList.includes(event.target.textContent)) {
      if (needOperator) {
        needOperator = false;
        expressionWin.textContent += " $s ".replace("$s", event.target.textContent);
        return;
      }
      outputWin.textContent += " $s ".replace("$s", event.target.textContent);
      expressionWin.textContent += outputWin.textContent;
      outputWin.textContent = "0";
      return;
    }
    if (event.target.classList.contains("negative")) {
      if (outputWin.textContent[0] == "-") outputWin.textContent = outputWin.textContent.substring(1);
      else outputWin.textContent = "-" + outputWin.textContent;
      return;
    }
    if (event.target.classList.contains("equal")) {
      if (expressionWin.textContent.at(-1) == " " && !needOperator) expressionWin.textContent += outputWin.textContent;
      let evaluation = eval(expressionWin.textContent);
      expressionWin.textContent = "";
      outputWin.textContent = evaluation || outputWin.textContent;
    }
  });
});
