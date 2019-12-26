// 将各个modifier都跑一遍
export default function (instance) {
  
  instance.options.modifiers.forEach(item => {
    if (item.enabled) {
      item.fn(instance, item);
    }
  })
}
