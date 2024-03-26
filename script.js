const inputBill = document.querySelector('.main__inputSection__inputBill');
const inputBillAlert = document.querySelector(
	'.main__inputSection__label__alert'
);
const btnPercent = document.querySelectorAll(
	'.main__inputSection__btnWrapper__btn'
);
const customPercentInput = document.querySelector(
	'.main__inputSection__btnWrapper__inputBtn'
);
const numberOfPeopleInput = document.querySelector(
	'.main__inputSection__wrapper__numberOfPeopleInput'
);
const numberOfPeopleInputAlert = document.querySelector(
	'.main__inputSection__wrapper__alert'
);
const outputTipPerPerson = document.querySelector(
	'.outputSection__tipWrapper__pricePerPerson'
);
const outputPricePerPerson = document.querySelector(
	'.outputSection__totalWrapper__priceTotal'
);
const resetBtn = document.querySelector('.outputSection__reset');

//funkcja resetująca wyniki
function reset() {
	inputBill.value = 0;
	customPercentInput.value = 0;
	numberOfPeopleInput.value = 0;
	outputTipPerPerson.textContent = '0$';
	outputPricePerPerson.textContent = '0$';
}

// listener do resetu

resetBtn.addEventListener('click', reset);



function calculateTipPercent(totalPrice, numberOfPeople, percentage) {
	// Obliczenie kwoty napiwku
	const tipAmount = (totalPrice * percentage) / 100;
	const tipPerPerson = tipAmount / numberOfPeople;

	// Wyświetlenie wyników
	outputTipPerPerson.textContent = `${tipPerPerson.toFixed(2)}$`;
	outputPricePerPerson.textContent = `${(
		tipPerPerson +
		totalPrice / numberOfPeople
	).toFixed(2)}$`;
}


  inputBill.addEventListener("keyup", () => {
    calculateTipPercent(parseFloat(inputBill.value), parseFloat(numberOfPeopleInput.value), parseFloat(customPercentInput.value));
});

customPercentInput.addEventListener("keyup", () => {
    calculateTipPercent(parseFloat(inputBill.value), parseFloat(numberOfPeopleInput.value), parseFloat(customPercentInput.value));
});

numberOfPeopleInput.addEventListener("keyup", () => {
    calculateTipPercent(parseFloat(inputBill.value), parseFloat(numberOfPeopleInput.value), parseFloat(customPercentInput.value));
});

btnPercent.forEach(btn => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        const percentage = parseFloat(btn.textContent);
        calculateTipPercent(parseFloat(inputBill.value), parseFloat(numberOfPeopleInput.value), percentage);
		customPercentInput.value = 0;

    });
});
