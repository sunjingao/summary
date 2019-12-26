<template>
  <span
      class="v-checkbox-button"
      @click="toggle"
      :class="{
          'disabled': isDisabled,
          'checked': isCheckedValue
      }"
  >
    <span class="v-checkbox-content"> {{label}} </span>
  </span>
</template>

<script>

  import '../css/checkbox-button.scss';
  import deepClone from "../../../src/utils/deepClone.js"

  export default {

    name: 'v-checkbox-button',

    props: {
      value: {
        required: true,
        type: String
      },
      label: {
        required: true,
        type: String
      },
      disabled: {
        required: false,
        type: Boolean,
        default: false
      }
    },

    computed: {

      isCheckedValue() {
        let checkedValue = this.$parent.value;
        return checkedValue.length > 0 && checkedValue.indexOf(this.value) !== -1
      },

      isDisabled() {
        return this.$parent.$props.disabled || this.disabled;
      }
    },

    methods: {

      toggle: function () {

        if (this.isDisabled) {
          return;
        }

        let checkedValueArr = deepClone(this.$parent.value);

        if (this.isCheckedValue) {
          checkedValueArr = checkedValueArr.filter(x => x !== this.value);
        } else {
          checkedValueArr.push(this.value);
        }

        this.$parent.$emit("input", checkedValueArr.sort((a, b) => a - b));
      }
    }
  }
</script>
