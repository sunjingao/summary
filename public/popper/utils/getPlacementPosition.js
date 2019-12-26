import {placements, placementsRelation} from '../methods/placements.js';
import getBoundingClient from './getBoundingClient.js';

let isPlacementSValid = function (boundariesRect, refEle, popEle, place) {

  let placementF = place.split('-')[0],
    placementS = place.split('-')[1],
    refRect = getBoundingClient(refEle),
    popRect = getBoundingClient(popEle);

  if (['top', 'bottom'].indexOf(placementF) !== -1) {
    if (placementS === 'start') {
      return refRect.left - boundariesRect.left >= 0 && boundariesRect.right - (refRect.left + popRect.width) >= 0;
    }
    else if (placementS === 'end') {
      return (refRect.right - popRect.width) - boundariesRect.left >= 0 && boundariesRect.right - refRect.right >= 0;
    }
    else {
      // 居中
      return (refRect.left + refRect.width / 2 - popRect.width / 2) - boundariesRect.left >= 0 &&
        boundariesRect.right - (refRect.left + refRect.width / 2 + popRect.width / 2) >= 0;
    }
  }
  else {
    if (placementS === 'start') {
      return refRect.top - boundariesRect.top >= 0 && boundariesRect.bottom - (refRect.top + popRect.height) >= 0;
    }
    else if (placementS === 'end') {
      return (refRect.bottom - popRect.height) - boundariesRect.top >= 0 && boundariesRect.bottom - refRect.bottom >= 0;
    }
    else {
      // 居中
      return (refRect.top + refRect.height / 2 - popRect.height / 2) - boundariesRect.top >= 0 &&
        boundariesRect.bottom - (refRect.top + refRect.height / 2 + popRect.height / 2) >= 0;
    }
  }
};

let isPlacementValid = function (
  boundariesElementRect,
  referenceEle,
  popperEle,
  offset,
  padding,
  placement
) {

  let referenceEleRect = getBoundingClient(referenceEle),
    popperEleRect = getBoundingClient(popperEle);

  let validObj = {
    top: referenceEleRect.top - popperEleRect.height - boundariesElementRect.top - offset[1] - padding > 0 &&
    isPlacementSValid(boundariesElementRect, referenceEle, popperEle, `top-${placement.split('-')[1] || 'center'}`),
    right: boundariesElementRect.right - popperEleRect.width - referenceEleRect.right - offset[0] - padding > 0 &&
    isPlacementSValid(boundariesElementRect, referenceEle, popperEle, `right-${placement.split('-')[1] || 'center'}`),
    bottom: boundariesElementRect.bottom - popperEleRect.height - referenceEleRect.bottom - offset[1] - padding > 0 &&
    isPlacementSValid(boundariesElementRect, referenceEle, popperEle, `bottom-${placement.split('-')[1] || 'center'}`),
    left: referenceEleRect.left - popperEleRect.width - boundariesElementRect.left -offset[0] - padding > 0 &&
    isPlacementSValid(boundariesElementRect, referenceEle, popperEle, `left-${placement.split('-')[1] || 'center'}`),
  };

  return validObj[placement.split('-')[0]];
};

export default function (
  boundariesElementRect,
  referenceEle,
  popperEle,
  offset,
  padding,
  placement,
  flip
) {

  let index = placements.indexOf(placement.split('-')[0]),
    placementsArr = [...placements.slice(index).concat(placements.slice(0, index))];

  placementsArr = flip === 'counterclockwise' ? placementsArr.reverse() : placementsArr;

  if (
    flip === 'static' ||
    isPlacementValid(
      boundariesElementRect,
      referenceEle,
      popperEle,
      offset,
      padding,
      placement
    )) {
    return placement;
  }
  else if (flip === 'opposite') {

    if (isPlacementValid(
      boundariesElementRect,
      referenceEle,
      popperEle,
      offset,
      padding,
      placementsRelation[placement]
    )) {
      return placementsRelation[placement];
    }
  }
  else if (flip === 'clockwise' || flip === 'counterclockwise') {

    while (placementsArr.length > 0) {

      if (
        isPlacementValid(
          boundariesElementRect,
          referenceEle,
          popperEle,
          offset,
          padding,
          placementsArr[0],
          flip
        )) {
        return placementsArr[0];
      }
      placementsArr = placementsArr.slice(1);
    }
  }

  // 无论为何种方向，都不满足条件
  return placement;
}
