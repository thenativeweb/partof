'use strict';

var assert = require('assertthat');

var partOf = require('../lib/partOf');

suite('partOf', function () {
  test('is a function.', function (done) {
    assert.that(partOf).is.ofType('function');
    done();
  });

  suite('returns true', function () {
    test('if subset is part of superset.', function (done) {
      var subset = { foo: 'a' },
          superset = { foo: 'a', bar: 'b' };

      assert.that(partOf(subset, superset)).is.true();
      done();
    });

    test('if subset is part of superset, even for nested objects.', function (done) {
      var subset = { bas: { baz: 'c' }},
          superset = { foo: 'a', bar: 'b', bas: { baz: 'c' }};

      assert.that(partOf(subset, superset)).is.true();
      done();
    });

    test('if subset is part of superset, even for partially nested objects', function (done) {
      var subset = { bas: { baz: 'c' }},
          superset = { foo: 'a', bar: 'b', bas: { baz: 'c', bax: 'd' }};

      assert.that(partOf(subset, superset)).is.true();
      done();
    });
  });

  suite('returns false', function () {
    test('if subset is not part of superset.', function (done) {
      var subset = { foo: 'b' },
          superset = { foo: 'a', bar: 'b' };

      assert.that(partOf(subset, superset)).is.false();
      done();
    });

    test('if subset is not part of superset, even for nested objects.', function (done) {
      var subset = { bax: { baz: 'c' }},
          superset = { foo: 'a', bar: 'b', bas: { baz: 'c' }};

      assert.that(partOf(subset, superset)).is.false();
      done();
    });

    test('if subset is not part of superset, even for partially nested objects', function (done) {
      var subset = { bax: { baz: 'c' }},
          superset = { foo: 'a', bar: 'b', bas: { baz: 'c', bax: 'd' }};

      assert.that(partOf(subset, superset)).is.false();
      done();
    });
  });
});
