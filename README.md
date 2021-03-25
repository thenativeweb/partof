# partof

partof verifies whether one object is part of an other.

## Status

| Category         | Status                                                                                              |
| ---------------- | --------------------------------------------------------------------------------------------------- |
| Version          | [![npm](https://img.shields.io/npm/v/partof)](https://www.npmjs.com/package/partof)                 |
| Dependencies     | ![David](https://img.shields.io/david/thenativeweb/partof)                                          |
| Dev dependencies | ![David](https://img.shields.io/david/dev/thenativeweb/partof)                                      |
| Build            | ![GitHub Actions](https://github.com/thenativeweb/partof/workflows/Release/badge.svg?branch=main) |
| License          | ![GitHub](https://img.shields.io/github/license/thenativeweb/partof)                                |

## Installation

```shell
$ npm install partof
```

## Quick start

First you need to add a reference to partof in your application:

```javascript
const { partOf } = require('partof');
```

If you use TypeScript, use the following code instead:

```typescript
import { partOf } from 'partof';
```

To verify whether an object is part of an other, call the `partOf` function and provide the presumable subset as well as the superset object:

```javascript
const potentialSubset = { foo: 'bar' },
      superset = { foo: 'bar', bas: 'baz' };

console.log(partOf(potentialSubset, superset));
// => true
```

## Running quality assurance

To run quality assurance for this module use [roboter](https://www.npmjs.com/package/roboter):

```shell
$ npx roboter
```
