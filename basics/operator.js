console.log("10" + 1); // 101
console.log("10" - 1); // 9
console.log(true + false); // 1
console.log(!!"Sheryians"); // true

let str = "42";
let num = +str;
console.log(num); // 42
console.log(typeof num); // `number`

let age = 17;
let msg = age >= 18 ? "Adult" : "Minor";
console.log(msg); // Minor;

function calculator(a = 0, b = 0, operator) {
    if(operator === `/` && b === 0) return console.log(`Invalid operation!`);

  switch (operator) {
    case "+":
      console.log(a + b);
      break;
    case "-":
      console.log(a - b);
      break;
    case "*":
      console.log(a * b);
      break;
    case "/":
      console.log(a / b);
      break;
    default:
      console.log(`Enter a real numberrr`);
      break;
  }
}

calculator(2, 0, `/`);
