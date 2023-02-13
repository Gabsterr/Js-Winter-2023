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
const arr3 = [1, -1];
let avg;                // final answer must be in the variable
let total = 0;
// code

for (let d=0 ; d <= arr3.length-1 ; d++) {
    total = total + arr3[d];
}
avg = total/arr3.length;
console.log('\nQ3\n');
console.log(arr3);      // [1, 1, 1, 2, 3, 1, 2]
console.log(avg);       // 1.57

const num1 = [1, 2, 3, 4, 5];
for (let d=0 ; d <= arr3.length-1 ; d++) {
    total = total + arr3[d];
}
avg = total/arr3.length;
console.log(avg)

const num2 = [1, 1, 1, 2, 3, 1, 2];
for (let d=0 ; d <= arr3.length-1 ; d++) {
    total = total + arr3[d];
}
avg = total/arr3.length;


const num3 = [1, -1];
for (let d=0 ; d <= arr3.length-1 ; d++) {
    total = total + arr3[d];
}
avg = total/arr3.length;