export default {

  data() {
    return {
      timeout: 100,
      // 各个时间部分的scrollTop
      eleScrollTop: {
        startTime_hourTop: 0,
        endTime_hourTop: 0,
        startTime_minuteTop: 0,
        endTime_minuteTop: 0,
        startTime_secondTop: 0,
        endTime_secondTop: 0
      }
    }
  },

  methods: {

    // 自动旋转至选中的部分
    scrollToSelect() {

      for (let [startOrEndIndex, startOrEndObj] of Object.entries(this.dataList)) {

        if (startOrEndIndex !== "endTime" || this.showEndTime) {
          for (let [hMsIndex, hMsObj] of Object.entries(startOrEndObj)) {
            hMsObj.forEach((v, timeIndex) => {
              if (v.selected) {
                this.$refs[`timeautoUl${startOrEndIndex}_${hMsIndex}`][0].scrollTop = (timeIndex - 2) * this.itemHeight;
              }
            })
          }
        }
      }
    },

    // 滚动时，对eleScrollTop中相关的内容赋值
    scroll(content) {
      let element = this.$refs['timeautoUl' + content][0];
      this.eleScrollTop[content + 'Top'] = element.scrollTop;
    },

    // 判断是否被选中的部分是否应该自适应
    adaptJudge(timeDirection, value) {
      setTimeout(
        _ => {
          value === this.eleScrollTop[timeDirection + "Top"] && this.adaptPosition(timeDirection);
        },
        this.timeout
      )
    },

    // 改变被选中部分的颜色
    changeSelectedClass(time) {

      let timeArr = time.split('_');
      this.dataList[timeArr[0]][timeArr[1]].forEach(x => {
        x.class = "";
        x.selected = false;
      });

      let changeClassObj = this.dataList[timeArr[0]][timeArr[1]][(this.$refs['timeautoUl' + time][0].scrollTop) / this.itemHeight + 2];
      if (!changeClassObj.forbiddenSelected) {
        changeClassObj.class = "selected";
        changeClassObj.selected = true;
      }
    },

    // 被选中部分的自适应
    adaptPosition(timeDirection) {

      let itemHeight = this.itemHeight,
        newVal = this.eleScrollTop[timeDirection + "Top"];

      if (newVal % itemHeight > itemHeight / 2) {
        this.$refs['timeautoUl' + timeDirection][0].scrollTop += itemHeight - newVal % itemHeight;
      }
      else if (newVal % itemHeight < itemHeight / 2 && newVal % itemHeight !== 0) {
        this.$refs['timeautoUl' + timeDirection][0].scrollTop -= newVal % itemHeight;
      }
      else if (newVal % itemHeight === 0) {
        this.changeSelectedClass(timeDirection)
      }
    },
  },

  watch: {

    'eleScrollTop.startTime_hourTop': function (newVal) {
      this.adaptJudge("startTime_hour", newVal);
    },
    'eleScrollTop.startTime_minuteTop': function (newVal) {
      this.adaptJudge("startTime_minute", newVal);
    },
    'eleScrollTop.startTime_secondTop': function (newVal) {
      this.adaptJudge("startTime_second", newVal);
    },
    'eleScrollTop.endTime_hourTop': function (newVal) {
      this.adaptJudge("endTime_hour", newVal);
    },
    'eleScrollTop.endTime_minuteTop': function (newVal) {
      this.adaptJudge("endTime_minute", newVal);
    },
    'eleScrollTop.endTime_secondTop': function (newVal) {
      this.adaptJudge("endTime_second", newVal);
    },
  }
}

