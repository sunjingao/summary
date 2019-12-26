import getBoundingClient from "../utils/getBoundingClient";
import zIndexObj from "../utils/zIndex";

export default function (instance) {

  let left = instance.offsets.popper.left,
    top = instance.offsets.popper.top,
    isFixed = instance.options.positionFixed,
    position = {};

  top = isFixed ? top + getBoundingClient(instance.elements.commonElement).top : top;
  left = isFixed ? left + getBoundingClient(instance.elements.commonElement).left : left;

  instance.changes = {
    attributes: {
      placement: instance.changes.attributes.placement
    },
    styles: {
      'position': isFixed ? 'fixed' : 'absolute',
      'z-index': zIndexObj.getZIndex(),
    }
  };

  if (instance.options.enableTransition) {

    position = {
      transform: `translate(${left - instance.offsets.originalPopper.left}px, ${top - instance.offsets.originalPopper.top}px)`
    }
  } else {
    position = {
      'top': `${top}px`,
      'left': `${left}px`,
    }
  }

  Object.assign(
    instance.changes.styles,
    position
  );
}
