var fs = require('fs');

var natural = require('natural');

module.exports = {
  parse: function(shader) {
    var tokenizer = new natural.WordTokenizer();
    tokenized = tokenizer.tokenize(shader);
  },
  parseFile: function(shaderFile) {
    var content = fs.readFileSync(shaderFile);
    return this.parse(content);
  }
};
