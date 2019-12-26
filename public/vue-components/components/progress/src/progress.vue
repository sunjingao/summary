<template>

    <div class="v-progress">

        <template v-if="type==='line'">
            <div class="out-line" :style="{width:`${width}px`, height:spacing + 'px'}">
                <div class="line" :style="{borderRadius:`${spacing / 2}px`}">
                    <div
                        class="finished"
                        :style="{
                            width:`${percentage}%`,
                            height:spacing + 'px',
                            borderRadius:`${spacing / 2}px`,
                            backgroundColor:getBgColor
                        }"
                    >
                    </div>
                </div>
                <template v-if="$slots.text">
                    <div class="text">
                        <slot name="text"></slot>
                    </div>
                </template>
                <div
                    v-else
                    class="text"
                    :style="{
                        width: `${textWidth}px`,
                        left: textInside ? `calc(${percentage}% - ${textWidth + 10}px)` : 'auto'
                    }"
                    :class="[textInside&&'inside']"
                >
                    {{getShowText}}
                </div>
            </div>
        </template>
        <template v-else>
            <div
                class="circle"
                :style="{width:`${diameter}px`,height:`${diameter}px`}"
            >
                <div
                    class="inner"
                    :style="{
                        width:`${diameter - spacing*2}px`,
                        height:`${diameter - spacing*2}px`,
                        marginTop:`${spacing}px`,
                        marginLeft:`${spacing}px`
                    }"
                >
                </div>

                <div class="right">
                    <div class="rightFinish" :style="{transform: getRightDeg, backgroundColor: bgColor}"></div>
                </div>

                <div class="left">
                    <div class="leftFinish" :style="{transform: getLeftDeg, backgroundColor: bgColor}"></div>
                </div>

                <div class="text">{{getShowText}}</div>
            </div>
        </template>
    </div>
</template>

<script>

  import '../css/progress.scss';

  export default {

    name: "v-progress",

    props: {

      percentage: {
        require: true,
        type: Number,
      },
      type: {
        require: false,
        type: String,
        validator(val) {
          return ['line', 'circle'].includes(val);
        },
        default: 'line'
      },
      width: {
        require: false,
        type: Number,
        default: 400
      },
      spacing: {
        require: false,
        type: Number,
        default: 6
      },
      format: {
        require: false,
        type: Function,
      },
      textWidth: {
        require: false,
        type: Number,
        default: 30
      },
      textInside: {
        require: false,
        type: Boolean,
        default: false
      },
      bgColor: {
        require: false,
        type: [String, Array, Function],
        default: '#409eff'
      },
      // 圆的直径
      diameter: {
        require: false,
        type: Number,
        default: 150
      },
    },

    computed: {

      getShowText() {

        return this.format ? this.format(this.percentage) : `${this.percentage}%`;
      },

      getBgColor() {

        let colorType = typeof this.bgColor;

        switch (colorType) {
          case 'string':
            return this.bgColor;
          case 'object':
            let arr = [...this.bgColor].sort((a, b) => a.percentage - b.percentage);
            return arr.find(item => this.percentage <= item.percentage).bgColor;
          case 'function':
            return this.bgColor(this.percentage);
        }
      },

      getRightDeg() {

        let deg = (this.percentage > 50 ? 1 : this.percentage / 50) * 180;
        return `rotate(${deg}deg)`;
      },

      getLeftDeg() {

        let percentage = this.percentage - 50,
          deg = (percentage <= 0 ? 0 : (percentage / 50)) * 180;
        return `rotate(${deg}deg)`;
      },
    },
  }
</script>
