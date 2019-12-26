export default {

  setting: null,

  noNodeListNodeArr: [],

  /*
   * checkbox改变规则：
   * 初始化时：子节点的check优先级更高，如果没设置check，默认是false
   * isDisabled 只受自己的nodeList的状态影响，不会受父节点状态的影响，即使设置checkedAll，也不会收父节点的影响
   *
   * 状态说明：
   *         0：自己及子元素都没被选中，
   *         1：除disabled为true的节点外，子节点非全选（一种情况是全部选，另一种情况是选了一部分），
   *         2：除disabled为true的节点外，子节点全选，
   *         3：自己及子元素全被选中
   *
   * */

  /*
  * 自上而下改变状态
  * 更改各个节点的checkboxType
  * 并更新 noNodeListNodeArr 值
  * */
  initNodeCheckedUpToDown(node) {

    node.forEach(x => {
      if (x.nodeList && x.nodeList.length > 0) {
        x.nodeList.forEach(v => {
          if (!v.isDisabled) {
            v.isChecked = x.isChecked;
          }
        });
        this.initNodeCheckedUpToDown(x.nodeList);
      }
      else if (x.nodeList || x.nodeList.length === 0) {
        if (x.isChecked) {
          x.checkboxType = 3;
        } else {
          x.checkboxType = 0;
        }
        if (
          !this.noNodeListNodeArr.some(v => {
            return v.parent === x.parent;
          })
        ) {
          this.noNodeListNodeArr.push(x);
        }
      }
    });
  },

  /*
  * 自下而上改变状态
  * 更改各个节点的checkboxType
  * */
  checkedDownToUp(nodeList) {

    let nodeListArr = [];

    nodeList.forEach(x => {
      if (!x.parent) {
        return;
      }
      if (
        x.parent.nodeList.every(v => {
          return v.checkboxType === 0
        })
      ) {
        x.parent.checkboxType = 0;
      } else if (
        x.parent.nodeList.every(v => {
          return v.checkboxType === 3
        })
      ) {
        x.parent.checkboxType = 3;
      } else if (
        x.parent.nodeList.filter(v => !v.isDisabled).every(v => {
          return v.checkboxType === 3 || v.checkboxType === 2;
        })
      ) {
        x.parent.checkboxType = 2;
      } else {
        x.parent.checkboxType = 1;
      }

      if (
        !nodeListArr.some(v => {
          return v.parent === x.parent;
        })
      ) {
        nodeListArr.push(x.parent);
      }
    });

    nodeListArr.length > 0 ?
      this.checkedDownToUp(nodeListArr) : "";
  },

  /*
  * 判断当前选中框是否被选中
  * */
  getIsCheckboxSelected(item) {
    return item.checkboxType === 3;
  },

  /*
  * 初始化checkbox节点状态
  * */
  initCheckboxType(setting, noNodeListNodeArr) {

    this.setting = setting;

    this.noNodeListNodeArr = noNodeListNodeArr;

    if (!this.setting.viewSetting.isShowCheckBox) {
      return;
    }

    /*
    * checkboxOperate  数据初始化后对全部节点的checkbox进行修改
    * */
    if (this.setting.viewSetting.isCheckedAll) {
      this.setting.nodeList.forEach(x => {
        if (!x.isDisabled) {
          x.isChecked = true;
        }
      });
    }

    this.initNodeCheckedUpToDown(this.setting.nodeList);
    this.checkedDownToUp(this.noNodeListNodeArr);
  },

  /*
  * 当用户点击checkbox引发状态改变时
  * */
  changeCheckbox(setting, noNodeListNodeArr, item, callback) {

    this.setting = setting;

    this.noNodeListNodeArr = noNodeListNodeArr;

    if (!this.setting.viewSetting.isShowCheckBox) {
      return;
    }

    item.isChecked = item.checkboxType === 1 || item.checkboxType === 0;

    if (!!item.nodeList && item.nodeList.length > 0) {
      item.nodeList.forEach(x => {
        if (!x.isDisabled) {
          x.isChecked = item.isChecked;
        }
      });
      this.initNodeCheckedUpToDown(item.nodeList);
    } else {
      this.initNodeCheckedUpToDown([item]);
    }

    this.checkedDownToUp(this.noNodeListNodeArr);

    callback();
  },
};
