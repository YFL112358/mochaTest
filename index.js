function searchPrime(value) {
  if (value > 2) {
    var n ;
    const upperCap =  Math.floor(Math.sqrt(value));
    do {
      n = 3;
      value += 2;//加快查找速度
      while (n <= upperCap && value % n != 0) {
        n += 2;
      }
    } while (n <= upperCap);
    return value;
  }
  return value === 2 ? 3 : 2;
}
function getPrimeByIndex(n){
  var value, result = [];
  console.log("{");
  for ( n = 0; n < 10; n ++) {
    value = searchPrime(value);
    result.push(value);
    console.log((n + 1)+":" + result[n]);
  }
  console.log("}")
  return result;
}
//var test = getPrimeByIndex(6);
module.exports.getPrimeByIndex = getPrimeByIndex;
