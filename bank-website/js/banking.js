document.getElementById('deposit-btn').addEventListener('click', function () {

    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    //set Balance Total
    const totalDipisit = document.getElementById('total-dipisit');
    const previousDipisitText = totalDipisit.innerText;
    const previousDipisitAmount = parseFloat(previousDipisitText);

    const newTotalDeposit = parseFloat(previousDipisitAmount + depositAmount);
    totalDipisit.innerText = newTotalDeposit;


    //Update Balance Total
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(totalBalanceText);

    const newBlanceTotal = previousTotalBalance + newTotalDeposit;
    totalBalance.innerText = newBlanceTotal;

    //clear the diposit input field
    depositInput.value = "";

});

//handal withdrow even handler
document.getElementById('withdrow-btn').addEventListener('click', function () {

    const withdrowInput = document.getElementById('withdrow-input');
    const withdrowAmountText = withdrowInput.value;
    const newWithdrowAmount = parseFloat(withdrowAmountText);
    //console.log(newWithdrowAmount);

    //set withdrow Total
    const totalWithdrow = document.getElementById('total-withdrow');
    const previousWithdrowText = totalWithdrow.innerText;
    const previousWithdrowAmount = parseFloat(previousWithdrowText);

    const newTotalWithdrow = previousWithdrowAmount + newWithdrowAmount;
    totalWithdrow.innerText = newTotalWithdrow;

    //Update Balance Total
    const totalBalance = document.getElementById('total-balance');
    const previousBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(previousBalanceText);

    const newBlanceTotal = previousTotalBalance - newTotalWithdrow;
    totalBalance.innerText = newBlanceTotal;

    //clear the diposit input field
    withdrowInput.value = "";
});
