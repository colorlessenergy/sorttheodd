// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.
//
// Zero isn't an odd number and you don't need to move it. 
// If you have an empty array, you need to return it.
//
// Example
//
// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

// pseudo code

// if array length is 0
 // return empty array


 // loop through array
 // check if it is odd
 // move the odd number into a new array
 // once it finishes looping
 // sort the array from least to biggest
 // loop through original array and insert the oddnumbers into the array from least to greatest
 // only if the number is a odd
 // ignore even numbers place in the array


 function sortArray(arr) {

    if (arr.length === 0) {
        return [];
    }

    let oddArray = [];

    // sort all odd numbers out of array into a new array

    arr.forEach(function (number) {
        if (number % 2 !== 0) {
            oddArray.push(number)
        }
    });

    // order numbers into least to greatest
    oddArray.sort(function (a,b) {
        return a - b;
    });

    return arr.map(function (number) {
        if (number % 2 !== 0) {
            return oddArray.shift();
        } else {
            return number
        }
    });    
 }

console.log(sortArray([5, 3, 2, 8, 1, 4]), sortArray([]));
