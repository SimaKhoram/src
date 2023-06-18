// 1. Write the code, one line for each action:

// 1. Create an empty object user.
let user = {};

// 2. Add the property name with the value John.
user.name = 'John';
// 3. Add the property surname with the value Smith.
user.surname = 'Smith';
// 4. Change the value of the name to Pete.
user.name = 'Pete';
// 5. Remove the property name from the object.
delete user.name;

// 2. Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
// Should work like that:

let schedule = {};
alert(isEmpty(schedule)); // true
schedule['8:30'] = 'get up';
alert(isEmpty(schedule)); // false

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

// 3. We have an object storing salaries of our team:
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
// If salaries is empty, then the result must be 0.

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
console.log(sum);

// 4. Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

function multiplyNumeric(menu) {
  for (let key in menu) {
    if (typeof menu[key] == 'number') {
      menu[key] *= 2;
    }
  }
}
multiplyNumeric(menu);
console.log(menu);
