export default function (val) {

  if (!val) {
    return null;
  }

  return typeof val === 'string' ?
    document.querySelector(val) : val;
}
