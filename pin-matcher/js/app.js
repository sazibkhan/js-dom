function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + "";
    if (pinString.length == 4) {
        return pin;
    } else {
        console.log("Got 3 digite and colling agin :" + pin);
        return getPin();
    }
}


function generatePin() {
    const pin = getPin();
    document.getElementById('displayPin-input').value = pin;
    console.log("generate Pin :" + pin);
}

document.getElementById('key-pad').addEventListener('click',
    function (event) {
        const number = event.target.innerText;
        const calcInput = document.getElementById('typed-numbers');
        if (isNaN(number)) {
            if (number == 'C') {
                calcInput.value = '';
            }
        } else {
            const previusNumber = calcInput.value;
            const newNumber = previusNumber + number;
            calcInput.value = newNumber;
        }
    });

function vetifyPin() {
    const pin = document.getElementById('displayPin-input').value;
    const typedNumbers = document.getElementById('typed-numbers').value;

    const successMassage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    if (pin == typedNumbers) {
        successMassage.style.display = 'block';
        failError.style.display = 'none';
    } else {
        failError.style.display = 'block';
        successMassage.style.display = 'none';
    }
}


