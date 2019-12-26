<template>
    <div class="v-collapse-item">
        <div class="title" @click="toggle" :class="[disabled&&'disabled']">
            <template v-if="$slots.title">
                <div class="title-content">
                    <slot name="title"></slot>
                </div>
            </template>
            <template v-else>
                <div class="title-content">{{title}}</div>
            </template>
            <i v-if="showDirection" class="iconfont icon-down arrow" :class="isShowContent&&'up'"></i>
        </div>
        <div class="content" :style="{height: height}">
            <div class="words" ref="words">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>

  import '../css/collapse-item.scss';

  export default {

    name: "v-collapse-item",

    props: {
      name: {
        require: false,
        type: String,
        default: ''
      },
      title: {
        require: false,
        type: String,
        default: ''
      },
      disabled: {
        require: false,
        type: Boolean,
        default: false
      },
      showDirection: {
        require: false,
        type: Boolean,
        default: true
      }
    },

    data() {
      return {
        height: '0',
        isShowContent: false
      }
    },

    methods: {

      toggle() {

        if (this.disabled) {
          return;
        }

        this.isShowContent = !this.isShowContent;

        this.$parent.change(this.name);
      },

      initShow() {

        if (this.$parent.accordion) {
          this.isShowContent = this.$parent.value === this.name;
        } else {
          this.isShowContent = this.$parent.value.includes(this.name);
        }
      },

      initHeight() {
        this.height = this.isShowContent ? 'auto' : `0px`;
      },
    },

    watch: {

      isShowContent(val) {
        let element = this.$refs.words;
        this.height = val ? `${element && element.getBoundingClientRect().height}px` : `0px`;
      },

      '$parent.value'() {
        this.initShow();
      },
    },

    created() {

      this.initShow();

      // 在此赋值，防止在以一次渲染的时候出现动画，影响性能
      this.initHeight();
    },
  }
</script>
