import React from 'react';
import Component from '../../Base/index';
import SelectMultiple from './selectMultiple';
import SelectSingle from './selectSingle';

class Select extends Component {

  render() {

    return this.props.isMultiple ?
      React.cloneElement(<SelectMultiple/>, {...this.props}) :
      React.cloneElement(<SelectSingle/>, {...this.props});
  }
}

export default Select;