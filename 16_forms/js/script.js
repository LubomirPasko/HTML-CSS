"use strict"
let test = 38;
console.log(test);

let one = 7;
let two = 10;
let varSum = one % two;
console.log(varSum);


/* console.log(++one);
console.log(--one); */


console.log(one--);
console.log(one--);


let someSome = 'Hello! How are you?';

for (let i = 0; i < someSome.length; ++i) {
	console.log(someSome[i]);
}

let someArray = [10, 'Lubomir', true];
console.log(Array.isArray(someArray));

for (let i = 0; i < someArray.length; i++) {
	console.log(someArray[i]);
}

let arrExe = ['Cola', 'Mug', 'Root'];

arrExe.forEach((smi, index) => {console.log(index, smi)});

someArray.push('Vasya');
console.log(someArray);
if (!someArray.includes(11)) {
	someArray.push(11);
	console.log(someArray);
}

let arrExeStr = arrExe.join ("_ - '");
console.log(arrExeStr);
let mess = 'Privet';
let messA = 'Hello'
function showMessage (raa) {
	console.log(raa);
}
showMessage(mess);
showMessage(messA);


/* let numOne = 10;
let numTwo = 20;
function summA (a = 0, b= 0) {
	const resultA = a + b;
	logA(resultA);
}
function logA (summAA) {
	console.log(summAA);
}
summA(numOne); */

let numOne = 10;
let numTwo = 30;
function summA (a = 0, b= 0) {
	const result = a + b;
	return result;
}
let rez = summA (numOne, numTwo);

function logA (summAA) {
	console.log(summAA);
}

logA(rez);

/* function exampleOne () {
	let exVar = 10
}

console.log(exVar); */
function square (number) {
	number = number*number;
	return console.log(number);
}
square(numOne)
console.log(numOne);

let moreThanTen = function(arg) {
	if (arg > 10) {
		return `${arg} - більше 10`;
	} else if(arg = 10) {
		return `Це й є 10!`;
	}
	else {
		return `${arg} - менше 10`;
	}
}
console.log(moreThanTen(10)); 

let message = (92 > '11' && 58 < 100) ? 'Истина' : 'Ложь';
console.log(message);

let numb = 0;
while(numb < 5) {
	console.log(numb);
	numb++;
}
let i = 0;
for (i= 0; i < 5; i++) {
	console.log(i);
	if (i === 2) break;
}
console.log(`Work is stop, i = ${i}`)
console.log(i);

let numF = 1;
while (numF <= 5) {
	console.log(numF);
	numF++;
}


for (let numFo = 1; numFo<=5; numFo++) {
	console.log(numFo);
}

let numZ = 8;
while (numZ) {
	console.log(numZ);
	numZ--;
}


let numL = 0;
while (numL < 3) {
	console.log(`Number ${numL}`);
	numL++;
}


for (let num = 0; num < 2; num++) {
	for (let size = 0; size < 3; size++) {
		console.log(size)
		if (size == 1) break;
	}
}


let threeNum = 3;
function calcSumm (numOn, numTw, more, less) {
	let numSum = numOn + numTw;
	if (numSum > threeNum) {
		more();
	} else {
		less();
	}
}
function showRightMessage () {
	console.log(`More than ${threeNum}`)
}
function showLessMessage () {
	console.log(`Lesse than ${threeNum}`)
}
calcSumm (1, 1, showRightMessage, showLessMessage);

//!Recursion example:

function factorial(n) {
	if ((n === 0) || (n === 1))
      return 1;
	else
	  return (n * factorial(n - 1));
}
//factorial(4) = 4 * 3 * 2 * 1 функция виконується циклічно
let fact = factorial(4);
console.log(fact);

function showName() {
	console.log(`Vasya`);
}
showName();
/* setTimeout(showName, 0); */
console.log(`Kolia`);

let showMess = function () {
	console.log(`Message`);
}
showMess();

'use strict'
let showMessag;
if (2 > 1) {
	showMessag = function() {
		console.log(`Message_1`);
	}
}
showMessag();