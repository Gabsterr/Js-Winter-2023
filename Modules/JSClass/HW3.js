//Class Examples:

// Find if the stmt starts with "Go tO" (ignoring cases)

let stmt = "Go to NBCNews.com for breaking news, videos";

let stmt_LowerCase = stmt.toLowerCase();
let pattern_LowerCase = "Go tO".toLowerCase();
let result = stmt_LowerCase.startsWith(pattern_LowerCase);
console.log(result);




/**
 * HW3 Due date: Jan-26 (Eod)
 */

const sentence1 = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';
/**
 * Q1: Replace all occurrences of A (ignoring cases) with 'Queen and King'
 */

let sen1ReplaceAtoQueenAndKing = sentence1.replace(/A/ig, 'Queen and King');
console.log(`\nReplace all occurrences of A (ignoring cases) with 'Queen and King' -> ${sen1ReplaceAtoQueenAndKing}`);

const sentence2 = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';
/**
 * Q2: print the result of following in console:
 * 1. length of sentence2-String
 * 2. does sentence2 start with 'COM' (ignoring cases)                      -> boolean
 * 3. does sentence2 endsWith 'Google news' (ignoring cases)                -> boolean
 * 4. does word 'from' present only once in sentence2 (ignoring cases)      -> boolean
 * 5. the character present at second-last index in the String
 */

// Q2- #5 What is the character present at second to last index in the String?

let senLengthtoIndex = sentence2.length - 2;
let charSecondLastSentence2Index = sentence2.charAt(senLengthtoIndex);
console.log(`\nWhat character is present at second to last index? -> ${charSecondLastSentence2Index}\n`);
// ANswer should be s

// Q2-#4 is at the bottom pf page.

// Q2-#3. Does sentence2 endsWith 'Google news.' (ignoring cases)? (I altered the question a bit to give two examples: with period at the end, and without period)
// To ignore cases we must first make string into all lower cases:

let sen2LowerCase = sentence2.toLowerCase();
console.log(`\nsentence2 in lower case -> ${sen2LowerCase}\n`);
// sentence2 is now in lower case.

// Next, turn pattern "GOOgle NeWs" into lower case as well.

let patternLowerCase = "GOOgle NeWs".toLowerCase();
console.log(`\n"GOOgle NeWs" converted to lower case -> ${patternLowerCase}\n`);
//Pattern is now "google news"

// Now we can find out if sentence2 ends with 'Google news' ignoring the cases:

let result1 = sen2LowerCase.endsWith(patternLowerCase);
console.log(`\nDoes sentence2 end with "GOOgle NeWs" ignoring the cases? -> ${result1}\n`);

//The answer is false because the question asks if sentence2 ends with "Google news" (without the period at the end),where as sentence2 ends with a period.

//In this example I add the period to the pattern:

let patternLowerCaseWithPeriod = "GOOgle NeWs.".toLowerCase();
let result2 = sen2LowerCase.endsWith(patternLowerCaseWithPeriod);
console.log(`\nDoes sentence2 end with "GOOgle NeWs." exactly (with period), ignoring the cases? -> ${result2}\n`);



// Q2-#2. Does sentence2 start with 'COM' (ignoring cases)?
// sentence2 is already changed to lower case as sen2LowerCase.
// Make first pattern "COM" in sentence2 lower case:
let patternComLowerCase = "COM".toLowerCase();
console.log(`\nConvert pattern "COM" to lower case -> ${patternComLowerCase}\n`);

let result3 = sen2LowerCase.startsWith(patternComLowerCase);
console.log(`\nDoes sentence2 start with "COM" if ignoring cases? -> ${result3}\n`);



// Q2- #1. What is the length of sentence2-String?

let lengthsentence2 = sentence2.length;
console.log(`\nWhat is the length of sentence2-String? -> ${lengthsentence2}\n`);


//Q2- #4 Is the word 'from' present only once in sentence2 (ignoring cases)?

let patternFromLowerCase = "frOM".toLowerCase();
let result4 = sen2LowerCase.includes('from');
console.log(`\nIs the word 'from' present only once in sentence2 (ignoring cases)? -> ${result4}\n`);


/**
 * localeCompare
 * substring/slice
 * split
 */