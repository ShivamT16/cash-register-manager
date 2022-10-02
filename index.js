const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-btn");

function clickHandler() {
    console.log(billAmount.value, cashGiven.value);
}


checkButton.addEventListener('click', clickHandler);