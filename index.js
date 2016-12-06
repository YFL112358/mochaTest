var num;
function getPrimeByIndex(n){
	if(n <= 4 && n > 1) {
		num = 2 * n - 1;	
	} else if(n > 4) {
		num = 2 * n + 1;	
	} else if(n = 1) {
		return 2;
	}
	return num;
	console.log(num);
}

//var test = getPrimeByIndex(5);
module.exports.getPrimeByIndex = getPrimeByIndex;
