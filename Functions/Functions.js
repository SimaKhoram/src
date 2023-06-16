// Write a function min(a,b) which returns the least of two numbers a and b.
let a = prompt('Inter your first number')
let b = prompt('Inter your second number')

function min(a, b) {
  if (a < b) {
    console.log(a);
  } else {
    console.log(b);
  }
}

min(a, b)

// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

function pow(x, n) {
  let number = x;
  for (let i = 1; i < n; i++) {
    number *= x;
  }
  return number;
}

let x = prompt('Inter any number')
let n = prompt('Inter the power you want')

if (n < 1) {
  console.log('not allowed');
} else {
  console.log( pow(x, n) );
}