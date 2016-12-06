const assert = require('assert');
const getPrimeByIndex = require('./../index').getPrimeByIndex;
suite ('getPrimeByIndex',function(){
	test('getPrimeByIndex should return {input: output} data',function(){
		console.log("{")
		for(var n = 1;n < 100;n++){
			console.log(n+':'+getPrimeByIndex(n));
		}
		console.log("}");
		const val = getPrimeByIndex(1)
 		assert.equal(2, val);	
	})
});		
