function add (...args) {
	if([...args].length === 0) return 0;
  return [...args].reduce(function sum(sum, value){return sum + value}, 0);
}

function subtract (...args) {
	if([...args].length === 0) return 0;
  return [...args].reduce(function sum(diff, value){return diff - value});
}

function sum (arr) {
	if(arr.length === 0) return 0;
  return arr.reduce(function sum(sum, value){return sum + value}, 0);
}

function multiply (arr) {
	if(arr.length === 0) return 0;
  return arr.reduce(function sum(prod, value){return prod * value}, 1);
}

function power(a , b) {
	return Math.pow(a, b);
}

function factorial(number) {
	if(number === 0) return 1;
	let result = 1;
	for(let i = number; i > 0; i--){
		result = result * i;
	}
	return result;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}