// ---------------- Instructions -------------------
// 1. Copy the content of this file to a local file in your local review git repo
// 2. Solve each function
// 3. Call the function and console log the result with 2 different inputs
// 4. add/commit and push after each function



// Given ab array of numbers and a given target. return the target if it's in the array or undefined if it's not
function findNumber(array, target) {
    for (let i = 0; i < array.length; i++) {
        const currNum = array[i]
        if (currNum === target) {
            return currNum;
        }
    }
    return undefined;
}
    console.log(findNumber([2,4,8,12,17], 4));
    console.log(findNumber([2,4,8.12,17], 18));
    console.log(findNumber(["one", "three", "eight", "nine"], "three"))
    console.log(findNumber(["one", "three", "eight", "nine"], "four"))



// Given an array of numbers, return the first number that's bigger than 14 or undefined if no number is bigger than 14
function findFirstNumber (array) {
   for (let i = 0; i < array.length; i++) {
    const currNum = array[i];
    if (currNum > 14) {
        return currNum;
    }
   }
    
}
console.log(findFirstNumber([2, 7, 9,20,]))
console.log(findFirstNumber([2, 7, 9,14,]))

// Given an array of strings, return the first string with length greater than 4 or undefined if no such string is found
function findBiggerStr(array) {
    for (let word of array) {
        if (word.length > 4) {
            return word;
        }
    }
}
console.log(findBiggerStr(["two", "three", "John", "Cathy"]))

// Given an array of Objects and a target id return the first object that matches the id or undefined if no such object is found
// Expected Structure of a SINGLE object - 
/*
{
 id: "Y42C_a",
 name: "Robert",
 occupation: "Chef",
 eyeColor: "green"
}
*/
function findObjectById(array,targetId) {
    for (let obj of array) {
        if (obj.id === targetId) {
            return obj
        }
    }
}

// Given an array of objects and a target id return a new object with only the name. The structure for a single object in the array would be as the one above. The returned object would look like this - 
/*
{
 name: "Robert"
}
*/









