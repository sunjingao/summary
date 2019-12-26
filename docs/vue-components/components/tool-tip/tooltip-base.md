#### 基本用法

基本用法

:::demo 基本用法
```html
<template>

    <div class="box">
      <div class="top">
        <v-tooltip class="item" content="Top Left 提示文字" placement="top-start">
          <v-button>上左</v-button>
        </v-tooltip>
        <v-tooltip class="item" content="Top Center 提示文字" placement="top">
          <v-button>上边</v-button>
        </v-tooltip>
        <v-tooltip class="item" content="Top Right 提示文字" placement="top-end">
          <v-button>上右</v-button>
        </v-tooltip>
      </div>
      <div class="left">
        <v-tooltip class="item" content="Left Top 提示文字" placement="left-start">
          <v-button :height="70">左上</v-button>
        </v-tooltip>
        <v-tooltip class="item" content="Left Center 提示文字" placement="left">
          <v-button :height="70">左边</v-button>
        </v-tooltip>
        <v-tooltip class="item" content="Left Bottom 提示文字" placement="left-end">
          <v-button :height="70">左下</v-button>
        </v-tooltip>
      </div>
    
      <div class="right">
        <v-tooltip class="item" content="Right Top 提示文字" placement="right-start">
          <v-button :height="70">右上</v-button>
        </v-tooltip>
        <v-tooltip class="item" content="Right Center 提示文字" placement="right">
          <v-button :height="70">右边</v-button>
        </v-tooltip>
        <v-tooltip class="item" content="Right Bottom 提示文字" placement="right-end">
          <v-button :height="70">右下</v-button>
        </v-tooltip>
      </div>
      <div class="bottom">
        <v-tooltip class="item" content="Bottom Left 提示文字" placement="bottom-start">
          <v-button>下左</v-button>
        </v-tooltip>
        <v-tooltip class="item" content="Bottom Center 提示文字" placement="bottom">
          <v-button>下边</v-button>
        </v-tooltip>
        <v-tooltip class="item" content="Bottom Right 提示文字" placement="bottom-end">
          <v-button>下右</v-button>
        </v-tooltip>
      </div>
    </div>
</template>
<script>
export default {
  data(){
    return {
    }
  },
  methods:{
  },
}
</script>
<style scoped>
    .box {
      margin-left: 150px;
      width: 400px;
    }
  
    .top {
      text-align: center;
    }

    .left {
      float: left;
      width: 60px;
    }

    .right {
      float: right;
      width: 60px;
    }

    .bottom {
      clear: both;
      text-align: center;
    }

    .item {
      margin: 4px;
    }

    .left .v-tooltip__popper,
    .right .v-tooltip__popper {
      padding: 8px 10px;
    }
    
</style>
```
:::


