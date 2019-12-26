/**
 * 判断元素是否含有某个类.
 *
 * @param {object} dom. dom元素.
 * @param {string} className. 类名.
 * @return {bool} 此dom是否含有这个类名.
 */

/* istanbul ignore next */
export function hasClass(dom, className) {
    return dom && dom.classList && dom.classList.contains(className);
}


/**
 * 为元素增加类名.
 *
 * @param {object} dom.要增加样式的元素.
 * @param {String | Array} className. 要增加的样式.
 */

/* istanbul ignore next */
export function addClass(dom, className) {

    if (!dom) {
        return;
    }
    let curClassList = dom.classList;
    if (Array.isArray(className)) {
        className.forEach(x => {
            curClassList.add(x);
        });
    } else {
        curClassList.add(className);
    }
}

/**
 * 为元素移除类名.
 *
 * @param {object} dom.要移除样式的元素.
 * @param {String | Array} className. 要移除的样式.
 */

/* istanbul ignore next */
export function removeClass(dom, className) {
    if (!dom) {
        return;
    }
    let curClassList = dom.classList;

    if (Array.isArray(className)) {
        className.forEach(x => {
            curClassList.remove(x);
        });
    } else {
        curClassList.remove(className);
    }
}


/**
 * 获得元素的样式.
 *
 * @param {object} dom.依赖元素.
 * @param {string} styleName. 要查询的样式.
 */

/* istanbul ignore next */
export function getStyle(dom, styleName) {
    // debugger
    if (!dom) {
        return;
    }

    try {
        let computed = document.defaultView.getComputedStyle(dom);
        return computed[styleName];
    } catch (e) {
        return dom.style[styleName];
    }
}

/**
 * 设置元素的样式.
 *
 * @param {object} dom.依赖元素.
 * @param {string | Object} styleName. 要设置的样式名称.
 * @param {string} styleValue. 要设置的样式值.
 */

/* istanbul ignore next */
export function setStyle(dom, styleName, styleValue) {

    if (!dom) {
        return;
    }

    if (typeof styleName === 'object' && styleName !== null) {
        for (let [key, value] of Object.entries(styleName)) {
            dom.style[key] = value;
        }
    } else {
        dom.style[styleName] = styleValue;
    }

}

/**
 * 只触发一次.
 *
 * @param {object} el.依赖元素.
 * @param {string} event. 事件名.
 * @param {string} fn. 触发后要执行的函数.
 */

/* istanbul ignore next */
export function once(el, event, fn) {
    let listener = function () {
        if (fn) {
            fn.apply(this, arguments);
        }
        el.removeEventListener(event, listener);
    };

    el.addEventListener(event, listener);
}
