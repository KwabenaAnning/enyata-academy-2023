let x = prompt("Enter weight in kg");
let z = x * 2.205;

function convertKgToLb() {
  let result = parseInt(z);
  return result;
}

// Invoke the method
let output = convertKgToLb();

alert("The final answer is: " + output+"lb");
