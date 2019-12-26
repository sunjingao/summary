<template>

    <div>
        <!--效果展示-->
        <div class="example-effectHtml">
            <slot name="effectHtml"/>
        </div>

        <!--代码描述-->
        <div
            v-show="showDemo"
            class="example-codeDescription"
        >
            <div class="example-codeDescription-title">
                <span class="example-codeDescription-title-span">代码描述</span>
            </div>
            <slot name="codeDescription"/>
        </div>

        <!--代码展示-->
        <div
            v-show="showDemo"
            class="example-codeHighlight"
        >
            <div
                v-if="showCode"
                class="example-codeHighlight-tools"
            >
				<span>
                    <i
                        v-show="!copyDone"
                        title="复制代码"
                        class="copy-code example-codeHighlight-tools-i iconfont icon-fuzhicopy20"
                        @click="copyCode"
                    >
                    </i>
                    <i
                        v-show="copyDone"
                        class="copy-code-done iconfont icon-caozuochenggong"
                        @mouseout.stop="copyCodeMouseout($event)"
                    >
                  </i>
				</span>
            </div>

            <slot
                v-if="showCode"
                name="codeHighlight"
            />
            <div
                class="example-codeHighlight-showCode"
                @click="showCodeToggle()"
            >
                <i :class="[showCode?'iconfont icon-xiangshang1':'iconfont icon-xiangxia1']"></i>
                <span>{{ showCode ? '收起代码' : '显示代码' }}</span>
            </div>
        </div>
    </div>
</template>

<script>

  import Clipboard from 'clipboard'

  export default {

    name: 'DemoBox',

    props: {

      showDemo: {
        type: Boolean,
        default: false
      },
      code: {
        type: Object,
        default() {
          return {};
        }
      }
    },

    data() {

      return {

        showCode: false,
        copyDone: false,

      }
    },

    methods: {
      showCodeToggle() {

        this.showCode = !this.showCode;

      },

      copyCode() {

        let {html, style, script} = this.code;

        style = style ? '<style>' + style + '<\/style>\n' : '';

        script = script ? '<script>' + script + '<\/script>' : '';

        const code = (html || '') + style + script;

        const clipboard = new Clipboard('.copy-code', {
          text(trigger) {
            return code;
          }
        });


        clipboard.on('success', (e) => {
          e.clearSelection();
          clipboard.destroy();

          this.copyDone = true;
        });

        clipboard.on('error', function (e) {
          console.error('Action:', e.action);
          console.error('Trigger:', e.trigger);
        });
      },

      copyCodeMouseout() {

        setTimeout(x => {
          this.copyDone = false;
        }, 2000)
      },
    },
  }
</script>

<style scoped>

    .hljs {
        background-color: #f1f4f8 !important;
    }

    .example-effectHtml {
        margin-top: 20px;
    }

    .example-codeHighlight code {
        font-family: Menlo, Monaco, Consolas, Courier, monospace;
        line-height: 1.2;
        font-size: 13px;
    }

    .example-codeDescription-title {
        font-weight: 500;
        margin: 30px 0 10px;
        position: relative;
    }

    .example-codeDescription-title:before {
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background: #e9e9e9;
        position: absolute;
        top: 10px;
        left: 0;
    }

    .example-codeDescription-title-span {
        display: inline-block;
        background: #fff;
        padding: 0 5px 0 18px;
        position: relative;
        margin-left: 30px;
        font-size: 14px;
        color: #84a9fd;
    }

    .example-codeHighlight {
        margin-top: 20px;
        margin-bottom: 50px;
        border-top: 1px dotted #e9e9e9;
        position: relative;
    }

    .example-codeHighlight-showCode {
        text-align: center;
        height: 30px;
        line-height: 30px;
        cursor: pointer;
        color: #9dbbff;
        font-size: 14px;
        border-bottom: 1px solid #e9e9e9;
    }

    .example-codeHighlight-showCode:hover {
        color: #578afd;
        box-shadow: 0 4px 6px -6px #555;
    }

    .example-codeHighlight-tools {
        position: absolute;
        right: 30px;
        top: 30px;
    }

    .example-codeHighlight-tools-i {
        margin-left: 10px;
        color: #7c9be0;
        cursor: pointer;
        font-size: 16px;
    }

    .copy-code-done {
        margin-left: 10px;
        font-size: 16px;
        color: #139a13;
        font-weight: bold;
    }

    .example-codeHighlight-tools-i:hover {
        color: #3561c3;
    }
</style>

