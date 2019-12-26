export default function () {

  if (this.state.isListening) {
    return;
  }

  let listenersEle = [];

  this.state.isListening = true;

  window.addEventListener('resize', this.state.updateListener);

  this.elements.refScrollParents.forEach(
    item => {

      let element = item.nodeName.toLowerCase() === 'html' ? document : item;

      listenersEle.push(element);

      element.addEventListener(
        'scroll',
        this.state.updateListener,
        false
      )
    }
  );

  this.elements.popperScrollParents.forEach(
    item => {

      let element = item.nodeName.toLowerCase() === 'html' ? document : item;

      if (listenersEle.includes(element)) {
        return;
      }

      element.addEventListener(
        'scroll',
        this.state.updateListener,
        false
      )
    }
  );
}
