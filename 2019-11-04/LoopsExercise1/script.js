console.log("Ascending for loop:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("Descending for loop:");
for (let j = 10; j >= 1; j--) {
    console.log(j);
}

console.log("Ascending while loop:");
let w = 1;
while (w <= 10) {
    console.log(w);
    w++;
}

console.log("Descending while loop:");
w = 10;
while (w >= 1) {
    console.log(w);
    w--;
}

console.log("Ascending do-while loop:");
let d = 1;
do {
    console.log(d);
    d++;
} while (d <= 10);

console.log("Descending do-while loop:");
d = 10;
do {
    console.log(d);
    d--;
} while (d >= 1);

console.log("Ascending array logging");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let n of numbers) {
    console.log(n);
}

console.log("Descending array logging");
for (let n of numbers) {
    console.log(numbers[numbers.length - n]);
}

let str = "paper";
strPad(str);
str = "space";
strPad(str);
str = "watermelon";
strPad(str);
str = "message";
strPad(str);



function strPad(userStr) {
    while (str.length < 10) {
        str = " " + str;
    }
    console.log(str);
}

let name = "John McCarthy";
for (let i = name.length - 1; i >= 0; i--) {
    console.log(name[i]);
}

// Pig Latin
let sent = "This was really hard to figure out";
const vowels = ['a', 'e', 'i', 'o', 'u'];
let spaces = [];
for (let i = 0; i < sent.length; i++) {
    if (sent[i] === ' ') {
        spaces.push(i);
    }
}

let pigLatin = "";
// Loop through spaces
for (let i = 0; i < spaces.length + 1; i++) {
    let word;
    // Getting individual word
    if (i > 0) {
        word = sent.substring(spaces[i - 1] + 1, spaces[i]);
    } else {
        word = sent.substring(0, spaces[i]);
    }
    let pigWord = word;

    // Loop through vowels
    let earliestVowel = -1;
    vowels.forEach(v => {
        let vIndx = word.indexOf(v);
        // Filter not finding vowel (-1)
        if (vIndx >= 0) {
            // Filter for finding earliest vowel
            if (vIndx < earliestVowel ||
                earliestVowel == -1) {
                earliestVowel = vIndx;
            }
        }
    });
    if (earliestVowel !== 0) {
        // Getting leading consonants
        let prefixCons = word.substring(0, earliestVowel);
        // Removing leading consonants & adding 'ay'
        pigWord = pigWord.substring(earliestVowel);
    }
    pigWord += prefixCons + "ay";

    // Adding word to pig Latin sentence
    if (i == spaces.length) {
        pigLatin += pigWord + "."
    } else {
        pigLatin += pigWord + " ";
    }
}
console.log(pigLatin);

function FindEarliestVowelIndex(wordStr) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let earliestVowel = -1;
    vowels.forEach(v => {
        let vIndx = word.indexOf(v);
        // Filter not finding vowel (-1)
        if (vIndx > 0) {
            // Filter for finding earliest vowel
            if (vIndx < earliestVowel ||
                earliestVowel == -1) {
                earliestVowel = vIndx;
            }
        }
    });
    return earliestVowel;
}