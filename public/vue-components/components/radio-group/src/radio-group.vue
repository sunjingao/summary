<template>
    <div class="v-radio-group">
        <slot></slot>
    </div>
</template>

<script>

  import '../css/radio-group.scss';

  export default {

    name: 'v-radio-group',

    props: {
      value: {
        type: String
      },
      outBorder: {
        required: false,
        type: Boolean,
        default: false
      },
      disabled: {
        required: false,
        type: Boolean,
        default: false
      },
    },
  }
</script>
