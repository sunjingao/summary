<template>
  <span
      class="v-checkbox"
      @click="toggle"
      :class="{
          'outBorder': outBorder,
          'disabled': isDisabled,
          'checked': isCheckedValue,
          'notAll': isIndeterminate
      }"
  >
    <i class="v-checkbox-icon"></i>
    <span class="v-checkbox-content"> {{label}} </span>
  </span>
</template>

<script>

  import '../css/checkbox.scss';
  import deepClone from "../../../src/utils/deepClone.js"

  export default {

    name: 'v-checkbox',

    props: {

      value: {
        required: true,
        type: [String, Boolean]
      },
      label: {
        required: false,
        type: String
      },
      disabled: {
        required: false,
        type: Boolean,
        default: false
      },
      isIndeterminate: {
        required: false,
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        parentGroupName: 'v-checkbox-group'
      }
    },

    computed: {

      isCheckedValue() {

        if (this.$parent.$options.name === this.parentGroupName) {
          let checkedValue = this.$parent.value;
          return !this.isIndeterminate && checkedValue.length > 0 && checkedValue.indexOf(this.value) !== -1;
        } else {
          return !this.isIndeterminate && this.value === true;
        }
      },

      outBorder() {
        return this.$parent.$props.outBorder;
      },

      isDisabled() {
        return this.$parent.$props.disabled || this.disabled;
      }
    },

    methods: {

      toggle: function () {

        if (this.isDisabled) {
          return;
        } else if (this.isIndeterminate) {
          this.$emit('part-check-change');
          return;
        }

        if (this.$parent.$options.name === this.parentGroupName) {

          let checkedValueArr = deepClone(this.$parent.value);

          if (this.isCheckedValue) {
            checkedValueArr = checkedValueArr.filter(x => x !== this.value);
          } else {
            checkedValueArr.push(this.value);
          }

          this.$parent.$emit("input", checkedValueArr.sort((a, b) => a - b));
        } else {
          this.$emit("input", !this.value);
        }
      }
    },
  }
</script>
