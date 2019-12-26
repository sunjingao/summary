import React from 'react';
import PropTypes from 'prop-types';
import Component from '../../Base/index';
import Loading from "../../loading";

class Dialog extends Component {

  constructor(props) {

    super(props);

    this.state = {
      isShow: false,
    };

    this.params = {
      loadingInstance: null,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isShow !== this.props.isShow) {
      this.props.isShow ? this.show() : this.hide();
    }
  }

  // 获得 zIndex
  getPopperIndex() {
    return Popper.addZIndex();
  }

  // 获得 dialog 的宽度
  getDialogWidth() {
    return isFinite(this.props.width) ? `${this.props.width}px` : this.props.width;
  }

  // 展开dialog
  show() {

    if (this.state.isShow) {
      return;
    }

    this.params.loadingInstance = Loading({
      target: document.body,
      isShowLoadingIcon: false
    });

    // loading展示出来需要setTimeout，所以这里也需要setTimeout。
    setTimeout(
      _ => {

        this.params.loadingInstance.open();

        setTimeout(
          _ => {
            this.setState({
              isShow: true,
            });
          }
        )
      }
    )
  }

  // 隐藏dialog
  hide() {

    if (!this.state.isShow) {
      return;
    }

    this.setState({
      isShow: false,
    });

    this.params.loadingInstance && this.params.loadingInstance.close && this.params.loadingInstance.close();
  }

  // 关闭
  onClose() {
    if (this.state.isShow && this.props.canCloseCb.call(this)) {
      this.hide();
      this.props.onClose && this.props.onClose();
    }
  }

  render() {
    return (
      this.state.isShow &&
      <div
        className={this.className('v-dialog')}
        style={{...this.style(), zIndex: this.getPopperIndex(), width: this.getDialogWidth()}}
      >
        {
          this.props.titleComponent ?
            <div>
              {this.props.titleComponent}
            </div> :
            <div className="v-titlePart">
              <div
                className="v-titleContent"
                style={{textAlign: this.props.isCenter ? 'center' : 'left'}}
                dangerouslySetInnerHTML={{__html: this.props.titleText}}
              />
              {
                this.props.isShowClose &&
                <div className="v-closeIcon v-noSelect" onClick={this.onClose.bind(this)}>×</div>
              }
            </div>
        }

        <div className="v-contentPart">
          {this.props.children}
        </div>

        {
          this.props.footerComponent &&
          <div
            className="v-buttonPart"
            style={{justifyContent: this.props.isCenter ? 'center' : 'flex-end'}}
          >
            {this.props.footerComponent}
          </div>
        }
      </div> || ''
    )
  }
}

Dialog.defaultProps = {
  isShowClose: true,
  width: '50%',
  canCloseCb: function () {
    return true;
  },
};

Dialog.propTypes = {
  isShow: PropTypes.bool,          // 是否展示
  isCenter: PropTypes.bool,        // 标题和footer部分是否居中
  isShowClose: PropTypes.bool,     // 是否展示close按钮
  width: PropTypes.string,         // 宽度
  titleText: PropTypes.string,     // 标题文字
  canCloseCb: PropTypes.func,      // 点击关闭前的回调
  onClose: PropTypes.func,         // dialog关闭

  titleComponent: PropTypes.node,  // title 插槽
  footerComponent: PropTypes.node, // footer 插槽
};

export default Dialog;
