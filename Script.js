// Define variable to track the user's current position in the story
let currentState = 'start';
 
// Story array to hold all questions and answers
const story = {
    start: {
        question: 'You are at the entrance of a dangerous temple. Do you enter or leave?',
        answers: [
            { text: 'Enter the Temple', nextState: 'enterTemple' },
            { text: 'Leave the Temple', nextState: 'leaveTemple' }
        ]
    },
    enterTemple: {
        question: 'You enter the temple and see two paths: left or right. Which do you take?',
        answers: [
            { text: 'Take Left Path', nextState: 'leftPath' },
            { text: 'Take Right Path', nextState: 'rightPath' }
        ]
    },
    leaveTemple: {
        question: 'You decided to leave the temple. Adventure ends here!',
        answers: [] 
    },
    leftPath: {
        question: 'You encounter a giant spider! Fight or run?',
        answers: [
            { text: 'Fight', nextState: 'fightSpider' },
            { text: 'Run', nextState: 'runAway' }
        ]
    },
    rightPath: {
        question: 'You found a treasure chest! Open it or leave it?',
        answers: [
            { text: 'Open Chest', nextState: 'openChest' },
            { text: 'Leave Chest', nextState: 'leaveChest' }
        ]
    },
    fightSpider: {
        question: 'You bravely fight the spider and win! You find the treasure. Adventure ends here!',
        answers: [] 
    },
    runAway: {
        question: 'You run away and escape the spider, but get lost. Adventure ends here!',
        answers: [] 
    },
    openChest: {
        question: 'The chest contains gold and jewels! You win! Adventure ends here!',
        answers: [] 
    },
    leaveChest: {
        question: 'You leave the chest and exit the temple safely. Adventure ends here!',
        answers: [] 
    }
}; 
 
// Function to render the current question and available choices
function renderQuestion() {
    const questionContainer = document.getElementById('question');
    const answerButtons = document.getElementById('answers');
    const restartButton = document.getElementById('restart-button');
    // Hide the restart button by default
    restartButton.style.display = 'none';
    answerButtons.innerHTML = ''; 
 
    // Get the current state's story data
    const currentStory = story[currentState];
 
    // Update the question text
    questionContainer.innerText = currentStory.question;
 
    // Check if there are answers or if it's the end
    if (currentStory.answers.length > 0) {
        currentStory.answers.forEach(answer => {
            addAnswerButton(answer.text, answer.nextState);
        });
    } else {
        // If no answers, show the restart button
        restartButton.style.display = 'block';
    }
}
 
// Helper function to create and add answer buttons
function addAnswerButton(text, nextState) {
    const answerButtons = document.getElementById('answers');
    const button = document.createElement('button');
    button.innerText = text;
    button.classList.add('answer-btn'); 
    button.setAttribute('aria-label', `Choose ${text}`); 
    button.addEventListener('click', () => {
        currentState = nextState; 
        renderQuestion(); 
    });
    answerButtons.appendChild(button); 
}
 
// Event listener for the "Start Adventure" button
document.getElementById('start-button').addEventListener('click', () => {
    currentState = 'start'; 
    document.getElementById('story-intro').style.display = 'none'; 
    document.getElementById('decision-points').style.display = 'block'; 
    renderQuestion(); 
});
 
// Event listener for the "Restart Adventure" button
document.getElementById('restart-button').addEventListener('click', () => {
    currentState = 'start'; 
    document.getElementById('decision-points').style.display = 'block'; 
    renderQuestion(); 
});