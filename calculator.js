// --- JAVASCRIPT LOGIC ---

        // 1. Define the four simple arithmetic functions.

        /**
         * Takes two numbers and returns their sum.
         */
        function add(number1, number2) {
            return number1 + number2;
        }

        /**
         * Takes two numbers and returns the difference (number1 minus number2).
         */
        function subtract(number1, number2) {
            return number1 - number2;
        }

        /**
         * Takes two numbers and returns their product.
         */
        function multiply(number1, number2) {
            return number1 * number2;
        }

        /**
         * Takes two numbers and returns the quotient (number1 divided by number2).
         */
        function divide(number1, number2) {
             // Safety check to prevent dividing by zero, which results in Infinity.
             if (number2 === 0) {
                return "Error: Division by zero";
            }
            return number1 / number2;
        }

        // 2. Define a function that handles the inputs, performs the calculation, and displays the result.

        /**
         * Retrieves input values, performs a calculation using the provided function,
         * and updates the result display.
         * @param {function(number, number): number} operationFunction - The arithmetic function to use (add, subtract, etc.).
         */
        function calculateAndDisplay(operationFunction) {
            // Get the text value from the input fields using their IDs.
            const input1Value = document.getElementById('number1').value;
            const input2Value = document.getElementById('number2').value;

            // Convert the text input to actual floating-point numbers.
            // parseFloat() attempts to convert the text to a number.
            // || 0 is a safety measure: if the input is empty or invalid (results in NaN),
            // it uses 0 instead, preventing errors.
            const number1 = parseFloat(input1Value) || 0;
            const number2 = parseFloat(input2Value) || 0;

            // Perform the calculation using the function passed as an argument.
            const result = operationFunction(number1, number2);

            // Find the result display area and update its content with the calculated result.
            document.getElementById('calculation-result').textContent = result;
        }

        // 3. Attach Event Listeners to each button.

        // Get references to all four buttons.
        const addButton = document.getElementById('add');
        const subtractButton = document.getElementById('subtract');
        const multiplyButton = document.getElementById('multiply');
        const divideButton = document.getElementById('divide');

        // When the 'Add' button is clicked, run calculateAndDisplay, passing the add function.
        addButton.addEventListener('click', function() {
            calculateAndDisplay(add);
        });

        // When the 'Subtract' button is clicked, run calculateAndDisplay, passing the subtract function.
        subtractButton.addEventListener('click', function() {
            calculateAndDisplay(subtract);
        });

        // When the 'Multiply' button is clicked, run calculateAndDisplay, passing the multiply function.
        multiplyButton.addEventListener('click', function() {
            calculateAndDisplay(multiply);
        });

        // When the 'Divide' button is clicked, run calculateAndDisplay, passing the divide function.
        divideButton.addEventListener('click', function() {
            calculateAndDisplay(divide);
        });
