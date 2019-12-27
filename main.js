/* addition */

function addition (a, b) {
  return a + b
}

console.log(addition(1, 2))

/* subtract */

function subtraction (a, b) {
  return a - b
}

console.log(subtraction(4, 2))

/* multiplication */
          
function multiplication (a, b) {
  return a * b
}

console.log(multiplication(4, 2))

/* division */

function division (a, b) {
  return a / b
}

console.log(division(4, 2))

/* number in degree */

function numberInDegree (a, n) {
    let result = a
  
    for(let i = 1; i < n; i++) {
    result *= a
  }
  return result
}

console.log(numberInDegree(5, 5))

/* square root */

function squareRoot (a) {
  return Math.sqrt(a)
}

console.log(squareRoot(144))

/* sinus */

function sinus (a) {
  return Math.sin(a)
}

console.log(sinus(180))

/* cosinus */

function cosinus (a) {
  return Math.cos(a)
}

console.log(cosinus(180))

/* factorial */

function factorial (a) {
  let result = 1
  for(let i = 1; i <= a; i++) {
    result *= i
  }
  return result
}

console.log(factorial(10))

