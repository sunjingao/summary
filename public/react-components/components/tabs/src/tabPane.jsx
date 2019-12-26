import React from 'react';
import PropTypes from "prop-types";
import Component from '../../Base/index';

class TabPane extends Component {

  static elementName = 'TabPane';

  constructor(props) {
    super(props);
    this.state = {
      isHover: false
    };
  }

  // 是否展示关闭按钮
  isShowCloseIcon() {
    return this.props.parent.closabled && (this.state.isHover || this.props.parent.isActive);
  }

  // 鼠标进入
  onMouseEnter() {
    this.setState({
      isHover: true
    });
  }

  // 鼠标离开
  onMouseLeave() {
    this.setState({
      isHover: false
    });
  }

  // 关闭触发
  onClose(event) {
    event.stopPropagation();
    this.props.parent.onDeleteItem(this.props.parent.childIndex);
  }

  // 点击触发
  onClick(event) {
    if (this.props.disabled || this.props.parent.isActive) {
      return;
    }
    this.props.parent.onChecked(this.props.name, this.props.label, event);
  }

  render() {

    return (
      (
        this.props.parent.isShow ?
          <div
            className={this.className(
              "v-tab-pane",
              this.props.parent.type,
              this.props.disabled && 'v-disabled',
              this.props.parent.isActive && 'v-active',
              `v-${this.props.parent.position}`,
            )}
            style={this.style()}
            onMouseEnter={this.onMouseEnter.bind(this)}
            onMouseLeave={this.onMouseLeave.bind(this)}
            onClick={this.onClick.bind(this)}
          >
            {
              this.props.children ?
                React.Children.map(
                  this.props.children,
                  (item, index) => React.cloneElement(
                    item,
                    {
                      key: index,
                      label: this.props.label,
                      name: this.props.name,
                      disabled: this.props.disabled,
                      parent: this.props.parent
                    }
                  )
                ) :
                <div className="v-content">
                  {this.props.label}
                  {
                    this.isShowCloseIcon() &&
                    <i
                      className="v-close"
                      onClick={this.onClose.bind(this)}
                    >×</i>
                  }
                </div>
            }
          </div> :
          ''
      )
    )
  }
}

TabPane.propTypes = {
  label: PropTypes.string,  // 当前展示的label值
  name: PropTypes.string,   // 唯一value
  disabled: PropTypes.bool, // 是否禁用

  parent: PropTypes.shape({ // 外层元素传入的值
    type: PropTypes.string,
    childIndex: PropTypes.number,
    isShow: PropTypes.bool,
    isActive: PropTypes.bool,
    closabled: PropTypes.bool,
    position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    onChecked: PropTypes.func,
    registerItem: PropTypes.func,
    onDeleteItem: PropTypes.func,
  }),
};

export default TabPane;
