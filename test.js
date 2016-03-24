var isLeftPadded = require('./');

exports.isLeftPadded = function(test) {
  test.ok(isLeftPadded(' much pad'));
  test.done();
}

exports.isNotLeftPadded = function(test) {
  test.ok(!isLeftPadded('such space'));
  test.done();
}
