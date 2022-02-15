// function doubleIt(num) {
//     const result = num * 2;
//     return result;

// }
// const first = doubleIt(5);
// const second = doubleIt(7);


function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    //clear input file
    inputField.value = '';
    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + depositAmount;
        depositAmount;
    } else {
        balanceTotal.innerText = previousBalanceTotal - depositAmount;
        depositAmount;
    }
}

document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');
    updateTotalField('deposit-total', depositAmount);
    updateBalance(depositAmount, true);

});

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawAmount = getInputValue('withdraw-input');
    updateTotalField('withdraw-total', withdrawAmount);
    updateBalance(withdrawAmount, false);

});