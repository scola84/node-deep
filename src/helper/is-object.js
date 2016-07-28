export default function isObject(value) {
  return Boolean(value) &&
    value.constructor.toString().match(/object/i);
}
