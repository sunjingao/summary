import React from 'react';
import PropTypes from "prop-types";
import Component from '../../Base/index';

class Textarea extends Component {

  constructor(props) {

    super(props);

    let value = this.props.value;

    this.state = {
      value: value,
    };

    this.params = {
      // textarea的样式
      styles: null,
    };

    this.initStyles(value);
  }

  static getDerivedStateFromProps(props, state) {

    if (props.value !== state.prevPropsValue) {

      return {
        prevPropsValue: props.value,
        value: props.value
      };
    }
    return null;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.initStyles(value);
      this.setState({});
    }
  }

  initStyles(value = this.state.value) {
    this.params.styles = this.processAutoSize(value);
  }

  // 内容改变时，触发高度调整函数。
  processAutoSize(value) {

    let styles = null;

    // 初始化配置
    this.props.calcStyles.init(
      this.props.width,
      this.props.lineHeight,
      this.props.fontSize,
      this.props.autosize,
    );

    if (typeof this.props.autosize === 'object') {
      styles = this.props.calcStyles.handleRange(value);
    }
    else if (this.props.autosize === true) {
      styles = this.props.calcStyles.handleAdaption(value);
    }
    else {
      styles = this.props.calcStyles.getDefauluStyles();
    }
    return styles;
  }

  // textarea 内容改变时触发
  onChange(value) {

    this.params.styles = this.processAutoSize(value);

    this.setState({value: value});

    this.props.onChange && this.props.onChange(value);
  }

  render() {
    return (
      <textarea
        className={this.className('v-textarea')}
        style={{
          ...this.style(),
          ...this.params.styles
        }}
        value={this.state.value}
        onChange={event => this.onChange(event.target.value)}
      />
    )
  }
}

Textarea.defaultProps = {
  placeholder: '请输入数据',
  width: 420,
  fontSize: '1rem',
  lineHeight: '1.5',
};

Textarea.propTypes = {
  value: PropTypes.string,                                           // 展示内容
  placeholder: PropTypes.string,                                     // placeholder 内容
  width: PropTypes.number,                                           // 组件宽度
  autosize: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]), // 高度范围
  fontSize: PropTypes.string,                                        // fontSize大小
  lineHeight: PropTypes.string,                                      // lineHeight 大小

  onChange: PropTypes.func,                                          // 输入内容改变时触发

  calcStyles: PropTypes.object,                                        // 提供获得对应样式的相关方法
};

export default Textarea;
