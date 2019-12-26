let indexReg = {
  // 标签匹配规则
  htmlTag: /<\s*(\w+)\s*.*?>[^<]*?<\s*\/\1\s*>|<\s*(\w+)[^>]*?\/>/,
  // 组件方法
  selfAttribute: /val|css|html|text|data|width|height|offset/
};

let utilReg = {
  // -命名方式的规则
  camelCase: /[-_]+([a-zA-Z])/g,
  // 驼峰法命名方式的规则
  camelToLine: /[a-z][A-Z]/g,
  // 这些标签只能插入特定元素中
  onlyInSpecialTag: /<\s*(thead|tbody|tfoot|th|tr|td)/g
};

let coreReg = {
  // 空格分隔符
  spaceSplit: /\s+/g,
  // 根节点（不包含 document）
  rootTag: /htlm|body/ig,
  // dom状态节点
  readyRE: /complete|loaded|interactive/
};


export {
  indexReg,
  utilReg,
  coreReg
};
