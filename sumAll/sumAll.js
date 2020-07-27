const sumAll = function(a, b) {
  if(a < 0 || b < 0) return 'ERROR';
  if(typeof(a)  != 'number' || typeof(b)  != 'number') return 'ERROR';
  if(b < a){
    let temp = a;
    a = b;
    b = temp;
  }
  var arr = [];
  for (var i = a; i <= b; i++) {
      arr.push(i);
  }
  let sumAll = arr.reduce((total, sum)=>{return total + sum}, 0);
  return sumAll;
}

module.exports = sumAll
