<template>
    <div class="v-tabs" :class="[position,type]">
        <slot></slot>
        <div class="seat"></div>
    </div>
</template>

<script>

  import '../css/tabs.scss';

  export default {

    name: "v-tabs",

    props: {
      // 没有传递值的时候要选中第一个子节点
      value: {
        require: false,
        type: String,
        default: undefined
      },
      // 是否启用关闭按钮
      closable: {
        require: false,
        type: Boolean,
        default: false
      },
      // 类型 default,card
      type: {
        require: false,
        type: String,
        validate(val) {
          return ['card'].includes(val);
        },
        default: 'default'
      },
      // 位置 'top', 'right', 'bottom', 'left'
      position: {
        require: false,
        type: String,
        validator(val) {
          return ['top', 'right', 'bottom', 'left'].includes(val);
        },
        default: 'top'
      },
    },

    data() {
      return {}
    },

    methods: {

      setSelect(name, label, event) {

        this.$emit('tab-click', name, label, event);

        this.$emit('input', name);
      },

      close(name, label, event) {

        this.$emit('close', name, label, event);
      },
    },
  }
</script>
