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

let selectedPercent = 0;


//walidator rachunku

function validateAccount() {
	const accountValue = inputBill.value;
	const cleanedInput = accountValue.replace(/\s/g, '');

	if (/^\d+$/.test(cleanedInput) && parseInt(cleanedInput, 10) <= 1000000000) {
		inputBillAlert.textContent = ''; 
	} else {
		inputBillAlert.textContent = 'Only digits and max $1000000000';
	}
}


//walidator liczby ludzi

function validateNumberOfPeopleInput() {
	const peopleinputValue = numberOfPeopleInput.value;
	const cleanedPopleInputValue = peopleinputValue.replace(/\s/g, '');

	if (
		/^\d+$/.test(cleanedPopleInputValue) &&
		parseInt(cleanedPopleInputValue, 10) <= 50
	) {
		numberOfPeopleInputAlert.textContent = '';
	} else {
		numberOfPeopleInputAlert.textContent =
			'You must enter a number not greater than 30';
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
		console.log('ok');
		selectedPercent = parseInt(cleanedPercentageTip, 10);
	} else {
		alert('Percentage does not have to be within the range of 1 to 100.');
	}
}

//obliczanie tipa

function calculateTipPercent() {
	const totalPrice = parseFloat(inputBill.value);
	if (!isNaN(totalPrice)) {
		const result = (totalPrice * selectedPercent) / 100;
		console.log(result);
	} else {
		console.log('podaj liczbę a nie litere');
	}
}

//zbiera klikniety procent 



btnPercent.forEach((el) => {
    el.addEventListener('click', (event) => {
        event.preventDefault(); 
        const percentBtnValidValue = parseInt(el.textContent.slice(0, -1));
        console.log(percentBtnValidValue);
    });
});

