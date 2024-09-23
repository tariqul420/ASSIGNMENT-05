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

  donateBtn.classList.add("border-2", "border-solid", "border-dark-03", "p-[10px_30px_10px_30px]", "text-dark-02");

  historyBtn.classList.remove("border-2", "border-solid", "border-dark-03", "p-[10px_30px_10px_30px]", "text-dark-02");

  historyBtn.classList.add("bg-primary", "p-[12px_32px_12px_32px]", "text-dark-01");

  donateAllEl.classList.add("hidden");

  historyAllEl.classList.remove("hidden");
});

// done donate for noakhali
document.getElementById("btn-noakhali").addEventListener("click", function (event) {
  event.preventDefault;

  MainCommonFunction("input-noakhali", "donate-noakhali", "Flood at Noakhali, Bangladesh");

  document.getElementById("input-noakhali").value = "";
});

// done donate for feni
document.getElementById("btn-fani").addEventListener("click", function (event) {
  event.preventDefault;

  MainCommonFunction("input-fani", "donate-fani", "Flood Relief in Feni,Bangladesh");

  document.getElementById("input-fani").value = "";
});

// done donate for feni
document.getElementById("btn-cumilla").addEventListener("click", function (event) {
  event.preventDefault;

  MainCommonFunction("input-cumilla", "donate-cumilla", "Flood Relief in Cumilla,Bangladesh");

  document.getElementById("input-cumilla").value = "";
});

// done donate for Quota Movement
document.getElementById("btn-quota").addEventListener("click", function (event) {
  event.preventDefault;

  MainCommonFunction("input-quota", "donate-quota", "Aid for Injured in the Quota Movement, Bangladesh");

  document.getElementById("input-quota").value = "";
});

const blogBtn = document.getElementById("blog-button");

blogBtn.addEventListener("click", function () {
  window.location.href = `ASSIGNMENT-05/../blog.html`;
});
