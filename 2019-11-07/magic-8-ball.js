/**
 * @todo Store answers in separate file
 *       (when we learn how to do that)
 */
const answers = [
    'As I see it, yes.',
    'Ask again later.',
    'Better not tell you now.',
    'Cannot predict now.',
    'Concentrate and ask again.',
    'Don’t count on it.',
    'It is certain.',
    'It is decidedly so.',
    'Most likely.',
    'My reply is no.',
    'My sources say no.',
    'Outlook not so good.',
    'Outlook good.',
    'Reply hazy, try again.',
    'Signs point to yes.',
    'Very doubtful.',
    'Without a doubt.',
    'Yes.',
    'Yes – definitely.',
    'You may rely on it.'
]

let lastAnswer;

/**
 * Take in input and generate response
 * @param string Question
 * @todo Add event listen for when 8 ball is shaken on screen
 *        (after we learn that stuff)
 * @todo Instead of logging the data, inject it into the HTML
 *        (after we learn that stuff)
 */
function receiveQuestion(question) {
    const answer = getRandomAnswer(answers);

    generateResponse(question, answer);
}

/**
 * 
 * @todo Instead of logging the data, inject it into the HTML
 *        (after we learn that stuff)
 */
function generateResponse(question, answer) {
    console.log(`You asked: ${question}`);
    console.log(`Our answer is: ${answer}`)
}

/**
 * Generate a random answer to display
 * @param array answers List of possible answers to draw from
 */
function getRandomAnswer(answers) {
    const randNum = getRandomNumber(0, answers.length - 1);
    
    return answers[randNum];
}

/**
 * Get random number between two integers
 * 
 * Use recursion to check to see if we have the same number twice
 * and generate new number if that is the case
 * 
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 * 
 * @param Number min 
 * @param Number max 
 */
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    //The maximum is inclusive and the minimum is inclusive
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    if (randomNum !== lastAnswer) {
        // Base step
        lastAnswer = randomNum;
        return randomNum;
    } else {
        // Recursive step
        return getRandomNumber(min, max);
    }
}

receiveQuestion('Is this going to work?');
receiveQuestion('Is this going to work?');