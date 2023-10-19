const inputBill = document.querySelector(".main__inputSection__inputBill");
const inputBillAlert = document.querySelector(".main__inputSection__label__alert");

const btn5percent = document.querySelector(".b1");
const btn10percent = document.querySelector(".b2");
const btn15percent = document.querySelector(".b3");
const btn25percent = document.querySelector(".b4");
const btn50percent = document.querySelector(".b5");
const customPercentInput = document.querySelector(".main__inputSection__btnWrapper__inputBtn");

const numberOfPeopleInput = document.querySelector(".main__inputSection__wrapper__numberOfPeopleInput");
const numberOfPeopleInputAlert = document.querySelector(".main__inputSection__wrapper__alert");


const outputTipPerPerson = document.querySelector(".outputSection__tipWrapper__pricePerPerson");
const outputPricePerPerson = document.querySelector(".outputSection__totalWrapper__priceTotal");

const resetBtn = document.querySelector(".outputSection__reset");



function validateAccount() {
   

    const accountValue = inputBill.value;
    const cleanedInput = accountValue.replace(/\s/g, '');

    if (/^\d+$/.test(cleanedInput) && parseInt(cleanedInput, 10) <= 1000000000) {
        inputBillAlert.textContent = "";
      
    } else {
        inputBillAlert.textContent = "Only digits and max $1000000000";
    }
}

inputBill.addEventListener("input", validateAccount);





function calculateTipPercent (percent) {
    
    const totalPrice = parseFloat(inputBill.value);
    if(!isNaN(totalPrice)) {
    const result =  (totalPrice * percent) / 100;
    console.log(result);}
    else {
        console.log("podaj liczbę a nie litere")
    }
    }

btn5percent.addEventListener("click", calculateTipPercent(5));
btn10percent.addEventListener("click", calculateTipPercent(10));
btn15percent.addEventListener("click", calculateTipPercent(15));
btn25percent.addEventListener("click", calculateTipPercent(25));
btn50percent.addEventListener("click", calculateTipPercent(50));