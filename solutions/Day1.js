
const fs = require("fs");
const text = fs.readFileSync("../puzzleInputs/day1.txt").toString('utf-8');
const textByLine = text.split("\n");

function cleanUpInput(input) {
    let cleanArr = []
    for (let i = 0; i < input.length; i++) {
        cleanArr[i] = input[i].replace(/\r/, "");
    }
    return cleanArr;
}

const cleanInputArr = (inputArr) => { return inputArr.map(item => parseInt(item)) };

const input = [199,200,208,210,200,207,240,269,260,263];
const input2 = cleanInputArr(cleanUpInput(textByLine));

// Part 1

function checkForIncreases(inputArr) {
    let count = 0;
    for (let i = 1; i < inputArr.length; i++) {
        if (inputArr[i] > inputArr[i - 1]) {
            count++;
        }
    }
    return count;
}

console.log(checkForIncreases(input2));

// Part 2

function getSums(inputArr) {
    let sums = [];
    for (let i = 0; i < inputArr.length; i++) {
        if (i < (inputArr.length - 2)) {
            sums.push(inputArr[i] + inputArr[i + 1] + inputArr[i + 2]);
        }
    }
    return sums;
}

console.log(checkForIncreases(getSums(input2)));