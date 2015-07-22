'use strict';

var partOf = function (subset, superset) {
  if (typeof subset !== 'object') {
    return false;
  }
  if (typeof superset !== 'object') {
    return false;
  }
  if (!!subset && !superset) {
    return false;
  }

  return Object.keys(subset).every(function (key) {
    var subsetValue = subset[key],
        supersetValue = superset[key];

    if (typeof supersetValue === 'object' && supersetValue !== null && subsetValue !== null) {
      return partOf(subsetValue, supersetValue);
    }

    return subsetValue === supersetValue;
  });
};

module.exports = partOf;
