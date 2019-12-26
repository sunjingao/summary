import React from 'react';
import PropTypes from "prop-types";
import Component from '../../Base/index';
import clickoutside from '../../../src/utils/clickoutside';
import Tag from '../../tag/index';

const KEYCODE = {
  ENTER: 13,
  ESC: 27
};

class SelectMultiple extends Component {

  constructor(props) {

    super(props);

    this.state = {
      showLabel: [],
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
        showLabel: [...props.value],
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

  // 打开popper
  showPopper() {

    this.ref.popperContent.current.scrollTop = 0;
    this.params.popperHandler.show();

    this.setState({
      isShowPopper: true
    });
  }

  // 隐藏popper
  hidePopper() {

    this.params.popperHandler.hide();
    this.ref.input.current && this.ref.input.current.blur();

    this.setState({
      isShowPopper: false
    });
  }

  // 更新popper位置
  updatePopper() {
    this.params.popperHandler.update();
  }

  // 设置 showValue
  setSelectedValue(value) {

    let showValue = this.state.showValue;
    showValue.includes(value) ? showValue.splice(showValue.indexOf(value), 1) : showValue.push(value);

    this.setState({
      showValue: showValue
    });
  }

  // 设置 showLabel
  setSelectedLabel(value) {

    let showLabel = this.state.showLabel;
    showLabel.includes(value) ? showLabel.splice(showLabel.indexOf(value), 1) : showLabel.push(value);

    this.setState(
      {showLabel: showLabel},
      _ => {
        this.updatePopper();
      }
    );
  }

  // 点击option item的关闭
  onCloseItem(event, index) {

    // 阻止事件执行
    event.nativeEvent.stopImmediatePropagation();

    // 更改子节点监控的数据，触发子节点更新showLabel数据
    this.state.showValue.splice(index, 1);
    this.state.showLabel.splice(index, 1);
    this.setState(
      {
        showValue: this.state.showValue,
        showLabel: this.state.showLabel
      },
      _ => {
        this.updatePopper();
      }
    );

    this.props.onClose && this.props.onClose(this.state.showLabel);
  }

  // 点击option的item
  onClickOption(value, label, event) {
    this.props.onClickOption && this.props.onClickOption(this.state.showLabel);
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

  // 获得input展示内容
  renderInputContent() {

    let tagHeight = this.props.minHeight - 10 - 2;

    return this.state.showLabel.length > 0 ?
      this.state.showLabel.map(
        (item, index) => React.cloneElement(
          <Tag/>,
          {
            key: (new Date()).getTime() + index,
            isCloseable: true,
            childValue: String(item),
            height: tagHeight,
            onClose: event => this.onCloseItem.bind(this)(event, index),
          }
        )
      ) :
      <span className="v-self-placeholder" style={{lineHeight: `${tagHeight}px`}}>
        {this.props.placeholder}
      </span>;
  }

  // 获得popper展示内容
  renderPopperContent() {

    return React.Children.map(
      this.props.children,
      item => {

        if (!React.isValidElement(item) || item.type.elementName !== 'Option') {
          return null;
        }

        return React.cloneElement(
          item,
          {
            parent: {
              isSingle: false,
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
        style={this.style()}
        onKeyDown={this.onKeyDown.bind(this)}
      >
        <div
          ref={this.ref.input}
          className="v-multiple-reference v-hover-show-scrollbar"
          style={{
            width: `${this.props.width}px`,
            minHeight: `${this.props.minHeight}px`,
            maxHeight: `${this.props.maxHeight}px`
          }}
          onClick={this.onInputClick.bind(this)}
          tabIndex={1}
        >
          {this.renderInputContent()}
          <span className="v-select-direction">
            <i className={`iconfont icon-down ${this.state.isShowPopper && 'v-up' || ''}`}/>
          </span>
        </div>

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

SelectMultiple.defaultProps = {
  width: 180,
  minHeight: 40,
  maxHeight: 200,
  value: [],
  placeholder: '请选择',
};

SelectMultiple.propTypes = {
  width: PropTypes.number,       // 宽度
  minHeight: PropTypes.number,   // 最大高度
  maxHeight: PropTypes.number,   // 最小高度
  value: PropTypes.array,        // 展示的值
  placeholder: PropTypes.string, // 默认值

  onClickOption: PropTypes.func, // 点击option的item
  onCloseItem: PropTypes.func,   // 点击option的关闭
};

export default SelectMultiple;
