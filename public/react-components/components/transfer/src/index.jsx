import React from 'react';
import PropTypes from "prop-types";
import deepClone from '../../../src/utils/deepClone';
import Component from '../../Base/index';
import Checkbox from '../../checkbox/index';
import Button from '../../button/index';

const TIP = {
    NODATATIP: '暂无数据',
    TOLEFTTIP: '到左边',
    TORIGHTTIP: '到右边',
  },
  GETDEFAULTSETTINGS = function () {
    return {
      // 左侧内容的配置
      left: {
        // 数据总数
        amount: 0,
        // 可以被选择的总数
        canCheckedNum: 0,
        // 已选择的总数
        checkedNum: 0,
        // 已选择的非disabled属性的总数
        checkedNotDisabledNum: 0,
      },
      // 右侧内容的配置
      right: {
        // 数据总数
        amount: 0,
        // 可以被选择的总数
        canCheckedNum: 0,
        // 已选择的总数
        checkedNum: 0,
        // 已选择的非disabled属性的总数
        checkedNotDisabledNum: 0,
      },
    }
  };

class Transfer extends Component {

  constructor(props) {

    super(props);

    this.state = {
      // 数据集合
      optionsData: deepClone(this.props.options),
      // 选中、被选中等的数据个数
      settings: this.resetSettings(this.props.options, GETDEFAULTSETTINGS()),
    };

    this.params = {
      uniqueKey: 0,
    };
  }

  // 是否自定义了key值
  hasKey() {
    for (let leftOrRightObj of Object.values(this.props.options)) {
      for (let item of Object.values(leftOrRightObj.content)) {
        if (item.key !== undefined) {
          return true;
        }
      }
    }
    return false;
  }

  // 设置setting
  resetSettings(opts, settings = this.state.settings) {

    let options = deepClone(opts), hasKey = this.hasKey();

    // 当存在无key的情况时的处理
    for (let leftOrRightIndex of Object.keys(options)) {

      let canCheckedNum = 0, checkedNum = 0, checkedNotDisabledNum = 0;

      settings[leftOrRightIndex].amount =
        options[leftOrRightIndex].content ? options[leftOrRightIndex].content.length : 0;

      options[leftOrRightIndex].content &&
      options[leftOrRightIndex].content.forEach(item => {

        !item.isDisabled && canCheckedNum++;

        item.isChecked && checkedNum++;

        item.isChecked && !item.isDisabled && checkedNotDisabledNum++;

        if (hasKey && item.key === undefined) {
          this.key = -Number.MAX_VALUE;
        } else if (!hasKey) {
          this.key = this.params.uniqueKey++;
        }
      });

      settings[leftOrRightIndex].canCheckedNum = canCheckedNum;
      settings[leftOrRightIndex].checkedNum = checkedNum;
      settings[leftOrRightIndex].checkedNotDisabledNum = checkedNotDisabledNum;
    }

    return settings;
  }

  // type:
  // 0：一个选中的都没有
  // 1：有选中，但不是所有的都被选中
  // 2：所有的都被选中
  getSelectedType(direction) {

    let item = this.state.settings[direction];

    if (
      item.amount === 0 ||
      item.canCheckedNum === 0 ||
      item.checkedNotDisabledNum === 0) {
      return 0
    }

    if (item.checkedNotDisabledNum < item.canCheckedNum) {
      return 1;
    }

    return 2;
  }

  // 数据有改变时
  emitChange() {
    this.props.onChange && this.props.onChange(this.state.optionsData);
  }

  // 移动
  onDoTransfer(direction) {

    if (this.getSelectedType(direction) === 0) {
      return;
    }

    let selectedArr = [], selectIndexArr = [], opts = this.state.optionsData;

    opts[direction].content.forEach(
      (x, index) => {
        if (x.isChecked && !x.isDisabled) {
          x.isChecked = false;
          selectedArr.push(x);
          selectIndexArr.push(index);
        }
      }
    );

    // 将要传递的数组从本序列中删除
    for (let selectIndex = selectIndexArr.length - 1; selectIndex >= 0; selectIndex--) {
      let spliceIndex = selectIndexArr[selectIndex];
      opts[direction].content.splice(spliceIndex, 1);
    }

    // 将要传递的数组接到另一边的content中，并排序
    let addDirection = direction === 'right' ? 'left' : 'right';
    opts[addDirection].content.push(...selectedArr);

    for (let directiveOpt of Object.keys(opts)) {
      opts[directiveOpt].content.sort(function (a, b) {
        return a.key - b.key;
      });
    }

    this.setState({
      optionsData: opts,
      settings: this.resetSettings(opts)
    });

    this.emitChange();
  }

  // 全选修改
  onChangeAllSelected(direction) {

    let opts = this.state.optionsData;

    if (!opts ||
      !opts[direction] ||
      !opts[direction].content ||
      opts[direction].content.length === 0) {
      return;
    }

    let type = this.getSelectedType(direction);
    if (type === 2) {
      opts[direction].content.forEach(item => {
        if (!item.isDisabled) {
          item.isChecked = false;
        }
      });
    } else {
      opts[direction].content.forEach(item => {
        if (!item.isDisabled) {
          item.isChecked = true;
        }
      });
    }

    this.setState({
      optionsData: opts,
      settings: this.resetSettings(opts)
    });

    this.emitChange();
  }

  // 单选修改
  onChangeItemSelect(item) {

    if (item.isDisabled) {
      return;
    }
    item.isChecked = !item.isChecked;

    this.setState({
      settings: this.resetSettings(this.state.optionsData)
    });

    this.emitChange();
  }

  render() {

    return (
      <div className={this.className('v-transfer')} style={this.style()}>

        <div className="v-transferContent">

          <div className="v-title" onClick={_ => this.onChangeAllSelected('left')}>
            <Checkbox
              isIndeterminate={this.getSelectedType('left') === 1}
              isChecked={this.getSelectedType('left') === 2}
            />
            <div className="v-titleValue">
              {this.state.optionsData && this.state.optionsData.left && this.state.optionsData.left.title || ''}
            </div>
            <div className="v-selectNum">
              <span>{this.state.settings.left.checkedNum}</span>
              <span>/</span>
              <span>{this.state.settings.left.amount}</span>
            </div>
          </div>

          {
            !this.state.optionsData.left || !this.state.optionsData.left.content || this.state.optionsData.left.content.length <= 0 ?
              <div className="v-noData">{TIP.NODATATIP}</div> :
              <ul className="v-hover-show-scrollbar v-ul-content">
                {
                  this.state.optionsData.left.content.map(
                    (item, index) =>
                      <li
                        key={new Date().getTime() + index}
                        className={`${item.isDisabled ? 'v-disabled' : ''}`}
                        onClick={_ => this.onChangeItemSelect(item)}
                      >
                        <Checkbox isChecked={item.isChecked} isDisabled={item.isDisabled}/>
                        <div
                          className={`v-contentValue ${item.isChecked && 'v-checked' || ''} ${item.isDisabled && 'v-disabled' || ''}`}>
                          {item.label}
                        </div>
                      </li>
                  )
                }
              </ul>
          }
        </div>

        <div className="v-transferIcon">
          <Button
            className="v-mb10"
            type="primary"
            isDisabled={this.getSelectedType('right') === 0}
            onClick={_ => this.onDoTransfer('right')}
          >
            &#60; {TIP.TOLEFTTIP}
          </Button>
          <br/>
          <Button
            type="primary"
            isDisabled={this.getSelectedType('left') === 0}
            onClick={_ => this.onDoTransfer('left')}
          >
            {TIP.TORIGHTTIP} &#62;
          </Button>
        </div>

        <div className="v-transferContent">

          <div
            className="v-title"
            onClick={_ => this.onChangeAllSelected('right')}>
            <Checkbox
              isIndeterminate={this.getSelectedType('right') === 1}
              isChecked={this.getSelectedType('right') === 2}
            />
            <div className="v-titleValue">
              {this.state.optionsData.right.title}
            </div>
            <div className="v-selectNum">
              <span>{this.state.settings.right.checkedNum}</span>
              <span>/</span>
              <span>{this.state.settings.right.amount}</span>
            </div>
          </div>

          {
            !this.state.optionsData.right || !this.state.optionsData.right.content || this.state.optionsData.right.content.length <= 0 ?
              <div className="v-noData">
                {TIP.NODATATIP}
              </div> :
              <ul className="v-hover-show-scrollbar v-ul-content">
                {
                  this.state.optionsData.right.content.map(
                    (item, index) =>
                      <li
                        key={new Date().getTime() + index}
                        className={`${item.isDisabled ? 'v-disabled' : ''}`}
                        onClick={_ => this.onChangeItemSelect(item)}
                      >
                        <Checkbox isChecked={item.isChecked} isDisabled={item.isDisabled}/>
                        <div
                          className={`v-contentValue ${item.isChecked && 'v-checked' || ''} ${item.isDisabled && 'v-disabled' || ''}`}>
                          {item.label}
                        </div>
                      </li>
                  )
                }
              </ul>
          }
        </div>

      </div>
    );
  }
}

Transfer.defaultProps = {
  options: null,
};

Transfer.propTypes = {
  options: PropTypes.object,
  onChange: PropTypes.func,
};

export default Transfer;
