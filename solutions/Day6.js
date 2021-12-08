
const initialFish = [1,3,4,1,1,1,1,1,1,1,1,2,2,1,4,2,4,1,1,1,1,1,5,4,1,1,2,1,1,1,1,4,1,1,1,4,4,1,1,1,1,1,1,1,2,4,1,3,1,1,2,1,2,1,1,4,1,1,1,4,3,1,3,1,5,1,1,3,4,1,1,1,3,1,1,1,1,1,1,1,1,1,1,1,1,1,5,2,5,5,3,2,1,5,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,5,1,1,1,1,5,1,1,1,1,1,4,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,1,1,3,1,2,4,1,5,5,1,1,5,3,4,4,4,1,1,1,2,1,1,1,1,1,1,2,1,1,1,1,1,1,5,3,1,4,1,1,2,2,1,2,2,5,1,1,1,2,1,1,1,1,3,4,5,1,2,1,1,1,1,1,5,2,1,1,1,1,1,1,5,1,1,1,1,1,1,1,5,1,4,1,5,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,5,4,5,1,1,1,1,1,1,1,5,1,1,3,1,1,1,3,1,4,2,1,5,1,3,5,5,2,1,3,1,1,1,1,1,3,1,3,1,1,2,4,3,1,4,2,2,1,1,1,1,1,1,1,5,2,1,1,1,2];


console.log(`Day 256: ${sumOfFish(getArrayOfTypesOfFish(initialFish), 256)}`);
console.log(`Day 80: ${getNewArrayOfFish(initialFish, 80).length}`);


//Part 1

function getNewArrayOfFish(arrOfFish, days) {
    let day = 0;
    let newArrOfFish = arrOfFish;
    while(day < days) {
        for(let i = 0; i < newArrOfFish.length; i++) {
            if(newArrOfFish[i] > 0) {
                newArrOfFish[i]--;
            } else {
                newArrOfFish[i] = 6;
                newArrOfFish.push(9);
            }
        }
        day++;
    }
    return newArrOfFish;
}


//Part 2

function getArrayOfTypesOfFish(input) {
    let inputArr = input;
    let fishnet = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < fishnet.length; i++) {
        inputArr.forEach(function(item, index, array) {
            if (item === i) {
                fishnet[i]++;
            }
        });
    }
    
    return fishnet;
}

function sumOfFish(inputArr, days) {
    for (let i = 0; i < days; i++) {
        let temp = inputArr[0]

        const shifted = inputArr.shift();

        inputArr.push(shifted);

        inputArr[6] += temp;
    }
    return inputArr.reduce((previousValue, currentValue) => previousValue + currentValue);
}