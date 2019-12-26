<template>
    <div class="v-date-time-picker v-popper">
        <div class="v-popper-content">
            <div class="title">
                <div class="year">
                    <div class="leftYear" @click="changeTime(1)"><<</div>
                    <div class="leftMonth" @click="changeTime(2)"><</div>
                    <div class="yearAndMonth">
                        <span class="year">{{pickerObj.titleYear}}</span>
                        <span> 年 </span>
                        <span class="month">{{pickerObj.titleMonth + 1}}</span>
                        <span> 月</span>
                    </div>
                    <div class="rightYear" @click="changeTime(3)">></div>
                    <div class="rightMonth" @click="changeTime(4)">>></div>
                </div>
                <div class="week">
                    <div v-for="item in weekList">{{item}}</div>
                </div>
            </div>

            <div class="content">
                <div
                    v-for="(item,index) in pickerObj.content"
                    @click.stop="confirm(item,index)"
                    :class="[
                        item.month!==pickerObj.titleMonth&&'notSelfMonth',
                        item.disabled?'disabled':'canSelect',
                        item.selected&&'selected'
                     ]"
                >{{item.value}}
                </div>
            </div>
        </div>
        <div class="v-popper-arrow"></div>
    </div>
</template>

<script>

  import '../../css/datetimepicker.scss';

  export default {

    name: "datetimepicker",

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
        weekList: ["一", "二", "三", "四", "五", "六", "日"],
        pickerObj: null,
      }
    },

    methods: {

      isDisabled(year, month, date) {

        let borderObj = NaN,
          range = this.options.range;

        // 判断当range中的end存在而start不存在的情况
        if (
          range.some(x => {
            if (!!x.end && !x.start) {
              return borderObj = x.end;
            }
          })
        ) {
          if (
            year < borderObj.year ||
            year === borderObj.year && month < borderObj.month - 1 ||
            year === borderObj.year && month === borderObj.month - 1 && date <= borderObj.date
          ) {
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
          if (
            year > borderObj.year ||
            year === borderObj.year && month > borderObj.month - 1 ||
            year === borderObj.year && month === borderObj.month - 1 && date >= borderObj.date
          ) {
            return false;
          }
        }

        // 对范围进行判断
        return !range.some(x => {
          return !!x.start && !!x.end &&
            (x.start.year < year || x.start.year === year && x.start.month - 1 < month || x.start.year === year && x.start.month - 1 === month && x.start.date <= date) &&
            (x.end.year > year || x.end.year === year && x.end.month - 1 > month || x.end.year === year && x.end.month - 1 === month && x.end.date >= date);
        });
      },

      // type
      // 1：年份-1  2：月份-1  3：月份+1  4：年份+1
      changeTime(type) {

        switch (type) {
          case 1:
            --this.pickerObj.titleYear;
            break;
          case 2:
            if (!this.pickerObj.titleMonth) {
              --this.pickerObj.titleYear;
              this.pickerObj.titleMonth = 11;
            } else {
              --this.pickerObj.titleMonth;
            }
            break;
          case 3:
            if (this.pickerObj.titleMonth === 11) {
              ++this.pickerObj.titleYear;
              this.pickerObj.titleMonth = 0;
            } else {
              ++this.pickerObj.titleMonth;
            }
            break;
          case 4:
            ++this.pickerObj.titleYear;
            break;
          default:
            return;
        }

        this.initPickerObjContent(
          this.pickerObj,
          new Date(this.pickerObj.titleYear, this.pickerObj.titleMonth, 1).getDay(),
          new Date(this.pickerObj.titleYear, this.pickerObj.titleMonth + 1, 0).getDate(),
          new Date(this.pickerObj.titleYear, this.pickerObj.titleMonth, 0).getDate()
        );
      },

      initPickerObj() {

        let pickerObj = {
          titleYear: -1,
          titleMonth: -1,
          selectYear: -1,
          selectMonth: -1,
          selectDate: -1,
          content: []
        };

        let year = this.selectedDate.year,
          month = this.selectedDate.month,
          date = this.selectedDate.date;

        pickerObj.titleYear = pickerObj.selectYear = year;
        pickerObj.titleMonth = pickerObj.selectMonth = month;
        pickerObj.selectDate = date;

        this.initPickerObjContent(
          pickerObj,
          new Date(year, month, 1).getDay(),
          new Date(year, (month + 1), 0).getDate(),
          new Date(year, month, 0).getDate()
        );

        this.pickerObj = pickerObj;
      },

      // 本月第一天是星期几，本月有多少天，上个月有多少天
      initPickerObjContent(pickerObj, selfMonthFirstDay, curMonthDays, lastMonthLastDays) {

        // 在日历表上，第一天的索引和最后一天的索引
        let curFirstDayIndex = selfMonthFirstDay === 1 ? 7 : (selfMonthFirstDay === 0 ? 6 : selfMonthFirstDay - 1),
          curLastDayIndex = selfMonthFirstDay === 1 ? 7 + curMonthDays - 1 :
            (selfMonthFirstDay === 0 ? 6 : selfMonthFirstDay - 1) + curMonthDays - 1;

        pickerObj.content = [];

        for (let dayIndex = 0; dayIndex < 6 * 7; dayIndex++) {

          if (dayIndex < curFirstDayIndex) {

            let time = new Date(pickerObj.titleYear, pickerObj.titleMonth - 1, 1),
              year = time.getFullYear(),
              month = time.getMonth(),
              date = lastMonthLastDays - (curFirstDayIndex - 1) + dayIndex;
            pickerObj.content.push(
              {
                value: date,
                year: year,
                month: month,
                disabled: this.options && this.options.range && this.isDisabled(year, month, date),
                selected: false
              }
            );
          } else if (dayIndex >= curFirstDayIndex && dayIndex <= curLastDayIndex) {
            let date = dayIndex - (curFirstDayIndex - 1);
            pickerObj.content.push(
              {
                value: date,
                year: pickerObj.titleYear,
                month: pickerObj.titleMonth,
                disabled: this.options && this.options.range && this.isDisabled(pickerObj.titleYear, pickerObj.titleMonth, date),
                selected: pickerObj.titleYear === pickerObj.selectYear &&
                pickerObj.titleMonth === pickerObj.selectMonth &&
                pickerObj.selectDate === date
              }
            );
          } else if (dayIndex > curLastDayIndex) {
            let time = new Date(pickerObj.titleYear, pickerObj.titleMonth + 1, 1),
              year = time.getFullYear(),
              month = time.getMonth(),
              date = dayIndex - curMonthDays - (curFirstDayIndex - 1);
            pickerObj.content.push(
              {
                value: date,
                year: time.getFullYear(),
                month: time.getMonth(),
                disabled: this.options && this.options.range && this.isDisabled(year, month, date),
                selected: false
              }
            );
          }
        }
      },

      confirm(item) {

        if (item.disabled) {
          return;
        }

        this.$emit(
          "select",
          {
            year: item.year,
            month: item.month,
            date: item.value
          }
        )
      },

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


