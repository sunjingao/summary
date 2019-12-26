import React from 'react';
import PropTypes from "prop-types";
import Component from '../../Base/index';

class Tabs extends Component {

  constructor(props) {

    super(props);

    this.state = {
      // 选中的name
      selectedValue: this.props.value,
      // 子组件相关内容组合
      selectedArray: this.getSelectedArray()
    };
  }

  // 获得 selectedArray
  getSelectedArray() {

    let array = [];

    React.Children.forEach(
      this.props.children,
      (item, index) => {
        array[index] = {
          name: item.props.name,
          label: item.props.label,
          isActive: item.props.name === this.props.value,
          isShow: true
        };
      });

    return array;
  }

  // 删除具体的item
  onDeleteItem(childIndex) {

    let selectedArray = this.state.selectedArray;

    selectedArray[childIndex].isShow = false;

    this.setState({});

    if (selectedArray[childIndex].isActive) {

      for (let index = childIndex - 1; index >= 0; index--) {
        if (selectedArray[index].isShow) {
          selectedArray[index].isActive = true;
          this.setState({});
          this.onChecked(selectedArray[index].name, selectedArray[index].label);
          return;
        }
      }

      for (let index = childIndex + 1; index < selectedArray.length; index++) {
        if (selectedArray[index].isShow) {
          selectedArray[index].isActive = true;
          this.setState({});
          this.onChecked(selectedArray[index].name, selectedArray[index].label);
          return;
        }
      }
    }

    this.props.onClose && this.props.onClose(selectedArray[childIndex].name, selectedArray[childIndex].label);
  }

  // 点击触发
  onChecked(name, label, event) {

    let selectedArray = this.state.selectedArray;

    for (let index = 0; index < selectedArray.length; index++) {
      selectedArray[index].isActive =
        name === selectedArray[index].name;
    }

    this.setState({
      selectedValue: name,
      selectedArray: selectedArray
    });

    this.props.onChecked && this.props.onChecked(name, label, event);
  }

  render() {

    let children = React.Children.map(
      this.props.children,
      (item, index) => {

        if (!React.isValidElement(item) || item.type.elementName !== 'TabPane') {
          return null;
        }

        return React.cloneElement(
          item,
          {
            parent: {
              key: index,
              type: this.props.type,
              childIndex: index,
              isShow: this.state.selectedArray[index] && this.state.selectedArray[index].isShow || false,
              isActive: this.state.selectedArray[index] && this.state.selectedArray[index].isActive || false,
              closabled: this.props.closabled,
              position: this.props.position,
              onChecked: this.onChecked.bind(this),
              onDeleteItem: this.onDeleteItem.bind(this),
            }
          }
        )
      }
    );

    return (
      <div className={this.className('v-tabs', `v-${this.props.position}`, this.props.type)} style={this.style()}>
        {children}
        <div className="v-seat"/>
      </div>
    )
  }
}

Tabs.defaultProps = {
  type: 'default',
  position: 'top',
};

Tabs.propTypes = {
  value: PropTypes.string,                                       // 当前选中的value
  closabled: PropTypes.bool,                                     // 是否打开close标签
  type: PropTypes.oneOf(['default', 'card']),                    // 选项卡类型
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']), // 位置
};

export default Tabs;
