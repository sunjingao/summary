import React from 'react';
import PropTypes from "prop-types";
import Checkbox from '../../checkbox/index'
import Component from '../../Base/index';

class TreeNode extends Component {

  // 点击文字时触发的事件
  onClickWords(item, event) {

    event && event.stopPropagation();

    if (item.isDisabled) {
      return;
    }

    if (item.isParent && !this.props.isParentLevelTriggerSelected) {
      item.isExpandNode = !item.isExpandNode;
      this.setState({});
    }
    else {
      this.props.selectItem(item);
    }
  }

  // 点击空白处触发的事件
  onClickBlank(item, event) {

    event.stopPropagation();

    this.onClickWords(item, event);
  }

  // 点击check多选框时改变状态
  onCheckChange(item, event) {

    event.stopPropagation();

    if (item.isDisabled) {
      return;
    }

    this.props.changeCheckbox(item);
  }

  render() {

    let children =
      this.props.nodeData.map(
        (item, index) => {

          return <ul key={new Date().getTime() + index} className="v-tree-ul">
            {
              this.props.isShowComponent ?
                React.cloneElement(
                  this.props.nodeComponent,
                  {
                    index: index,
                    item: item,
                    nodeData: this.props.nodeData,
                    level: this.props.level,
                    hasCheckbox: this.props.hasCheckbox,
                    isShowComponent: this.props.isShowComponent,
                    isParentLevelTriggerSelected: this.props.isParentLevelTriggerSelected,
                    isChecked: this.props.getIsCheckboxSelected(item),
                    style: {paddingLeft: this.props.level * 20 + 'px'},
                    className: `
                      v-tree-li
                      ${item && item.isSelected ? 'v-selected' : ''}
                      ${item && item.isDisabled ? 'v-disabled' : ''}
                    `,
                    onClickWords: this.onClickWords.bind(this),
                    onClickBlank: this.onClickBlank.bind(this),
                    onCheckChange: this.onCheckChange.bind(this),
                  }
                )
                :
                <li
                  className={`
                     v-tree-li
                     ${item.isSelected ? 'v-selected' : ''}
                     ${item.isDisabled ? 'v-disabled' : ''}
                 `}
                  style={{paddingLeft: this.props.level * 20 + 'px'}}
                  onClick={event => this.onClickBlank(item, event)}
                >
                  {
                    item.isParent &&
                    <i
                      className={`iconfont icon-down v-icon-direction ${!item.isExpandNode && 'v-parent-not-expand' || ''}`}
                      style={{left: (this.props.level * 20 - 16 - 2) + 'px'}}
                    />
                  }
                  {
                    this.props.hasCheckbox &&
                    <Checkbox
                      isIndeterminate={item.checkboxType === 1 || item.checkboxType === 2}
                      isChecked={this.props.getIsCheckboxSelected(item)}
                      onChange={(sign, event) => this.onCheckChange(item, event)}
                      onPartCheckChange={event => this.onCheckChange(item, event)}
                    />
                  }
                  <a className="a-link" onClick={event => this.onClickWords(item, event)}>{item.value}</a>
                </li>
            }

            {
              item.nodeList && item.nodeList.length > 0 && item.isParent && item.isExpandNode &&
              <TreeNode
                level={this.props.level + 1}
                hasCheckbox={this.props.hasCheckbox}
                isShowComponent={this.props.isShowComponent}
                isParentLevelTriggerSelected={this.props.isParentLevelTriggerSelected}
                nodeData={item.nodeList}
                getIsCheckboxSelected={this.props.getIsCheckboxSelected}
                selectItem={this.props.selectItem}
                changeCheckbox={this.props.changeCheckbox}
                nodeComponent={this.props.nodeComponent}
              />
            }
          </ul>
        }
      );

    return (
      <div className={this.className('v-tree-node')} style={this.style()}>
        {children}
      </div>
    )
  }
}


TreeNode.propTypes = {
  level: PropTypes.number,                      // 当前层级
  hasCheckbox: PropTypes.bool,                  // 是否展示多选框
  isShowComponent: PropTypes.bool,              // 是否展示自定义组件
  isParentLevelTriggerSelected: PropTypes.bool, // 是否含有子节点的节点点击文字会选中
  nodeData: PropTypes.array,                    // 当前层展示的数组集合
  getIsCheckboxSelected: PropTypes.func,        // 获取checkbox是否处于选中状态
  selectItem: PropTypes.func,                   // 选中节点时的处理
  changeCheckbox: PropTypes.func,               // 当用户点击checkbox引发状态改变时的操作
  nodeComponent: PropTypes.node,                // 自定义节点展示组件
};

export default TreeNode;