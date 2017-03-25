// Zadanie 8
var a = 5,
	h = 10,
	triangleArea = 0,
	triangle1Area = 0,
	triangle2Area = 0,
	triangle3Area = 0;

function getTriangleArea(a,h) {
	return a * h / 2
};

if ((a<=0) || (h<=0)) {
	console.log('Nieprawidłowe dane');
} else {
	triangleArea=getTriangleArea(a,h);
	console.log(triangleArea);
};

triangle1Area=getTriangleArea(2,10);
triangle2Area=getTriangleArea(20,2);
triangle3Area=getTriangleArea(7,5);

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);






