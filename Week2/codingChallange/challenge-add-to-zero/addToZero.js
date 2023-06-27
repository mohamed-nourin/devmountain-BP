// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:
// Given an array of numbers, console.log true if any two numbers in the array add to zero, otherwise log false
let foundZeroSum = false;
for (let i = 0; i < array.length; i++) { 
    for (let j = i; j < array.length; j++) {
        if (array[i] + array [i] === 0) {
            foundZeroSum = true;
            break;

        }
    }

if (foundZeroSum) {
    break;
    }
}

console.log(foundZeroSum)
