const removeFromArray = function(array, ...arg) {
  let args = [...arg];
  for(let i = 0; i < args.length; i++){
    for(let j=0; j < array.length;j++){
      if(array[j] === args[i]){
        array.splice(j,1);
        break;
      }
    }
  }
  return array;
}

module.exports = removeFromArray
