import React from 'react';
import Component from '../../Base/index';
import Pagination from './pagination';
import getSettings from './getSettings';

class HigherComponent extends Component {

  render() {
    return (
      <Pagination {...this.props} getSettings={getSettings}/>
    );
  }
}

export default HigherComponent;
