// q1) Given a number n find the first n elements of the fiboacci sequence

function fibonacci(n) {
  let fib = [0, 1];

  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

let fibonacciNums = fibonacci(10);
console.log("fibonacciNums", fibonacciNums);

// q2) given an integer n find the factorial of that integer

function factorial(n) {
  let result = 1;
  if (n < 2) return 1;
  for (let i = n; i > 1; i--) {
    result *= i;
  }
  return result;
}

let factorialResult = factorial(5);
let factorialResult1 = factorial(1);
let factorialResult2 = factorial(-10);

console.log("factorial", factorialResult, factorialResult1, factorialResult2);

// q3) given a natural number n determin if the number is prime or not

function isPrime(n) {
  if (n < 2) return false;
  for (i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
}

let p1 = isPrime(1);
let p2 = isPrime(5);
let p3 = isPrime(4);

console.log("isPrime", p1, p2, p3);

// q4) given a positive n determin if the number is a power of 2 or not

function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

let pow1 = isPowerOfTwo(1);
let pow2 = isPowerOfTwo(2);
let pow3 = isPowerOfTwo(5);

console.log("isPowerOfTwo", pow1, pow2, pow3);

// q5) find the fibonaaci number using recurrsion

function fibRec(n) {
  if (n < 2) return n;
  return fibRec(n - 1) + fibRec(n - 2);
}

console.log("recursive fibonacci", fibRec(0));
console.log("recursive fibonacci", fibRec(1));
console.log("recursive fibonacci", fibRec(6));

// q5)  find the factorial of the given number using recursion

function factRec(n) {
  if (n === 0) return 1;
  return n * factRec(n - 1);
}

console.log("recursive factorial", factRec(0));
console.log("recursive factorial", factRec(1));
console.log("recursive factorial", factRec(5));

// q7) find the number from the given array using linear search

const linearArr = [4, 7, 2, 9, 1, 5, 8, 3, 6, 0];

function linearSearch(arr, target) {
  for (num in arr) {
    if (arr[num] == target) return num;
  }
  return -1;
}

console.log("linearSearch", linearSearch(linearArr, 6));
console.log("linearSearch", linearSearch(linearArr, 16));

// q7) find the number from the sorted array using binary search

let sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function binarySearch(arr, target) {
  let right = 0;
  let left = arr.length - 1;
  while (right <= left) {
    let middle = Math.floor((right + left) / 2);
    if (arr[middle] == target) return middle;
    if (target > arr[middle]) {
      right = middle + 1;
    } else {
      left = middle - 1;
    }
  }
  return -1;
}

console.log("binary search", binarySearch(sortedArr, 10));
console.log("binary search", binarySearch(sortedArr, 6));
console.log("binary search", binarySearch(sortedArr, 20));

// q7) find the number from the sorted array using recursive binary search

function search(arr, target, start, end) {
  let middle = Math.floor((start + end) / 2);
  if (start > end) return -1;
  if (arr[middle] === target) return middle;
  if (target > arr[middle]) {
    return search(arr, target, middle + 1, end);
  } else {
    return search(arr, target, start, middle - 1);
  }
}

function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

console.log("recursive binary search", recursiveBinarySearch(sortedArr, 10));
console.log("recursive binary search", recursiveBinarySearch(sortedArr, 6));
console.log("recursive binary search", recursiveBinarySearch(sortedArr, 20));

// q8) do a bubble sort on an unsorted array ?
let bubsort = [15, 3, 8, 42, 1, 27, 19, 6, 33, 11];

function bubbleSort(arr) {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
        swapped = true;
      }
    }
  }
}

bubbleSort(bubsort);
console.log("bubbleSort", bubsort);
