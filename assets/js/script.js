
//DOM elements
const quizContainer = document.getElementById('quiz-container');
const nextButton = document.getElementById('next-button');

//state variables
let currentQuestionIndex = 0;
let questions = [

    {
        question: 'What is the best pancake topping?',
        options: ['Nutella', 'Sugar and Lemon', 'Cream and Jam', 'Maple Syrup and Bacon'],
        correctAnswer: 'Cream and Jam'
    },

    {
        question: 'What drink pairs well with pancakes?',
        options: ['Milk', 'Coca-Cola', 'Squash', 'Water'],
        correctAnswer: 'Milk'
    }

];


//event listeners
nextButton.addEventListener('click', loadNextQuestion);

//initialise quiz
initialiseQuiz ();

//initialise quiz by displaying first question
function initialiseQuiz() {
    displayQuestion(
        questions [
            currentQuestionIndex
        ]
    );
}

function displayQuestion(questionObj) {

    //clear current question from screen
    quizContainer.innerHTML = '';
    //create dynamic h2 
    const questionElement = document.createElement('h2');
    //load h2 with question text
    questionElement.innerText = questionObj.question;
    //display the question on the screen
    quizContainer.appendChild(questionElement);
    //displays all the options as buttons using createOptionButton
    questionObj.options.forEach( option => {
        const button = createOptionButton(option);
        quizContainer.appendChild(button);
    });

}

function createOptionButton(option) {

    //dynamically create button html
    const button = document.createElement('button');
    // set text of button to equal option
    button.innerText = option;
    //style button
    button.classList.add('btn', 'btn-outline-primary', 'mt-2');
    //add event listener
    button.addEventListener('click', () => handleOptionClick(option));
    //return the created button as a result of function
    return button;

}

function loadNextQuestion() {

    //advance to next question
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion(questions[currentQuestionIndex]);
    } else {
        endQuiz();
    }

}

function handleOptionClick(optionSelected) {
    
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (optionSelected === correctAnswer) {
        alert('Well done - correct');
    } else {
        alert('Well done - incorrect')
    }

    loadNextQuestion;

}

function endQuiz() {
    quizContainer.innerHTML = '<h2>GAME OVER</h2>';
    nextButton.classList.add('d-none');
}