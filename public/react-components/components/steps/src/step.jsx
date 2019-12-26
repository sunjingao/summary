import React from 'react';
import PropTypes from "prop-types";
import Component from '../../Base/index';

class Step extends Component {

  static elementName = 'Step';

  constructor(props) {

    super(props);

    this.params = {
      types: {
        error: 'error',
        process: 'process',
        success: 'success',
        wait: 'wait',
      },
    };

    this.ref = {
      chartPart: React.createRef()
    };
  }

  // 当前节点的状态
  currentStatus() {

    let status = '';
    if (this.props.parent.isError && this.props.parent.process === this.props.parent.currentIndex) {
      status = this.params.types.error;
    } else if (this.props.parent.process === this.props.parent.currentIndex) {
      status = this.params.types.process;
    } else if (this.props.parent.process > this.props.parent.currentIndex) {
      status = this.params.types.success;
    } else {
      status = this.params.types.wait;
    }
    return status;
  }

  render() {

    let chartPart = null, linePart = null;

    if (this.props.stepComponent) {
      chartPart = this.props.stepComponent;
    }
    else if (!this.props.parent.isSimple) {
      if (this.props.parent.isError && this.props.parent.process === this.props.parent.currentIndex) {
        chartPart = <div className="v-step-one v-error">×</div>;
      }
      else {
        switch (this.currentStatus()) {
          case this.params.types.success:
            chartPart = <div className="v-step-one v-success iconfont icon-caozuochenggong"/>;
            break;
          case this.params.types.process:
            chartPart = <div className="v-step-one v-process">{this.props.parent.currentIndex + 1}</div>;
            break;
          case this.params.types.wait:
            chartPart = <div className="v-step-one v-wait">{this.props.parent.currentIndex + 1}</div>;
            break;
          case this.params.types.error:
            chartPart = <div className="v-step-one v-error">{this.props.parent.currentIndex + 1}</div>;
            break;
        }
      }
    }

    if (!this.props.parent.isLast) {
      if (this.props.parent.isSimple) {
        linePart = <div className="v-simple">></div>;
      }
      else {
        linePart =
          <div className={`v-line ${this.props.parent.currentIndex < this.props.parent.process - 1 && 'v-process' || ''}`}/>;
      }
    }

    return (
      <div
        className={this.className('v-step')}
        style={{
          ...this.style(),
          width: this.props.parent.space && !this.props.parent.isLast ? `${this.props.parent.space}px` : 'auto',
          flex: this.props.parent.space || this.props.parent.isLast ? 'none' : '1',
        }}
      >
        <div ref={this.ref.chartPart} className="v-chart-part">
          {chartPart}
          {linePart}
        </div>

        <div className={`v-content-part v-${this.currentStatus()}`}>
          {
            this.props.titleComponent ?
              <div className="v-title">
                <div className="v-content">
                  {this.props.titleComponent}
                </div>
              </div> :
              <div className="v-title">
                <div className="v-content">
                  {this.props.titleText}
                </div>
              </div>
          }
          {
            this.props.descriptionComponent ?
              <div className="v-description">
                <div className="v-content">
                  {this.props.descriptionComponent}
                </div>
              </div> :
              <div className="v-description">
                <div className="v-content">
                  {this.props.descriptionText}
                </div>
              </div>
          }
        </div>
      </div>
    );
  }
}

Step.propTypes = {
  titleText: PropTypes.string,          // 标题文字
  descriptionText: PropTypes.string,    // 描述文字

  titleComponent: PropTypes.node,       // 标题插槽
  descriptionComponent: PropTypes.node, // 描述插槽
  stepComponent: PropTypes.node,        // 自定义步骤插槽

  parent: PropTypes.shape({           // 外层元素传入的值
    currentIndex: PropTypes.number,
    space: PropTypes.number,
    process: PropTypes.number,
    isError: PropTypes.bool,
    isSimple: PropTypes.bool,
    isLast: PropTypes.bool,
  }),
};

export default Step;
