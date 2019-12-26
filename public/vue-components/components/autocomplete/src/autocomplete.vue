<template>

    <div class="v-autocomplete" v-click-outside="clickOutside">

        <v-input
            ref="input"
            v-bind="$attrs"
            v-model="showValue"
            @focus="focus"
            @keydown.native.up.prevent="processMove('up')"
            @keydown.native.down.prevent="processMove('down')"
            @keydown.native.enter="handlerEnter()"
        >
            <template v-if="$slots.front">
                <slot name="front" slot="front"></slot>
            </template>
            <template v-if="$slots.behind">
                <slot name="behind" slot="behind"></slot>
            </template>
        </v-input>
        <div
            v-show="isShowPopper && popperData.length > 0"
            ref="popper"
            class="v-popper"
            :style="{lineHeight:popperHeight+'px'}"
        >

            <div ref="popper-content" class="v-popper-content v-hover-show-scrollbar">
                <!--存在模板时渲染-->
                <template v-if="injectComponentName">
                    <component
                        v-for="(item,index) in popperData"
                        class="v-popper-item"
                        :is="injectComponentName"
                        :item="item"
                        :key="index"
                        @click.native="clickOption(item)"
                    >
                    </component>
                </template>
                <!--不存在模板时渲染-->
                <template v-else>
                    <div
                        v-for="item in popperData"
                        class="v-popper-item"
                        @click="clickOption(item)"
                        v-html="item.label"
                    >
                    </div>
                </template>
            </div>

            <div class="v-popper-arrow"></div>
        </div>
    </div>
</template>

<script>

  import '../css/autocomplete.scss';
  import clickOutside from "../../../src/directives/clickoutside"

  export default {

    name: "v-autocomplete",

    inheritAttrs: false,

    directives: {
      'clickOutside': clickOutside
    },

    props: {
      value: {},
      popperHeight: {
        required: false,
        type: Number,
        default: 40
      },
      injectComponentName: {
        required: false,
        type: String
      },
    },

    data() {
      return {
        isShowPopper: false, // 控制是否应该展示popper
        popperData: [], // popper弹层的数据
        popperHandler: null, // popper组件实例化后的句柄
      }
    },

    computed: {
      showValue: {
        get() {
          return this.value;
        },
        set(val) {
          this.query(val);
          this.$emit('input', val);
        },
      },
    },

    methods: {

      clickOutside(event, sign) {

        sign && this.hidePopper();
      },

      focus() {
        this.query(this.showValue);
      },

      clickOption(item) {

        this.selectItem(item);

        this.hidePopper();
      },

      handlerEnter() {

        let elementNodes = this.$refs['popper-content'].children,
          current = this.$refs['popper-content'].querySelector('.active');

        let item = this.popperData[[].slice.call(elementNodes).indexOf(current)];
        this.selectItem(item);
        this.hidePopper();
      },

      query(val) {
        this.$emit(
          'query',
          val,
          array => {
            this.popperData = array;
            this.$nextTick(
              _ => {
                this.showPopper();
              }
            )
          }
        )
      },

      selectItem(item) {

        this.$emit('select', item);
      },

      // 处理按键事件
      processMove(type) {

        this.handlerActive(type);

        this.handlerPlace();
      },

      // 处理选中元素
      handlerActive(type) {

        let popper = this.$refs['popper-content'],
          activeEle = popper.querySelector('.active');
        if (!activeEle) {
          popper.firstChild.classList.add('active');
        } else {
          if (type === 'up') {
            let previousSibling = activeEle.previousSibling;
            previousSibling && (previousSibling.classList.add('active'), activeEle.classList.remove('active'));
          } else {
            let nextSibling = activeEle.nextElementSibling;
            nextSibling && (nextSibling.classList.add('active'), activeEle.classList.remove('active'));
          }
        }
      },

      // 让活动元素在正确的位置展示
      handlerPlace() {

        let popper = this.$refs['popper-content'],
          activeEle = popper.querySelector('.active'),
          popperClientRect = popper.getBoundingClientRect(),
          activeClientRect = activeEle.getBoundingClientRect(),
          itemHeight = activeClientRect.height;

        if (activeClientRect.top > popperClientRect.top + popperClientRect.height - itemHeight) {
          popper.scrollTop += itemHeight;
          this.handlerPlace();
        } else if (activeClientRect.top < popperClientRect.top) {
          popper.scrollTop -= itemHeight;
          this.handlerPlace();
        }
      },

      showPopper() {

        this.$refs['popper-content'].scrollTop = 0;

        this.isShowPopper = true;
        this.popperHandler.show();
      },

      hidePopper() {

        this.popperData = [];
        this.isShowPopper = false;
        this.popperHandler.hide(); // 关闭其事件，提高性能
        this.$refs.input && this.$refs.input.blur();
      },
    },

    mounted() {

      this.popperHandler = new Popper(
        this.$el,
        this.$refs.popper,
        {
          placement: 'bottom-start',
          modifiers: {
            offset: {
              offset: [0, 10]
            }
          }
        }
      );
    },

    beforeDestroy() {
      this.popperHandler.destroy();
    },
  }
</script>

