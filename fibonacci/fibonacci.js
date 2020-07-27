const fibonacci = function(number) {
  number = parseInt(number);
  if(number < 0) { return "OOPS"}
  if(number === 1) { return 1}
    var first = 0;
    var second = 1;
    var count = 0;
    var i = 2;
    while (i <= number){
        count = first + second;
        first = second;
        second = count;
        i++;
    }
    return count;
}

module.exports = fibonacci
