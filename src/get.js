'use strict';

export default function get(source, key) {
  let value = source;
  let i = 0;

  const keys = key.split('.');

  for (; i < keys.length; i += 1) {
    value = value[keys[i]];

    if (typeof value === 'undefined') {
      break;
    }
  }

  return value;
}
