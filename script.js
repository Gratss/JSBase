window.onload = function() {
    let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');
elem1.addEventListener('click', function() {
	console.log('зеленый - погружение');
}, true);
elem1.addEventListener('click', function() {
	console.log('зеленый - всплытие');
}, false);

elem2.addEventListener('click', function() {
	console.log('голубой - погружение');
}, true);
elem2.addEventListener('click', function() {
	console.log('голубой - всплытие');
}, false);

elem3.addEventListener('click', function() {
	console.log('красный - погружение');
}, true);
elem3.addEventListener('click', function() {
	console.log('красный- всплытие');
}, false);
}