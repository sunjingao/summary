<template>
    <v-input
        class="v-input-number"
        v-model="inputValue"
        v-bind="$attrs"
        type="number"
        :width="width"
        :height="height"
        :style="{height: `${height}px`}"
        :max="max"
        :min="min"
        :disabled="disabled"
        text-align="center"
    >
        <!--触发区域在左右-->
        <template v-if="controlsPosition==='bothSides'">
            <template slot="front">
                <div
                    class="v-input-number-front"
                    :class="{ 'disabled': !canDecrease }"
                    :style="{
                        lineHeight: `${height-2}px`,
                        height:`${height-2}px`
                    }"
                    v-repeat-click="decrease"
                >
                    <span class="iconfont icon-decrease"></span>
                </div>
            </template>
            <template slot="behind">
                <div
                    class="v-input-number-behind"
                    :class="{ 'disabled': !canIncrease }"
                    :style="{
                        lineHeight: `${height-2}px`,
                        height:`${height-2}px`
                    }"
                    v-repeat-click="increase"
                >
                    <span class="iconfont icon-increase"></span>
                </div>
            </template>
        </template>
        <!--触发区域在上下-->
        <template v-else>
            <template slot="behind">
                <div class="v-input-number-right">
                    <div
                        class="v-input-number-top"
                        :class="{ 'disabled': !canIncrease }"
                        :style="{
                            lineHeight:`${(height-2)/2}px`,
                            height:`${(height-2)/2}px`
                        }"
                        v-repeat-click="increase"
                    >
                        <span class="iconfont icon-increase"></span>
                    </div>
                    <div
                        class="v-input-number-bottom"
                        :class="{ 'disabled': !canDecrease }"
                        :style="{
                            lineHeight:`${(height-2)/2}px`,
                            height:`${(height-2)/2}px`
                        }"
                        v-repeat-click="decrease"
                    >
                        <span class="iconfont icon-decrease"></span>
                    </div>
                </div>
            </template>
        </template>
    </v-input>
</template>

<script>

  import '../css/input-number.scss';
  import repeatClick from "../../../src/directives/repeatclick.js";

  export default {

    name: 'v-input-number',

    inheritAttrs: false,

    directives: {
      repeatClick: repeatClick
    },

    props: {
      value: {
        required: false,
        type: Number,
        default: 0
      },
      controlsPosition: {
        required: false,
        type: String,
        default: 'bothSides'
      },
      disabled: {
        required: false,
        type: Boolean,
        default: false
      },
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
      min: {
        required: false,
        type: Number,
        default: -Number.MAX_VALUE
      },
      max: {
        required: false,
        type: Number,
        default: Number.MAX_VALUE
      },
      step: {
        required: false,
        type: Number,
        default: 1
      },

    },

    data() {
      return {}
    },

    computed: {
      inputValue: {
        get() {
          return this.value;
        },
        set(data) {
          this.$emit("input", data);
        }
      },
      // 是否可以减小
      canDecrease() {
        return !this.disabled && this.inputValue - this.step >= this.min;
      },
      // 是否可以增加
      canIncrease() {
        return !this.disabled && this.inputValue + this.step <= this.max;
      },
    },

    methods: {
      // 点击减小按钮
      decrease() {
        if (this.canDecrease) {
          this.inputValue -= this.step;
        }
      },
      // 点击增加按钮
      increase() {
        if (this.canIncrease) {
          this.inputValue += this.step;
        }
      }
    },
  }
</script>
