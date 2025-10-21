// JavaScript logic goes here

        /**
         * 1. Function Declaration: Defines the reusable block of code that runs
         * when the user clicks the submit button.
         */
        function checkAnswer() {
            // 2. Identify the Correct Answer: The correct answer to "What is 2 + 2?"
            //    is stored as a constant string.
            const correctAnswer = "4";

            // 3. Retrieve the User’s Answer:
            //    - document.querySelector('input[name="quiz"]:checked') finds the single
            //      radio button that the user has selected.
            const selectedChoice = document.querySelector('input[name="quiz"]:checked');

            // 4. Get the feedback element: We need a reference to the <p id="feedback">
            //    element to write our message to the user.
            const feedbackElement = document.getElementById('feedback');

            // Safety check: If the user didn't click anything, selectedChoice will be null.
            if (!selectedChoice) {
                feedbackElement.textContent = "Please select an answer before submitting.";
                feedbackElement.style.backgroundColor = "#ffdddd";
                feedbackElement.style.color = "red";
                return; // Stop the function here
            }

            // Get the value (e.g., "4" or "22") from the user's selected radio button.
            const userAnswer = selectedChoice.value;

            // 5. Compare the User’s Answer with the Correct Answer (Decision Time!)
            if (userAnswer === correctAnswer) {
                // If they match: CORRECT
                feedbackElement.textContent = "Correct! Well done.";
                feedbackElement.style.backgroundColor = "#e6ffe6"; // Light green background
                feedbackElement.style.color = "green";
            } else {
                // If they DO NOT match: INCORRECT
                feedbackElement.textContent = "That's incorrect. Try again!";
                feedbackElement.style.backgroundColor = "#ffdddd"; // Light red background
                feedbackElement.style.color = "red";
            }
        }

        /**
         * 6. Add an Event Listener to the Submit Button:
         * - Get a reference to the button using its ID ("submit-answer").
         */
        const submitButton = document.getElementById('submit-answer');

        // Tell the button: "When you are 'click'ed, run the `checkAnswer` function."
        // We do NOT use parentheses () after `checkAnswer` because we want the function
        // to run *only* when the click happens, not immediately.
        submitButton.addEventListener('click', checkAnswer);