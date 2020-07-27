const repeatString = function(str, number) {
  let string = '';
  if(number < 0) return 'ERROR';
  for(let i = 0;i < number; i++){
    string += str;
  }
  return string;
}

module.exports = repeatString
