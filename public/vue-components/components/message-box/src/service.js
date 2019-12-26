import Vue from "vue"
import messageBox from "./message-box.vue"

let vueView = Vue.extend(messageBox),
    parent = document.body;

const setZIndex = function () {
    this.$nextTick(
        _ => {
            this.zIndex = Popper.addZIndex();
        }
    )
};

const open = function () {

    setZIndex.call(this);

    this.show();
    parent.appendChild(this.$el);
};

const close = function () {

    this.hide();
    parent.removeChild(this.$el);
};

const destroy = function () {
    this.$destroy();
};

const initInstance = function (options) {

    return new vueView({
        el: document.createElement("div"),
        props: {
            // message confirm prompt
            type: {
                required: false,
                type: String,
                default: function () {
                    if (options.type) {
                        if (!['message', 'confirm', 'prompt'].includes(options.type)) {
                            throw new Error('type is not in [\'message\', \'confirm\', \'prompt\']');
                        } else {
                            return options.type;
                        }
                    }
                    return 'message';
                }
            },
            title: {
                required: false,
                type: String,
                default: function () {

                    if (options.title) {
                        return options.title;
                    }

                    let message = '';
                    switch (this.type) {
                        case 'success' :
                            message = '成功';
                            break;
                        case 'warning' :
                            message = '警告';
                            break;
                        case 'tip' :
                            message = '提示';
                            break;
                        case 'error' :
                            message = '错误';
                            break;
                    }
                    return message;
                },
                messageBoxClass: {
                    required: false,
                    type: String,
                    default: options.messageBoxClass

                },
            },
            text: {
                required: false,
                type:
                String,
                default: options.text || ''
            },
            cancelButtonText: {
                required: false,
                type: String,
                default: options.cancelButtonText || '取消'
            },
            confirmButtonText: {
                required: false,
                type: String,
                default: options.confirmButtonText || '确认'
            },
            cancelCallBack: {
                required: false,
                type: Function,
                default: function () {

                    if (options.cancelCallBack) {
                        return options.cancelCallBack.call(this, ...arguments);
                    }
                    return true;
                }
            },
            confirmCallBack: {
                required: false,
                type: Function,
                default: function () {
                    if (options.confirmCallBack) {
                        return options.confirmCallBack.call(this, ...arguments);
                    }
                    return true;
                }
            },
            closeCallBack: {
                required: false,
                type: Function,
                default: function () {
                    if (options.confirmCallBack) {
                        return options.closeCallBack.call(this, ...arguments);
                    }
                    return true;
                }
            },
        },
    });
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



