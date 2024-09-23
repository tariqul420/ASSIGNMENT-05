function inputValue(id) {
  const values = document.getElementById(id).value;
  const number = parseFloat(values);
  if (isNaN(number) || number <= 0) {
    alert("Please enter a valid donation amount.");
    return null;
  } else {
    return number;
  }
}

function MainCommonFunction(inputId, donateId, location) {
  const inputNum = inputValue(inputId);

  if (inputNum === null) {
    return;
  }

  const mainAmount = document.getElementById("main-amount").innerText;
  let mainNum = parseFloat(mainAmount);

  if (inputNum > mainNum) {
    alert("There is no money in your account.");
    return;
  }

  let currentMain = mainNum - inputNum;
  document.getElementById("main-amount").innerText = currentMain.toFixed(2);

  const donateAmount = document.getElementById(donateId).innerText;
  let donateNum = parseFloat(donateAmount);
  let currentDonate = donateNum + inputNum;
  document.getElementById(donateId).innerText = currentDonate.toFixed(2);

  if (inputNum > 0 && currentMain >= 0) {
    my_modal_1.showModal();
  }

  const currentTime = new Date();
  const time = currentTime.toString();

  const div = document.createElement("div");
  div.classList.add("p-6", "border", "border-solid", "border-[#1111111a]", "w-10/12", "m-auto", "rounded-2xl", "mt-8");

  div.innerHTML = `
    <h2 class="text-dark-01 text-xl font-bold">${inputNum} Taka is Donated for ${location}</h2>
    <p class="text-dark-02 font-medium">Date : ${time}</p>
    `;
  const historyContainer = document.getElementById("history-container");

  if (historyContainer.firstChild) {
    historyContainer.insertBefore(div, historyContainer.firstChild);
  } else {
    historyContainer.appendChild(div);
  }
}
