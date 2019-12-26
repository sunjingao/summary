<template>
    <div class="v-timeline-item">
        <div class="chart-part">

            <slot v-if="$slots.circular" name="circular"></slot>
            <div v-else class="circular" :style="{backgroundColor:circularColor}"></div>

            <slot v-if="$slots.line" name="line"></slot>
            <div v-else class="line" :class="[isLast&&'isLast']" :style="{backgroundColor:circularColor}"></div>
        </div>
        <div class="words-part">

            <slot v-if="$slots.default"></slot>
            <template v-else>
                <div
                    class="description"
                    :style="{order: placement === 'top' ? 1 : 0}"
                    :class="[placement==='top'&&'bottom']"
                >
                    {{description}}
                </div>
                <div
                    class="time"
                    :style="{order: placement=== 'top' ? 0 : 1}"
                    :class="[placement==='bottom'&&'bottom']"
                >
                    {{time}}
                </div>
            </template>
        </div>
    </div>
</template>

<script>

  import '../css/timeline-item.scss';

  export default {

    name: "v-timeline-item",

    props: {
      time: {
        required: false,
        type: String,
        default: ''
      },
      placement: {
        required: false,
        type: String,
        validator(val) {
          return ['top', 'bottom'].includes(val);
        },
        default: 'bottom'
      },
      description: {
        required: false,
        type: String,
        default: ''
      },
      circularColor: {
        required: false,
        type: String,
        default: '#e4e7ed'
      },
      lineColor: {
        required: false,
        type: String,
        default: '#e4e7ed'
      },
    },

    data() {
      return {
        isLast: false,
      }
    },

    mounted() {

      let children = this.$parent.$children;
      this.isLast = children.indexOf(this) === children.length - 1;
    },
  }
</script>
