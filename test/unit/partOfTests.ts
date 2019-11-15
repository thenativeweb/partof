import { assert } from 'assertthat';
import { partOf } from '../../lib/partOf';

suite('partOf', (): void => {
  test('is a function.', async (): Promise<void> => {
    assert.that(partOf).is.ofType('function');
  });

  suite('returns true', (): void => {
    test('if subset is part of superset.', async (): Promise<void> => {
      const subset = { foo: 'a' },
            superset = { foo: 'a', bar: 'b' };

      assert.that(partOf(subset, superset)).is.true();
    });

    test('if subset is part of superset, even for nested objects.', async (): Promise<void> => {
      const subset = { bas: { baz: 'c' }},
            superset = { foo: 'a', bar: 'b', bas: { baz: 'c' }};

      assert.that(partOf(subset, superset)).is.true();
    });

    test('if subset is part of superset, even for partially nested objects.', async (): Promise<void> => {
      const subset = { bas: { baz: 'c' }},
            superset = { foo: 'a', bar: 'b', bas: { baz: 'c', bax: 'd' }};

      assert.that(partOf(subset, superset)).is.true();
    });
  });

  suite('returns false', (): void => {
    test('if subset is not part of superset.', async (): Promise<void> => {
      const subset = { foo: 'b' },
            superset = { foo: 'a', bar: 'b' };

      assert.that(partOf(subset, superset)).is.false();
    });

    test('if subset is not part of superset, even for nested objects.', async (): Promise<void> => {
      const subset = { bax: { baz: 'c' }},
            superset = { foo: 'a', bar: 'b', bas: { baz: 'c' }};

      assert.that(partOf(subset, superset)).is.false();
    });

    test('if subset is not part of superset, even for partially nested objects.', async (): Promise<void> => {
      const subset = { bax: { baz: 'c' }},
            superset = { foo: 'a', bar: 'b', bas: { baz: 'c', bax: 'd' }};

      assert.that(partOf(subset, superset)).is.false();
    });
  });
});
