<template>

    <div v-if="isShow" class="v-messageBox" :class="[messageBoxClass]" :style="{zIndex:zIndex}">
        <div class="titlePart">
            <div class="titleContent" v-html="title"></div>
            <div class="closeIcon v-noSelect" @click="closeCb">×</div>
        </div>
        <div class="contentPart">
            <template v-if="text">
                <div class="text" v-html="text"></div>
            </template>
            <v-input v-if="type==='prompt'" ref="vInput" v-model="inputValue" class="mt5"></v-input>
        </div>
        <div class="buttonPart">
            <v-button v-if="type!=='message'" @click="cancelCb">{{cancelButtonText}}</v-button>
            <v-button class="ml10" type="primary" @click="confirmCb">{{confirmButtonText}}</v-button>
        </div>
    </div>

</template>

<script>

  import '../css/message-box.scss';

  export default {

    name: 'v-messagebox-panel',

    props: {
      // message confirm prompt
      type: {
        required: false,
        type: String,
        validator: function (value) {
          return ['message', 'confirm', 'prompt'].includes(value);
        },
        default: 'message'
      },
      title: {
        required: false,
        type: String,
        default: ''
      },
      text: {
        required: false,
        type: String,
        default: ''
      },
      cancelButtonText: {
        required: false,
        type: String,
        default: '取消'
      },
      confirmButtonText: {
        required: false,
        type: String,
        default: '确认'
      },
      cancelCallBack: {
        required: false,
        type: Function,
        default: function () {
          return function () {
            return true;
          }
        }
      },
      confirmCallBack: {
        required: false,
        type: Function,
        default: function () {
          return function () {
            return true;
          }
        }
      },
      closeCallBack: {
        required: false,
        type: Function,
        default: function () {
          return function () {
            return true;
          }
        }
      },
      messageBoxClass: {
        required: false,
        type: String,
      },
    },

    data() {
      return {
        inputValue: '',
        isShow: false,
        loadingInstance: null,
        zIndex: 0
      }
    },

    methods: {

      hide() {
        this.isShow = false;

        this.loadingInstance && this.loadingInstance.close && this.loadingInstance.close();
      },

      show() {

        this.isShow = true;

        this.loadingInstance = this.$loading({
          target: document.body,
          showLoadingIcon: false
        });
        this.loadingInstance.open();
      },

      closeCb() {
        if (this.closeCallBack.call(this, this.inputValue || '')) {
          this.hide();
        }
      },

      cancelCb() {
        if (this.cancelCallBack.call(this, this.inputValue || '')) {
          this.hide();
        }
      },

      confirmCb() {
        if (this.confirmCallBack.call(this, this.inputValue)) {
          this.hide();
        }
      },
    },

    mounted() {

      if (this.type === 'prompt') {
        this.$nextTick(
          _ => {
            this.$nextTick(
              _ => {
                this.$refs.vInput.focus();
              }
            );
          }
        );
      }
    },
  }
</script>
