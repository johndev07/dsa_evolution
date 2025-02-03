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
