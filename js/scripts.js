// Zadanie 8
var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = [];
var newName = 'Asia';

var allNames = allNames.concat(femaleNames,maleNames);

if (allNames.indexOf(newName) === -1) {
	allNames.push(newName);
};

console.log(allNames);