const getTheTitles = function(books) {
  let arr = [];
  for(let i = 0; i < books.length; i++) {
    arr.push(books[i].title);
  }
  return arr;
}

module.exports = getTheTitles;
