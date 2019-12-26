<template>
    <div class="v-slider" @click="jump">

        <div
            ref="finished-part"
            class="finished-part"
            :class="[disabled && 'disabled']"
            :style="{width: finishedWidth}"
        ></div>

        <template v-if="showTooltip">
            <div
                ref="circular-part"
                class="circular-part"
                :class="[isMoving&&'isMoving',isHover&&'isHover',disabled&&'disabled']"
                :style="{left:circularLeft}"
                @mousedown="moveStart"
                @click="jump"
                @mouseenter="mouseEnter"
                @mouseleave="mouseLeave"
            >
                <v-tooltip ref="tooltip" :content="currentContent" placement="top" :disabled="true">
                    <div class="tooltip-reference"></div>
                </v-tooltip>
            </div>
        </template>
        <template v-else>
            <div
                ref="circular-part"
                class="circular-part"
                :style="{left:circularLeft}"
                :class="[isMoving&&'isMoving',disabled&&'disabled']"
                @mousedown="moveStart"
                @click="jump"
            ></div>
        </template>

        <div v-if="showStops || marks.length > 0" class="stop-part">
            <template v-if="marks.length > 0">
                <div
                    v-for="item in marks"
                    :style="{left: item.left}"
                    class="item"
                >
                    <div v-html="item.value" class="mark-html"></div>
                </div>
            </template>
            <template v-else>
                <div
                    v-for="item in stopsArray"
                    :style="{left: item.left}"
                    class="item"
                ></div>
            </template>
        </div>
    </div>
</template>

<script>

  import '../css/slider.scss';

  export default {

    name: "v-slider",

    props: {

      value: {
        require: false,
        type: Number,
        default: 0
      },
      min: {
        require: false,
        type: Number,
        default: 0
      },
      max: {
        require: false,
        type: Number,
        default: 100
      },
      step: {
        require: false,
        type: Number,
        default: 1
      },
      showTooltip: {
        require: false,
        type: Boolean,
        default: true
      },
      formatTooltip: {
        require: false,
        type: Function,
      },
      showStops: {
        require: false,
        type: Boolean,
        default: false
      },
      marks: {
        require: false,
        type: Array,
        default: function () {
          return [];
        }
      },
      disabled: {
        require: false,
        type: Boolean,
        default: false
      },
    },

    data() {

      return {

        circularLeft: 0, // 球体距离左侧的百分比
        finishedWidth: 0, // 已完成的进度条的百分比
        currentContent: String(this.value), // 当前展示的内容
        isHover: false, // 当前是否是浮动状态
        isMoving: false, // 当前是否在移动状态
        rangeArray: [], // 起始点到截止点中所有有效的点值集合
        stopsArray: [] // 当showStops为真时，记录间隔点集合
      }
    },

    computed: {

      // 是否展示tooltip
      isShowToolTip() {
        return this.showTooltip && (this.isHover || this.isMoving);
      },
    },

    methods: {

      emit(val) {

        if (val === this.value) {
          return;
        }

        this.$emit('input', val);
        this.$emit('change', val);
      },

      initRangeArray() {

        let rangeArray = [];
        for (let index = this.min; index <= this.max; index += this.step) {
          rangeArray.push(index);
        }
        this.rangeArray = rangeArray;
      },

      initStopsArray() {

        let len = (this.max - this.min) / this.step,
          circularRect = this.$refs['circular-part'].getBoundingClientRect();
        for (let index = 1; index < len; index++) {
          this.stopsArray.push(
            {
              left: `calc(${index * this.step}% - ${circularRect.width / 2}px)`
            }
          );
        }
      },

      initCircularPlace() {

        let circularRect = this.$refs['circular-part'].getBoundingClientRect(),
          percent = (this.value - this.min) / (this.max - this.min) * 100;

        this.circularLeft = `calc(${percent}% - ${circularRect.width / 2}px)`;
        this.finishedWidth = `${percent}%`;
      },

      setTipContent(percent) {

        let content = '';
        if (this.formatTooltip) {
          content = String(this.formatTooltip(percent));
        } else {
          content = String(percent);
        }
        this.currentContent = content;
      },

      getCurrentPoint(val) {

        let emitValue = (this.max - this.min) * val + this.min;

        if (!this.rangeArray.includes(emitValue)) {

          this.rangeArray.every(
            (value, index) => {
              if (index === 0 && emitValue <= value) {
                emitValue = value;
                return false;
              } else if (index === this.rangeArray.length - 1 && emitValue >= value) {
                emitValue = value;
                return false;
              } else if (emitValue > value && emitValue < this.rangeArray[index + 1]) {
                emitValue = emitValue - value >= this.rangeArray[index + 1] - emitValue ?
                  this.rangeArray[index + 1] : value;
                return false
              }
              return true;
            }
          )
        }

        return emitValue;
      },

      getPercent(point) {
        return (point - this.min) / (this.max - this.min) * 100;
      },

      mouseEnter() {
        this.isHover = true;
      },

      mouseLeave() {
        this.isHover = false;
      },

      moveStart() {

        if (this.disabled) {
          return;
        }

        this.isMoving = true;

        this.bindEvents();
      },

      move(event) {

        if (!this.isMoving) {
          return;
        }

        requestAnimationFrame(
          _ => {

            let fatherRect = this.$el.getBoundingClientRect(),
              movingRect = this.$refs['circular-part'].getBoundingClientRect();

            let finishedPercent = 0;

            if (event.pageX >= fatherRect.left && event.pageX <= fatherRect.right) {
              finishedPercent = (event.pageX - fatherRect.left) / fatherRect.width;
            } else if (event.pageX > fatherRect.right) {
              finishedPercent = 1;
            } else if (event.pageX < fatherRect.left) {
              finishedPercent = 0;
            }

            let currentPoint = this.getCurrentPoint(finishedPercent),
              percent = this.getPercent(currentPoint);

            this.setTipContent(currentPoint);

            this.circularLeft = `calc(${percent}% - ${movingRect.width / 2}px)`;
            this.finishedWidth = `${percent}%`;
          }
        );
      },

      moveEnd(event) {

        let fatherRect = this.$el.getBoundingClientRect(),
          currentPoint = this.getCurrentPoint((event.pageX - fatherRect.left) / fatherRect.width);

        this.isMoving = false;

        this.removeEvents();

        this.setTipContent(currentPoint);

        this.emit(currentPoint);
      },

      jump(event) {

        if (this.disabled) {
          return;
        }

        requestAnimationFrame(
          _ => {

            let fatherRect = this.$el.getBoundingClientRect(),
              circularRect = this.$refs['circular-part'].getBoundingClientRect();

            if (event.pageX >= fatherRect.left && event.pageX <= fatherRect.right) {

              let percent = (event.pageX - fatherRect.left) / fatherRect.width,
                currentPoint = this.getCurrentPoint(percent);

              percent = this.getPercent(currentPoint);

              this.circularLeft = `calc(${percent}% - ${circularRect.width / 2}px)`;
              this.finishedWidth = `${percent}%`;

              this.emit(percent);
              this.setTipContent(currentPoint);
            }
          }
        );
      },

      bindEvents() {

        document.addEventListener(
          'mousemove',
          this.move
        );

        document.addEventListener(
          'mouseup',
          this.moveEnd
        );
      },

      removeEvents() {

        document.removeEventListener(
          'mousemove',
          this.move
        );

        document.removeEventListener(
          'mouseup',
          this.moveEnd
        );
      },
    },

    watch: {

      isShowToolTip(val) {

        if (val) {
          this.$refs.tooltip.show();
        } else {
          this.$refs.tooltip.hide();
        }
      },
    },

    created() {

      this.initRangeArray();
    },

    mounted() {

      this.showStops && this.initStopsArray();

      this.initCircularPlace();
    },
  }
</script>
