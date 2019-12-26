import React from 'react';
import PropTypes from "prop-types";
import Component from '../../Base/index';

class TimelineItem extends Component {

  static elementName = 'TimelineItem';

  render() {

    return (
      <div className={this.className('v-timeline-item')} style={this.style()}>
        <div className="v-chart-part">

          {
            this.props.circularComponent ?
              this.props.circularComponent :
              <div className="v-circular" style={{backgroundColor: this.props.circularColor}}/>
          }

          {
            this.props.lineComponent ?
              this.props.lineComponent :
              <div
                className={`v-line ${this.props.parent.isLast && 'v-isLast' || ''}`}
                style={{backgroundColor: this.props.circularColor}}
              />
          }
        </div>
        <div className="v-words-part">
          {
            this.props.default ?
              this.props.default :
              <React.Fragment>
                <div
                  className={`v-description ${this.props.placement === 'top' && 'v-bottom' || ''}`}
                  style={{order: this.props.placement === 'top' ? 1 : 0}}
                >
                  {this.props.description}
                </div>
                <div
                  className={`v-time ${this.props.placement === 'bottom' && 'v-bottom' || ''}`}
                  style={{order: this.props.placement === 'top' ? 0 : 1}}
                >
                  {this.props.time}
                </div>
              </React.Fragment>
          }
        </div>
      </div>
    );
  }
}

TimelineItem.defaultProps = {
  placement: "bottom",
  circularColor: '#e4e7ed',
  lineColor: '#e4e7ed',
};

TimelineItem.propTypes = {
  time: PropTypes.string,                        // 时间
  placement: PropTypes.oneOf(['top', 'bottom']), // 时间的位置
  description: PropTypes.string,                 // 描述
  circularColor: PropTypes.string,               // 圆的颜色
  lineColor: PropTypes.string,                   // 线的颜色

  circularComponent: PropTypes.node,             // 自定义组件
  lineComponent: PropTypes.node,                 // 自定义组件

  parent: PropTypes.shape({                      // 外层元素传入的值
    isLast: PropTypes.bool,
  }),
};

export default TimelineItem;