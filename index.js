let score = 0;
let range = 2;

let username = prompt(
    `Please enter your username:  Then click ok to continue`
);

function randomGuess(range) {
    let randomNum = Math.floor(Math.random() * range) + 1;
    return randomNum;
}
let randomNumber= 0;
do {
    randomNumber = randomGuess(range);
    let guess = prompt(
        `Hi ${username}. Guess a number between 1 and ${range}`
    );
    userNum = parseInt(guess);
    if (userNum === randomNumber) {
        prompt("Correct Guess, click ok to continue");
        range++;
        score++;
    } else {
        prompt(`Wrong guess :(. Your Score is ${score}. Thanks for playing!`)
    }
} while (userNum === randomNumber);