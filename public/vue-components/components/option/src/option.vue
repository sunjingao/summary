<template>
    <li
        @click.stop="clickOption(value, label, $event)"
        :class="[
            'v-option',
            isActive ? 'active' : '',
            disabled ? 'disabled' : ''
        ]"
    >
        <template v-if="$slots.default">
            <slot></slot>
        </template>
        <template v-else>{{label}}</template>
    </li>
</template>

<script>

  import '../css/option.scss';

  export default {

    name: "v-option",

    props: {
      value: {
        required: true,
      },
      label: {
        required: true,
      },
      disabled: {
        required: false,
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        parentNames: {
          single: 'v-select-single',
          multiple: 'v-select-multiple'
        }
      }
    },

    computed: {

      selectComponentParent() {

        let parent = this.$parent;

        while (
          parent.$options.name !== this.parentNames.single &&
          parent.$options.name !== this.parentNames.multiple
          ) {
          parent = parent.$parent;
        }
        return parent;
      },

      componentParentSingle() {

        return this.selectComponentParent.$options.name === this.parentNames.single;
      },

      isActive() {

        let componentValue = this.selectComponentParent.showValue;

        return this.componentParentSingle && componentValue === this.value ||
          !this.componentParentSingle && componentValue.includes(this.value);
      },
    },

    methods: {

      clickOption(event) {

        if (this.disabled) {
          return;
        }

        this.initOption();

        this.selectComponentParent.triggerClick(this.value, this.label, event);
      },

      initOption() {

        if (this.disabled) {
          return;
        }

        if (this.componentParentSingle) {
          this.selectComponentParent.showValue = this.value;
          this.selectComponentParent.showLabel = this.label;
        } else {

          let parentValue = this.selectComponentParent.showValue,
            parentLabel = this.selectComponentParent.showLabel;

          if (parentValue.includes(this.value)) {
            parentValue.splice(parentValue.indexOf(this.value), 1);
          } else {
            parentValue.push(this.value);
          }

          if (parentLabel.includes(this.label)) {
            parentLabel.splice(parentLabel.indexOf(this.label), 1);
          } else {
            parentLabel.push(this.label);
          }
        }
      },
    },

    mounted() {

      if (this.isActive) {

        this.initOption();
      }
    },

    watch: {
      'selectComponentParent.$data.updateSign'() {

        let parentValue = this.selectComponentParent.showValue,
          parentLabel = this.selectComponentParent.showLabel;

        if (parentValue.includes(this.value)) {
          parentLabel.push(this.label);
        }
      }
    }
  }
</script>

