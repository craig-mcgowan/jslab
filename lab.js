const printGreeting = name => console.log(`Hello there, ${name}`);

printGreeting('Garth');

const reverseWordOrder = string => {
    const wordArray = string.split(" ")
    //console.log(wordArray);
    const reversedArray = wordArray.reverse();
    //console.log(reversedArray);
    return reversedArray.join(" ")
    
}

console.log(reverseWordOrder('I love to Code'));

const calculate = (num1, num2, operation) => {
    switch (operation) {
        case 'add': return num1 + num2;
            break;
        case 'sub': return num1 - num2;
            break;
        case 'mult': return num1 * num2;
            break;
        case 'div': return num1 / num2;
            break;
        case 'exp': return num1 ** num2;
        default: return 'that didnt work';
        
    }


}
console.log(calculate(5, 3, 'sub'));
console.log(calculate(2, 3, 'mult'));
console.log(calculate(6, 4, 'add'));
console.log(calculate(2, 3,'exp'));

const printConsecutives = array => {
    for (let i = 2; i < array.length; i++) {
        if (array[i] - array[i - 1] === 1 && array[i - 1] - array[i - 2] === 1) {
            console.log(`${array[i - 2]}, ${array[i - 1]}, ${array[i]} `)
        }
    }
}

printConsecutives([1, 2, 2, 2, 3, 4, 5, 7])

const letterReverse = string => {
    const reversed = [];
    for (i = string.length - 1; i >= 0; i--){
        reversed.push(string[i])
    }
    return reversed.join("");
}
console.log(letterReverse('Luke I am your father'));

