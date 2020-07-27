const caesar = function(str, key) {
  let str2 = "";   
  if(key < 0) { key = 26 + (key % 26);} 
    for (let i = 0; i < str.length; i++){
        let char = str[i].charCodeAt();
        if(char >= 65 && char <= 90){
          if(key > 0 ){
            str2 += String.fromCharCode(((char - 65 + key) % 26) + 65);
          }       
        } else if(char >= 97 && char <= 122)  {
          if(key > 0 ){
            str2 += String.fromCharCode(((char - 97 + key) % 26) + 97);
          }        
        } else {
          str2 += str[i];
        }
    }
    return str2;
}

module.exports = caesar
