// Define a function, as a function declaration, maxOfTwoNumbersthat takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    return num1;
  }
}

// Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
const maxOfThree = function (a, b, c) {
  let max = a;
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  return max;
};

// Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.
function isCharAVowel(char) {
  return;
  oneChar === "a";
  twoChar === "e";
  threeChar === "i";
  fourChar === "o";
  fiveChar === "u";
}

// Define a function, as a function expression, sumArraythat takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.
const sumArray = function (array) {
  // Check if the input is an array
  if (!Array.isArray(array)) {
    return new Error("Input is not an array");
  }
  const sum = array.reduce((adds, lastnumber) => adds + lastnumber, 0);
  return sum;
};

// Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.
function multiplyArray(numbers) {
  if (!Array.isArray(numbers)) {
    // Check if the input is an array
    throw new Error("Input must be an array of numbers");
  }
  if (numbers.length === 0) {
    // If the array is empty, return 0 or handle it based on your use case
    return 0;
  }
  // Use the reduce method to calculate the product of the array elements
  var result = numbers.reduce(function (product, number) {
    return product * number;
  }, 1);
  return result;
}
