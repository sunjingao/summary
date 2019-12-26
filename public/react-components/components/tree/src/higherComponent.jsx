import React from 'react';
import Component from '../../Base/index';
import Tree from './tree';
import checkboxOperates from './checkboxOperates';


class HigherComponent extends Component {

  render() {

    return (<Tree {...this.props} checkboxOperates={checkboxOperates}/>);
  }
}

export default HigherComponent;
