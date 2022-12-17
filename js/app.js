function genaratePin() {
    const randomNumber = Math.round(Math.random() * 10000);
    return randomNumber;
}

function getPin() {
    const pin = genaratePin();
    const pinNumber = pin + '';

    if (pinNumber.length === 4) {
        return pin;
    } else {
        return getPin();
    }
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    console.log(pin);
    const pinFiled = document.getElementById('display-pin');
    pinFiled.value = pin;
})

document.getElementById('btn-clear').addEventListener('click', function () {
    const pinFiled = document.getElementById('display-pin');
    pinFiled.value = '';


})

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typedNumber = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumber.value;

    if (isNaN(number)) {
        if (number === 'C') {
            typedNumber.value = '';
        } else if (number === '<') {
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainDigits = digits.join('');
            typedNumber.value = remainDigits;
        }
    } else {
        const newTypedNumber = previousTypedNumber + number;
        typedNumber.value = newTypedNumber;

    }
})

document.getElementById('verify-pin').addEventListener('click', function () {
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;
    const typedNumberField = document.getElementById('typed-numbers');
    const typedCurrentNumber = typedNumberField.value;
    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');

    if (currentPin === typedCurrentNumber) {
        pinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';
    } else {
        pinSuccessMessage.style.display = 'none';
        pinFailureMessage.style.display = 'block';
    }
})