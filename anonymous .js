// Print odd numbers in an array
let a = [1, 2, 3, 4, 5, 6]
const oddNumbers = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
}
oddNumbers(a);

//Convert all the strings to title caps in a string array
let str = "guvi is good";
const capsFunc = function (str) {
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
const sumArr = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

sumArr(arr);

//Return all the prime numbers in an array
const arr1 = [1, 3, 4, 5, 7];

const isPrime = function (number) {
    let res = false;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            res = true;
        }
    }
    return res;
}

const primeNumber = function (arr) {
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

//  Return median of two sorted arrays of the same size.
/** 
 * Pseudocode
 * arr1 = [1 3 4 7 10 12]  n1 = 6    arr2 = [2 3 6 15]  n2= 4
 * arr3 = [] i=0 j=0
 * while(i < n1 && j < n2)
 * {
 *  if(arr1[i] < arr2[j]) arr3.push(arr1[i++])
 *  else arr3.push(arr2[j++])
 * }
 * while(i < n1) arr3.push(arr1[i++])
 * while(j < n2) arr3.push(arr2[j++])
 * if(n%2 ===1)
 * {
 * return arr3[ Math.floor(n/2)]
 * }
 * else
 * {
 * return (arr3[n/2] +arr3[(n/2) -1])
 * }
*/
const array1 = [1, 3, 4, 7, 10, 12];
const array2 = [2, 3, 6, 15];

const medianFunc = function (arr1, arr2, n1, n2) {
    let i = 0;
    let j = 0;
    let n = n1 + n2;
    let finalArray = [];
    let res;
    while (i < n1 && j < n2) {
        if (arr1[i] < arr2[j]) {
            finalArray.push(arr1[i++]);
        }
        else {
            finalArray.push(arr2[j++]);
        }
        while (i < n1) {
            finalArray.push(arr1[i++]);
        }
        while (j < n2) {
            finalArray.push(arr2[j++]);
        }
    }
    console.log(finalArray)
    if (n % 2 === 1) {
        res = finalArray[Math.floor(n / 2)]
    }
    else {
        res = (finalArray[n / 2] + finalArray[(n / 2) - 1]) /2 
    }
    return res;
}
const result = medianFunc(array1, array2, array1.length, array2.length);

//Remove duplicates from an array
const dupArray = [1, 2, 3, 4, 5, 6, 7, 1,1,2, 3,4];
let finalArray = [];
const removeDup = function(arr){
    for(let i = 0; i< arr.length; i++)
    {
        for(let j= i+1; j < arr.length -1 ; j++)
        {
            if(arr[i] !== arr[j] && !finalArray.includes(arr[j]))
            {
                finalArray.push(arr[j]);
            }
        }
    }
    console.log(finalArray);
}
removeDup(dupArray);

//Rotate an array by k times
const rotArray = [1, 2,3,4,5, 6,7];
const rotateArrayByOne= function(arr, K) {
    if (arr.length === K || K === 0) {
        return arr;
    }

    K = K % arr.length;
    
    for (let i = 0; i < K; i++) {
        arr.unshift(arr.pop());
    }

    return arr;
}
console.log(rotArray, 5)



