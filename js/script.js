const donateBtn = document.getElementById("donate-btn");
const historyBtn = document.getElementById("history-btn");

donateBtn.addEventListener('click',function(){
    donateBtn.classList.add('bg-primary', 'p-[12px_32px_12px_32px]', 'text-dark-01')
    console.log("donate");

    donateBtn.classList.remove('border-2', 'border-solid', 'border-dark-03', 'p-[10px_30px_10px_30px]', 'text-dark-02');

    historyBtn.classList.add('border-2', 'border-solid', 'border-dark-03', 'p-[10px_30px_10px_30px]', 'text-dark-02');

    historyBtn.classList.remove('bg-primary', 'p-[12px_32px_12px_32px]', 'text-dark-01');
});

historyBtn.addEventListener('click',function(){
    donateBtn.classList.remove('bg-primary', 'p-[12px_32px_12px_32px]', 'text-dark-01')
    console.log("donate");

    donateBtn.classList.add('border-2', 'border-solid', 'border-dark-03', 'p-[10px_30px_10px_30px]', 'text-dark-02');

    historyBtn.classList.remove('border-2', 'border-solid', 'border-dark-03', 'p-[10px_30px_10px_30px]', 'text-dark-02');

    historyBtn.classList.add('bg-primary', 'p-[12px_32px_12px_32px]', 'text-dark-01');
});