<template>
    <div
        class="v-input"
        ref="v-input"
        :class="{
            focus: isFocusNow,
            disabled: disabled
        }"
    >
        <template v-if="$slots.front">
            <div class="v-input-front">
                <slot name="front"></slot>
            </div>
        </template>

        <input
            ref="input"
            class="v-input-content"
            v-bind="$attrs"
            v-model="showValue"
            @focus="focusSelf"
            @blur="blurSelf"
            :class="{ 'disabled': disabled }"
            :style="{
                width: `${inputWidth}px`,
                height: `${inputHeight}px`,
                fontSize: fz,
                textAlign: textAlign
            }"
            :type="type"
            :max="max"
            :min="min"
            :disabled="disabled"
        />

        <!--注意：使用非 front 和 behind的插槽，要使用绝对布局，否则会破坏宽度-->
        <slot></slot>

        <!--清除图标 showValue -->
        <i
            v-show="cleanable"
            ref="cleaIcon"
            @click="clear"
            :class="[
                'iconfont',
                'icon-delete',
                'v-icon-clear',
                !showValue&&'v-hidden'
            ]"
            :style="{
                height: `${inputHeight}px`,
                lineHeight: `${inputHeight}px`
            }"
        ></i>

        <template v-if="$slots.behind">
            <div class="v-input-behind">
                <slot name="behind"></slot>
            </div>
        </template>
    </div>
</template>

<script>

  import '../css/input.scss';
  import {getStyle} from '../../../src/utils/dom.js';

  export default {

    name: 'v-input',

    inheritAttrs: false,

    props: {
      value: {},
      width: {
        required: false,
        type: Number,
        default: 180
      },
      height: {
        required: false,
        type: Number,
        default: 40
      },
      fz: {
        required: false,
        type: String,
        default: '.85rem'
      },
      disabled: {
        required: false,
        type: Boolean,
        default: false
      },
      cleanable: {
        required: false,
        type: Boolean,
        default: false
      },
      type: {
        required: false,
        type: String,
        default: function () {
          return "text"
        }
      },
      max: {
        required: false,
        type: Number,
        default: function () {
          return Number.MAX_VALUE;
        }
      },
      min: {
        required: false,
        type: Number,
        default: function () {
          return -Number.MAX_VALUE;
        }
      },
      textAlign: {
        required: false,
        type: String,
        default: 'left'
      },
    },

    data() {
      return {
        isFocusNow: false, // 是否聚焦，根据这个改变样式
        inputWidth: 0,
        inputHeight: 0,
      }
    },

    computed: {

      showValue: {
        get() {
          return this.value;
        },
        set(data) {
          if (this.type.toLowerCase() === "number") {
            if (typeof +data === "number" && +data <= this.max && +data >= this.min) {
              this.$emit("input", +data);
            }
          } else {
            this.$emit("input", data);
          }
        }
      },
    },

    methods: {

      setInputWidth() {

        let width = this.width;

        let inputRect = this.$refs['v-input'],
          border = parseFloat(getStyle(inputRect, 'border-left-width')) +
            parseFloat(getStyle(inputRect, 'border-right-width'));
        width -= border;

        if (this.cleanable) {
          let cleanRect = this.$refs.cleaIcon.getBoundingClientRect();
          width -= cleanRect.width;
        }

        if (this.$slots.front) {

          let frontEle = this.$slots.front[0].elm,
            frontWidth = frontEle.offsetWidth +
              parseFloat(getStyle(frontEle, 'margin-left')) + parseFloat(getStyle(frontEle, 'margin-right'));
          width -= frontWidth;
        }
        if (this.$slots.behind) {

          let behindEle = this.$slots.behind[0].elm,
            behindWidth = behindEle.offsetWidth +
              parseFloat(getStyle(behindEle, 'margin-left')) + parseFloat(getStyle(behindEle, 'margin-right'));
          width -= behindWidth;
        }

        this.inputWidth = width;
      },

      setInputHeight() {

        let inputRect = this.$refs['v-input'],
          border = parseFloat(getStyle(inputRect, 'border-top-width')) +
            parseFloat(getStyle(inputRect, 'border-bottom-width'));

        this.inputHeight = this.height - border;
      },

      focusSelf() {
        this.isFocusNow = true;
        this.$emit('focus');
      },

      blurSelf() {
        this.isFocusNow = false;
        this.$emit('blur');
      },

      clear(event) {
        this.showValue = "";
        this.$refs.input.focus();
        this.$emit('clean', event);
      },

      // 暴露给外面的方法
      select() {
        this.$refs.input.select();
      },

      // 暴露给外面的方法
      focus() {
        this.$refs.input.focus();
      },

      // 暴露给外面的方法
      blur() {
        this.$refs.input.blur();
      },
    },

    watch: {

      cleanable() {

        // 这个要在下一个事件队列中执行，否则 this.$slots.front[0].elm 为 undefined
        this.$nextTick(
          _ => this.setInputWidth()
        );
      },
    },

    mounted() {

      this.setInputWidth();

      this.setInputHeight();
    },
  }
</script>




