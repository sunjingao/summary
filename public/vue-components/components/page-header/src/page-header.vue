<template>
    <div class="v-pageHeader">
        <div class="title-part" @click="back">
            <div v-if="$slots.title">
                <slot name="title"></slot>
            </div>
            <div v-else>
                <span class="iconfont icon-go-left"></span>
                <span class="title">{{title}}</span>
            </div>
        </div>
        <span class="separate-part">|</span>
        <div class="content-part">
            <div v-if="$slots.content">
                <slot name="content"></slot>
            </div>
            <div v-else>
                <span>{{content}}</span>
            </div>
        </div>
    </div>
</template>

<script>

  import '../css/pageHeader.scss';

  export default {

    name: "v-page-header",

    props: {
      title: {
        require: false,
        type: String,
        default: '返回'
      },
      content: {
        require: false,
        type: String,
        default: ''
      },
    },

    methods: {
      back() {
        this.$emit('back');
      }
    },
  }
</script>
