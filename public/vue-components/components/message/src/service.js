import Vue from "vue"
import '../css/message.scss';
import Alert from "../../alert/src/alert.vue"
import {setStyle} from "../../../src/utils/dom"
import getBoundingClient from "../../../../popper/utils/getBoundingClient";

let vueView = Vue.extend(Alert),
    instances = [], // 实例集合
    offset = 10; // 偏移量

const open = function () {

    setZIndex.call(this);

    instances.push(this);

    this.$el.classList.add('v-message');
    document.body.appendChild(this.$el);

    initPosition();

    this.show();

    this.timer = setTimeout(
        _ => {
            this.close();
        },
        this.timeout
    )
};

const close = function () {
    this.hide();
    clearTimeout(this.timer);
    instances.splice(instances.indexOf(this), 1);
    document.body.removeChild(this.$el);
    initPosition(); // 其它组件定位
};

const destroy = function () {
    this.$destroy();
};

const setZIndex = function () {
    this.zIndex = Popper.addZIndex();
};

const initInstance = function (options) {

  return new vueView(
    {
      el: document.createElement("div"),
      props: {
        type: {
          validator: function (value) {
            return ['success', 'warning', 'tip', 'error'].includes(value);
          },
          default: options.type || 'tip'
        },
        title: {
          default: options.title || ''
        },
        closable: {
          default: options.closable === undefined ? true : options.closable
        },
        showIcon: {
          default: options.showIcon === undefined ? true : options.showIcon
        },
        plain: {
          require: false,
          type: Boolean,
          default: options.plain === undefined ? true : options.plain
        },
        closeText: {
          require: false,
          type: String,
          default: options.closeText || ''
        },
        textCenter: {
          require: false,
          type: Boolean,
          default: options.textCenter === undefined ? false : options.textCenter
        },
        description: {
          require: false,
          type: String,
          default: options.description || ''
        },
      },
      data: {
        isShow: false,
        timer: null,
        timeout: options.timeout || 3000,
      },
    }
  );
};

const initPosition = function () {

    let top = offset;

    for (let instance of Object.values(instances)) {

        setStyle(instance.$el, 'top', `${top}px`);

        top = top + getBoundingClient(instance.$el).height + offset;
    }
};

const bindCallBack = function (instance) {

    instance.open = open.bind(instance);
    instance.close = close.bind(instance);
    instance.destroy = destroy.bind(instance);
};

export default function (options) {

    let instance = initInstance(options);

    bindCallBack(instance);

    return instance;
}



