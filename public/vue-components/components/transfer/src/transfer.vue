<template>
    <div class="v-transfer">

        <div class="transferContent">
            <div class="title" @click="changeTitleSelected('left')">
                <v-checkbox
                    :isIndeterminate="getSelectedType('left')===1"
                    :value="getSelectedType('left')===2"
                >
                </v-checkbox>
                <div class="titleValue">{{optionsData.left.title}}</div>
                <div class="selectNum">
                    <span>{{settings.left.checkedNum}}</span>
                    <span>/</span>
                    <span>{{settings.left.amount}}</span>
                </div>
            </div>
            <template v-if="!optionsData.left || !optionsData.left.content || optionsData.left.content.length <= 0">
                <div class="noData">
                    暂无数据
                </div>
            </template>
            <template v-else>
                <ul class="v-hover-show-scrollbar content">
                    <li
                        v-for="item in optionsData.left.content"
                        :class="[item.disabled?'disabled':'']"
                        @click="changeItemSelect(item)"
                    >
                        <v-checkbox :value="item.checked"></v-checkbox>
                        <div class="contentValue" :class="[item.checked&&'checked',item.disabled&&'disabled']">
                            {{item.label}}
                        </div>
                    </li>
                </ul>
            </template>
        </div>

        <div class="transferIcon">
            <v-button
                type="primary"
                class="mb10"
                @click.native="doTransfer('right')"
                :disabled="getSelectedType('right')===0"
            >
                &#60; 到左边
            </v-button>
            <br/>
            <v-button
                type="primary"
                @click.native="doTransfer('left')"
                :disabled="getSelectedType('left')===0"
            >
                到右边 &#62;
            </v-button>
        </div>

        <div class="transferContent">
            <div class="title" @click="changeTitleSelected('right')">
                <v-checkbox
                    :isIndeterminate="getSelectedType('right')===1"
                    :value="getSelectedType('right')===2"
                >
                </v-checkbox>
                <div class="titleValue">
                    {{optionsData.right.title}}
                </div>
                <div class="selectNum">
                    <span>{{settings.right.checkedNum}}</span>
                    <span>/</span>
                    <span>{{settings.right.amount}}</span>
                </div>
            </div>
            <template v-if="!optionsData.right || !optionsData.right.content || optionsData.right.content.length <=0">
                <div class="noData">
                    暂无数据
                </div>
            </template>
            <template v-else>
                <ul class="v-hover-show-scrollbar content">
                    <li
                        v-for="item in optionsData.right.content"
                        :class="[item.disabled?'disabled':'']"
                        @click="changeItemSelect(item)"
                    >
                        <v-checkbox :value="item.checked"></v-checkbox>
                        <div class="contentValue" :class="[item.checked&&'checked',item.disabled&&'disabled']">
                            {{item.label}}
                        </div>
                    </li>
                </ul>
            </template>
        </div>

    </div>
</template>

<script>

  import '../css/transfer.scss';
  import deepClone from '../../../src/utils/deepClone';
  import vCheckbox from '../../checkbox/index.js';
  import vButton from '../../button/index.js';

  export default {

    name: 'v-transfer',

    components: {
      vCheckbox,
      vButton
    },

    props: {
      options: {
        required: true,
        type: Object
      },
    },

    data() {
      return {

        // 保证每个item中的key唯一且递增
        uniqueNum: 0,

        // options 复制，防止options被改变
        optionsData: null,

        // transfer 组件展示内容
        settings: this.resetSettings(),
      }
    },

    computed: {
      hasKey() {

        for (let leftOrRightObj of Object.values(this.options)) {

          for (let item of Object.values(leftOrRightObj.content)) {
            if (item.key !== undefined) {
              return true;
            }
          }
        }
        return false;
      },
    },

    methods: {

      resetSettings() {
        return deepClone(
          {
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
        );
      },

      resetOptionsData(opts) {

        let options = deepClone(opts);

        // 当存在无key的情况时的处理
        for (let leftOrRightIndex of Object.keys(options)) {

          let canCheckedNum = 0, checkedNum = 0, checkedNotDisabledNum = 0;

          this.settings[leftOrRightIndex].amount =
            options[leftOrRightIndex].content ? options[leftOrRightIndex].content.length : 0;

          options[leftOrRightIndex].content &&
          options[leftOrRightIndex].content.forEach(item => {

            !item.disabled && canCheckedNum++;

            item.checked && checkedNum++;

            item.checked && !item.disabled && checkedNotDisabledNum++;

            if (this.hasKey && item.key === undefined) {
              this.key = -Number.MAX_VALUE;
            } else if (!this.hasKey) {
              this.key = this.uniqueNum++;
            }
          });

          this.settings[leftOrRightIndex].canCheckedNum = canCheckedNum;
          this.settings[leftOrRightIndex].checkedNum = checkedNum;
          this.settings[leftOrRightIndex].checkedNotDisabledNum = checkedNotDisabledNum;
        }


        return this.optionsData = Object.assign({}, options);
      },

      // type:
      // 0：一个选中的都没有
      // 1：有选中，但不是所有的都被选中
      // 2：所有的都被选中
      getSelectedType(direction) {

        let item = this.settings[direction];

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
      },

      changeTitleSelected(direction) {

        let opts = this.optionsData;

        if (!opts ||
          !opts[direction] ||
          !opts[direction].content ||
          opts[direction].content.length === 0) {
          return;
        }

        let type = this.getSelectedType(direction);
        if (type === 2) {
          opts[direction].content.forEach(item => {
            if (!item.disabled) {
              item.checked = false;
            }
          });
        } else {
          opts[direction].content.forEach(item => {
            if (!item.disabled) {
              item.checked = true;
            }
          });
        }

        this.resetOptionsData(opts);

        this.emitChange();
      },

      changeItemSelect(item) {

        if (item.disabled) {
          return;
        }
        item.checked = !item.checked;

        this.resetOptionsData(this.optionsData);

        this.emitChange();
      },

      doTransfer(direction) {

        if (!this.getSelectedType(direction)) {
          return;
        }

        let selectedArr = [], selectIndexArr = [], opts = this.optionsData;

        opts[direction].content.forEach(
          (x, index) => {
            if (x.checked && !x.disabled) {
              x.checked = false;
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
        opts[addDirection].content.sort(function (a, b) {
          return a.key - b.key;
        });

        this.resetOptionsData(opts);

        this.emitChange();
      },

      emitChange() {
        this.$emit("change", this.optionsData);
      },
    },

    watch: {
      options: {
        deep: true,
        handler(val) {
          this.settings = this.resetSettings();
          this.resetOptionsData(val);
        },
      }
    },

    created() {
      this.resetOptionsData(this.options);
    },
  }
</script>
