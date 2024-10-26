const submitButton = document.getElementById('submit')
const RegEx = /^-?\d+([.,]\d+)?$/

function isValidY(y) {
    if (!RegEx.test(y)) {
        return false
    }
    return y >= -3 && y <= 5
}
function isValidX(x) {
    return x >= -2 && x <= 2;
}

function validateY() {
    let yField = document.getElementById('y')
    yField.style.borderWidth = '2px'
    if (isValidY(yField.value.replace(',', '.'))) {
        yField.style.borderColor = "#4cff46"
        buttonSwitch(false)
    } else {
        yField.style.borderColor = "#ff2d2d"
        buttonSwitch(true)
    }
}
function getRValue() {
    const rRadios = document.getElementsByName('r');
    for (let radio of rRadios) {
        if (radio.checked) {
            return radio.value;
        }
    }
    return null;
}

function buttonSwitch(disable) {
    if (disable) {
        submitButton.disabled = true;
        submitButton.classList.remove('shown')
        submitButton.classList.add('hidden')
    } else {
        submitButton.disabled = false;
        submitButton.classList.remove('hidden')
        submitButton.classList.add('shown')
    }
}
