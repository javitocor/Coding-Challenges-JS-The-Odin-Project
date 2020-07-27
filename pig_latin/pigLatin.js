function translate(string) {
	let arr = string.split(' ');
	for(let i = 0; i < arr.length; i++) {
		if(/[aeiou]/.test(arr[i][0])){
			arr[i] += 'ay';
		} else {
			let index = getIndex(arr[i]);
			let cons = arr[i].slice(0,index);
			arr[i] = arr[i].slice(index) + cons + 'ay';
		}
	}
	return arr.join(' ');
}

function getIndex(word){
	let first = word.match(/[aeiou]/);
	let index = word.indexOf(first);
	if(first[0] === 'u' && word[index -1] === 'q') {
		return index + 1;
	} else {
		return index;
	}
}


module.exports = {
	translate
}

