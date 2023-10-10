const inputBill = document.querySelector(".main__inputSection__inputBill");

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

function calculateTipPercent (totalPrice, percent) {
const result =  (totalPrice * percent) / 100;
console.log(result);
}

