<template>
    <span
        class="v-radio-button"
        @click="toggle"
        :class="[
            isCheckedValue ? 'checked' : '',
            isDisabled ? 'disabled' : ''
        ]"
    >
      <span class="v-radio-content"> {{label}} </span>
    </span>
</template>

<script>

  import '../css/radio-button.scss';

  export default {

    name: "v-radio-button",

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
      },
    },

    computed: {
      isCheckedValue() {
        return this.$parent.value === this.value;
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
        if (this.value !== this.$parent.value) {
          this.$parent.$emit("input", this.value);
        }
      }
    }
  }
</script>

