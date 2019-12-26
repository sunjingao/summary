<template>

    <div v-show="isShow" class="v-dialog" :style="{zIndex:zIndex,width:dialogWidth}">

        <template v-if="$slots.title">
            <div @close-cb="closeCb">
                <slot name="title"></slot>
            </div>
        </template>
        <template v-else>
            <div class="titlePart">
                <div class="titleContent" :style="{textAlign:center?'center':'left'}" v-html="title"></div>
                <div v-if="showClose" class="closeIcon v-noSelect" @click="closeCb">×</div>
            </div>
        </template>

        <div class="contentPart">
            <slot v-if="$slots.default"></slot>
        </div>

        <template v-if="$slots.footer">
            <div class="buttonPart" :style="{justifyContent:center?'center':'flex-end'}">
                <slot name="footer"></slot>
            </div>
        </template>
    </div>
</template>

<script>

  import '../css/dialog.scss';

  export default {

    name: 'v-dialog',

    props: {
      // 是否展示
      value: {
        required: false,
        type: Boolean,
        default: false
      },
      title: {
        required: false,
        type: String,
        default: ''
      },
      // title 和 footer 是否居中
      center: {
        required: false,
        type: Boolean,
        default: false
      },
      // 是否展示关闭按钮
      showClose: {
        require: false,
        type: Boolean,
        default: true
      },
      // 宽度
      width: {
        require: false,
        type: String,
        default: '50%'
      },
      // 点击关闭按钮前的回调
      closeCallBack: {
        required: false,
        type: Function,
        default: function () {
          return function () {
            return true;
          }
        }
      },
    },

    data() {
      return {
        zIndex: -1,
        isShow: false,
        loadingInstance: null,
      }
    },

    computed: {

      dialogWidth() {
        return this.width.includes('%') ? this.width : `${this.width}px`;
      },
    },

    methods: {

      hide() {

        if (!this.isShow) {
          return;
        }

        this.$emit('input', false);

        this.isShow = false;

        this.loadingInstance && this.loadingInstance.close && this.loadingInstance.close();
      },

      show() {

        if (this.isShow) {
          return;
        }

        this.$emit('input', true);

        this.loadingInstance = this.$loading({
          target: document.body,
          showLoadingIcon: false
        });
        this.loadingInstance.open();

        this.zIndex = Popper.addZIndex();
        this.isShow = true;
      },

      closeCb() {
        if (this.closeCallBack.call(this)) {
          this.hide();
        }
      },
    },

    watch: {
      value(val) {
        val ? this.show() : this.hide();
      }
    }
  }
</script>
