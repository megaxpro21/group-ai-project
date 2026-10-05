let currentNumber = "0";
let display = document.querySelector(".display");
let buttons = document.querySelectorAll("button");

let firstNumber = null;
let operator = null;

buttons.forEach(function(button) {
    button.addEventListener("click", function() {

        let value = button.textContent;

        // Clear button
        if (value === "C") {
            currentNumber = "0";
            firstNumber = null;
            operator = null;
            display.textContent = "0";
            return;
        }

        // Number buttons
        if (value >= "0" && value <= "9") {

            if (currentNumber === "0") {
                currentNumber = value;
            } else {
                currentNumber = currentNumber + value;
            }

            display.textContent = currentNumber;

        // Decimal button
        } else if (value === ".") {

            if (!currentNumber.includes(".")) {
                currentNumber = currentNumber + ".";
                display.textContent = currentNumber;
            }

        // Operator buttons
        } else if (value === "+" || value === "-" || value === "*" || value === "/") {

            firstNumber = Number(currentNumber);
            operator = value;
            currentNumber = "0";

        // Equals button
        } else if (value === "=") {

            let secondNumber = Number(currentNumber);
            let result;

            if (operator === "+") {
                result = firstNumber + secondNumber;
            } else if (operator === "-") {
                result = firstNumber - secondNumber;
            } else if (operator === "*") {
                result = firstNumber * secondNumber;
            } else if (operator === "/") {
                result = firstNumber / secondNumber;
            }

            display.textContent = result;
            currentNumber = String(result);
        }

    });
});
fetch("http://127.0.0.1:5000/calculate", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        number1: 7,
        number2: 3
    })
})
.then(response => response.json())
.then(data => {
    console.log(data);
});