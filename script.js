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

//walidator rachunku

function validateAccount() {
	const accountValue = inputBill.value;
	const cleanedInput = accountValue.replace(/\s/g, '');

	if (/^\d+$/.test(cleanedInput) && parseInt(cleanedInput, 10) <= 1000000000) {
		inputBillAlert.textContent = '';
		
		return parseInt(cleanedInput);
	} else {
		inputBillAlert.textContent = 'Only digits and max $1000000000';
	}
}

inputBill.addEventListener('input', validateAccount);

let totalPrice = validateAccount();

//walidator liczby ludzi

function validateNumberOfPeopleInput() {
	const peopleinputValue = numberOfPeopleInput.value;
	const cleanedPopleInputValue = peopleinputValue.replace(/\s/g, '');

	if (
		/^\d+$/.test(cleanedPopleInputValue) &&
		parseInt(cleanedPopleInputValue, 10) <= 50
	) {
		numberOfPeopleInputAlert.textContent = '';
		
		return cleanedPopleInputValue;
	} else {
		numberOfPeopleInputAlert.textContent =
			'You must enter a number not greater than 50';
	}
}



//walidator procentów

function validatePercentageTip() {
	const customPercentageTip = customPercentInput.value;
	const cleanedPercentageTip = customPercentageTip.replace(/\s/g, '');

	if (
		/^\d+$/.test(cleanedPercentageTip) &&
		parseInt(cleanedPercentageTip, 10) <= 100
	) {
		selectedPercent = parseInt(cleanedPercentageTip, 10);
		return selectedPercent;
	} else {
		alert('Percentage does not have to be within the range of 1 to 100.');
	}
}



//obliczanie tipa

function calculateTipPercent(totalPrice, numberOfPeople) {
    // Sprawdzenie czy totalPrice i numberOfPeople są liczbami
    if (isNaN(totalPrice) || isNaN(numberOfPeople)) {
        console.log('Podaj liczbę, a nie literę');
        return; // Przerwanie funkcji jeśli którakolwiek z wartości nie jest liczbą
    }

    // Obliczenie kwoty napiwku
    const tipAmount = (totalPrice * selectedPercent) / 100;
    const tipPerPerson = tipAmount / numberOfPeople;

    // Wyświetlenie wyników
    outputTipPerPerson.textContent = `${tipPerPerson.toFixed(2)}$`;
    outputPricePerPerson.textContent = `${(tipPerPerson + (totalPrice / numberOfPeople)).toFixed(2)}$`;
}

//funkcja resetująca wyniki
function reset() {
	inputBill.value = 0;
	customPercentInput.value = 0;
	numberOfPeopleInput.value = 0;
	outputTipPerPerson.textContent = '0$';
	outputPricePerPerson.textContent = '0$';
}

resetBtn.addEventListener('click', reset);

btnPercent.forEach((el) => {
    el.addEventListener('click', (event) => {
        event.preventDefault();
        const percentBtnValidValue = parseInt(el.textContent.slice(0, -1)); // Pobranie wartości procentowej z przycisku
		console.log(percentBtnValidValue);
        handleCustomPercentInputChange(percentBtnValidValue); // Wywołanie funkcji obsługującej zmianę wartości procentowej
    });
});

function handleCustomPercentInputChange(percentBtnValidValue) {
    customPercentInput.value = percentBtnValidValue; // Ustawienie wartości pola input na wybraną wartość procentową
    selectedPercent = parseInt(percentBtnValidValue); // Przypisanie wybranej wartości procentowej do zmiennej selectedPercent
    calculateTipPercent(totalPrice, numberOfPeople); // Obliczenie napiwku
}


function handleBillInputChange() {
    totalPrice = validateAccount(); // Aktualizacja wartości totalPrice
    calculateTipPercent(totalPrice, numberOfPeople); // Obliczenie napiwku
}

// Funkcja wywoływana po zmianie wartości pola liczby osób
function handleNumberOfPeopleInputChange() {
    numberOfPeople = validateNumberOfPeopleInput(); // Aktualizacja wartości numberOfPeople
    calculateTipPercent(totalPrice, numberOfPeople); // Obliczenie napiwku
}

// Funkcja wywoływana po zmianie wartości pola procentowego napiwku
function handleCustomPercentInputChange() {
    validatePercentageTip(); // Walidacja procentu
    calculateTipPercent(totalPrice, numberOfPeople); // Obliczenie napiwku
}



// Dodanie nasłuchiwaczy zdarzeń na zmianę wartości pól wejściowych
inputBill.addEventListener('input', handleBillInputChange);
numberOfPeopleInput.addEventListener('input', handleNumberOfPeopleInputChange);
customPercentInput.addEventListener('input', handleCustomPercentInputChange);
