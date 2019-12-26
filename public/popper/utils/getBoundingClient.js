export default function (val) {

  return val && (val.nodeType === Node.ELEMENT_NODE || val.nodeType === Node.DOCUMENT_NODE) ?
    val.getBoundingClientRect() :
    {
      width: 0,
      height: 0,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      x: 0,
      y: 0
    };
}
