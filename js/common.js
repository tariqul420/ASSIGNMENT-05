function inputValue(id) {
  const values = document.getElementById(id).value;
  const number = parseFloat(values);
  return number;
}

function common(inputId , donateId) {
  const inputNum = inputValue(inputId);

  const mainAmount = document.getElementById("main-amount").innerText;
  let mainNum = parseFloat(mainAmount);
  let currentMain = mainNum - inputNum;
  document.getElementById("main-amount").innerText = currentMain.toFixed(2);

  const donateAmount = document.getElementById(donateId).innerText;
  let donateNum = parseFloat(donateAmount);
  let currentDonate = donateNum + inputNum;
  document.getElementById("donate-amount").innerText = currentDonate.toFixed(2);
}
