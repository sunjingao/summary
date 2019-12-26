import getBoundingClient from './getBoundingClient.js'

export default function (instance) {

  let boundariesElement = instance.elements.boundariesElement;

  return getBoundingClient(boundariesElement);
}
