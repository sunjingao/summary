<template>
    <div class="v-yearpicker v-popper">
        <div class="v-popper-content">
            <div class="title">
                <div @click="operateYears('left')"><<</div>
                <div>{{pickerObj.title}}</div>
                <div @click="operateYears('right')">>></div>
            </div>
            <div class="content">
                <div
                    v-for="item in pickerObj.content"
                    @click.stop="confirm(item)"
                    :class="[
                        item.disabled ? 'disabled' : 'enable',
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

  import '../../css/yearpicker.scss';

  export default {

    name: "yearpicker",

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

      isDisabled(value, range) {

        let borderValue = NaN;

        // 判断当range中的end存在而start不存在的情况
        if (
          range.some(x => {
            if (!!x.end && !x.start) {
              return borderValue = x.end.year;
            }
          })
        ) {
          if (value <= borderValue) {
            return false;
          }
        }

        // 判断当range中的start存在而end不存在的情况
        if (
          range.some(x => {
            if (!!x.start && !x.end) {
              return borderValue = x.start.year;
            }
          })
        ) {
          if (value >= borderValue) {
            return false;
          }
        }

        // 对范围进行判断
        return !range.some(x => {
          return !!x.start && !!x.end && value >= x.start.year && value <= x.end.year;
        });
      },

      // 配置pickObj
      configPickObj(year, yearStart, yearEnd) {

        let pickerObj = {
          year: year, // 当前选中的时间
          title: `${yearStart} - ${yearEnd}`, // 标题
          content: [] // 年份数组
        };

        for (let yearIndex = yearStart; yearIndex <= yearEnd; yearIndex++) {
          pickerObj.content.push({
            value: yearIndex,
            selected: pickerObj.year === yearIndex,
            disabled: this.options && this.options.range && this.isDisabled(yearIndex, this.options.range),
          });
        }

        return pickerObj;
      },

      // 对pickerObj进行赋值
      initPickerObj() {

        let year = -1, yearStart = -1, yearEnd = -1;

        year = this.selectedDate.year;
        yearStart = parseFloat(String(year).substring(0, 3) + 0);
        yearEnd = parseFloat(String(year).substring(0, 3) + 9);

        return this.pickerObj = this.configPickObj(year, yearStart, yearEnd);
      },

      // 进行前十年或后十年的操作时
      operateYears(addOrDec) {

        let pickerObj = this.pickerObj,
          yearStart = +pickerObj.title.split('-')[0].trim() + (addOrDec === "left" ? (-10) : (+10)),
          yearEnd = yearStart + 9;

        this.pickerObj = this.configPickObj(pickerObj.year, yearStart, yearEnd);
      },

      // 选中某个时间点的时候
      confirm(item) {
        if (!item.disabled) {
          this.$emit(
            "select",
            {
              year: item.value
            }
          )
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
        immediate: true,
        deep: true,
        handler() {
          this.initPickerObj();
        }
      }
    }
  }
</script>

