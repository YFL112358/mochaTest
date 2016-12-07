const assert = require('assert');
const getPrimeByIndex = require('./../index').getPrimeByIndex;
suite ('getPrimeByIndex',function(){
	test('getPrimeByIndex should return {input: output} data',function(){
		const res = getPrimeByIndex();
		//console.log(res[2]);
 		assert.equal(3,res[1]);
	})
});
