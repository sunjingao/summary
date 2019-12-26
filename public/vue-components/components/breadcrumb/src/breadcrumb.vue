<template>
    <div class="v-breadcrumb">
        <slot></slot>
    </div>
</template>

<script>

  import '../css/breadcrumb.scss';

  export default {

    name: "v-breadcrumb",

    props: {
      separator: {
        required: false,
        type: String,
        default: '/'
      },
      separatorClass: {
        required: false,
        type: String,
        default: ''
      }
    },
  }
</script>

