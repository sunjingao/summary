<template>
    <div class="v-breadcrumbItem" :class="[showHref&&'showHref']">
        <div @click="jump">
            <slot></slot>
        </div>
        <span v-if="showSeparator" class="separator">{{$parent.separator}}</span>
        <span v-if="$parent.separatorClass" :class="[$parent.separatorClass]"></span>
    </div>
</template>

<script>

  import '../css/breadcrumbItem.scss';

  export default {

    name: "v-breadcrumb-item",

    props: {
      to: {
        required: false,
        type: String,
        default: ''
      }
    },

    data() {
      return {
        showSeparator: true
      }
    },

    computed: {

      showHref() {
        return this.to && true;
      },
    },

    methods: {

      jump() {
        this.to && (window.location.href = String(this.to));
      },

      setIsShowSeparator() {

        let children = this.$parent.$children;
        this.showSeparator = children[children.length - 1] !== this;
      },
    },

    mounted() {

      this.setIsShowSeparator();
    },
  }
</script>

