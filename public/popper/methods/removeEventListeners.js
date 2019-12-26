export default function () {

  if (!this.state || !this.state.isListening) {
    return;
  }

  let listenersEle = [];

  this.state.isListening = false;

  window.removeEventListener('resize', this.state.updateListener);

  this.elements.refScrollParents.forEach(
    item => {

      let element = item.nodeName.toLowerCase() === 'html' ? document : item;

      listenersEle.push(listenersEle);

      element.removeEventListener(
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

      element.removeEventListener(
        'scroll',
        this.state.updateListener,
        false
      )
    }
  );
}


