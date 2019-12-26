import React from 'react';
import PropTypes from 'prop-types';
import Component from '../../Base/index';

class Collapse extends Component {

  constructor(props) {

    super(props);

    this.state = {
      value: this.props.value,
    };
  }

  getIsItemShow(item) {
    if (this.props.isAccordion) {
      return this.state.value === item.props.name;
    }
    else {
      return this.state.value.includes(item.props.name);
    }
  }

  // 获得当前选中的内容
  emitValue(activeName) {

    let openItems;

    if (this.props.isAccordion) {
      openItems = this.state.value === activeName ? '' : activeName;
    }
    else {

      openItems = [...(this.state.value || [])];

      if (openItems.includes(activeName)) {
        openItems.splice(openItems.indexOf(activeName), 1);
      }
      else {
        openItems.push(activeName);
      }
    }

    return openItems;
  }

  // 改变选中的内容
  change(activeName) {

    let openItems = this.emitValue(activeName);

    this.setState({
      value: openItems
    });

    this.props.onChange && this.props.onChange(openItems);
  }

  render() {

    let children = React.Children.map(
      this.props.children,
      item => {

        if (!React.isValidElement(item) || item.type.elementName !== 'CollapseItem') {
          return null;
        }

        return React.cloneElement(
          item,
          {
            parent: {
              isShow: this.getIsItemShow(item),
              change: this.change.bind(this),
            }
          }
        )
      }
    );

    return (
      <div className={this.className('v-collapse')} style={this.style()}>
        {children}
      </div>
    )
  }
}

Collapse.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),   // 当前展开的内容
  isAccordion: PropTypes.bool,                                       // 是否最多只能展示一个内容
  onChange: PropTypes.func,                                          // 有折叠动作时触发
};

export default Collapse;
