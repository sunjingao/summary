<template>

    <div>

        <v-card class="mt20">
            <div slot="header">
                <h3 class="dib fz20 m0">技术说明</h3>
            </div>
            <div>
                <h4 class="fz18">开发框架</h4>
                vue.js
            </div>
            <div class="mt20">
                <h4 class="fz18">依赖组件</h4>
                自己实现的 popper.js 组件（需全局注入）
            </div>
            <div class="mt20">
                <h4 class="fz18">打包工具</h4>
                webpack4
            </div>
        </v-card>

        <v-card class="mt60">
            <div slot="header">
                <h3 class="dib fz20 m0">使用说明</h3>
            </div>
            <div>
                <h4 class="fz18 mt0">全部引入</h4>
                import {uiInstall} from '../../public/vue-components/register.js';
                <br />
                uiInstall();
            </div>
            <div class="mt20">
                <h4 class="fz18 mt0">按需引入</h4>
                import Button from '../../public/vue-components/components/button/index';
                <br />
                Button.install(Vue);
            </div>
        </v-card>

    </div>
</template>
<script>

  export default {

    name: 'instructions',
  }
</script>

<style scoped>

    h4 {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .fz20 {
        font-size: 20px;
    }

    .fz18 {
        font-size: 18px;
    }

    .mt60 {
        margin-top: 60px;
    }
</style>


