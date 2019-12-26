/**
 * 原型链方法处理
 */

import {coreReg} from "./regExp.js";

export default function ($) {

  let core = {

    add(selector, context) {

      return $($.uniq(this.concat($(selector, context))));
    },

    addClass(iterator) {

      return this.each((key, item) => {
        let clsNames = $.type(iterator) === 'function' ? iterator.call(item, key, item.className) : iterator;
        $.each(
          clsNames.split(coreReg.spaceSplit),
          (_, name) => {
            item.classList.add(name);
          }
        );
      })
    },

    toggle(setting) {

      return this.each(
        (index, item) => {
          let $item = $(item);
          (setting === undefined ? $item.css('display') === 'none' : setting) ?
            $item.show() : $item.hide();
        }
      );
    },

    toggleClass(names, setting) {

      let cb = function (index, item) {
        if ($.type(names) === 'function') {
          return names.call(item, index, item.className);
        }
        else {
          return names;
        }
      };


      return this.each(
        function (index, item) {
          return (setting === undefined ? item.classList.contains(cb(index, item)) : setting) ?
            item.classList.remove(cb(index, item)) : item.classList.add(cb(index, item))
        }
      )
    },

    hasClass(cls) {

      if (!cls || $.type(cls) !== 'string') {
        return false;
      }

      return $.toArray(this).some(
        item => item.classList.contains(cls)
      );
    },

    scrollLeft(value) {

      if (!this.length) {
        return;
      }

      if (value) {
        return this.each(
          (index, item) => {
            'scrollLeft' in item ? item.scrollLeft = value : item.scrollTo(value, item.scrollY);
          }
        )
      }
      else {
        let hasScroll = 'scrollLeft' in this[0];
        if (hasScroll) {
          return this[0]['scrollLeft']
        }
        else {
          return window.pageXOffset;
        }
      }
    },

    scrollTop(value) {

      if (!this.length) {
        return;
      }

      if (value) {
        return this.each(
          (index, item) => {
            'scrollTop' in item ? item.scrollTop = value : item.scrollTo(item.scrollX, value);
          }
        )
      }
      else {
        let hasScroll = 'scrollTop' in this[0];
        if (hasScroll) {
          return this[0].scrollTop;
        }
        else {
          return window.pageYOffset;
        }
      }
    },

    show() {

      return this.each((index, item) => {
        item.style.display = item.getAttribute('zepto-default-display') || 'block';
      });
    },

    siblings(selector) {

      return $(
        $.flatten(this.map(item => {
          return item.parentNode && $.toNodes(item.parentNode.children).filter(sib => sib !== item);
        }))
      ).filter(selector);
    },


    // 对元素自身固有属性进行操作 属性名称不用做处理，用户怎么输入就怎么操作（即驼峰和-不用特意转化）
    prop(name, value) {

      if (value !== undefined) {
        return this.each((index, item) => {
          item[name] = $.type(value) === 'function' ? value.call(item, index, item[name]) : value;
        })
      } else {
        if ($.type(name) === 'object') {

          return this.each((index, item) => {
            for (let [k, v] of Object.entries(name)) {
              item[k] = $.type(v) === 'function' ? v.call(item, index, item[k]) : v;
            }
          });
        } else {
          return this.length && this[0][name];
        }
      }

    },

    // 自定义属性进行操作 属性名称不用做处理，用户怎么输入就怎么操作（即驼峰和-不用特意转化）
    attr(key, val) {

      function getAttribute(val, key) {
        return val && val.getAttribute && val.getAttribute(key);
      }

      function setAttribute(dom, key, value) {

        if (!dom || dom.nodeType !== 1) {
          return;
        }
        return value === null ? dom.removeAttribute(key) : dom.setAttribute(key, value);
      }

      if (arguments.length === 1) {
        if ($.type(key) !== 'object') {
          return getAttribute(this[0], key);
        }
        else if ($.type(key) === 'object') {
          for (let [itemKey, itemValue] of Object.entries(key)) {
            this.each((index, item) => setAttribute(item, itemKey, itemValue));
          }
          return this;
        }
      }
      else if (arguments.length === 2) {
        if ($.type(val) === 'function') {
          return this.each((index, item) => setAttribute(item, key, val.call(item, index, item)));
        } else if ($.type(val) !== 'object') {
          return this.each((index, item) => setAttribute(item, key, val));
        }
      }
    },

    // 直接操作style存取 和 使用getComputedStyle时 属性名称转化规则：
    // 当通过style来获取的时候，用驼峰。
    // 当通过style来删除或设置的时候，用-。
    // 当通过getPropertyValue时都用-，font-size，background-color。
    // 其它情况：
    // 其它的特殊情况，如有时直接获取宽高为auto，可以通过其特定的接口来获取，如 getBoundingClient
    css(key, val) {

      // 规则： 无论内联还是外接的样式都用 - 的形式

      function setCss(item, key, value) {

        return value ? item.style[$.camelToLine(key)] = $.maybeAddPx(key, value) : item.style.removeProperty($.camelToLine(key));
      }

      function getCss(item, key) {

        return item && (item.style[$.camelToLine(key)] || getComputedStyle(item).getPropertyValue($.camelToLine(key)));
      }

      if (arguments.length === 1) {
        if ($.type(key) === 'string') {
          return getCss(this[0], key);
        }
        else if ($.type(key) === 'object') {
          for (let [itemKey, itemValue] of Object.entries(key)) {
            this.each((_, item) => setCss(item, itemKey, itemValue));
          }
        }
      }
      else if (arguments.length === 2) {
        if ($.type(val) === 'function') {
          this.each((index, item) => setCss(item, key, () => val.call(item, index, item))
          );
        } else {
          this.each((_, item) => setCss(item, key, val));
        }
      }
      return this;
    },

    width(value) {
      if (arguments.length === 0) {
        let dom = this[0];
        return $.isWindow(dom) ?
          dom.innerWidth :
          dom.nodeType === Node.DOCUMENT_NODE ? dom['documentElement']['scrollWidth'] : dom.getBoundingClientRect().width;
      }
      else {
        return this.css('width', value);
      }
    },

    height(key) {

      if (arguments.length === 0) {
        let dom = this[0];
        return $.isWindow(dom) ?
          dom.innerHeight :
          dom.nodeType === Node.DOCUMENT_NODE ? dom['documentElement']['scrollHeight'] : dom.getBoundingClientRect().height;
      }
      else {
        return $(this).css('height', key);
      }
    },

    hide() {

      return this.each((index, item) => {
        $(item).attr('zepto-default-display', $(item).css('display'));
        $(item).css('display', 'none');
      })
    },

    html(val) {

      let cb = arguments.length === 1 && $.type(val) === 'string' ? () => val : val;

      if (arguments.length === 0) {
        return this[0] && this[0].innerHTML;
      }
      else {
        return this.each((index, item) => {
          let innerHTML = item.innerHTML;
          $(item).empty()[0].innerHTML = cb.call(item, index, innerHTML);
        });
      }
    },

    next(selector) {

      return this.pluck('nextElementSibling').filter(selector || true);
    },

    prev(selector) {

      return this.pluck('previousElementSibling').filter(selector);
    },

    remove() {

      return this.each((_, item) => {
        item.parentNode && item.parentNode.removeChild && item.parentNode.removeChild(item);
      });
    },

    removeAttr(name) {

      return this.each((_, item) => {
        $(item).attr(name, null);
      })
    },

    removeClass(name) {

      let cb = function (item, index) {
        if ($.type(name) === 'undefined') {
          item.className = '';
        }
        else if ($.type(name) === 'function') {
          item.classList.remove(name.call(item, index, item.className));
        }
        else {
          name.split(/\s+/).forEach(val => item.classList.remove(val));
        }
      };

      return this.each(
        (index, item) => cb(item, index)
      );
    },

    removeProp(name) {

      return this.each((index, item) => item.removeAttribute(name));
    },

    text(content) {

      if (!content) {
        return this[0] && this[0].textContent;
      }
      else {
        let cb = function (item, index) {
          return $.type(content) === 'function' ? content.call(item, index, item.textContent) : content;
        };

        return this.each(
          (index, item) => item.textContent = cb(item, index)
        );
      }
    },

    val(value) {

      let cb = function (index, item) {
        if ($.type(value) === 'function') {
          return value.call(item, index, item.value);
        }
        else {
          return value;
        }
      };

      if (value === undefined) {

        return (
          this[0] && (
            this[0].multiple ?
              $(this[0]).find('option').filter(function (o) {
                return this.selected
              }).pluck('value') :
              this[0].value
          )
        );
      }
      else {
        return this.each((index, item) => {
          return item.value = cb(index, item)
        });
      }
    },


    // 相对于document.body元素来定位 或 获取 位置
    offset(coordinates) {

      if (coordinates) {
        let func = $.type(coordinates) === 'function' ? coordinates : () => coordinates;
        this.each(
          (index, item) => {

            let $item = $(item), $offsetParent = $item.offsetParent();
            let cssConfig = {
              position: $item.css('position') === 'static' ? 'relative' : '',
              top: func.call(item, index, $item.offset).top - ($offsetParent ? $offsetParent.offset().top : 0),
              left: func.call(item, index, $item.offset).left - ($offsetParent ? $offsetParent.offset().left : 0)
            };

            $item.css(cssConfig);
          }
        );
      }
      if (this.length === 0) {
        return null;
      }
      else if (this[0] === document.body || !document.body.contains(this[0])) {
        return {
          top: 0,
          left: 0
        }
      }
      let reg = this[0].getBoundingClientRect();
      return {
        top: reg.top + window.pageYOffset,
        left: reg.left + window.pageXOffset,
        width: reg.width,
        height: reg.height
      }
    },

    // 获取相对于offetParent的位置
    position() {

      if (this.length === 0) {
        return {
          top: 0,
          left: 0
        }
      }

      let $this = $(this[0]),
        offset = $this.offset(),
        parentOffset = coreReg.rootTag.test($this.offsetParent()[0].tagName) ? {
          top: 0,
          left: 0
        } : $this.offsetParent().offset();

      return {
        top: offset.top - (parseInt($this.css('margin-top')) || 0) - (parseInt($this.offsetParent().css('border-top-width')) || 0) - (parentOffset.top || 0),
        left: offset.left - parseInt($this.css('margin-left') || 0) - (parseInt($this.offsetParent().css('border-left-width')) || 0) - (parentOffset.left || 0)
      }
    },

    // 从body向上的节点的offsetParent都默认为document.body
    offsetParent() {

      return this.map(
        item => {
          let offsetParent = item.offsetParent;
          while (offsetParent && offsetParent.nodeType !== Node.DOCUMENT_NODE) {

            if (offsetParent && !coreReg.rootTag.test(offsetParent.tagName) && $(offsetParent).css('position') !== 'static') {
              return offsetParent;
            }
            offsetParent = offsetParent.parentNode;
          }
          return document.body;
        }
      );
    },


    has(selector) {

      return $($.flatten(this.map(
        item => (
          $.type(selector) === 'object' ?
            $.contains(item, selector instanceof $ ? selector[0] : selector) : $(item).find(selector).length > 0
        ) ? item : undefined
      )));
    },

    closest(selector, context) {

      let match = (function () {

        let allNodes = $(selector, context);

        return function (item) {

          return $.type(selector) === 'string' ?
            $.includes(allNodes, item) :
            selector === parent || $.includes(allNodes, item);
        };
      })();

      let closetsNodes = this.map(
        parent => {
          while (parent) {

            if (match(parent)) {
              return parent;
            }
            parent = parent.parentNode;
          }
          return parent;
        }
      );

      return $($.uniq(closetsNodes));
    },

    children(selector) {

      let res = this.map(
        item => $.toArray(item.children).filter(
          child => selector ? child.matches && child.matches(selector) : true
        )
      );
      return $($.uniq(res));
    },

    contents(selector) {

      let res = this.map(item => $.toArray(item.childNodes).filter(
        child => $.isNullTextNode(child) ? false : selector ? child.matches(selector) : true
      ));
      return $($.uniq(res));
    },

    find(selector) {

      if ($.isQuote(selector)) {
        selector = $.isCollection(selector) ? $.toArray(selector) : [selector];
        return this.some((index, item) => $(selector).filter(dom => item.contains(dom)).length > 0);
      }

      return $($.uniq(this.map(item => selector ? item.querySelectorAll(selector) : item)));
    },

    is(selector) {

      return this[0] && this[0].matches(selector) || false;
    },

    not(selector) {

      let cb;
      if ($.type(selector) === 'string') {
        cb = item => item.matches && item.matches(selector);
      }
      else if ($.isCollection(selector)) {
        cb = item => $.toNodes(selector).includes(item);
      }
      else if ($.type(selector) === 'object') {
        cb = item => selector === item;
      }

      return $(this.filter((item) => !cb.call(item, item)));
    },

    parent(selector) {

      let res = [];
      this.each((_, item) => {

        let parent = item.parentNode;
        if (parent && parent.matches && parent.matches(selector) || !selector) {
          res.push(parent);
        }
      });

      return $($.uniq(res));
    },

    parents(selector) {

      let res = [];
      this.each((_, item) => {
        let parent = item.parentNode;
        while (parent) {
          if (!selector || parent && parent.matches && parent.matches(selector)) {
            res.push(parent);
          }
          parent = parent.parentNode;
        }
      });
      return $($.uniq(res));
    },


    clone() {

      return this.map(item => item.cloneNode(true));
    },

    concat(...args) {

      let arr = [], index;

      for (let index = 0; index < args.length; index++) {
        let item = args[index];
        arr = arr.concat($.isCollection(item) ? $.toArray(item) : item);
      }

      for (index = 0; index < arr.length; index++) {
        this[this.length++] = arr[index];
      }
      return this;
    },

    data(key, value) {

      key = `data-${key}`;
      if (value) {
        $(this[0]).attr(key, value);
      }
      else {
        let val = $(this[0]).attr(key);
        switch (val) {
          case null:
            return undefined;
          case "true":
            return true;
          case "false":
            return false;
          case "null":
            return null;
          default:
            if ($.isNumeric(val)) {
              return Number(val);
            }
            try {
              return JSON.parse(val);
            }
            catch (e) {
              return val;
            }
        }
      }
    },

    each(cb) {

      $.each(this, cb);
      return this;
    },

    empty() {

      return this.each((index, item) => item.innerHTML = '');
    },

    eq(index) {

      return $($.toArray(this).slice(index)[0]);
    },

    filter(selector = true) {

      let cb = $.type(selector) === 'function' ?
        selector : (item) => selector === true ? true : item.matches(selector);

      return $($.toArray(this).filter((item, key) => cb.call(item, item, key)));
    },

    first() {

      return $(this[0]);
    },

    forEach(val) {

      return this.each(
        (index, item) => {
          val.call(item, item, index, this);
        }
      );
    },

    get(index) {

      if (index !== undefined) {
        return this[index >= 0 ? index : this.length + index];
      }
      else {
        return $.toArray(this);
      }
    },

    index(element) {

      if (arguments.length === 0) {
        let dom = this[0];
        return $.toArray(dom.parentNode.children).indexOf(dom);
      }
      else {
        return $.toArray(this).indexOf($(element)[0]);
      }
    },

    indexOf(element, fromIndex = 0) {

      return $.inArray(element, this, fromIndex);
    },

    last() {

      return this[this.length - 1];
    },

    map(cb) {

      return $($.flatten($.map(this, cb)));
    },

    pluck(property) {

      return $($.toArray(this).map(item => item[property]).filter(item => item !== null && item !== undefined));
    },

    push(...args) {

      $.toNodes(args).forEach(item => {
        this[this.length++] = item
      });
      return this;
    },

    ready(cb) {

      if (coreReg.readyRE.test(document.readyState)) {
        cb($);
      }
      else {
        document.addEventListener('DOMContentLoaded', cb);
      }
      return this;
    },

    reduce() {
      return $.toArray(this).reduce(...arguments);
    },

    size() {

      return this.length;
    },

    slice(start = 0, end = this.length) {

      return $($.toArray(this).slice(start, end));
    },


    replaceWith(content) {

      return this.before(content).remove();
    },

    // 作为兄弟元素添加
    after(content) {

      let copyContent = this.length > 1;
      content = $(content).slice();

      function getContent(val) {
        return copyContent ? val.cloneNode(true) : val;
      }

      return this.each((_, item) => {
        for (let index = content.length - 1; index >= 0; index--) {
          let parentNode = item.parentNode;
          parentNode && parentNode.insertBefore(getContent(content[index]), item.nextSibling);
        }
      });
    },

    // 作为兄弟元素添加
    before(content) {

      let copyContent = this.length > 1;
      content = $(content).slice();

      function getContent(val) {
        return copyContent ? val.cloneNode(true) : val;
      }

      return this.each((_, item) => {
        let parentNode = item.parentNode;
        for (let index = 0; index <= content.length - 1; index++) {
          parentNode && parentNode.insertBefore(getContent(content[index]), item);
        }
      });
    },

    // 内部最前面添加
    prepend(content) {

      let copyContent = this.length > 1;
      content = $(content).slice();

      function getContent(val) {
        return copyContent ? val.cloneNode(true) : val;
      }

      return this.each((index, item) => {
        let firstChild = item.firstChild;
        for (let index = 0; index <= content.length - 1; index++) {
          item.insertBefore(getContent(content[index]), firstChild);
        }
      });
    },

    // 内部最后面添加
    append(content) {

      let copyContent = this.length > 1;
      content = $(content).slice();

      function getContent(val) {
        return copyContent ? val.cloneNode(true) : val;
      }

      return this.each((index, item) => {
        for (let index = 0; index <= content.length - 1; index++) {
          item.appendChild(getContent(content[index]));
        }
      });
    },

    // 对应上面四种方法的变换
    insertAfter(content) {

      $(content).after(this);
      return this;
    },

    insertBefore(content) {

      $(content).before(this);
      return this;
    },

    prependTo(content) {

      $(content).prepend(this);
      return this;
    },

    appendTo(content) {

      $(content).append(this);
      return this;
    },


    // 外层或内层加内容后再插入
    unwrap() {

      this.parent().each((index, item) => {
        let $item = $(item);
        $item.replaceWith($item.children());
      });
      return this;
    },

    // 在指定的 HTML 内容或元素中放置所有被选的元素。
    wrapAll(structure) {

      if (this[0]) {
        let $structure = $(structure);
        $(this[0]).before($structure);
        let children = $structure[0];
        while (children.children.length > 0) {
          children = children.children[0];
        }

        $(children).append(this);
      }
      return this;
    },

    // 把每个被选元素放置在指定的 HTML 内容或元素中。
    wrap(structure) {


      let func = $.type(structure) === 'function' ?
        structure :
        () => $(structure)[0].parentNode || this.length > 1 ? $(structure)[0].cloneNode(true) : $(structure)[0];
      return this.each((index, item) => {

        $(item).wrapAll(
          func.call(item, item, index)
        )
      });
    },

    wrapInner(structure) {

      let func = $.type(structure) === 'function' ? structure : () => structure;

      return this.each(
        (index, item) => {
          let dom = func.call(item, item, index),
            contents = $(item).contents();
          contents.length > 0 ? contents.wrapAll(dom) : $(item).append(dom);
        }
      );
    }

  };

  Object.assign($.prototype, core);
};
