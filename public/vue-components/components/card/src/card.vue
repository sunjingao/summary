<template>
    <div class="v-card">
        <template v-if="$slots.header">
            <div class="header" :style="headerStyle">
                <slot name="header"></slot>
            </div>
        </template>
        <template v-if="$slots.default">
            <div class="content" :style="contentStyle">
                <slot class="content"></slot>
            </div>
        </template>
    </div>
</template>

<script>

  import '../css/card.scss';

  export default {

    name: "v-card",

    props: {
      headerStyle: {
        require: false,
        type: Object,
        default: function () {
          return {};
        }
      },
      contentStyle: {
        require: false,
        type: Object,
        default: function () {
          return {};
        }
      },
    },
  }
</script>

