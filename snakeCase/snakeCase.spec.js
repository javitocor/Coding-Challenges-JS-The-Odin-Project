const snakeCase = require('./snakeCase')

describe('snakeCase', function() {
  it('works with simple lowercased phrases', function() {
    expect(snakeCase('hello world')).toEqual('hello_world');
  });
  it('works with Caps and punctuation', function() {
    expect(snakeCase('Hello, World???')).toEqual('hello_world');
  });
  it('works with longer phrases', function() {
    expect(snakeCase('This is the song that never ends....')).toEqual('this_is_the_song_that_never_ends');
  });
  it('works with camel case', function() {
    expect(snakeCase('snakeCase')).toEqual('snake_case');
  });
  it('works with kebab case', function() {
    expect(snakeCase('snake-case')).toEqual('snake_case');
  });
  it('works with WTF case', function() {
    expect(snakeCase('SnAkE..CaSe..Is..AwEsOmE')).toEqual('snake_case_is_awesome');
  });

});
