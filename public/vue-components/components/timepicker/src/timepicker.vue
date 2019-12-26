<template>

    <div
        ref="reference"
        class="v-timepicker"
        v-click-outside="clickOutside"
        @keydown.enter="enterConfirm"
        @keydown.esc="enterCancel"
        :style="{width:inputWidth+'px', height:height+'px'}"
    >

        <v-input
            readonly
            :value="showValue"
            :width="inputWidth"
            :height="height"
            :cleanable="cleanable"
            :placeholder="showPlaceholder"
            @clean="clean"
            @keydown.native.up.prevent
            @keydown.native.down.prevent
        >
            <span class="iconfont icon-time v-timepicker-front" slot="front"></span>
        </v-input>

        <!--自动提示组件-->
        <timeauto
            v-show="isShowPopper"
            ref="timeauto"
            :showEndTime="showEndTime"
            :itemHeight="itemHeight"
            :timeRange="timeRange"
            :changeTime="changeTime"
            :locationRelyElement="this"
            @autoClose="autoClose"
            @autoComplete="autoComplete"
        ></timeauto>

    </div>
</template>

<script>

  import '../css/timepicker.scss';
  import clickOutside from "../../../src/directives/clickoutside"
  import timeauto from "./timeauto.vue"
  import deepClone from "../../../src/utils/deepClone"

  export default {

    name: 'v-timepicker',

    directives: {
      'clickOutside': clickOutside
    },

    components: {
      timeauto: timeauto
    },

    props: {
      width: {
        required: false,
        type: Number,
      },
      height: {
        required: false,
        type: Number,
        default: 40
      },
      // 时间范围
      timeRange: {
        required: false,
        type: Object
      },
      // 是否展示结束时间
      showEndTime: {
        required: false,
        type: Boolean
      },
      // 说明：默认展示文字
      placeholder: {
        required: false,
        type: String,
        default: '选择时间'
      },
      // 说明：默认展示文字
      frontPlaceholder: {
        required: false,
        type: String,
        default: '起始时间'
      },
      // 说明：默认展示文字
      behindPlaceholder: {
        required: false,
        type: String,
        default: '结束时间'
      },
      // 说明：是否清空输入框
      cleanable: {
        required: false,
        type: Boolean,
        default: false
      },
      // 自动提示组件中每条数据的高度
      itemHeight: {
        required: false,
        type: Number,
        default: 30
      },
    },

    data() {

      return {
        // popper 句柄
        popperHandler: null,
        isShowPopper: false,
        // 用于控制输入框展示和自动提示筛选的内容
        showValue: '',
        // input的宽度
        inputWidth: this.width ? this.width : this.showEndTime ? 200 : 170,
        defaultTime: {
          startTime: {
            hour: '00',
            minute: '00',
            second: '00'
          },
          endTime: {
            hour: '00',
            minute: '00',
            second: '00'
          }
        },
        // 被选中的时间
        changeTime: {
          startTime: {
            hour: '',
            minute: '',
            second: ''
          },
          endTime: {
            hour: '',
            minute: '',
            second: ''
          }
        },
      }
    },

    computed: {
      showPlaceholder() {
        return this.showEndTime ?
          `${this.frontPlaceholder} - ${this.behindPlaceholder}` : this.placeholder;
      }
    },

    methods: {

      clickOutside(event, sign) {
        sign ? this.hidePopper() : this.showPopper();
      },

      // 点击取消
      autoClose() {
        this.hidePopper();
      },

      // 确认选中时
      autoComplete(obj) {

        this.$emit("timePickerSelect", obj);

        if (this.showEndTime) {
          this.changeTime.endTime.hour = obj.endTime.hour;
          this.changeTime.endTime.minute = obj.endTime.minute;
          this.changeTime.endTime.second = obj.endTime.second;
        }

        this.changeTime.startTime.hour = obj.startTime.hour;
        this.changeTime.startTime.minute = obj.startTime.minute;
        this.changeTime.startTime.second = obj.startTime.second;

        this.setInputValue();

        this.hidePopper();
      },

      // 回车时的操作
      enterConfirm() {

        if (!this.isShowPopper) {
          this.showPopper();
        } else {
          this.$refs.timeauto.confirm();
        }
      },

      // esc键时的操作
      enterCancel() {
        this.$refs.timeauto.cancel();
      },

      // 点击删除符号
      clean() {

        this.hidePopper();

        this.cleanChangeTime();

        this.clearInputValue();

        this.$emit(
          "timePickerSelect",
          this.showEndTime ? this.changeTime : this.changeTime.startTime
        );
      },

      // 将一位长度的字符串转为两位长度
      toTwoLengthString(value) {
        if (value === null && value === undefined && value === "") {
          return "";
        } else {
          return value.toString().length < 2 ? `0${value}` : value;
        }
      },

      // 输入框中的内容
      setInputValue() {

        let inputShowTimeArr = [];

        for (let startOrEndObj of Object.values(this.changeTime)) {
          inputShowTimeArr.push(
            this.toTwoLengthString(startOrEndObj.hour) + ':' +
            this.toTwoLengthString(startOrEndObj.minute) + ':' +
            this.toTwoLengthString(startOrEndObj.second)
          );
        }

        this.showValue = inputShowTimeArr[0] + (this.showEndTime ? ` - ${inputShowTimeArr[1]}` : "");
      },

      clearInputValue() {
        this.showValue = '';
      },

      // 初始化changeTime这个对象
      initChangeTime() {

        let val = this.timeRange;
        this.changeTime.startTime.hour = val.default && val.default.startTime && this.toTwoLengthString(String(val.default.startTime.hour))
          || this.defaultTime.startTime.hour;
        this.changeTime.startTime.minute = val.default && val.default.startTime && this.toTwoLengthString(String(val.default.startTime.minute))
          || this.defaultTime.startTime.minute;
        this.changeTime.startTime.second = val.default && val.default.startTime && this.toTwoLengthString(String(val.default.startTime.second))
          || this.defaultTime.startTime.second;

        this.changeTime.endTime.hour = val.default && val.default.endTime && this.toTwoLengthString(String(val.default.endTime.hour))
          || this.defaultTime.endTime.hour;
        this.changeTime.endTime.minute = val.default && val.default.endTime && this.toTwoLengthString(String(val.default.endTime.minute))
          || this.defaultTime.endTime.minute;
        this.changeTime.endTime.second = val.default && val.default.endTime && this.toTwoLengthString(String(val.default.endTime.second))
          || this.defaultTime.endTime.second;
      },

      setInitInputValue() {

        this.timeRange.default ? this.setInputValue() : this.clearInputValue()
      },

      // 将 changeTime 这个对象设置为0时0分0秒
      cleanChangeTime() {
        // 被选中的时间
        this.changeTime = deepClone(this.defaultTime);
      },

      // 展示 popper
      showPopper() {

        if (this.isShowPopper) {
          return;
        }

        this.isShowPopper = true;
        this.popperHandler.show();
        this.$refs.timeauto.scrollToSelect();
      },

      // 隐藏popper
      hidePopper() {

        if (!this.isShowPopper) {
          return;
        }

        this.isShowPopper = false;
        this.popperHandler.hide();
      },

    },

    watch: {

      "timeRange.default": {
        deep: true,
        immediate: true,
        handler: function () {

          this.initChangeTime();

          this.setInitInputValue();
        },
      },
    },

    mounted() {

      let reference = this.$refs['reference'],
        popper = this.$children[1].$el;

      this.popperHandler = new Popper(
        reference,
        popper,
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
    },

    beforeDestroy() {
      this.popperHandler.destroy();
    },
  }
</script>
