<template>
    <div class="v-badge">
        <slot></slot>
        <span
            v-if="showValue && !isDot"
            class="v-icon"
            :class="iconClass"
        >
            {{showValue}}
        </span>
        <span
            v-else-if="isDot"
            class="v-dot"
            :class="iconClass"
        >
        </span>
    </div>
</template>

<script>

  import '../css/badge.scss';

  export default {

    name: "v-badge",

    props: {
      value: {
        required: false,
        type: String,
        default: ''
      },
      iconClass: {
        required: false,
        type: String,
      },
      max: {
        required: false,
        type: Number,
      },
      isDot: {
        required: false,
        type: Boolean,
        default: false
      }
    },

    computed: {
      showValue() {
        if (this.max && this.max < this.value) {
          return `${this.max}+`;
        }
        return this.value;
      }
    },
  }
</script>
