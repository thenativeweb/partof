'use strict';

var assert = require('assertthat');

var partOf = require('../lib/partOf');

suite('partOf', function () {
  test('is a function.', function (done) {
    assert.that(partOf).is.ofType('function');
    done();
  });
});
