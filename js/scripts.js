// Zadanie 8

function rysujChoinke(g) {
	for ( var k = 1; k < g + 1; k++) {
		var star = '';
		
		for ( var m = 0; m < g - k ; m++) {
			star += ' ';
		};	
		
		for ( var n = 0; n < 2 * k - 1; n++) {
			star += '*';
		};
	
	console.log(star)
	};
};

rysujChoinke(10);

