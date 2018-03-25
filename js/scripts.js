

var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

//łączenie tablic
var allNames = femaleNames.concat(maleNames); 

var newName = prompt ('dodaj imię do tablicy');

if (allNames.indexOf(newName) === -1) {
	var x = allNames.push(newName);
	console.log('imie zostało dodane do tablicy');
} else {
	console.log('to imie już występuje w tablicy');

}

console.log(allNames);