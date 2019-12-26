<template>
    <div class="v-divider" :class="[direction,showLine&&'showLine']">

        <template v-if="direction==='horizontal'">
            <template v-if="$slots.default">
                <div class="slot" :class="[position]">
                    <slot></slot>
                </div>
            </template>
            <template v-else>
                <div :class="[showLine&&'showLine']"></div>
            </template>
        </template>
    </div>
</template>

<script>

  import '../css/divider.scss';

  export default {

    name: "v-divider",

    props: {
      direction: {
        require: false,
        type: String,
        validator(val) {
          return ['horizontal', 'vertical'].includes(val);
        },
        default: 'horizontal'
      },
      position: {
        require: false,
        type: String,
        validator(val) {
          return ['left', 'right', 'center'].includes(val);
        },
        default: 'left'
      },
      showLine: {
        require: false,
        type: Boolean,
        default: true
      },
    },
  }
</script>
