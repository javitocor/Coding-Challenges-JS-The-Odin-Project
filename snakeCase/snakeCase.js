const snakeCase = function(str) {
  str = str.replace(/[^A-Za-z0-9]/g, '_');
  for(let i = 0; i < str.length; i++){
    if(str[i] === '_' && str[i+1] === '_'){
      str = str.slice(0, i) + str.slice(i+1);
      i--;
    }  
  }  
  if(str[str.length - 1] === '_'){
    str = str.slice(0, str.length - 1);
  }
  if (str.indexOf("_") < 0){
    for(let j = 1; j < str.length; j++){
      if(str[j] === str[j].toUpperCase()){
        str = str.slice(0, j) + "_" + str.slice(j);
      }
    }
  }  
  return str.toLowerCase();
}

module.exports = snakeCase
