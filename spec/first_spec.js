
var q3shaderlang = require('../');

//var output = q3shaderlang.parseFile('../examples/blueflame.qsl');

describe('Load and parse something', function() {
  it ('Blue Flame', function() {
    var output = q3shaderlang.parseFile('./examples/blueflame.qsl');
    expect(output).toBe(3);
  });
});
