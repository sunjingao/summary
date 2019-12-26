<template>
    <div
        class="v-button-group"
        :class="[
            'v-button-group-' + type
        ]"
    >
        <slot></slot>
    </div>
</template>

<script>

  import '../css/button-group.scss';

  export default {

    name: "v-button-group",

    props: {
      type: {
        required: false,
        type: String,
        validator: function (value) {
          return value === 'horizontal' || value === 'vertical';
        },
        default: 'horizontal',
      },
    }
  }
</script>
