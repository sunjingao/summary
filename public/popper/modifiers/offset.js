export default function (instance, modifierOpt) {

  let offset = modifierOpt.offset,
    placementF = instance.changes.attributes.placement.split('-')[0];

  switch (placementF) {
    case 'top':
      instance.offsets.popper.left += offset[0];
      instance.offsets.popper.top -= offset[1];
      break;
    case 'right':
      instance.offsets.popper.top += offset[0];
      instance.offsets.popper.left += offset[1];
      break;
    case 'bottom':
      instance.offsets.popper.left += offset[0];
      instance.offsets.popper.top += offset[1];
      break;
    case 'left':
      instance.offsets.popper.top += offset[0];
      instance.offsets.popper.left -= offset[1];
      break;
  }
}
