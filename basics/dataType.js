console.log(null + 1); // 1
console.log("5" + 3); // 53
console.log("5" - 1); // 4
console.log(true + false); // 1

console.log(typeof []); // object
console.log(typeof null); // object -> bug
console.log(typeof 123n); //bigint

console.log(Boolean(0)); // falsy
console.log(Boolean("0")); // truthy
console.log(Boolean([])); // truthy
console.log(Boolean(undefined)); // fasly

function isEmpty(value) {
  if (Boolean(!value)) {
    console.log(`The given value is either null, undefined or "".`);
  } else {
    console.log(`The given value is not null, undefined or "".`);
  }
}

isEmpty("");

console.log("5" == 5); // true
console.log("5" === 5); // fasle
