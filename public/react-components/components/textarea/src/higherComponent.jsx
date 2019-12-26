import React from 'react';
import Component from '../../Base/index';
import calcStyles from './calcStyles';
import Textarea from './textarea';


class HigherComponent extends Component {

  render() {

    return (<Textarea {...this.props} calcStyles={calcStyles}/>);
  }
}

export default HigherComponent;
