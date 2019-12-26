<template>

    <div
        class="v-loading"
        :class="[loadingClass]"
        :style="{
            zIndex: zIndex,
            top: top,
            left: left,
            width: width,
            height: height,
            opacity: opacity,
        }"
    >
        <div class="content" :class="[contentClass]">
            <component v-if="componentName" :is="componentName"></component>
            <template v-else>
                <i v-if="showLoadingIcon" class="iconfont icon-loading loading-img"></i>
                <div class="text" v-if="text" v-html="text"></div>
            </template>
        </div>
    </div>

</template>

<script>

  import '../css/loading.scss';

  export default {

    name: 'v-loading',

    data() {
      return {
        showLoadingIcon: true, // 是否展示遮蔽罩的背景图片
        text: "",  // 图标下方的加载文字
        loadingClass: '', // loading样式
        contentClass: "",  // content区域样回收控制
        componentName: "", // 自定义组件名称

        top: 0,
        left: 0,
        width: 0,
        height: 0,
        opacity: 0,
        zIndex: 0,
      }
    },
  }
</script>
