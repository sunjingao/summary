<template>
    <div class="v-collapse">
        <slot></slot>
    </div>
</template>

<script>

  import '../css/collapse.scss';

  export default {

    name: "v-collapse",

    props: {

      value: {
        require: false,
        type: [String, Array],
      },
      accordion: {
        require: false,
        type: Boolean,
        default: false
      },
    },

    methods: {

      emitValue(activeName) {

        let openItems;

        if (this.accordion) {

          this.$emit('input', openItems = activeName);
        }
        else {

          openItems = [...(this.value || [])];

          if (openItems.includes(activeName)) {
            openItems.splice(openItems.indexOf(activeName), 1);
          }
          else {
            openItems.push(activeName);
          }

          this.$emit('input', openItems);
        }

        return openItems;
      },

      change(activeName) {

        let openItems = this.emitValue(activeName);

        this.$emit('change', openItems);
      }
    },
  }
</script>
