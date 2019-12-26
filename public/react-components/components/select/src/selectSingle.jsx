import React from 'react';
import PropTypes from "prop-types";
import Component from '../../Base/index';
import clickoutside from '../../../src/utils/clickoutside';
import Input from '../../input/index';

const KEYCODE = {
  ENTER: 13,
  ESC: 27
};

class SelectSingle extends Component {

  constructor(props) {

    super(props);

    this.state = {
      showLabel: '',
      showValue: this.props.value,
      isShowPopper: false,
    };

    this.params = {
      popperHandler: null,
    };

    this.ref = {
      root: React.createRef(),
      input: React.createRef(),
      popper: React.createRef(),
      popperContent: React.createRef()
    };
  }

  static getDerivedStateFromProps(props, state) {

    if (props.value !== state.prevPropsValue) {
      return {
        prevPropsValue: props.value,
        showLabel: props.value,
      };
    }

    return null;
  }

  componentDidMount() {

    clickoutside.bind(this.ref.root.current, sign => sign && this.hidePopper());

    this.params.popperHandler = new Popper(
      this.ref.root.current,
      this.ref.popper.current,
      {
        updateImmediately: false,
        placement: 'bottom-start',
        modifiers: {
          // 设置输入框和弹层之间的距离
          offset: {
            offset: [0, 10]
          }
        }
      }
    );

    this.params.popperHandler.hide();
  }

  componentWillUnmount() {
    clickoutside.unbind(this.ref.root.current);
    this.params.popperHandler.destroy();
  }

  // 是否显示方向箭头
  isShowDirection() {
    return !this.props.isCleanable || this.props.isCleanable && !this.state.showLabel;
  }

  // 打开popper
  showPopper() {

    this.ref.popperContent.current.scrollTop = 0;

    this.params.popperHandler.show();

    this.setState({
      isShowPopper: true,
    });
  }

  // 隐藏popper
  hidePopper() {

    this.params.popperHandler.hide();

    this.ref.input.current && this.ref.input.current.onBlur();

    this.setState({
      isShowPopper: false,
    });
  }

  // 设置 showValue
  setSelectedValue(value) {
    this.setState({
      showValue: value
    });
  }

  // 设置 showLabel
  setSelectedLabel(value) {
    this.setState({
      showLabel: value
    });
  }

  // 点击option的item
  onClickOption(value, label, event) {
    this.hidePopper();
    this.props.onClickOption && this.props.onClickOption(...arguments);
  }

  // 输入框清除事件
  onClear(event) {

    this.setSelectedValue('');
    this.setSelectedLabel('');

    this.props.onClear && this.props.onClear(event);
  }

  // 输入框点击事件处理
  onInputClick() {
    this.showPopper();
  }

  // keydown事件处理
  onKeyDown(event) {
    switch (event.keyCode) {
      case KEYCODE.ENTER:
        this.params.popperHandler.toggle();
        break;
      case KEYCODE.ESC:
        this.hidePopper();
        break;
    }
  }

  // 获得popper展示内容
  renderPopperContent() {

    return React.Children.map(
      this.props.children,
      item => {

        if (!React.isValidElement(item) || !['Option', 'OptionGroup'].includes(item.type.elementName)) {
          return null;
        }

        return React.cloneElement(
          item,
          {
            parent: {
              isSingle: true,
              showValue: this.state.showValue,
              setSelectedValue: this.setSelectedValue.bind(this),
              setSelectedLabel: this.setSelectedLabel.bind(this),
              onClickOption: this.onClickOption.bind(this),
            }
          }
        )
      }
    )
  }

  render() {

    return (
      <div
        ref={this.ref.root}
        className={this.className('v-select')}
        style={{
          ...this.style(),
          width: `${this.props.width}px`,
          height: `${this.props.height}px`,
        }}
        onKeyDown={this.onKeyDown.bind(this)}
      >

        <Input
          ref={this.ref.input}
          readonly
          value={this.state.showLabel}
          placeholder={this.props.placeholder}
          isCleanable={this.props.isCleanable}
          width={this.props.width}
          height={this.props.height}
          onClear={this.onClear.bind(this)}
          onClick={this.onInputClick.bind(this)}
          behind={
            this.isShowDirection &&
            <span className="v-select-direction">
              <i className={`iconfont icon-down ${this.state.isShowPopper && 'v-up' || ''}`}/>
            </span>
          }
        />

        <div
          ref={this.ref.popper}
          className="v-popper"
        >
          <ul ref={this.ref.popperContent} className="v-popper-content v-hover-show-scrollbar">
            {this.renderPopperContent()}
          </ul>

          <div className="v-popper-arrow"/>
        </div>

      </div>
    );
  }
}

SelectSingle.defaultProps = {
  placeholder: '请选择',
  width: 180,
};

SelectSingle.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // 展示的值
  placeholder: PropTypes.string,                                    // 默认值
  isCleanable: PropTypes.bool,                                      // 是否显示清除按钮
  width: PropTypes.number,                                          // 宽度
  height: PropTypes.number,                                         // 高度

  onClickOption: PropTypes.func,                                    // 点击具体的item
};

export default SelectSingle;