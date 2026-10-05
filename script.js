let currentNumber = "0";
let display = document.querySelector(".display");
let buttons = document.querySelectorAll(".calc-button");

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

            fetch("/calculate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    number1: firstNumber,
                    number2: secondNumber,
                    operator: operator
                })
            })
            .then(response => response.json())
            .then(data => {

                display.textContent = data.result;
                currentNumber = String(data.result);

            })
            .catch(error => {

                display.textContent = "Error";
                console.error(error);

            });
        }

    });
});

// AI Assistant
document.querySelector("#ask-ai").addEventListener("click", function() {

let question = document.querySelector("#ai-question").value;
let answer = document.querySelector("#ai-answer");

if (question.trim() === "") {
    answer.textContent = "Please enter a math question first.";
    return;
}

answer.textContent = "Thinking...";


    fetch("/ask-ai", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            question: question
        })
    })
    .then(response => response.json())
    .then(data => {
    answer.textContent = data.answer;
})
.catch(error => {
    answer.textContent = "Sorry, the AI assistant is currently unavailable.";
    console.error(error);
});

});