document.getElementById('deposit-submit').addEventListener('click', function () {

    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);

    const totalDipisit = document.getElementById('total-dipisit');
    const previousDipisitText = totalDipisit.innerText;
    const previousDipisitAmount = parseFloat(previousDipisitText);

    const newTotalDeposit = parseFloat(previousDipisitAmount + depositAmount);
    totalDipisit.innerText = newTotalDeposit;






    //clear the diposit input field
    depositInput.value = "";

});