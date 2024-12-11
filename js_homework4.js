function getRandomNumbers(count) {
    const numbers = [];
    for (let i = 0; i < count; i++) {
        numbers.push(Math.floor(Math.random() * (1000 - 100 + 1) + 100)); 
    }
    return numbers;
}

function numberCharacteristic(numbers) {
    let evenNumbers = 0;
    let oddNumbers = 0;

    for (let num of numbers) {
        if (num % 2 === 0) {
            evenNumbers++; 
        } else {
            oddNumbers++; 
        }
    }
    return { evenNumbers, oddNumbers };
}

function evenPercentage(evenNumbers, oddNumbers){
    return (evenNumbers / (evenNumbers + oddNumbers)) * 100;
}

function isNumberInRange(percentage, min, max){
    return percentage >= min && percentage <= max;
}

    
function isCloseTo50(isInRange){
    if (isInRange) {
      console.log('Percentage of even numbers is close to 50%');
    } else {
        console.log('Percentage of even numbers is NOT close to 50%');
    }
}

const count = 100; 
const randomNumbers = getRandomNumbers(count);
const { evenNumbers, oddNumbers } = numberCharacteristic(randomNumbers);
const percentage = evenPercentage(evenNumbers, oddNumbers);

console.log('Number of generated numbers: ', count);
console.log('Number of even numbers: ', evenNumbers);
console.log('Number of odd numbers: ', oddNumbers);

const closeTo50 = isNumberInRange(percentage, 48, 52);
isCloseTo50(closeTo50);
