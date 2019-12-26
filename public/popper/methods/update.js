import getNodesDistance from '../utils/getNodesDistance.js';
import runModifiers from '../utils/runModifiers.js';
import getPlacementPosition from '../utils/getPlacementPosition.js';
import getBoundariesElementRect from '../utils/getBoundariesElementRect.js';
import css from "../utils/css";

let update = function (instance) {

  if (css(instance.elements.popper, 'display') === 'none') {
    return;
  }

  // 计算 reference 的位置
  instance.offsets.reference = getNodesDistance(instance.elements.reference, instance.elements.commonElement);

  instance.changes.attributes.placement = getPlacementPosition(
    getBoundariesElementRect(instance),
    instance.elements.reference,
    instance.elements.popper,
    instance.options.modifiers.filter(item => item.name === 'offset')[0].offset,
    instance.options.boundariesPadding,
    instance.options.placement,
    instance.options.flip
  );

  // 执行各个 modifier
  runModifiers(instance);
};

export default update
