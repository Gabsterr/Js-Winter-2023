// Due date: Jan 30 (eod)

/**
 * Q1: Find if the user has provided only first name and last Name
 * 
 * userName1 = 'John Gig'            ->      true
 * userName1 = 'John Gig Hiyti'      ->      false
 * userName1 = 'John'                ->      false
 * userName1 = ''                    ->      false
 */
let userName1 = 'Blair Will';

let userName1Split = userName1.split(' ');
let result1 = userName1Split.length ===2
console.log(`userName1 -> ${userName1}`);
console.log(`the user has provided only first name and last name -> ${result1}\n\n`);




/**
 * Q2: Create abbreviation for a 4-word sentence
 * 
 * sentence2 = "Good morning to You"     ->      GMTY
 * sentence2 = "you NEVEr waLK aLOne"    ->      YNWA
 * sentence2 = "have A great day"        ->      HAGD
 * 
 */
let sentence2 = 'Queen king palace castle'
let abbr = '';
let array = sentence2.toUpperCase().split(' ');
 for (let X = 0 ; X < array.length ; X++) {
    abbr = abbr + array[X].charAt(0);
 }
console.log(`abbr -> ${abbr}`);     // QKPC



/**
 * Q3: Count the number of words in the sentence
 */
let sentence3 = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';

let array1 = sentence3.split(" ");
console.log(array1.length);


