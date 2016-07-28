export default function unflatten(source) {
  const target = {};
  let value = null;
  let last = null;
  let current = null;

  Object.keys(source).forEach((keys) => {
    value = source[keys];
    keys = keys.split('.');
    last = keys.pop();
    current = target;

    keys.forEach((key) => {
      target[key] = target[key] || {};
      current = target[key];
    });

    current[last] = value;
  });

  return target;
}
