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
        }
        else {
            const previusNumber = calcInput.value;
            const newNumber = previusNumber + number;
            calcInput.value = newNumber;
        }
    })