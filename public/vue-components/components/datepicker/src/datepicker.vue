<template>

    <div
        ref="reference"
        class="v-date-picker"
        :style="{width:width+'px'}"
        v-click-outside="clickOutside">

        <!--input组件-->
        <v-input
            readonly
            :value="showValue"
            :placeholder="placeholder"
            :width="width"
            :height="height"
            :cleanable="cleanable"
            @clean="clean()"
        >
            <span class="iconfont icon-date v-date-picker-front" slot="front"></span>
        </v-input>

        <component
            v-if="type === 'year'"
            v-show="isShowPopper"
            is="year-picker"
            ref="yearPicker"
            :options="options"
            :selectedDate="selectedDate"
            :locationRelyElement="this"
            @select="select"
        ></component>
        <component
            v-if="type === 'month'"
            v-show="isShowPopper"
            is="month-picker"
            ref="monthPicker"
            :options="options"
            :selectedDate="selectedDate"
            :locationRelyElement="this"
            @select="select"
        ></component>
        <component
            v-if="type === 'date'"
            v-show="isShowPopper"
            is="date-time-picker"
            ref="dateTimePicker"
            :options="options"
            :selectedDate="selectedDate"
            :locationRelyElement="this"
            @select="select"
        ></component>

    </div>

</template>

<script>

  import '../css/datepicker.scss';

  import deepClone from "../../../src/utils/deepClone"
  import clickOutside from "../../../src/directives/clickoutside"
  import dateTimePicker from "./pickers/datetimepicker.vue"
  import monthPicker from "./pickers/monthpicker.vue"
  import yearPicker from "./pickers/yearpicker.vue"

  export default {

    name: 'v-date-picker',

    directives: {
      'clickOutside': clickOutside
    },

    components: {
      dateTimePicker: dateTimePicker,
      monthPicker: monthPicker,
      yearPicker: yearPicker,
    },

    props: {

      // date类型
      type: {
        required: false,
        type: String
      },
      // 参数配置
      options: {
        required: false,
        type: Object
      },

      // 说明：宽度
      width: {
        required: false,
        type: Number,
        default: 170
      },
      // 说明：高度
      height: {
        required: false,
        type: Number,
        default: 40
      },
      // 说明：默认展示文字
      placeholder: {
        required: false,
        type: String,
      },
      // 说明：是否清空输入框
      cleanable: {
        required: false,
        type: Boolean,
        default: false
      },
    },

    data() {
      return {

        // 用于控制输入框展示和自动提示筛选的内容
        showValue: '',
        // 选中的时间
        selectedDate: null,
        // popper句柄
        popperHandler: null,
        isShowPopper: false,
      }
    },

    methods: {

      clickOutside(event, sign) {
        sign ? this.hidePopper() : this.showPopper();
      },

      clean() {

        this.hidePopper();

        this.setShowValue('');

        this.initSelectedDate();

        this.$emit('change', null);
      },

      // 用户选中时间
      select(value) {

        this.setSelectedDate(value);

        this.hidePopper();

        this.setShowValue(value);

        this.$emit('change', deepClone(value));
      },

      // 初始化 被选中的日期
      initSelectedDate() {

        let date = new Date(),
          defaultShow = {year: date.getFullYear()};
        this.type !== 'year' && (defaultShow.month = date.getMonth() + 1); // 后面要减1，在这里先加一，保持一致
        this.type === 'date' && (defaultShow.date = date.getDate());

        let value = this.options && this.options.defaultShow && Object.keys(this.options.defaultShow).length > 0 ?
          this.options.defaultShow : defaultShow;

        // 月份要减1才能与原生函数对上
        value.month && (value.month -= 1);

        this.setSelectedDate(value);

        this.options && this.options.defaultShow ?
          this.setShowValue(value) : this.setShowValue('');
      },

      // 设置 被选中的日期
      setSelectedDate(value) {

        let selectedDate = {};
        selectedDate.year = parseFloat(value.year);
        !!value.month && (selectedDate.month = value.month);
        !!value.date && (selectedDate.date = value.date);
        this.selectedDate = selectedDate;
      },

      // 设置 input展示的值
      setShowValue(value) {

        let showValue = '';
        if (typeof value === 'string') {
          showValue = value;
        } else {
          showValue = value.year;
          !!value.month && (showValue += "-" + this.toTwoLengthStr(value.month + 1));
          !!value.date && (showValue += "-" + this.toTwoLengthStr(value.date));
        }
        this.showValue = showValue
      },

      // 获取 popper组件
      getPopperComponent() {

        let popper = null;
        if (this.type === 'year') {
          popper = this.$refs.yearPicker;
        } else if (this.type === 'month') {
          popper = this.$refs.monthPicker;
        } else {
          popper = this.$refs.dateTimePicker;
        }
        return popper;
      },

      toTwoLengthStr(str) {

        str = String(str);
        if (str.length === 1) {
          return `0${str}`;
        }
        return str;
      },

      showPopper() {

        if (this.isShowPopper) {
          return;
        }

        this.isShowPopper = true;
        this.popperHandler.show();
      },

      hidePopper() {

        if (!this.isShowPopper) {
          return;
        }

        let popper = this.getPopperComponent();

        this.isShowPopper = false;
        this.popperHandler.hide();

        // 关闭遮罩时，恢复至默认选中的时间范围
        popper && popper.initPickerObj && popper.initPickerObj();
      },
    },

    watch: {
      "placeholder": function (newVal) {
        this.showValue = newVal;
      },
    },

    created() {
      this.initSelectedDate();
    },

    mounted() {

      this.popperHandler = new Popper(
        this.$refs['reference'],
        this.getPopperComponent().$el,
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
