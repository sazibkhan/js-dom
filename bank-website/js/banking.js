document.getElementById('deposit-submit').addEventListener('click', function () {

    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);

    const totalDipisit = document.getElementById('total-dipisit');
    const previousDipisitText = totalDipisit.innerText;
    const previousDipisitAmount = parseFloat(previousDipisitText);

    const newTotalDeposit = parseFloat(previousDipisitAmount + depositAmount);
    totalDipisit.innerText = newTotalDeposit;


    // update Account Balance
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(totalBalanceText);

    const newBlanceTotal = previousTotalBalance + newTotalDeposit;
    totalBalance.innerText = newBlanceTotal;









    //clear the diposit input field
    depositInput.value = "";

});