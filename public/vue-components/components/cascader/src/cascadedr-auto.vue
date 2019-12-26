<template>
    <div
        class="v-cascader-auto v-hover-show-scrollbar"
        :style="{
           width: `${itemWidth}px`,
           maxHeight: `${popperMaxHeight}px`,
        }"
    >

        <ul class="v-cascader-ul">
            <li
                v-for="(val, index) in item"
                class=""
                :class="{
                   'over': val.over,
                   'selected': val.selected,
                   'disabled': val.disabled
                }"
                :style="{
                   height: `${itemHeight}px` ,
                   lineHeight: `${itemHeight}px`
                }"
                :title="val.label"
                @click="clickLi(val, index)"
                @mouseenter="mouseEnter(val, index)"
            >
                <!--存在模板时渲染-->
                <template v-if="injectComponentName">
                    <component
                        :is="injectComponentName"
                        :item="val"
                    >
                    </component>
                </template>
                <!--不存在模板时渲染-->
                <template v-else>
                    {{val.label}}
                </template>
                <i v-if="val.selected"
                   class="iconfont icon-caozuochenggong directionLeft">
                </i>
                <i v-if="val.children && val.children.length > 0"
                   class="iconfont icon-right directionRight">
                </i>
            </li>
        </ul>
    </div>
</template>

<script>

  export default {

    name: 'v-cascadedr-auto',

    props: {
      // 展示的内容
      item: {
        required: true,
        type: Array,
        default: function () {
          return []
        }
      },
      // 是否hover触发
      hoverTrigger: {
        required: false,
        type: Boolean,
        default: false
      },
      // 组件名称，用于每条信息的展示
      injectComponentName: {
        required: false,
        type: String
      },
      // 自适应组件的高度
      popperMaxHeight: {
        required: true,
        type: Number
      },
      // 自动提示组件中每条数据的宽度
      itemWidth: {},
      // 自动提示组件中每条数据的高度
      itemHeight: {},
      // 当前 item 是集合的第n项，用于删除
      index: {},
    },

    data() {
      return {}
    },

    methods: {

      clickLi(item, index) {

        if (item.disabled) {
          return;
        }

        !item.children || item.children.length === 0 ?
          this.$emit('cascaderSelected', item, this.index, index) :
          this.$emit('cascaderOver', item, this.index, index);
      },

      mouseEnter(item, index) {

        if (item.disabled || !this.hoverTrigger || !item.children || item.children.length === 0) {
          return;
        }

        !item.children || item.children.length === 0 ?
          this.$emit('cascaderSelected', item, this.index, index) :
          this.$emit('cascaderOver', item, this.index, index);
      }
    },
  }
</script>

