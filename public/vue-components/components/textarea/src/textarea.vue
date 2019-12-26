<template>
    <textarea
        class="v-textarea"
        v-model="showValue"
        :style="styles"
        :placeholder="placeholder"
    >
    </textarea>
</template>

<script>

  import '../css/textarea.scss';
  import {getStyle, setStyle, addClass} from '../../../src/utils/dom.js'

  export default {

    name: "v-textarea",

    props: {

      width: {
        require: false,
        type: Number,
        default: 420
      },
      value: {
        require: true,
        type: String
      },
      placeholder: {
        require: false,
        type: String,
        default: '请输入数据'
      },
      autosize: [Boolean, Object]
    },

    data() {
      return {
        hiddenClass: {
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -9900,
          visibility: 'hidden',
        },
        styles: {
          width: `${this.width}px`,
          height: 'auto',
          minHeight: 'auto'
        }
      }
    },

    computed: {
      showValue: {
        get() {
          return this.value;
        },
        set(data) {
          this.$emit("input", data);
        }
      },
    },

    methods: {

      setElementStyles(attrsObj) {
        for (let [key, value] of Object.entries(attrsObj)) {
          this.styles[key] = value;
        }
      },

      operateVisualDoms() {

        let virtualDom = document.createElement('textarea');

        addClass(virtualDom, ['v-hidden-scrollbar', 'v-textarea']);
        setStyle(virtualDom, this.hiddenClass);
        // 影响展示的特殊样式处理
        setStyle(virtualDom, {
          width: getStyle(this.$el, 'width')
        });
        virtualDom.value = this.showValue;

        document.documentElement.appendChild(virtualDom);

        return {

          setAttr(name, val) {
            virtualDom[name] = val;
          },

          removeDom() {
            document.documentElement.removeChild(virtualDom);
          },

          getStyles() {

            let styles = getComputedStyle(virtualDom),
              clientHeight = virtualDom.clientHeight,
              scrollHeight = virtualDom.scrollHeight,
              lineHeight = parseFloat(
                styles.getPropertyValue('line-height')
              ),
              padding = (
                parseFloat(styles.getPropertyValue('padding-top')) +
                parseFloat(styles.getPropertyValue('padding-bottom'))
              ),
              border = (
                parseFloat(styles.getPropertyValue('border-top')) +
                parseFloat(styles.getPropertyValue('border-bottom'))
              );

            return {
              border,
              padding,
              lineHeight,
              clientHeight,
              scrollHeight,
            }
          },
        };
      },

      handleAdaption() {

        let visualDom = this.operateVisualDoms(),
          styles = visualDom.getStyles();

        this.setElementStyles(
          {
            height: `${styles.scrollHeight + styles.border}px`
          }
        );

        visualDom.removeDom();
      },

      handleRange() {

        let visualDom = this.operateVisualDoms(),
          styles = visualDom.getStyles();

        if (styles.scrollHeight <= styles.padding + this.autosize.maxRows * styles.lineHeight) {

          this.setElementStyles(
            {
              height: `${styles.scrollHeight + styles.border}px`,
              minHeight: `${styles.lineHeight * this.autosize.minRows + styles.padding + styles.border}px`,
            }
          );
        } else {

          visualDom.setAttr('rows', this.autosize.maxRows);
          styles = visualDom.getStyles();

          this.setElementStyles(
            {
              height: `${styles.clientHeight + styles.border}px`,
              minHeight: `${styles.lineHeight * this.autosize.minRows + styles.padding + styles.border}px`,
            }
          );
        }
        visualDom.removeDom();
      },

      processAutoSize() {

        if (!this.autosize) {
          return;
        }

        this.autosize === true ?
          this.handleAdaption() : this.handleRange();
      },

      // 暴露给外面的方法
      clear() {
        this.showValue = "";
        this.$el.querySelector("textarea").focus();
      },

      // 暴露给外面的方法
      select() {
        this.$el.querySelector("textarea").select();
      },

      // 暴露给外面的方法
      focus() {
        this.$el.querySelector("textarea").focus();
      },

      // 暴露给外面的方法
      blur() {
        this.$el.querySelector("textarea").blur();
      },
    },

    watch: {
      showValue() {
        this.processAutoSize();
      }
    },

    mounted() {
      this.processAutoSize();
    },
  }
</script>

