//Quiz Game

const myQuizData = [
    { q: "What is the capital of France?", 
        a: "paris" },

    { q: "What does CSS stand for?", 
        a: "cascading style sheets" },

    { q: "What is 10 multiplied by 9 plus 1?", 
        a: "91" },

    { q: "Who is the Prime Minister of India?", 
        a: "narendra modi" },

    { q: "How many moons does Earth have?",
         a: "1" },

    { q: "What is the file extension of a JavaScript file?",
        a: "js" }
];

function startConsoleQuiz() {
    let score = 0;
    const total = myQuizData.length;

    alert("Welcome to the Console Quiz! There are " + total + " questions.");

    for (let i = 0; i < total; i++) {
        let current = myQuizData[i];
        let userAnswer = prompt(current.q);

        if (userAnswer === null || userAnswer.trim() === "") {
            alert("No answer given! Correct answer: " + current.a.toUpperCase());
            continue;
        }

        let cleanedUser = userAnswer.toLowerCase().trim();
        let cleanedCorrect = current.a.toLowerCase().trim();

        if (cleanedUser === cleanedCorrect) {
            score++;
            alert("Correct!  Score: " + score);
        } else {
            alert("Wrong . Right answer is: " + current.a);
        }
    }

    alert("Quiz Finished! You scored " + score + " out of " + total);
}

startConsoleQuiz();
