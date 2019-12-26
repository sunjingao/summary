let getAttribute = function (val, key) {
  return val && val.getAttribute && val.getAttribute(key);
};

let setAttribute = function (dom, key, value) {

  if (!dom || dom.nodeType !== 1) {
    return;
  }
  return value === null ? dom.removeAttribute(key) : dom.setAttribute(key, value);
};

export default function (item, key, val) {

  if (arguments.length === 2) {
    if (typeof key === 'string') {
      return getAttribute(item, key);
    }
    else {
      for (let [itemKey, itemValue] of Object.entries(key)) {
        setAttribute(item, itemKey, itemValue);
      }
    }
  }
  else if (arguments.length === 3) {
    setAttribute(item, key, val)
  }
}