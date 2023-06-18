// 1. Write a function min(a,b) which returns the least of two numbers a and b.
// let a = prompt('Inter your first number');
// let b = prompt('Inter your second number');

// function min(a, b) {
//   if (a < b) {
//     console.log(a);
//   } else {
//     console.log(b);
//   }
// }

// min(a, b);

// 2. Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

// function pow(x, n) {
//   let number = x;
//   for (let i = 1; i < n; i++) {
//     number *= x;
//   }
//   return number;
// }

// let x = prompt('Inter any number');
// let n = prompt('Inter the power you want');

// if (n < 1) {
//   console.log('not allowed');
// } else {
//   console.log(pow(x, n));
// }

// 3. Rewrite the function using '?' or '||'
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }

// ? version
// function checkAge(age) {
//   return age > 18 ? true : confirm('Did parents allow you?');
// }

// || version
// function checkAge(age) {
//   return age > 18 || confirm('Did parents allow you?');
// }

// console.log(checkAge(prompt('inter your age')));
