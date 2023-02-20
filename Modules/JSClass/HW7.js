//Due: Feb-18 (EOD)
/**
 * Q1:
 * Create function to get the smallest value in the given string-array
 * 
 * let words = ['hApPY', 'gIFts', 'laUGhable', 'leARning', 'GrOW', 'coNNecT'];
 * 
 let planets = ['earTh', 'meRCUrY', 'VeNUs', 'Mars']
 *
 */

let words = ['hApPY', 'gIFts', 'laUGhable', 'leARning', 'GrOW', 'coNNecT'];
let planets = ['earTh', 'meRCUrY', 'VeNUs', 'Mars'];
// This is how you define a function
function getSmallestWord (wordsArray) {
   
    //this is the variable that we use to save the smallest word so far, as we go (outside the loop)
    let smallestWord;  
    
    // for loop iterrates thru the array
    for ( let word of wordsArray) { // Return first instance of smallest value word
        
        // if we dont have the word to compare to, just save the word we have
        if (!smallestWord) {
            smallestWord = word; 
        } else {

            //if length of current word is less than the length of smallestWord (we saved), then current word is new smallestWord
            if (word.length < smallestWord.length) {
                smallestWord = word;
            }
        }
    } 
    return smallestWord;
}

// This is how you USE a function
console.log(getSmallestWord(words));
console.log(getSmallestWord(planets));

// // one type of for loop
// let weDidNotStartYet;
// for (let word of wordArray) {
//     // runs only the first time
//     if (weDidNotStartYet === undefined) {
//         weDidNotStartYet = 1;
//         console.log('first time!!!!!');
//     } else {
//         // runs all the other times
//         console.log('not first time');
//     }
// }

// // another type of for loop
// for (let i = 0; i < wordArray.length; i++) {
//     // runs only the first time
//     if (i === 0) {
//         console.log('first time!!!!!');
//     } else {
//         // runs all the other times
//         console.log('not first time');
//     }
// }


// For in loop practice

// "headsOfFamilies" is the object
const headsOfFamilies = {
    Spinelli: 'Paula',
    Carneiro: 'Daisy',
    Valongo: 'Sam',
    Pepperoni: 'Vito'
}
// "lastName" variable represents the keys of object
for (let lastName in headsOfFamilies) {
    console.log(headsOfFamilies[lastName]); //this is calling the values of the keys
}

// headsOfFamilies['Spinelli'] // 'Paula'
// headsOfFamilies.Spinelli // 'Paula' 






/**
 * Q2:
 * Create function to get the first value in the numbers-array greater than 10
 * 
 * [98, 34, 12, 1, 23, 43, 65, 43, 87, 17];         // 98
 * 
 * [1, 3, 3, 65, 43, 87, 17];                       // 65
 * 
 * [1, 3, 3, 6, 10, 7, 23, 1, 20];                  // 23
 * 
 */
let array = [98, 34, 12, 1, 23, 43, 65, 43, 87, 17];
let array2 = [1, 3, 3, 65, 43, 87, 17];
let array3 = [1, 3, 3, 6, 10, 7, 23, 1, 20];
let array4 = [0, 5, 2, 9];

function firstGreaterThanTen (numArray) {
    for (let number of numArray) {
        if (number > 10) {
            return number;
        }
    }
}
console.log(firstGreaterThanTen(array));
console.log(firstGreaterThanTen(array2));
console.log(firstGreaterThanTen(array3));
console.log(firstGreaterThanTen(array4)); //if there's no number greater than 10 it'll return undefined



/**
 * Q3:
 * Create function to get the minimum value in the given numbers-array
 * 
 * [98, 34, 12, 1, 23, 43, 65, 43, 87, 17];             // 1
 * 
 * [1, -3, 33, 65, 3, 87, 17];                          // 
 * 
 * [1, 23, 3, -6, 10, -7, 23, -1, 20];                  // -7
 * 
 */
let numArray1 = [98, 34, 12, 1, 23, 43, 65, 43, 87, 17]; // 1
let numArray2 = [1, 23, 3, -6, 10, -7, 23, -1, 20]; // -7
let numArray3 = [1, -3, 33, 65, 3, 87, 17]; //-3


let minimumValue = function (givenNumArray) {
    let minValNum;
    for ( let number of givenNumArray) {

        if (minValNum === undefined) {
           minValNum = number;
        } else {
            if (number < minValNum) {
                minValNum = number;
            }
        }
    }
    return minValNum;
}

console.log(minimumValue(numArray1)); // starts as undefined, ends as 1

console.log(minimumValue(numArray2)); // starts as und, ends as -7

console.log(minimumValue(numArray3)); // starts as und, ends as -3

