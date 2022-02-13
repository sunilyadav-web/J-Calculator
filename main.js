const elements = document.querySelectorAll('button')
var display = document.getElementById('display')
var displayValue = ''
let calculation = (btnValue) => {
    d = display.value;
    if (d != '') {
        displayValue = d
    }
    if (btnValue == 'ce') {
        displayValue = ''
        display.value = displayValue

    } else if (btnValue == '=') {
        displayValue = eval(displayValue)
        display.value = displayValue;
    } else {
        displayValue += btnValue
        display.value = displayValue
    }
}
elements.forEach(x => {
    x.addEventListener('click', () => {
        calculation(x.value)
    });

})
display.addEventListener('keyup', function(event) {
    if (event.keyCode == 13) {
        x = display.value
        display.value = eval(x)
    }
})