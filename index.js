function getPrimeByIndex(n){
	if(n == 1) { return "";}
	else if(n == 2) { return 2;}
	else if(n == 3) { return 3;}
	else {
		for(i=Math.floor(Math.sqrt(n));i >= 2;i--) {
			if(n%i !== 0 && n%2 !== 0 && n % 3 !== 0) {
				return n;
			}
		}
	}
}
var test = getPrimeByIndex(5);
module.exports.getPrimeByIndex = getPrimeByIndex;
