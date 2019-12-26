import React from 'react';
import PropTypes from "prop-types";
import Component from '../../Base/index';

class PageHeader extends Component {

  // 后退事件
  onBack() {
    this.props.onBack && this.props.onBack();
  }

  render() {
    return (
      <div className={this.className('v-pageHeader')} style={this.style()}>
        <div className="v-title" onClick={this.onBack.bind(this)}>
          {
            this.props.titleComponent ?
              this.props.titleComponent :
              <div>
                <span className="iconfont icon-go-left"/>
                <span>{this.props.title}</span>
              </div>
          }
        </div>
        <span className="v-separate">|</span>
        <div className="v-content">
          {
            this.props.contentComponent ?
              this.props.contentComponent :
              <div><span>{this.props.content}</span></div>
          }
        </div>
      </div>
    )
  }
}

PageHeader.defaultProps = {
  title: '返回',
};

PageHeader.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  titleComponent: PropTypes.node,
  contentComponent: PropTypes.node,
  onBack: PropTypes.func,
};

export default PageHeader;
