<template>

    <div class="v-dib">

        <!--因为是分了两个组件来做，所以要注意事件要向上传递-->

        <component v-if="!multiple" is="selectSingle" v-bind="$attrs" @input="input" @click-option="clickOption"
                   @clean="clean">
            <slot></slot>
        </component>
        <component v-else is="selectMultiple" v-bind="$attrs" @input="input" @click-option="clickOption">
            <slot></slot>
        </component>
    </div>
</template>

<script>

  import '../css/select.scss';
  import selectSingle from './select-single.vue';
  import selectMultiple from './select-multiple.vue';

  export default {

    name: "v-select",

    inheritAttrs: false,

    components: {
      selectSingle,
      selectMultiple,
    },

    props: {
      multiple: {
        required: false,
        type: Boolean,
        default: false
      }
    },

    methods: {
      input() {
        this.$emit('input', ...arguments);
      },
      clickOption() {
        this.$emit('click-option', ...arguments);
      },
      clean() {
        this.$emit('clean', ...arguments);
      },
    },
  }
</script>
