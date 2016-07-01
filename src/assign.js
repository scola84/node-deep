'use strict';

function isObject(value) {
  return Boolean(value) &&
    value.constructor.toString().match(/object/i);
}

export default function assign(target, ...sources) {
  target = Object(target);

  sources.forEach((source) => {
    if (!isObject(source)) {
      return;
    }

    Object.keys(source).forEach((key) => {
      if (isObject(source[key]) && isObject(target[key])) {
        target[key] = assign(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    });
  });

  return target;
}
