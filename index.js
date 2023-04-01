// Write your solution in this file!
// Write your solution in this file!

const employee = {
  name: "Tom",
  streetAddress: "5 Cherry St., Anytown, NY"
}


function updateEmployeeWithKeyAndValue(obj, key, value) {
  const newObj = { ...obj };
  newObj[key] = value;
  return newObj;
}

// console.log(updateEmployeeWithKeyAndValue(employee, "name", "Steve"))
// { name: 'Steve', streetAddress: '5 Cherry St., Anytown, NY' }


function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

// console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Bill"))
// { name: 'Bill', streetAddress: '5 Cherry St., Anytown, NY' }

function deleteFromEmployeeByKey(obj, key) {
  const newObj = { ...obj };
  delete newObj[key];
  return newObj;
}

// console.log(deleteFromEmployeeByKey(employee, "name"))
// { streetAddress: '5 Cherry St., Anytown, NY' }

function destructivelyDeleteFromEmployeeByKey(obj, key) {
  delete obj[key];
  return obj;
}

// console.log(destructivelyDeleteFromEmployeeByKey(employee, "name"))
// { streetAddress: '5 Cherry St., Anytown, NY' }


