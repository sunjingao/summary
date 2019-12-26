import React from 'react';
import PropTypes from "prop-types";
import Component from '../../Base/index';
import Input from '../../input/index';
import Button from '../../button/index';

class MessageBox extends Component {

  constructor(props) {

    super(props);

    this.state = {
      isShow: true,
    };

    this.params = {
      inputValue: '',
    };

    this.ref = {
      input: React.createRef(),
    };
  }

  componentDidMount() {
    this.ref.input.current && this.ref.input.current.focusHandle();
  }

  // 获得层级
  getZIndex() {
    return Popper.addZIndex();
  }

  // 关闭 messageBox
  hide() {
    this.setState({
      isShow: false,
    });
    this.props.onClose && this.props.onClose();
  }

  // 打开 messageBox
  show() {
    this.setState({
      isShow: true
    });
  }

  // 点击 叉号
  onClose() {
    if (this.props.canClose.call(this, this.params.inputValue || '')) {
      this.hide();
    }
  }

  // 取消事件
  onCancel() {
    if (this.props.canCancel.call(this, this.params.inputValue || '')) {
      this.hide();
    }
  }

  // 确认事件
  onConfirm() {

    this.props.type === 'prompt' && this.props.onConfirm && this.props.onConfirm(this.params.inputValue);

    if (this.props.canConfirm.call(this, this.params.inputValue)) {
      this.hide();
    }
  }

  // input输入值改变
  onChange(val) {
    this.params.inputValue = val;
  }

  render() {
    return (
      this.state.isShow ?
        <div
          className={this.className('v-messageBox', this.props.messageBoxClass)}
          style={{...this.style(), zIndex: this.getZIndex()}}
        >

          <div className="v-title">
            <div className="v-titleContent" dangerouslySetInnerHTML={{__html: this.props.titleText}}/>
            <div className="v-closeIcon v-noSelect" onClick={this.onClose.bind(this)}>×</div>
          </div>

          <div className="v-content">
            {
              this.props.contentText &&
              <div className="v-contentText" dangerouslySetInnerHTML={{__html: this.props.contentText}}/>
            }
            {
              this.props.type === 'prompt' &&
              <Input
                ref={this.ref.input}
                className="v-mt5"
                width={420 - 10 - 10}
                onChange={this.onChange.bind(this)}
              />
            }
          </div>

          <div className="v-footer">
            {
              this.props.type !== 'message' &&
              <Button onClick={this.onCancel.bind(this)}>
                {this.props.cancelButtonText}
              </Button>
            }
            <Button
              type="primary"
              className="v-ml10"
              onClick={this.onConfirm.bind(this)}
            >
              {this.props.confirmButtonText}
            </Button>
          </div>
        </div>
        : ''
    );
  }
}

MessageBox.defaultProps = {
  type: 'message',
  cancelButtonText: '取消',
  confirmButtonText: '确认',
  canCancel: function () {
    return true;
  },
  canConfirm: function () {
    return true;
  },
  canClose: function () {
    return true;
  },
};

MessageBox.propTypes = {
  type: PropTypes.oneOf(['message', 'confirm', 'prompt']), // 弹框类型：	message、confirm、prompt
  titleText: PropTypes.string,                             // 标题内容
  contentText: PropTypes.string,                           // content内容
  cancelButtonText: PropTypes.string,                      // 取消按钮中的内容
  confirmButtonText: PropTypes.string,                     // 确认按钮中的内容
  canCancel: PropTypes.func,                               // 点击取消按钮时的回调
  canConfirm: PropTypes.func,                              // 点击确认按钮时的回调
  canClose: PropTypes.func,                                // 点击关闭符号时的回调
  onClose: PropTypes.func,                                 // 关闭弹窗回调
  onConfirm: PropTypes.func,                               // 在 prompt 类型时，点击确认
  messageBoxClass: PropTypes.string,                       // 样式
};

export default MessageBox;
