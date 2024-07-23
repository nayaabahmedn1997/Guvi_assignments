// Print odd numbers in an array
let a = [1, 2, 3, 4, 5, 6]
const oddNumbers = (arr)=> {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
}
oddNumbers(a);

//Convert all the strings to title caps in a string array
let str = "guvi is good";
const capsFunc =  (str) => {
    const strArray = str.split(" ");
    let finalStr = "";
    for (let i = 0; i < strArray.length; i++) {
        strArray[i] = strArray[i][0].toUpperCase() + strArray[i].substring(1);
    }
    finalStr = strArray.join(" ");
    console.log(finalStr);
    return finalStr;
}
capsFunc(str);

//Sum of all numbers in an array
const arr = [10, 20, 30, 40, 50];
const sumArr =  (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

sumArr(arr);

//Return all the prime numbers in an array
const arr1 = [1, 3, 4, 5, 7];

const isPrime = (number) => {
    let res = false;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            res = true;
        }
    }
    return res;
}

const primeNumber =  (arr) =>{
    for (let i = 0; i < arr1.length; i++) {
        if (!isPrime(arr[i])) {
            console.log(arr[i]);
        }
    }
}
primeNumber(arr1);


//Return all the palindromes in an array
const palindromeArr = ["kayak", "race", "deed", "need"];
const isPalindrome = function (str) {
    let start = 0;
    let end = str.length - 1;
    let res = true;
    while (start < end) {
        if (str[start] !== str[end]) {
            res = false;
            break;
        }
        start += 1;
        end -= 1;
    }
    return res;
}

const palindromeFunc = function (arr) {
    for (let i = 0; i < arr.length; i++) {

        if (isPalindrome(arr[i])) {
            console.log(arr[i]);
        }
    }
}

palindromeFunc(palindromeArr);
