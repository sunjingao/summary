<template>

    <div class="v-rate">
        <div class="v-rate-content" @mouseout="outHandle">
            <div
                v-for="(item,index) in iconsSetting"
                class="v-item"
            >
                <template v-if="scoreTemplate===undefined">
                    <div
                        class="v-rate-pointer"
                        @mouseover="overHandle(index)"
                        @click="clickHandle(index)"
                    >
                        <div
                            class="iconfont icon-rateDefault v-mr5"
                            :class="[
                                item.color?'v-rate-item-select-color':'',
                                index === selectedIndex ? 'test':''
                            ]"
                        >
                        </div>
                    </div>
                </template>
                <template v-else>
                    <div class="iconfont icon-rateDefault v-mr5">
                        <div class="v-item-score-select">
                            <div
                                class="iconfont icon-rateDefault v-hidden v-pa1"
                                :class="[item.color?'v-rate-item-select-color':'']"
                                :style="{width:getWidth(index)}"
                            >
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
        <span class="v-font">
            {{text[hoverIndex === -1 ? selectedIndex : hoverIndex]}}
        </span>
    </div>

</template>

<script>

  import '../css/rate.scss';

  export default {

    name: 'v-rate',

    props: {
      iconNo: {
        required: false,
        type: Number,
        default: 5
      },
      selectNo: {
        required: false,
        type: Number,
        default: 3
      },
      scoreTemplate: {
        required: false,
        type: Number,
      },
      text: {
        required: false,
        type: Array,
        default: function () {
          return [];
        }
      }
    },

    data() {
      return {
        iconsSetting: this.getIconsSetting(),
        selectedIndex: this.selectNo - 1,
        hoverIndex: -1
      }
    },

    methods: {

      getIconsSetting() {

        let iconsSetting = [],
          no = this.scoreTemplate ? this.scoreTemplate - 1 : this.selectNo - 1;

        for (let index = 0; index < this.iconNo; index++) {
          if (
            index <= no || index - no < 1
          ) {
            iconsSetting.push({
              color: true,
            });
          } else {
            iconsSetting.push({
              color: false,
            });
          }
        }

        return iconsSetting
      },

      overHandle(hoverIndex) {

        this.hoverIndex = hoverIndex;

        this.iconsSetting.forEach((item, index) => {
          item.color = index <= hoverIndex;
        });
      },

      outHandle() {

        if (this.scoreTemplate) {
          return;
        }

        this.hoverIndex = -1;

        this.iconsSetting.forEach((item, index) => {
          item.color = index <= this.selectedIndex
        });
      },

      clickHandle(index) {
        this.selectedIndex = index;
      },

      getWidth(index) {

        let no = this.scoreTemplate - 1;

        if (no - index < 0 && no - index > -1) {
          return `${(no + 1 - index) * 100}%`;
        } else {
          return '100%';
        }
      },

    },

    watch: {

      'iconNo': function () {

        this.iconsSetting = this.getIconsSetting();
      },

      'selectedIndex': function (newVal) {

        this.$emit('rateSelectChange', newVal);
      }
    }
  }
</script>




