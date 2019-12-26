import isNumeric from './isNumeric.js';

const camelToLineReg = /[a-z][A-Z]/g,
  utilConst = {
    cssNumber: {
      'column-count': 1,
      'columns': 1,
      'font-weight': 1,
      'line-height': 1,
      'opacity': 1,
      'z-index': 1,
      'zoom': 1
    }
  };

  let camelToLine = function (str) {

    return typeof str === 'string' ? str.replace(camelToLineReg, a => `${a[0]}-${a[1].toLowerCase()}`) : str;
  },

  maybeAddPx = function (name, value) {

    return (isNumeric(value) && !utilConst.cssNumber[name]) ? value + "px" : value
  },

  setCss = function (item, key, value) {

    return value ? item.style[camelToLine(key)] = maybeAddPx(key, value) : item.style.removeProperty(camelToLine(key));
  },

  getCss = function (item, key) {

    return item && (item.style[camelToLine(key)] || getComputedStyle(item).getPropertyValue(camelToLine(key)));
  };


export default function (item, key, val) {
  if (arguments.length === 2) {
    if (typeof key === 'string') {
      return getCss(item, key);
    }
    else {
      for (let [itemKey, itemValue] of Object.entries(key)) {

        setCss(item, itemKey, itemValue);
      }
    }
  }
  else if (arguments.length === 3) {
    setCss(item, key, val);
  }
}

