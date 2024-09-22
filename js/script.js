const donateBtn = document.getElementById("donate-btn");
const historyBtn = document.getElementById("history-btn");
const donateAllEl = document.getElementById("donate-container");
const historyAllEl = document.getElementById("history-container");

donateBtn.addEventListener("click", function () {
  donateBtn.classList.add("bg-primary", "p-[12px_32px_12px_32px]", "text-dark-01");

  donateBtn.classList.remove("border-2", "border-solid", "border-dark-03", "p-[10px_30px_10px_30px]", "text-dark-02");

  historyBtn.classList.add("border-2", "border-solid", "border-dark-03", "p-[10px_30px_10px_30px]", "text-dark-02");

  historyBtn.classList.remove("bg-primary", "p-[12px_32px_12px_32px]", "text-dark-01");

  donateAllEl.classList.remove("hidden");

  historyAllEl.classList.add("hidden");
});

historyBtn.addEventListener("click", function () {
  donateBtn.classList.remove("bg-primary", "p-[12px_32px_12px_32px]", "text-dark-01");
  console.log("donate");

  donateBtn.classList.add("border-2", "border-solid", "border-dark-03", "p-[10px_30px_10px_30px]", "text-dark-02");

  historyBtn.classList.remove("border-2", "border-solid", "border-dark-03", "p-[10px_30px_10px_30px]", "text-dark-02");

  historyBtn.classList.add("bg-primary", "p-[12px_32px_12px_32px]", "text-dark-01");

  donateAllEl.classList.add("hidden");

  historyAllEl.classList.remove("hidden");
});

// done donate fot noakhali
document.getElementById("donate-btn-noakhali").addEventListener("click", function () {
  inputValue("donate-input-noakhali");

  common("donate-input-noakhali", 'donate-amount')
});
