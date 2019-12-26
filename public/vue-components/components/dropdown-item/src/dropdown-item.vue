<template>
    <div class="v-dropdown-item" :class="[disabled&&'disabled', divided&&'divided']">
        <div @click="click">
            <slot></slot>
        </div>
    </div>
</template>

<script>

  import '../css/dropdown-item.scss';

  export default {

    name: "v-dropdown-item",

    props: {
      // 禁止选中
      disabled: {
        require: false,
        type: Boolean,
        default: false,
      },
      // 展示分割线
      divided: {
        require: false,
        type: Boolean,
        default: false,
      },
      // 点击时上传的内容
      command: {
        require: false,
      }
    },

    methods: {
      click(event) {

        if (this.disabled) {
          return;
        }

        this.$parent.$parent.command && this.$parent.$parent.command(this.command, event);
      }
    },
  }
</script>
