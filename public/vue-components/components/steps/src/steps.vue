<template>
    <div class="v-steps">
        <slot></slot>
    </div>
</template>

<script>

  import '../css/steps.scss';

  export default {

    name: "v-steps",

    props: {
      alignCenter: {
        require: false,
        type: Boolean,
        default: false
      },
      space: {
        require: false,
        type: Number,
        default: 0
      },
      process: {
        require: false,
        type: Number,
        default: 0
      },
      error: {
        require: false,
        type: Boolean,
        default: false
      },
      simple: {
        require: false,
        type: Boolean,
        default: false
      },
    },
  }
</script>
