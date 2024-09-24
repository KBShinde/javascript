// 1. Reverse a String

function reverseString(str) {
    return str.split('').reverse().join('')
}

// console.log(reverseString('kunal'));

// 2. Check for Palindrome

function checkPalindrome(str) {
    const revresedString = str.split('').reverse().join('');
    return str === revresedString;
}

// console.log(checkPalindrome('kunal'));


// 3. Find the Largest Number in an Array

function findLargest(arr) {
    return Math.max(...arr)
}

// console.log(findLargest([1,55,5,8]));


// 4. FizzBuzz

function fizzBuzz() {
    for(let i =  0; i <= 100 ; i++){
        if(i % 15 ===  0)
            console.log('FizzBuzz');
            
        else if (i % 3 === 0)
            console.log('Fizz');
            
        else if (i % 5 === 0)
            console.log('Buzz');
            
        else{
            console.log(i)
        }
    }
}

// fizzBuzz()

//5. Factorial of a Number

function factorial(n) {

    if(n === 0){
        return 1 
    }
    else {
        return n * factorial(n - 1)
    }
}

// console.log(factorial(5));

// 6. Remove Duplicates from an Array

function removeDuplicates (arr) {
   return [...new Set(arr)]
}
// console.log(removeDuplicates([1,5,7,8,1,7,8,5,9]));

// 7. Merge Two Sorted Arrays

function mergeSortedArr (arr1, arr2) {
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b)

    let mergedArr = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length) {
        if(arr1 < arr2) {
            mergedArr.push(arr1[i]);
            i++;
        } else {
            mergedArr.push(arr2[j]);
            j++;
        }
    }
    return mergedArr.concat(arr1.slice(i)).concat(arr2.slice(j))
}

// console.log(mergeSortedArr([7,8,9,6],[3,1,2,5,6,4]));

// 8. Find the First Non-Repeating Character

function firstNonRepeatingChar (str) {
    for (let i = 0; i < str.length; i++) {
        if(str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            return str[i]
        }
    }
    return null
}

// console.log(firstNonRepeatingChar('naman'));

// 9.  Find the Intersection of Two Arrays

function intersection(arr1, arr2) {
    return arr1.filter((value) => arr2.includes(value))
}
// console.log(intersection([1,3,6,7], [5,8,9,7]));


// 10. Anagram Check

function isAnagram(str1, str2) {
    const sortedStr = (str) => str.split('').sort().join('');

    return sortedStr(str1) === sortedStr(str2)
}

// console.log(isAnagram('man', 'knm'));

// 11. Error Handling

function divideNumbers(a, b) {
    try {
        if(b === 0) {
            throw new Error('Division by zero is not allowed')
        }
        return a / b;
    } catch (error) {
        console.log(error)
    }
}

// console.log(divideNumbers(10, 0));
