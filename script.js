let arr = [1, 2, 3, 4, 5];
function func(arr) {
	console.log(arr.shift()); 
	console.log(arr); 

	console.log(arr.shift()); 
	console.log(arr); 

	console.log(arr.shift()); 
	console.log(arr); 
}
// 2
let arr1 = [1, 2, 3, 4, 5];
function getSum(arr1) {
	let sum = arr1.shift();

	if (arr1.length !== 0) {
		sum += getSum(arr1);
	}

	return sum;
}
console.log(getSum());