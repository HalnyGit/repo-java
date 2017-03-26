// Zadanie 8
var add = document.getElementById('addElem'),
	lista = document.getElementById('list'),
	itemsByTagName = lista.getElementsByTagName('li'),
	n = (itemsByTagName.length);

function addOnclickItem() {
	var newElem = document.createElement('li');
	newElem.innerHTML = ('item' + ' ' + (++n - 1));
	lista.appendChild(newElem);
};

add.addEventListener('click', function(e) {
	addOnclickItem()
});
