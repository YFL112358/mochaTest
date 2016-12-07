function searchPrime(value) {
  if (value > 2) {
    var n ;
    const upperCap =  Math.floor(Math.sqrt(value));
    do {
      n = 3;//从第三个数开始查找
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
  for (let i = 0; i < 10; i ++) {
    value = searchPrime(value);
    result.push(value);
    console.log((i + 1)+":" + result[i]);
  }
  console.log("}")
  return result;
}
//var test = getPrimeByIndex(6);
module.exports.getPrimeByIndex = getPrimeByIndex;
