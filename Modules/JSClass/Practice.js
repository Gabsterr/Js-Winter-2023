/*function sendReminder(name, time) {
     console.log('Hello, ' + name + " the meeting is at " + time + " o'clock.");

} 

sendReminder('Bobby', 2)
sendReminder('Shawn', 4)
sendReminder('Angie', 10)
sendReminder('Jess', 1)
*/

//Fizz Buzz

/*If number divisible by 3, consolelog fiz
else if divisible by 5 consolelog buzz
else if divisible by 15 consolelog fizzbuzz
else console log number*/

for (let x = 1; x <= 100; x++)
if(x % 15 === 0) {
    console.log('fizz buzz');
} else if (x % 5 === 0) {
    console.log('buzz');
} else if  (x % 3 === 0) {
    console.log('fizz');
} else {
    console.log (x);
}

