// F -> C
// T(°C) = (T(°F) - 32) / 1.8

let fTemp = 47;
let cTemp = (fTemp - 32) / 1.8;

console.log(`\n${fTemp}°F is equal to ${cTemp}°C`);

// C -> F
// T(°F) = T(°C) × 1.8 + 32

let cTemp1 = 25;
let fTemp1 = (cTemp1) * 1.8 + 32;

console.log(`\n${cTemp1}°C is equal to ${fTemp1}°F`);

// F -> K
// T(K) = (T(°F) + 459.67)× 5/9

let fTemp2 = 77;
let kTemp = (fTemp2 + 459.67) * 5/9;
console.log(`\n${fTemp2}°F is equal to ${kTemp}°K`);

// C -> K
// T(K) = T(°C) + 273.15

let cTemp2 = 25;
let kTemp1 = (cTemp2) + 273.15;
console.log(`\n${cTemp2}°C is equal to ${kTemp1}°K`);

// K -> F
// T(°F) = T(K) × 9/5 - 459.67

let kTemp2 = 298.15;
let fTemp3 = (kTemp2) * 9/5 - 459.67;
console.log(`\n${kTemp2}°K is equal to ${fTemp3}°F`);

// K -> C
// T(°C) = T(K) - 273.15

let kTemp3 = 298.15;
let cTemp3 = (kTemp3) - 273.15;
console.log(`\n${kTemp3}°K is equal to ${cTemp3}°C`);
