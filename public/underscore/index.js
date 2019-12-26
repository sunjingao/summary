import collectionsMixin from './collections.js';
import arraysMixin from './arrays.js';
import functionsMixin from './functions.js';
import objectsMixin from './objects.js';
import utilityMixin from './utility.js';
import chainMixin from './chain.js';
import protoTypeMixins from './protoTypeMixins';

let _ = function (obj) {
  if (obj instanceof _) {
    return obj;
  }
  if (!(this instanceof _)) {
    return new _(obj);
  }
  this._wrapped = obj;
};

// 当前版本
_.VERSION = '1.0.0';

// 集合的方法合并
collectionsMixin(_);
// 数组的方法合并
arraysMixin(_);
// 函数的方法合并
functionsMixin(_);
// 对象的方法合并
objectsMixin(_);
// 实用功能的方法合并
utilityMixin(_);
// 链式语法的方法合并
chainMixin(_);

// 原型链方法的合并
protoTypeMixins(_);
// 原型链赋值
_._mixinPrototype();

export default _;