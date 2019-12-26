<template>

    <!--最外面加一层元素的原因是在message中会改变最外面的position为fixed，如果是flex布局会有问题-->
    <div v-show="isShow" class="v-alert" :style="{zIndex: zIndex}">
        <div
            class="v-alert-part"
            :style="{
                textAlign: !!textCenter ? 'center' : 'left'
            }"
            :class="[
                type,
                plain && 'isPlain',
                textCenter && 'is-center'
             ]"
        >
            <div v-if="showIcon" class="icon">
                <i v-if="type==='success'" class="iconfont icon-success"></i>
                <i v-if="type==='error'" class="iconfont icon-error"></i>
                <i v-if="type==='warning'" class="iconfont icon-warning"></i>
                <i v-if="type==='tip'" class="iconfont icon-tip"></i>
            </div>
            <div class="content">
                <div class="title">
                    <div v-if="$slots.title">
                        <slot name="title"></slot>
                    </div>
                    <div v-else>
                        {{title}}
                    </div>
                </div>
                <div class="description">
                    <div v-if="$slots.description">
                        <slot name="description"></slot>
                    </div>
                    <div v-else>
                        {{description}}
                    </div>
                </div>
            </div>
            <div class="close">
                <div v-if="$slots.close" @click="close"></div>
                <div v-else-if="closeText" @click="close">{{closeText}}</div>
                <div v-else @click="close">×</div>
            </div>
        </div>
    </div>
</template>

<script>

  import '../css/alert.scss';

  export default {

    name: "v-alert",

    props: {

      // success、warning、tip、error
      type: {
        require: false,
        type: String,
        validator: function (value) {
          return ['success', 'warning', 'tip', 'error'].includes(value);
        },
        default: 'tip'
      },
      // 标题文字
      title: {
        require: false,
        type: String,
        default: ''
      },
      // 是否为朴素颜色
      plain: {
        require: false,
        type: Boolean,
        default: true
      },
      // 是否直接关闭
      closable: {
        require: false,
        type: Boolean,
        default: true
      },
      // 关闭处展示的文字
      closeText: {
        require: false,
        type: String,
        default: ''
      },
      // 是否展示icon
      showIcon: {
        require: false,
        type: Boolean,
        default: false
      },
      // 标题 和 描述处的内容的水平的肚脐方式
      textCenter: {
        require: false,
        type: Boolean,
        default: false
      },
      // 描述处的内容
      description: {
        require: false,
        type: String,
        default: ''
      },
    },

    data() {
      return {
        isShow: true,
        zIndex: 0
      }
    },

    methods: {

      close(event) {

        if (!this.closable) {
          this.$emit('close', event);
          return;
        }

        this.hide();
        this.$emit('close', event);
      },

      show() {
        this.isShow = true;
      },

      hide() {
        this.isShow = false;
      },
    },
  }
</script>
