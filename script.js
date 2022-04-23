const valuta1Input = document.getElementById("valuta1");
const valuta2Input = document.getElementById("valuta2");
const calculateBtn = document.getElementById("calculateBtn");
const changeBtn = document.getElementById("changeBtn");
const error = document.getElementById("error");
const valuta1Label = document.getElementById("valuta1Label");
const valuta2Label = document.getElementById("valuta2Label");

let currentMode = "EUR-USD";

function doCalculation() {
  let number;

  if (!valuta1Input.value) {
    error.classList.remove("hide");
    valuta2Input.value = "";
  } else {
    error.classList.add("hide");
    const valuta1 = parseFloat(valuta1Input.value);

    if (currentMode === "EUR-USD") {
      number = (valuta1 * 1.07993).toString();
      number = number.slice(0, number.indexOf(".") + 3);
      valuta2Input.value = Number(number);
    } else {
      number = (valuta1 / 1.07993).toString();
      number = number.slice(0, number.indexOf(".") + 3);
      valuta2Input.value = Number(number);
    }
  }
}

calculateBtn.onclick = function () {
  doCalculation();
};

changeBtn.onclick = function () {
  if (currentMode === "EUR-USD") {
    currentMode = "USD-EUR";
    valuta1Label.innerText = "USD";
    valuta2Label.innerText = "EUR";
  } else {
    currentMode = "EUR-USD";
    valuta1Label.innerText = "EUR";
    valuta2Label.innerText = "USD";
  }
  doCalculation();
};

valuta1Input.oninput = function () {
  if (valuta1Input.value && isNaN(valuta1Input.value)) {
    valuta1Input.value = valuta1Input.value.substring(
      0,
      valuta1Input.value.length - 1
    );
  }
};
