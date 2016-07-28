export default function has(source, key) {
  let result = source;
  let i = 0;

  const keys = key.split('.');

  for (; i < keys.length; i += 1) {
    result = result[keys[i]];

    if (typeof result === 'undefined') {
      return false;
    }
  }

  return true;
}
