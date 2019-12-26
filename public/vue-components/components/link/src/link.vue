<template>
    <a
        class="v-link"
        :class="[
            disabled ? 'disabled' : '',
        ]"
        :href="showHref"
    >
        <span
            :class="[
                type,
                disabled ? 'disabled' : '',
                underline ? 'underline' : ''
            ]"
        >
            <slot></slot>
        </span>
    </a>
</template>

<script>

  import '../css/link.scss';

  export default {

    name: "v-link",

    props: {
      type: {
        required: false,
        type: String,
        default: 'default'
      },
      disabled: {
        required: false,
        type: Boolean,
        default: false
      },
      underline: {
        required: false,
        type: Boolean,
        default: true
      },
      href: {
        required: false,
        type: String,
        default: ''
      },
    },

    computed: {
      showHref() {
        return !this.disabled && this.href ? this.href : "javascript:void(0);";
      }
    },
  }
</script>
