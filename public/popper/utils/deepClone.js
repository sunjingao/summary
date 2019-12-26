let isQuote = function (val) {

  return typeof val === 'object' && val !== null;
};

let deepClone = function (target, source) {

  if (!isQuote(source)) {
    return source;
  }

  for (let [key, value] of Object.entries(source)) {
    if (isQuote(value)) {
      target[key] = Array.isArray(value) ? [] : {};
      deepClone(target[key], value);
    }
    else {
      target[key] = source[key];
    }
  }
  return target;
};

export default deepClone;