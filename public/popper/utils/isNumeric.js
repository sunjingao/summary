export default function (val) {

  let number = Number(val);
  return val !== null && val !== undefined && typeof val !== 'boolean' && val !== '' &&
    !isNaN(number) && isFinite(number);
}