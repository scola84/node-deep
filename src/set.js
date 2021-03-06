export default function set(source, key, value) {
  let i = 0;

  const keys = key.split('.');
  const last = keys.pop();

  for (; i < keys.length; i += 1) {
    source = source[keys[i]];

    if (typeof value === 'undefined') {
      break;
    }
  }

  if (typeof source !== 'undefined') {
    source[last] = value;
  }
}
