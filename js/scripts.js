// Zadanie 8
var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var animal = 'Zielone słonie';
var animalUpperCased = animal.toUpperCase();
var textReplaced = text.replace('Papugi', animal);
var half = (textReplaced.length) / 2;
var halfTextReplaced = textReplaced.substr(0, half);
console.log(halfTextReplaced);

