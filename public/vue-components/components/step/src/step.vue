<template>
    <div
        class="v-step"
        :style="{
                width:!!$parent.space?`${$parent.space}px`:'auto',
                flex:!!$parent.space||isLast?'none':'1'
            }"
    >
        <div class="chart-part" ref="chart-part">
            <!--自定义图形-->
            <slot v-if="$slots.step" name="step"></slot>
            <!--默认图形,简单模式时无图形-->
            <template v-else-if="!$parent.simple">
                <template v-if="$parent.error && $parent.process===currentIndex">
                    <div class="step error">×</div>
                </template>
                <template v-else>
                    <div v-show="currentStatus===types.success" class="step success iconfont icon-caozuochenggong"></div>
                    <div v-show="currentStatus===types.process" class="step process">{{currentIndex+1}}</div>
                    <div v-show="currentStatus===types.wait" class="step wait">{{currentIndex+1}}</div>
                    <div v-show="currentStatus===types.error" class="step error">{{currentIndex+1}}</div>
                </template>
            </template>
            <!--中间的图形部分-->
            <template v-if="!isLast">
                <!--简单模式的中间内容-->
                <div v-if="$parent.simple" class="simple">></div>
                <!--默认的中间内容-->
                <div v-else class="line" :class="currentIndex<$parent.process-1&&'process'"></div>
            </template>
        </div>

        <div class="content-part" :class="currentStatus">
            <div v-if="$slots.title" class="title">
                <div class="content" :style="{transform:alignTranslate}">
                    <slot name="title"></slot>
                </div>
            </div>
            <div v-else class="title">
                <div class="content" :style="{transform:alignTranslate}">
                    {{title}}
                </div>
            </div>

            <div v-if="$slots.description" class="description">
                <div class="content" :style="{transform:alignTranslate}">
                    <slot name="description"></slot>
                </div>
            </div>
            <div v-else class="description">
                <div class="content" :style="{transform:alignTranslate}">
                    {{description}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>

  import '../css/step.scss';
  import {getStyle} from "../../../src/utils/dom"

  export default {

    name: "v-step",

    props: {
      title: {
        require: false,
        type: String,
        default: '',
      },
      description: {
        require: false,
        type: String,
        default: '',
      },
      simple: {
        require: false,
        type: Boolean,
        default: false
      },
    },

    data() {
      return {

        types: {
          error: 'error',
          process: 'process',
          success: 'success',
          wait: 'wait',
        },

        currentIndex: this.$parent.$children.indexOf(this),
        isLast: false,
        alignTranslate: 0
      }
    },

    computed: {

      currentStatus() {

        let status = '';
        if (this.$parent.process === this.currentIndex && this.$parent.error) {
          status = this.types.error;
        } else if (this.$parent.process === this.currentIndex) {
          status = this.types.process;
        } else if (this.$parent.process > this.currentIndex) {
          status = this.types.success;
        } else {
          status = this.types.wait;
        }
        return status;
      }
    },

    methods: {

      setIsLast() {
        let children = this.$parent.$children;
        this.isLast = this === children[children.length - 1];
      },

      // 居中设置
      setAlignTranslate() {

        if (!this.$parent.alignCenter) {
          return this.alignTranslate = `translateX(0)`;
        }

        let child = this.$refs && this.$refs['chart-part'] && this.$refs['chart-part'].children;

        if (!child || child.length === 0) {
          return;
        }

        for (let index = 0; index < child.length; index++) {
          let item = child[index];
          if (getStyle(item, 'display') !== 'none') {
            return this.alignTranslate = `translateX(calc(-50% + ${item.clientWidth / 2}px))`;
          }
        }
      },
    },

    mounted() {

      this.setIsLast();

      this.setAlignTranslate();
    },
  }
</script>

