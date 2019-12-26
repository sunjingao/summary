<template>
    <div
        v-show="isShow"
        class="v-tab-pane"
        :class="[
            active&&'active',
            disabled&&'disabled',
            $parent.type,
            $parent.position
        ]"
        @mouseenter="mouseenter"
        @mouseleave="mouseleave"
        @click="select($event)"
    >
        <slot
            v-if="$slots.default"
            :disabled="disabled"
            :closable="$parent.closable"
            :active="active"
        ></slot>
        <div v-else class="content">
            {{label}}
            <i
                v-show="showClose"
                class="close"
                @click.stop="close"
            >×</i>
        </div>
    </div>
</template>

<script>

  import '../css/tab-pane.scss';

  export default {

    name: "v-tab-pane",

    props: {
      label: {
        require: false,
        type: String,
        default: '',
      },
      name: {
        require: false,
        type: String,
        default: '',
      },
      disabled: {
        require: false,
        type: Boolean,
        default: false,
      },
    },

    data() {
      return {
        isShow: true,
        isHover: false
      }
    },

    computed: {
      active() {
        let activeValue = this.$parent.value;
        return activeValue !== undefined ? this.name === activeValue : this.$parent.$children[0] === this;
      },
      showClose() {
        return this.$parent.closable && (this.isHover || this.active);
      }
    },

    methods: {

      mouseenter() {
        this.isHover = true;
      },

      mouseleave() {
        this.isHover = false;
      },

      close() {
        this.isShow = false;
        this.$parent.close(this.name, this.label, event);

        if (this.active) {
          let children = this.$parent.$children,
            selectedIndex = children.indexOf(this);

          for (let index = selectedIndex - 1; index >= 0; index--) {
            let instance = children[index];
            if (instance && instance.isShow && !instance.disabled) {
              instance.select();
              return;
            }
          }

          for (let index = selectedIndex + 1; index < children.length; index++) {
            let instance = children[index];
            if (instance && instance.isShow && !instance.disabled) {
              instance.select();
              return;
            }
          }
        }
      },

      open() {
        this.$emit('open');
        this.isShow = true;
      },

      select(event) {
        if (this.disabled || this.active) {
          return;
        }
        this.$parent.setSelect(this.name, this.label, event);
      },
    },
  }
</script>
