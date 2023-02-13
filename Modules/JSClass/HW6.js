// Due date: Feb-9 (Eod)

/**
 * Q1:
 * Convert any given sentence into Titlecase
 * 
 * 'have a great day'   ->  'Have A Great Day'
 * 'YOu ONlY lIVe ONcE' ->  'You Only Live Once'
 * 'gooD mORNIng' -> 'Good Morning'
 * 'apple banana cherry' -> 'Apple Banana Cherry'
 * 'heLlO deAR, haVE a great DAy tO yOu' -> 'Hello Dear, Have A Great Day To You'
 * 'qUEen' -> 'Queen'
 * 
 */
const str1 = 'heLlO deAR, haVE a great DAy tO yOu';
let titleCaseStr1 = ' ';
        
let array = str1.toLowerCase().split(' ');
for (let i = 0; i <= array.length-1; i++){
  titleCaseStr1 = titleCaseStr1 + array[i].charAt(0).toUpperCase() + array[i].slice(1) + ' '; 
}
console.log(str1);                  // 'YOu ONlY lIVe ONcE'
console.log(titleCaseStr1);         // 'You Only Live Once'


/**
 * Q2:
 * Reverse a String (word by word)
 * 
 * 'have a great day'   ->  'day great a have'
 * 'good morning'   -> 'morning good'
 * 'hello dear how are you doing' -> 'doing you are how dear hello'
 * 'Learn' -> 'Learn'
 * 
 */
const str2 = 'have a great day';
let reverseStr2 = '';           // final answer must be in the variable
let array2 = str2.split(' ');

for (let a = array2.length-1; a >=0; a-- ) {
    reverseStr2 = reverseStr2 + array2[a] + ' ';
}

console.log(str2);              // 'hello dear how are you doing'
console.log(reverseStr2);       // 'doing you are how dear hello'


/**
 * Q3:
 * Find the average of the given array:
 * 
 * avg = totalOfValues/numberOfValues
 * 
 * [1, 2, 3, 4, 5] -> 15/5 -> 3
 * [1, 1, 1, 2, 3, 1, 2] -> 11/7 -> 1.xx
 * [1, -1] -> 0/2 -> 0
 */
const arr3 = [10, 10, 10, 10, 10];
let avg;                // final answer must be in the variable
let total = 50
avg = total/arr3.length;

console.log(arr3);      
console.log(avg);      


/**
 * Q4:
 * Create abbreviation for a given sentence.
 * 
 * 'have a great day'   ->  'HAGD'
 * 'YOu lIVe ONlY ONcE' ->  'YLOO'
 * 'gooD mORNIng' -> 'GM'
 * 'aPPlE bANAna chErRY' -> 'ABC'
 * 'heLlO deAR, haVE a great DAy tO yOu' -> 'HDHAGDTY'
 * 'qUEen' -> 'Q'
 */
const str4 = 'heLlO deAR, haVE a great DAy tO yOu';
let abbr = '';              // final answer must be in the variable
let array4 = str4.toUpperCase().split(' ');
for (let b = 0; b < array4.length; b++) {
    console.log(b);
     abbr = abbr + array4[b].charAt(0);
}
console.log(str4);          // 'apple banana cherry'
console.log(abbr);          // ABC

/**
 1st iteration
 assign 0 to variable b
 is 0 less than 3 -> Y
 log 0
 get character 'A' and append to abbr -> 'A'
 increment b by 1 -> 1

 2nd iteration
 is 1 less than 3 -> Y
 log 1
 get character 'B' and append to abbr -> 'AB'
 increment b by 1 -> 2

 3rd iteration
 is 2 less than 3 -> Y
 log 2
 get character 'C' and append to abbr -> 'ABC'
 increment b by 1 -> 3

 4th iteration
 is 3 less than 3 -> N
 bye
 */

// for ( declare variable; condition checked at the beginning of each iteration; action at the end of each iteration) {
//     
// }


/**
 * Q5:
 * Convert all string values in the given array into Uppercase
 * 
 * ['earTh', 'Mars', 'JUPiTer']     ->      ['EARTH', 'MARS', 'JUPITER']
 * ['earTh', 'JUPiTer']     ->      ['EARTH', 'JUPITER']
 * ['earTh', 'meRCUrY', 'VeNUs', 'Mars', 'JUPiTer']     ->      ['EARTH', 'MERCURY', 'VENUS', 'MARS', 'JUPITER']
 * 
 * 
 * Note: final answer must be in the SAME variable (arr5)
 */
let arr5 = ['earTh', 'meRCUrY', 'VeNUs', 'Mars', 'JUPiTer'];
console.log(arr5);      // ['earTh', 'meRCUrY', 'VeNUs', 'Mars', 'JUPiTer']

for (let i = 0 ; i < arr5.length ; i++) {
    arr5[i] = arr5[i].toUpperCase(0);
}

console.log(arr5);      // ['EARTH', 'MERCURY', 'VENUS', 'MARS', 'JUPITER']