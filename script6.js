function printFullAge(yearOfBirth) {
	var ages = [];
	var fullAges = [];

	for (var i 	= 0; i < yearOfBirth.length; i++) {
	ages[i] = 2017 - yearOfBirth[i];
	
}


	for (i = 0; i < ages.length; i++) {
	if (ages[i] >= 18) {
		console.log('Orang ini ' + (i + 1) + ' Berumur ' + ages[i] + ' Tahun, dan dia berusia lebih dari 18 tahun');
		fullAges.push(true);
	} else {
		console.log('Orang ' + (i + 1) + ' Berumur ' + ages[i] + ' Tahun, Dan Dia Berusia Kurang Dari 18 Tahun');
		fullAges.push(false);
	}
}
	return fullAges;
}

var yearOfBirth = [1983, 1999, 2004, 1962, 1996];
var usia1 = printFullAge(yearOfBirth);
var usia2 = printFullAge([2011, 1987, 1997, 2005, 1976]);