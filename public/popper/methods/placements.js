let placements = [
  'top-start',
  'top',
  'top-end',
  'right-start',
  'right',
  'right-end',
  'bottom-end',
  'bottom',
  'bottom-start',
  'left-end',
  'left',
  'left-start',
];

let placementsRelation = {
  'top-start': 'bottom-start',
  'top': 'bottom',
  'top-end': 'bottom-end',
  'right-start': 'left-start',
  'right': 'left',
  'right-end': 'left-end',
  'bottom-end': 'top-end',
  'bottom': 'top',
  'bottom-start': 'top-start',
  'left-end': 'right-end',
  'left': 'right',
  'left-start': 'right-start',
};

export {
  placements,
  placementsRelation
};