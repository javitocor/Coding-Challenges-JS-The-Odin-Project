const palindromes = function(string) {
  string = string.replace(/[^A-Za-z]/g, '').toLowerCase();
  let reverse = string.split('').reverse().join('');
  if(string === reverse) {
    return true
  }
  return false;
}

module.exports = palindromes
