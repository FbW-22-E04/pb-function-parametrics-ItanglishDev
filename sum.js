// Create a function sum which accepts any amount of numbers and return the sum of their addition

const sum = (...values) => {
  let sumUp = 0;
  for (i = 0; i < values.length; i++) {
    sumUp += values[i];
  }
  return sumUp;
};

console.log(sum(1)); // -> 1
console.log(sum(1, 15)); // -> 16
console.log(sum(25, 25, 20)); // -> 70
