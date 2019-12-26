#### 分组

自定义组别进行展示

:::demo 分组的展示
```html
<template>

    <v-select v-model="text" @click-option="clickOption">
       <v-option-group
          v-for="(group,index) in options"
          :key="index"
          :label="group.label"
          >
              <v-option
                v-for="(item,key) in group.options"
                :key="key"
                :label="item.label"
                :disabled="item.disabled"
                :value="item.value">
              </v-option>
        </v-option-group>
    </v-select>
</template>
<script>

export default {
  data(){
    return {
        text: '',
        options: [
          {
            label: '热门城市',
            options: [
              {
                value: 'Shanghai',
                label: '上海'
              },
              {
                value: 'Beijing',
                label: '北京'
              }
            ]
          },
          {
            label: '城市名',
            options: [
              {
                value: 'Chengdu',
                label: '成都'
              }, {
                value: 'Shenzhen',
                label: '深圳'
              }, {
                value: 'Guangzhou',
                label: '广州'
              }, {
                value: 'Dalian',
                label: '大连'
              }
            ]
          }
        ],
    }
  },
  methods:{
    clickOption(val, label, event) {
      console.log('click:', val, label, event);
    }
  }
}
</script>
```
:::


