export default function (_) {

  let prototype = _.prototype;

  let protoTypeMixins = {

    _mixinPrototype() {

      for (let func of _.values(Object.values(_))) {

        if (!_.isValueType(func, 'function')) {
          continue;
        }

        let funcName = func.name, funcCb = func;

        prototype[funcName] = function () {
          if (this._chain && funcName !== 'value') {
            this._wrapped = funcCb(this._wrapped, ...arguments);
            return this;
          } else {
            return funcCb(this._wrapped);
          }
        };

      }
    },
  };

  Object.assign(_, protoTypeMixins);
};
