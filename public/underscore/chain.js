export default function (_) {

  let chain = {

    chain(obj) {

      let res = new _(obj);

      res._chain = true;
      return res;
    },

    value(val) {

      return val;
    },
  };

  Object.assign(_, chain);
};