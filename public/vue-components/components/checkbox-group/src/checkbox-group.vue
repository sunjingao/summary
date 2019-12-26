<template>
    <div class="v-checkbox-group">
        <slot></slot>
    </div>
</template>

<script>

  import '../css/checkbox-group.scss';

  export default {

    name: 'v-checkbox-group',

    props: {
      outBorder: {
        required: false,
        type: Boolean,
        default: false
      },
      value: {
        required: false,
        type: Array,
        default: function () {
          return [];
        }
      },
      disabled: {
        required: false,
        type: Boolean,
        default: false
      }
    },
  }
</script>
