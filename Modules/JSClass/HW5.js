//Due date: Feb-4 (eod)

//Q1:
console.log(`\nQ1:\n`);

let myNewNum = 20
console.log(`\nIs myNewNum divisible by any number provided?\n`)


if (myNewNum%6 === 0 || myNewNum%3 === 0) {
    console.log(`\nDivisible by 6 or 3\n`);
} else if (myNewNum%8 === 0) {
    console.log(`\nDivisible by 8\n`);
} else if (myNewNum%7 === 0) {
    console.log(`\nDivisible by 7\n`);
} else if (myNewNum%9 || myNewNum%2) {
    console.log (`\nDivisible by 9 or 2\n`);
} else {
    console.log(`\nmyNewNum is not divisible by any numbers provided\n`);
}



// Q2:
 
console.log(`\nQ2:\n`);
let shapes = ['Circle', 'Square', 'Triangle', 'Rectangle', 'Octagon', 'Pentagram'];
console.log(`${shapes}   ...Are these shapes or something more sinister?\n`);


if (shapes.includes('a black cat')) {          // is a black cat present in the array?
    sports.fill('Ritual Circle', 0, 1);
    console.log(shapes);
} else 
    if (shapes.indexOf('illuminati') === 2) {             //  Is the illuminati anywhere in the array?
        console.log('\nThese are more than just innocent shapes\n');
    } else {
        console.log(shapes[5]);
        console.log(`\n...See what I mean?!...\n`)
    }





//Q3:

console.log(`\nQ3:\n`);


const planets = ['earth', 'MarS', 'MerCUrY', 'MaRS', 'JuPITer'];
console.log(`planets -> ${planets}\n`);
if (planets[0].localeCompare('Earth') === 0 || planets.lastIndexOf(`JuPITer`)) {
    console.log('Either Earth is present in index 0 or JuPITer is present at last index of the array\n')
} else {
    planets.unshift('Earth');
    console.log(planets);
}