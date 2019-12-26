import React from 'react';
import PropTypes from "prop-types";
import Component from '../../Base/index';
import Input from '../../input/index';
import CascaderAuto from './cascader-auto';
import clickoutside from '../../../src/utils/clickoutside';
import deepClone from "../../../src/utils/deepClone.js"

class Cascader extends Component {

  constructor(props) {

    super(props);

    this.state = {
      // input 展示的内容
      showValue: '',
      // 提供给auto组件的tip数组内容
      itemsArray: [],
      // 当前是否展示popper
      isShowPopper: false,
    };

    this.params = {
      lastSelectedArray: [],  // 上次选中的内容，本次选中时清掉上次选中的痕迹
      popperHandler: null, // popper 句柄
    };

    this.ref = {
      root: React.createRef(),
      popper: React.createRef(),
    };

    this.state.itemsArray = this.getInitItemsArray();
    this.state.showValue = this.handlerShowValue();

    this.setLastSelected();
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

  // 初始化被选中的数组集合,用于渲染展示
  getInitItemsArray() {

    let itemsArray = [deepClone(this.props.tipsArray)], item = itemsArray && itemsArray[0], index = -1;

    while (
      item && (index = item.findIndex(obj => obj.isSelected)) !== -1
      ) {
      let children = item[index].children;
      if (children) {
        children && itemsArray.push(
          item = (item[index].children)
        );
      } else {
        break;
      }
    }

    return itemsArray;
  }

  // 处理 showValue
  handlerShowValue() {

    let val = this.state.itemsArray;

    let selectedArray = [];

    for (let item of Object.values(val)) {
      for (let value of Object.values(item)) {
        if (value.isSelected) {
          selectedArray.push(value);
        }
      }
    }

    if (this.props.isShowAllLevels) {
      return selectedArray.map(item => item.label).join(' / ');
    } else {
      let lastChild = selectedArray[selectedArray.length - 1];
      if (lastChild && (!lastChild.children || lastChild.children.length === 0)) {
        return lastChild.label;
      }
    }
  }

  // 设置当前选中内容的集合
  setLastSelected() {

    let selectedArray = [], itemsArray = this.state.itemsArray;

    for (let item of Object.values(itemsArray)) {
      for (let value of Object.values(item)) {
        if (value.isSelected) {
          selectedArray.push(value);
        }
      }
    }

    this.params.lastSelectedArray = selectedArray;
  }

  // 获得当前选中内容的集合
  getCurrentSelected() {

    let selectedArray = [], itemsArray = this.state.itemsArray;

    for (let item of Object.values(itemsArray)) {
      for (let value of Object.values(item)) {
        if (value.isSelected) {
          selectedArray.push(value);
        }
      }
    }
    return selectedArray;
  }

  // 当被选中时，有over属性代表选中，所以将over属性为true的item，设置其selected属性为true
  setSelectedAndCleanOver(itemsArray, item) {

    // 由于最后一级没有设置over属性，所以在这设置selected属性
    for (let value of Object.values(itemsArray[itemsArray.length - 1])) {
      value.isSelected = value === item;
    }

    for (let item of Object.values(itemsArray)) {

      let hasOver = item.some(val => val.over);

      for (let value of Object.values(item)) {
        hasOver && (value.isSelected = !!value.over);
        value.over = false;
      }
    }
  }

  // 将被选中的item原样传递上去
  emitSelected(item) {

    if (item.children && item.children.length > 0) {
      return;
    }

    let itemsArray = this.state.itemsArray[0], tipsArray = this.props.tipsArray, selectedTemp = {}, selectedObj = {};

    while (true) {

      for (let [key, value] of Object.entries(itemsArray)) {
        if (value.isSelected) {
          selectedTemp = itemsArray[key];
          selectedObj = tipsArray[key];
          break;
        }
      }
      if (selectedTemp.children && selectedTemp.children.length > 0) {
        itemsArray = selectedTemp.children;
        tipsArray = selectedObj.children;
      } else {
        break;
      }
    }

    this.props.onSelect && this.props.onSelect(selectedObj);
  }

  // 清除上一步留下的selected痕迹
  clearOthersSelected() {

    let lastSelectedArray = this.params.lastSelectedArray, currentSelectedArray = this.getCurrentSelected();

    for (let value of Object.values(lastSelectedArray)) {
      if (!currentSelectedArray.includes(value)) {
        value.isSelected = false;
      }
    }
  }

  // 选中
  cascaderSelected(item) {

    this.setSelectedAndCleanOver(this.state.itemsArray, item);

    this.emitSelected(item);

    this.clearOthersSelected();

    this.setLastSelected();

    if (!item.children || item.children.length === 0) {
      this.setState({
        showValue: this.handlerShowValue()
      });
    }

    // 待 clickoutside 触发后再关闭浮层
    setTimeout(
      _ => this.hidePopper()
    )
  }

  // 将上一次被选中的item的selected置为false
  clearItemOver(itemArray) {
    for (let index = 0; index < itemArray.length; index++) {
      for (let value of Object.values(itemArray[index])) {
        value.over = false;
      }
    }
  }

  // over后，设置itemsArray集合
  setOverArray(itemsArray, item) {

    item.over = true;

    // 添加展示内容
    itemsArray.push(item.children);

    this.setState({
      itemsArray: itemsArray
    });
  }

  // 处理over事件
  cascaderOver(item, itemIndex) {

    this.clearItemOver(this.state.itemsArray.slice(itemIndex));

    this.setOverArray(this.state.itemsArray.slice(0, itemIndex + 1), item);

    setTimeout(
      _ => {
        this.params.popperHandler.update()
      }
    );
  }

  // 初始化数据
  initData() {

    this.state.itemsArray = this.getInitItemsArray();

    this.state.showValue = this.handlerShowValue();

    this.setLastSelected();

    this.setState({});
  }

  showPopper() {

    if (this.state.isShowPopper) {
      return;
    }

    this.setState({
      isShowPopper: true
    });

    this.params.popperHandler.show();
  }

  hidePopper() {

    if (!this.state.isShowPopper) {
      return;
    }

    this.setState({
      isShowPopper: false
    });

    this.params.popperHandler.hide();
  }

  // 清除input框中的内容
  onClear() {

    this.props.onSelect && this.props.onSelect();

    this.initData();
  }

  render() {

    let popperContent = this.state.itemsArray.map(
      (item, index) => React.cloneElement(
        <CascaderAuto/>,
        {
          key: index,
          index: index,
          item: item,
          itemWidth: this.props.itemWidth,
          popperMaxHeight: this.props.popperMaxHeight,
          itemHeight: this.props.itemHeight,
          componentName: this.props.componentName,
          isHoverTrigger: this.props.isHoverTrigger,
          cascaderSelected: this.cascaderSelected.bind(this),
          cascaderOver: this.cascaderOver.bind(this)
        }
      )
    );

    return (

      <div ref={this.ref.root} className={this.className('v-cascader')} style={this.style()}>

        <Input
          readonly
          placeholder={this.props.placeholder}
          value={this.state.showValue}
          width={this.props.width}
          height={this.props.height}
          isCleanable={this.props.isCleanable}
          onClear={this.onClear.bind(this)}
          onClick={this.showPopper.bind(this)}
          behindComponent={
            <span
              className="v-select-direction"
              style={{display: !this.props.isCleanable || this.props.isCleanable && !this.state.showValue ? 'inline-block' : 'none'}}
            >
              <i className={`iconfont icon-down ${this.state.isShowPopper && 'v-up' || ''}`}/>
            </span>
          }
        />

        <div ref={this.ref.popper} className="v-popper">
          <div className="v-panel v-popper-content">
            {popperContent}
          </div>
          <div className="v-popper-arrow"/>
        </div>
      </div>
    );
  }
}

Cascader.defaultProps = {
  tipsArray: [],
  isShowAllLevels: true,
  width: 170,
  height: 40,
  popperMaxHeight: 210,
  itemWidth: 150,
  itemHeight: 30,
  placeholder: '请选择',
};

Cascader.propTypes = {
  tipsArray: PropTypes.array,        // 要展示的内容
  isHoverTrigger: PropTypes.bool,    // 是否hover触发
  isCleanable: PropTypes.bool,       // 是否可清空
  isShowAllLevels: PropTypes.bool,   // 是否只展示最后一级
  isDisabled: PropTypes.bool,        // tipArray的中的item是否禁止选中
  isSelected: PropTypes.bool,        // tipArray的中的item是否默认选中
  width: PropTypes.number,           // input的宽度
  height: PropTypes.number,          // input的高度
  popperMaxHeight: PropTypes.number, // 下拉框的最大高度
  itemWidth: PropTypes.number,       // 自动提示组件中每条数据的宽度
  itemHeight: PropTypes.number,      // 自动提示组件中每条数据的高度
  placeholder: PropTypes.string,     // 默认展示值
  componentName: PropTypes.node,     // 自定义组件
};

export default Cascader;
