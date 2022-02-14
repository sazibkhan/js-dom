document.getElementById('deposit-submit').addEventListener('click', function () {


    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;

    const totalDipisit = document.getElementById('total-dipisit');
    totalDipisit.innerText = depositAmount;

    //clear the diposit input field
    depositInput.value = "";

});