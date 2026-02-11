const display = document.getElementById('display');

function appendToDisplay(input) {
    if (display.value === "0" || display.value === "Error") {
        display.value = input;
    } else {
        display.value += input;
    }
}

function clearDisplay() {
    display.value = "0";
}

function backspace() {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = "0";
    }
}

function calculate() {
    try {
        
        let result = eval(display.value);
        display.value = Number(result.toFixed(10)); 
    } catch (error) {
        display.value = "Error";
    }
}