function countdown(callback) {
  window.setTimeout(callback, 2)
}

function createMultiplier(number1){
  return function(number2){return number1 * number2}
}

function multiplier(number1, number2 ) {
  return number1 * number2
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)
var doublerWithBind = multiplier.bind(2)
var triplerWithBind = multiplier.bind(3)
