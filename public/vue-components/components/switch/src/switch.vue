<template>

    <div
        class="v-switch"
        @click="toggle"
        :class="[
            disabled ? 'disabled' : ''
         ]"
    >

        <div
            v-if="$slots.before"
            class="v-switch-before"
            :style="{
                color: sign ? inactiveFontColor : activeFontColor
            }"
        >
            <slot name="before"></slot>
        </div>

        <div class="v-switch-middle" :style="{ width: `${width}px`, height: `${height}px`}">

            <i class="v-switch-middle-before-circle"
               :style="{
                   width: `${height}px`,
                   height: `${height}px`,
                   left: 0,
                   backgroundColor:sign ? activeBgColor : inactiveBgColor
                 }"
            ></i>
            <i class="v-switch-middle-circle"
               :style="{
                  height: `${height}px`,
                  width: `${width - height}px`,
                  left: `${height / 2}px`,
                  backgroundColor: sign ? activeBgColor : inactiveBgColor
                }"
            ></i>
            <i
                class="v-switch-middle-behind-circle"
                :style="{
                   width: `${height}px`,
                   height: `${height}px`,
                   left: `${width - height}px`,
                   backgroundColor: sign ? activeBgColor : inactiveBgColor
                 }"
            ></i>
            <i
                class="v-switch-middle-move-circle"
                :style="{
                   width: `${height - 2}px`,
                   height: `${height - 2}px`,
                   left: `${circleLeft}px`,
                   backgroundColor: circleBgColor
                 }"
            ></i>

        </div>

        <div
            v-if="$slots.behind"
            class="v-switch-behind"
            :style="{
                color: sign ? activeFontColor : inactiveFontColor
            }"
        >
            <slot name="behind"></slot>
        </div>
    </div>

</template>

<script>

  import '../css/switch.scss';

  export default {

    name: 'v-switch',

    props: {

      width: {
        required: false,
        type: Number,
        default: 40
      },
      height: {
        required: false,
        type: Number,
        default: 20
      },
      disabled: {
        required: false,
        type: Boolean,
        default: false
      },
      circleBgColor: {
        required: false,
        type: String,
        default: "#fff"
      },
      inactiveBgColor: {
        required: false,
        type: String,
        default: "#C0CCDA"
      },
      activeBgColor: {
        required: false,
        type: String,
        default: "#409EFF"
      },
      inactiveFontColor: {
        required: false,
        type: String,
        default: "#303133"
      },
      activeFontColor: {
        required: false,
        type: String,
        default: "#409eff"
      },
      value: {
        required: false,
        type: Boolean,
        default: true
      },
    },

    data() {
      return {
        sign: this.value
      }
    },

    computed: {
      circleLeft() {
        // 1为border的大小
        return this.sign ? (this.width - this.height + 1) : 1;
      }
    },

    methods: {
      toggle() {
        if (this.disabled) {
          return;
        }

        this.$emit(
          'input',
          this.sign = !this.sign
        );
      }
    },
  }
</script>




