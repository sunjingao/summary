import React from 'react';
import PropTypes from "prop-types";
import memoize from 'memoize-one';
import Component from '../../Base/index';
import Input from '../../input/index.js';
import clickoutside from '../../../src/utils/clickoutside';

class Autocomplete extends Component {

  constructor(props) {

    super(props);

    this.state = {
      popperData: [],          // 下拉框中展示的内容集合
      value: this.props.value, // 输入框中的内容
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
        value: props.value,
      }
    }
    return null;
  }

  componentDidMount() {

    clickoutside.bind(this.ref.root.current, this.toggle.bind(this));

    this.params.popperHandler = new Popper(
      this.ref.root.current,
      this.ref.popper.current,
      {
        placement: 'bottom-start',
        modifiers: {
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

  // 展示 popper
  showPopper() {
    this.params.popperHandler.show();
    this.ref.popperContent.current.scrollTop = 0;
  }

  // 隐藏 popper
  hidePopper() {
    this.params.popperHandler.hide();
    this.ref.input.current && this.ref.input.current.blurHandle();
  }

  // 点击事件触发，遮蔽罩控制
  toggle(sign) {
    sign && this.hidePopper();
  }

  // 聚焦或input数据改变时执行的操作
  onQuery(value) {
    this.props.onQuery && this.props.onQuery(
      value,
      array => {
        this.setState({popperData: array});
        setTimeout(_ => array.length > 0 && this.showPopper());
      }
    )
  }

  // 点击item时执行的操作
  onClickOption(event) {

    let item = this.state.popperData[event.triggerIndex];

    this.setState({value: item.label});

    this.hidePopper();

    this.props.onSelect && this.props.onSelect(item);
  }

  // 获得popper展示的内容
  renderItemComponents() {
    return (this.state.popperData || []).map(
      (item, index) =>
        <div key={index} onClick={event => (event.triggerIndex = index)}>
          {
            this.props.itemComponent ?
              React.cloneElement(
                this.props.itemComponent,
                {
                  item: item,
                  index: index
                }
              ) :
              <div className="v-popper-item">{item.label}</div>
          }
        </div>
    );
  }

  render() {

    return (

      <div ref={this.ref.root} className={this.className('v-autocomplete')} style={this.style()}>

        <Input
          ref={this.ref.input}
          value={this.state.value}
          onFocus={_ => this.onQuery(this.state.value)}
          onChange={val => this.onQuery(val)}
          frontComponent={this.props.frontComponent}
          behindComponent={this.props.behindComponent}
        />

        <div
          ref={this.ref.popper}
          className="v-popper"
          style={{lineHeight: `${this.props.itemHeight}px`}}
        >

          <div
            ref={this.ref.popperContent}
            className="v-popper-content v-hover-show-scrollbar"
            onClick={e => this.onClickOption(e)}
          >
            {this.renderItemComponents()}
          </div>

          <div className="v-popper-arrow"/>
        </div>

      </div>
    );
  }
}

Autocomplete.defaultProps = {
  itemHeight: 40,
};

Autocomplete.propTypes = {
  value: PropTypes.string,         // 输入框的值
  itemHeight: PropTypes.number,    // popper的item的高度
  itemComponent: PropTypes.node,   // 自定义展示item
  frontComponent: PropTypes.node,  // input组件前置插槽
  behindComponent: PropTypes.node, // input组件后置插槽

  onQuery: PropTypes.func,         // 当需要展示下拉框时，回调的方法
  onSelect: PropTypes.func,        // 选中时触发
};

export default Autocomplete;
