// Zadanie 8
var triangle1Area = 0,
	triangle2Area = 0,
	triangle3Area = 0;

function getTriangleArea(a,h) {
	if ((a<=0) || (h<=0)) {
	var result = 'Nieprawidłowe dane';
} else {
	result = a * h / 2;
};
	return result;
};

triangle1Area=getTriangleArea(-2,10);
triangle2Area=getTriangleArea(20,2);
triangle3Area=getTriangleArea(7,5);

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);






