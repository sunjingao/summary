import deepClone from "./deepClone";
import defaultModifiers from "../modifiers";
import defaultOptions from "../methods/default";

export default function (opts) {

  let options = Object.assign({}, opts);

  // modifiers 处理
  if (options) {

    let userModifiers = options.modifiers;

    options.modifiers = deepClone({}, defaultModifiers);

    if (userModifiers) {

      for (let [modifierKey, modifierValue] of Object.entries(userModifiers)) {

        if (!options.modifiers.hasOwnProperty(modifierKey)) {
          options.modifiers[modifierKey] = {};
        }

        for (let [key, value] of Object.entries(modifierValue)) {
          options.modifiers[modifierKey][key] = value;
        }
      }
    }

    // 合并用户自定义的 modifiers，保留enabled为true的选项，并按照order排序
    options.modifiers = Object.keys(options.modifiers)
      .map(
        name => ({
          name,
          ...options.modifiers[name]
        })
      )
      .filter(item => item.enabled)
      .sort((a, b) => a.order - b.order);
  }

  return Object.assign({}, defaultOptions, options);
}
