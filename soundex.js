// npm install --global mocha

var consonants = {
	'b': 1,
	'f': 1,
	'p': 1,
	'v': 1,
	'c': 2,
	'g': 2,
	'j': 2,
	'k': 2,
	'q': 2,
	's': 2,
	'x': 2,
	'z': 2,
	'd': 3,
	't': 3,
	'l': 4,
	'm': 5,
	'n': 5,
	'r': 6
}

var soundex = function(name){
	var translation = name[0];
	for(var i = 1; i < name.length; i++){
		if(consonants.hasOwnProperty(name[i])){
			translation += consonants[name[i]];
		} 
	}
	while(translation.length < 4){
		translation += 0;
	}
	return translation;
}

console.log(soundex('Robert'));
