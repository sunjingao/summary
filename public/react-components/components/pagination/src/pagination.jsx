import React from 'react';
import PropTypes from "prop-types";
import Component from '../../Base/index';
import deepClone from "../../../src/utils/deepClone.js"
import Input from '../../input/index';
import Select from '../../select/index';

class Index extends Component {

  constructor(props) {

    super(props);

    this.state = {
      // 当前组件使用的页面配置
      settings: {
        totalPageNum: 0, // 总页面数
        itemArrays: [], // 要展示的内容数组
      },
    };

    this.params = {

      // 使用组件的大小设置
      componentsSize: {
        select: {
          width: 70,
          height: 30,
        },
        input: {
          width: 70,
          height: 30,
        },
      },

      // 点击向左或向右的每步幅度配置
      stepSettings: {
        leftStep: -1, // 点击向左，每步的幅度
        rightStep: 1, // 点击向右，每步的幅度
        leftSteps: -5, // 点击快速向左，每步的幅度
        rightSteps: 5, // 点击快速向右，每步的幅度
      },

      // 默认配置
      defaultSettings: {
        // ['prev', 'content', 'next', 'sizes', 'jumper','total'],  所有组件
        layout: ['prev', 'content', 'next'], // 组件排列顺序
        isButton: false, // 是否展示button样式
        total: 0, // 总条数
        currentPage: 0, // 当前页数
        pageSizeSelectedValue: 10, // 默认选中条数
        // 每页条数控制
        pageSizeOption: [
          {value: 10, label: 10},
          {value: 20, label: 20},
          {value: 30, label: 30}
        ]
      },
    };

    this.state.settings = this.getInitSettings();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.options !== this.props.options) {
      this.setState({
        settings: this.getInitSettings()
      });
    }
  }

  // 判断左右两个改变选中内容的图标是否禁止操作
  isDisabled(direction) {

    // 不存在时，需要退出；因为首次render后才执行，componentDidMount
    if (!this.state.settings.itemArrays) {
      return false;
    }

    if (!!this.state.settings.totalPageNum) {
      if (direction === 'left') {
        let selected = this.state.settings.itemArrays.filter(x => x.selected);
        return selected.length > 0 && selected[0].value === 0;
      } else {
        let selected = this.state.settings.itemArrays.filter(x => x.selected);
        return selected.length > 0 && selected[0].value === this.state.settings.totalPageNum - 1;
      }
    }
  }

  // 设置总页数
  setTotalPageNum() {
    return Math.ceil(this.state.settings.total / this.state.settings.pageSizeSelectedValue);
  }

  // 初始化
  getInitSettings() {

    this.state.settings = deepClone(
      Object.assign(
        {},
        this.params.defaultSettings,
        this.state.settings,
        this.props.options,
      )
    );

    this.state.settings.totalPageNum = this.setTotalPageNum();

    return this.props.getSettings.initItemArrays(this.state.settings);
  }

  // 下拉框改变时像外层触发事件
  emitSelectChange() {
    this.props.onSelectChange && this.props.onSelectChange(this.state.settings.pageSizeSelectedValue);
  }

  // page页面改变时像外层触发事件
  emitPageChange() {
    this.props.onPageChange && this.props.onPageChange(this.state.settings.currentPage);
  }

  // 点击某个元素时的操作
  onChangeSelect(item) {

    this.setState(
      {
        settings: this.props.getSettings.initItemArrays(Object.assign({}, this.state.settings, {currentPage: item.value}))
      },
      _ => {
        this.emitPageChange();
      }
    );
  }

  // 移动元素
  onMove(step) {

    if (
      this.state.settings.totalPageNum <= 0 ||
      (this.state.settings.currentPage === 0 && step < 0) ||
      (this.state.settings.currentPage === this.state.settings.totalPageNum - 1 && step > 0)
    ) {
      return;
    }

    this.setState(
      {
        settings: this.props.getSettings.initItemArrays(
          Object.assign({}, this.state.settings, {
            currentPage: this.state.settings.currentPage + step
          })
        )
      },
      _ => {
        this.emitPageChange();
      }
    );
  }

  // 下拉框改变时的操作
  onSelectChange(value) {

    this.state.settings = Object.assign(
      {},
      this.state.settings,
      {
        currentPage: 0,
        pageSizeSelectedValue: value,
      }
    );

    this.state.settings.totalPageNum = this.setTotalPageNum();

    this.setState(
      {
        settings: this.props.getSettings.initItemArrays(this.state.settings)
      },
      _ => {
        this.emitPageChange();
        this.emitSelectChange();
      }
    );
  }

  // 当输入框发生失去焦点或回车事件时，触发
  onChangeCurrentPage(event) {

    let value = event.target.value.trim();

    if (value >= this.state.settings.totalPageNum || value < 0) {
      this.setState({});
      return;
    }

    this.setState(
      {
        settings: this.props.getSettings.initItemArrays(
          Object.assign(
            {},
            this.state.settings,
            {
              currentPage: value - 1
            }
          )
        )
      },
      _ => {
        this.emitPageChange();
      }
    );
  }

  render() {

    let components = {

      prev:
        <div
          key={new Date().getTime() + 1}
          className={`v-prev ${this.isDisabled('left') ? 'v-disabled' : ''} ${this.state.settings.isButton && 'v-btns'}`}
          onClick={_ => this.onMove(this.params.stepSettings.leftStep)}
        >&lt;</div>,

      content:
        <ul
          key={new Date().getTime() + 2}
          className="v-content"
        >
          {
            this.state.settings.itemArrays.map(
              (item, index) =>
                <li
                  key={new Date().getTime() + index}
                  className={`
                    ${item.selected ? 'v-selected' : ''}
                    ${this.state.settings.isButton && 'v-btns' || ''}
                  `}
                >
                  {
                    item.value === 'left' ?
                      <div className="v-leftIcon" onClick={_ => this.onMove(this.params.stepSettings.leftSteps)}/> :
                      item.value === 'right' ?
                        <div className="v-rightIcon" onClick={_ => this.onMove(this.params.stepSettings.rightSteps)}/> :
                        <div className="v-value-content" onClick={_ => this.onChangeSelect(item)}>{item.value + 1}</div>
                  }
                </li>
            )
          }
        </ul>,

      next:
        <div
          key={new Date().getTime() + 3}
          className={`v-next ${this.isDisabled('right') ? 'v-disabled' : ''}`}
          onClick={_ => this.onMove(this.params.stepSettings.rightStep)}
        >&gt;</div>,

      sizes:
        <Select
          key={new Date().getTime() + 4}
          className="v-sizes"
          value={this.state.settings.pageSizeSelectedValue}
          width={this.params.componentsSize.select.width}
          height={this.params.componentsSize.select.height}
          onClickOption={value => this.onSelectChange(value)}
        >
          {
            (this.state.settings.pageSizeOption || []).map(
              (item, index) =>
                <Select.Option
                  key={index}
                  label={item.label}
                  value={item.value}
                  disabled={item.disabled}
                />
            )
          }
        </Select>,

      jumper:
        <Input
          key={new Date().getTime() + 5}
          className="v-jumper"
          isEnableEnter
          value={this.state.settings.currentPage + 1}
          width={this.params.componentsSize.input.width}
          height={this.params.componentsSize.input.height}
          onBlur={this.onChangeCurrentPage.bind(this)}
          onEnter={this.onChangeCurrentPage.bind(this)}
        />,

      total:
        <span key={new Date().getTime() + 6} className="v-total">
          共{this.state.settings.total}条
        </span>
    };

    return (
      <div className={this.className("v-pagination")} style={this.style()}>
        {
          (this.state.settings.layout || []).map(
            item => components[item]
          )
        }
      </div>
    )
  }
}

Index.propTypes = {
  options: PropTypes.object,      // 配置
  getSettings: PropTypes.object,  // 获得展示内容对象
  onSelectChange: PropTypes.func, // 下拉框改变时触发
  onPageChange: PropTypes.func,   // page页面改变时触发
};

export default Index;
