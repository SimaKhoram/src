// Use the for loop to output even numbers from 2 to 10.

for (let num = 2; num < 11; num++) {
  if (num % 2 == 0) {
    console.log(num);
  }
}

// Write the code which outputs prime numbers in the interval from 2 to n.
function checkPrime(n) {
  if (n == 1 || n == 0) return false;

  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }

  return true;
}

let num = 2;
for (let i = 1; i <= num; i++) {
  if (checkPrime(i)) {
    console.log(i);
  }
}