import {setStyle, addClass} from '../../../src/utils/dom.js'

// 不展示内容的样式
const HIDDENSTYLE = {
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: -9900,
  visibility: 'hidden',
};

export default {

  autosize: null,

  // 需要给创建的textarea赋值的内容，以保证其内容准确性，初始化后不变
  settingStyles: {
    width: ``,
    height: 'height',
    minHeight: 'height',
    fontSize: '',
    lineHeight: '',
  },

  // 设置完成的styles
  exportStyles: {
    width: ``,
    height: 'height',
    minHeight: 'height',
    fontSize: '',
    lineHeight: '',
  },

  init(width, lineHeight, fontSize, autosize) {

    this.autosize = autosize;

    this.settingStyles.width = `${width}px`;
    this.settingStyles.lineHeight = lineHeight;
    this.settingStyles.fontSize = fontSize;

    this.exportStyles.width = `${width}px`;
    this.exportStyles.lineHeight = lineHeight;
    this.exportStyles.fontSize = fontSize;
  },

  // 将虚拟Dom模拟成与展示新值的textarea的大小一样，以获取其宽高等属性
  operateVisualDoms(value) {

    let virtualDom = document.createElement('textarea');

    addClass(virtualDom, ['v-hidden-scrollbar', 'v-textarea']);
    setStyle(virtualDom, HIDDENSTYLE);

    // 影响展示的特殊样式处理
    for (let [key, value] of Object.entries(this.settingStyles)) {
      setStyle(virtualDom, {[key]: value});
    }
    virtualDom.value = value;

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

  // 设置属性
  setElementStyles(attrsObj) {
    for (let [key, value] of Object.entries(attrsObj)) {
      this.exportStyles[key] = value;
    }
  },

  // 自适应高度调整
  handleAdaption(value) {

    let visualDom = this.operateVisualDoms(value),
      styles = visualDom.getStyles();

    this.setElementStyles(
      {
        height: `${styles.scrollHeight + styles.border}px`
      }
    );

    visualDom.removeDom();

    return this.exportStyles;
  },

  // 高度在某个范围内调整
  handleRange(value) {

    let visualDom = this.operateVisualDoms(value),
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

    return this.exportStyles;
  },

  // 获得默认样式
  getDefauluStyles() {
    return this.settingStyles;
  },
}
