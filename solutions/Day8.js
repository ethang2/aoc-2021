
const { count } = require("console");
const fs = require("fs");
const text = fs.readFileSync("../puzzleInputs/day8.txt").toString('utf-8');
const textByLine = text.split("\n");

function cleanUpInput(input) {
    let cleanArr = []
    for (let i = 0; i < input.length; i++) {
        cleanArr[i] = input[i].replace(/\r/, "");
    }
    return cleanArr;
}

function convertEntriesToArrays(cleanInput) {
    let newArr = [];
    for (let i = 0; i < cleanInput.length; i++) {
        let parsedElement = cleanInput[i].split(" ");
        newArr.push(parsedElement);
    }
    return newArr;
}

const input = convertEntriesToArrays(cleanUpInput(textByLine));

// Part 1

function countUniqueDigits(inputArr) {
    let count = 0;
    for (let i = 0; i < inputArr.length; i++) {
        inputArr[i].forEach((item, index) => {
            if (index > 10) {
                if (item.length === 2) {
                    count++;
                } else if (item.length === 3) {
                    count++;
                } else if (item.length === 4) {
                    count++;
                } else if (item.length === 7) {
                    count++
                }
            }
        });
    }
    return count;
}

console.log(countUniqueDigits(input));