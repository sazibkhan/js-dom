document.getElementById('deposit-button').addEventListener('click', function () {

    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    //console.log(depositAmount);

    //current Deposit
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);

    depositTotal.innerText = previousDepositTotal + depositAmount;
    console.log(depositTotalText);


    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);


    balanceTotal.innerText = previousBalanceTotal + depositAmount;
    //clear input file
    depositInput.value = '';

});

document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

    console.log(withdrawAmountText);

    //update withdraw-total
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalText);

    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;


    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

    //clear input file
    withdrawInput.value = '';

});