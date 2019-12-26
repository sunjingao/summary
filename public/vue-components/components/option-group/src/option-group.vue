<template>
    <div class="v-select-group">
        <div class="v-select-group-title" @click.stop>{{label}}</div>
        <slot></slot>
    </div>
</template>

<script>

  import '../css/option-group.scss';

  export default {

    name: "v-option-group",

    props: {
      label: {
        required: true,
      },
    },
  }
</script>

