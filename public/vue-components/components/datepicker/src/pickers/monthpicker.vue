<template>
    <div class="v-monthpicker v-popper">
        <div class="v-popper-content">
            <div class="title">
                <div @click="operateYears('left')"> <<</div>
                <div>{{pickerObj.titleYear}}</div>
                <div @click="operateYears('right')"> >></div>
            </div>
            <div class="content">
                <div
                    v-for="item in pickerObj.content"
                    @click.stop="confirm(item)"
                    :class="[
                        item.disabled ? 'disabled' : 'able',
                        item.selected ? 'selected' : ''
                    ]"
                >
                    {{item.value}}
                </div>
            </div>
        </div>
        <div class="v-popper-arrow"></div>
    </div>
</template>

<script>

  import '../../css/monthpicker.scss';

  export default {

    name: "monthpicker",

    props: {
      // 参数配置
      options: {
        required: false,
        type: Object
      },
      selectedDate: {
        required: false,
        type: Object
      }
    },

    data() {
      return {
        pickerObj: null,
      }
    },

    methods: {

      // 将月份索引转为对应的月份
      convertIndexToMonth(monthIndex) {
        switch (monthIndex) {
          case 0:
            return "一月";
          case 1:
            return "二月";
          case 2:
            return "三月";
          case 3:
            return "四月";
          case 4:
            return "五月";
          case 5:
            return "六月";
          case 6:
            return "七月";
          case 7:
            return "八月";
          case 8:
            return "九月";
          case 9:
            return "十月";
          case 10:
            return "十一月";
          case 11:
            return "十二月";
        }
      },

      // 判断是否可选
      isDisabled(monthIndex, pickerObj, range) {

        let borderObj = NaN;

        // 判断当range中的end存在而start不存在的情况
        if (
          range.some(x => {
            if (!!x.end && !x.start) {
              return borderObj = x.end;
            }
          })
        ) {
          if (pickerObj.titleYear < borderObj.year || (pickerObj.titleYear === borderObj.year && monthIndex <= borderObj.month - 1)) {
            return false;
          }
        }

        // 判断当range中的start存在而end不存在的情况
        if (
          range.some(x => {
            if (!!x.start && !x.end) {
              return borderObj = x.start;
            }
          })
        ) {
          if (+pickerObj.titleYear > borderObj.year || (pickerObj.titleYear === borderObj.year && monthIndex >= borderObj.month - 1)) {
            return false;
          }
        }

        // 对范围进行判断
        return !range.some(x => {
          return !!x.start && !!x.end &&
            (x.start.year < pickerObj.titleYear || (x.start.year === pickerObj.titleYear && x.start.month - 1 <= monthIndex)) &&
            (x.end.year > pickerObj.titleYear || (x.end.year === pickerObj.titleYear && x.end.month - 1 >= monthIndex));
        });

      },

      // 初始化 pickerObj
      initPickerObj() {

        this.setPickerObj(this.selectedDate.year, this.selectedDate.year, this.selectedDate.month);
      },

      // 进行前十年或后十年的操作时
      operateYears(addOrSub) {

        this.setPickerObj(
          this.pickerObj.titleYear + (addOrSub === "left" ? (-1) : (+1)),
          this.pickerObj.selectYear,
          this.selectedDate.month
        );
      },

      // pickerObj赋值
      setPickerObj(titleYear, selectYear, selectMonth) {

        let pickerObj = {
          titleYear: titleYear, // 标题
          selectYear: selectYear, // 保存被选中的年份
          selectMonth: selectMonth, // 保存被选中的月份
          content: []
        };

        for (let monthIndex = 0; monthIndex < 12; monthIndex++) {
          pickerObj.content.push({
            numericMonth: monthIndex,
            value: this.convertIndexToMonth(monthIndex),
            disabled: this.options && this.options.range && this.isDisabled(monthIndex, pickerObj, this.options.range),
            selected: monthIndex === pickerObj.selectMonth && pickerObj.titleYear === pickerObj.selectYear
          })
        }

        return this.pickerObj = pickerObj;
      },

      // 选中某个时间点的时候
      confirm(item) {

        if (!item.disabled) {
          this.$emit("select", {
            year: this.pickerObj.titleYear,
            month: item.numericMonth
          })
        }
      }
    },

    watch: {

      options: {
        deep: true,
        handler: function () {
          this.initPickerObj();
        },
      },

      selectedDate: {
        deep: true,
        immediate: true,
        handler() {
          this.initPickerObj();
        }
      }
    }
  }
</script>
