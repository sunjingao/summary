<template>

    <div class="v-timeauto v-popper">

        <div class="v-popper-content">

            <div class="time-area" :class="[showEndTime && 'p5']">

                <div
                    v-if="startOrEndTimeKey === 'startTime' || showEndTime"
                    v-for="(startOrEndTimeObj,startOrEndTimeKey) in dataList"
                    class="startOrEnd-part"
                >
                    <div v-if="showEndTime" class="start-or-end-part_title">
                        <span v-if="startOrEndTimeKey === 'startTime'">开始时间</span>
                        <span v-if="startOrEndTimeKey === 'endTime'">结束时间</span>
                    </div>
                    <div
                        class="hourAndMinuteAndSecond-part"
                        :class="[
                            showEndTime ? 'showBorder':'showBottomBorder',
                            showEndTime && startOrEndTimeKey=== 'endTime' ? 'ml10' : ''
                        ]"
                    >
                        <ul
                            :ref="'timeautoUl' + startOrEndTimeKey + '_' + hourOrMinuteOrSecondKey"
                            v-for="(hourOrMinuteOrSecondObj,hourOrMinuteOrSecondKey) in startOrEndTimeObj"
                            class="v-hourOrMinuteOrSecond-part_ul v-hover-show-scrollbar"
                            :style="{
                                height: `${itemHeight * 5}px`,
                                lineHeight: `${itemHeight}px`,
                                width: `${itemWidth}px`
                            }"
                            @scroll="scroll(startOrEndTimeKey + '_' + hourOrMinuteOrSecondKey)"
                        >
                            <li
                                v-for="(item,itemIndex) in hourOrMinuteOrSecondObj"
                                @click="clickLi(startOrEndTimeKey,hourOrMinuteOrSecondKey,itemIndex)"
                                :class="[
                                    item.class,
                                    item.forbiddenSelected && 'forbiddenSelected',
                                    canHover(startOrEndTimeKey,hourOrMinuteOrSecondKey,itemIndex) && 'overClass'
                                ]"
                                :style="{
                                  height: `${itemHeight}px`,
                                  width: `${itemContentWidth}px`,
                                }"
                            >
                                {{item.value}}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="button-area">
                <span class="cancel" @click.stop="cancel">取消</span>
                <span class="confirm" @click.stop="confirm">确定</span>
            </div>
        </div>

        <div class="v-popper-arrow"></div>

    </div>

</template>

<script>

  import '../css/timeauto.scss';
  import getDataList from "./utils/getDataList.js";
  import autoScroll from "./utils/autoScroll.js";

  export default {

    name: 'timeauto',

    mixins: [getDataList, autoScroll],

    props: {
      timeRange: {
        required: true,
        type: Object,
      },
      changeTime: {
        required: true,
        type: Object,
      },
      showEndTime: {
        required: false,
        type: Boolean,
        default: false
      },
      itemWidth: {
        require: false,
        type: Number,
        default: 50
      },
      itemHeight: {
        required: false,
        type: Number,
        default: 30
      },
    },

    data() {
      return {

        itemContentWidth: this.itemWidth,
        // 要展示的内容，在created中进行配置
        dataList: this.getDataList(),
      }
    },

    computed: {
      // 获得滚动条宽度
      scrollBarWidth() {
        let eleOuter = document.createElement('div');
        eleOuter.style.width = '20px';
        eleOuter.style.height = '20px';
        eleOuter.style.overflow = 'scroll';
        eleOuter.classList.add('v-scroll-test'); // 展示当前滚动条
        eleOuter.style.position = 'absolute';
        eleOuter.style.top = '0';
        eleOuter.style.left = '0';
        eleOuter.style.zIndex = '-9999';
        eleOuter.style.visibility = 'hidden';

        document.body.appendChild(eleOuter);

        let scrollBarWidth = eleOuter.offsetWidth - eleOuter.clientWidth;
        document.body.removeChild(eleOuter);
        return scrollBarWidth;
      },
    },

    methods: {

      // 点击相关条目
      clickLi(startOrEndPart, timePart, index) {

        if (this.dataList[startOrEndPart][timePart][index].forbiddenSelected) {
          return;
        }

        this.$refs['timeautoUl' + startOrEndPart + '_' + timePart][0].scrollTop = this.itemHeight * (index - 2);
      },

      // 确认时的处理
      confirm() {

        let startTimeHour = this.dataList.startTime.hour.find(item => item.selected),
          startTimeMinute = this.dataList.startTime.minute.find(item => item.selected),
          startTimeSecond = this.dataList.startTime.second.find(item => item.selected),
          endTimeHour = !!this.showEndTime && this.dataList.endTime.hour.find(item => item.selected),
          endTimeMinute = !!this.showEndTime && this.dataList.endTime.minute.find(item => item.selected),
          endTimeSecond = !!this.showEndTime && this.dataList.endTime.second.find(item => item.selected),
          allTime = {
            startTime: {
              hour: startTimeHour && startTimeHour.value,
              minute: startTimeMinute && startTimeMinute.value,
              second: startTimeSecond && startTimeSecond.value
            },
            endTime: {
              hour: endTimeHour && endTimeHour.value,
              minute: endTimeMinute && endTimeMinute.value,
              second: endTimeSecond && endTimeSecond.value
            }
          };

        if (
          this.checkIsForBidden(startTimeHour) ||
          this.checkIsForBidden(startTimeMinute) ||
          this.checkIsForBidden(startTimeSecond) ||
          (!!this.showEndTime &&
            (
              this.checkIsForBidden(endTimeHour) ||
              this.checkIsForBidden(endTimeMinute) ||
              this.checkIsForBidden(endTimeSecond)
            )
          )
        ) {
          return;
        }

        this.$emit(
          "autoComplete",
          this.showEndTime ? allTime : {startTime: allTime.startTime}
        );
      },

      // 取消时的处理
      cancel() {
        this.$emit("autoClose");
      },

      // 设置宽度
      setItemContentWidth() {
        this.itemContentWidth = this.itemWidth - this.scrollBarWidth;
      },

      // 是否可以显示hover时的背景颜色
      canHover(startOrEndPart, timePart, index) {

        let item = this.dataList[startOrEndPart][timePart][index];
        return !item.forbiddenSelected && !item.selected && item.value !== '';
      },

      // 判断元素是否禁止选择
      checkIsForBidden(obj) {
        return !obj || obj.forbiddenSelected || !obj.value;
      },
    },

    mounted() {
      this.setItemContentWidth();
    },
  }
</script>




