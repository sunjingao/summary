<template>

    <div class="root">

        <div class="main-wrapper">
            <!--左侧菜单-->
            <div class="v-hover-show-scrollbar main-wrapper-sidebar">
                <ul class="menu-root">
                    <li>

                        <a
                            class="main-wrapper-sidebar-link"
                            href="javascript:javascript:void(0);"
                        >Introduce</a>
                        <ul class="menu-sub">
                            <li>
                                <router-link to="/change-log">
                                    更新日志
                                </router-link>
                            </li>
                        </ul>

                        <a
                            class="main-wrapper-sidebar-link"
                            href="javascript:javascript:void(0);"
                        >Util</a>
                        <ul class="menu-sub">
                            <li>
                                <router-link to="/core/.init">
                                    $.init
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/.camelcase">
                                    $.camelCase
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/.contains">
                                    $.contains
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/.each">
                                    $.each
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/.extend">
                                    $.extend
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/.fn">
                                    $.fn
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/.grep">
                                    $.grep
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/.inarray">
                                    $.inArray
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/.isarray">
                                    $.isArray
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/.isfunction">
                                    $.isFunction
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/.isnumeric">
                                    $.isNumeric
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/.isplainobject">
                                    $.isPlainObject
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/.iswindow">
                                    $.isWindow
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/.map">
                                    $.map
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/.noop">
                                    $.noop
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/.parsejson">
                                    $.parseJSON
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/.trim">
                                    $.trim
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/.type">
                                    $.type
                                </router-link>
                            </li>
                        </ul>

                        <a
                            class="main-wrapper-sidebar-link"
                            href="javascript:javascript:void(0);"
                        >Core</a>
                        <ul class="menu-sub">
                            <li>
                                <router-link to="/core/add">
                                    add
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/addclass">
                                    addClass
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/after">
                                    after
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/append">
                                    append
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/appendto">
                                    appendTo
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/attr">
                                    attr
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/before">
                                    before
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/children">
                                    children
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/clone">
                                    clone
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/closest">
                                    closest
                                </router-link>
                            </li>

                            <li>
                                <router-link to="/core/concat">
                                    concat
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/contents">
                                    contents
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/css">
                                    css
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/data">
                                    data
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/each">
                                    each
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/empty">
                                    empty
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/eq">
                                    eq
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/filter">
                                    filter
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/find">
                                    find
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/first">
                                    first
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/foreach">
                                    forEach
                                </router-link>
                            </li>

                            <li>
                                <router-link to="/core/get">
                                    get
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/has">
                                    has
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/hasclass">
                                    hasClass
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/height">
                                    height
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/hide">
                                    hide
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/html">
                                    html
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/index">
                                    index
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/indexof">
                                    indexOf
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/insertafter">
                                    insertAfter
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/insertbefore">
                                    insertBefore
                                </router-link>
                            </li>

                            <li>
                                <router-link to="/core/is">
                                    is
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/last">
                                    last
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/map">
                                    map
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/next">
                                    next
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/not">
                                    not
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/offset">
                                    offset
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/offsetparent">
                                    offsetParent
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/parent">
                                    parent
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/parents">
                                    parents
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/pluck">
                                    pluck
                                </router-link>
                            </li>

                            <li>
                                <router-link to="/core/position">
                                    position
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/prepend">
                                    prepend
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/prependto">
                                    prependTo
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/prev">
                                    prev
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/prop">
                                    prop
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/push">
                                    push
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/ready">
                                    ready
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/reduce">
                                    reduce
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/remove">
                                    remove
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/removeattr">
                                    removeAttr
                                </router-link>
                            </li>

                            <li>
                                <router-link to="/core/removeclass">
                                    removeClass
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/removeprop">
                                    removeProp
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/replacewith">
                                    replaceWith
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/scrollleft">
                                    scrollLeft
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/scrolltop">
                                    scrollTop
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/show">
                                    show
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/siblings">
                                    siblings
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/size">
                                    size
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/slice">
                                    slice
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/text">
                                    text
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/toggle">
                                    toggle
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/toggleclass">
                                    toggleClass
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/unwrap">
                                    unwrap
                                </router-link>
                            </li>

                            <li>
                                <router-link to="/core/val">
                                    val
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/width">
                                    width
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/wrap">
                                    wrap
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/wrapall">
                                    wrapAll
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/wrapinner">
                                    wrapInner
                                </router-link>
                            </li>

                        </ul>
                    </li>
                </ul>
            </div>

            <!--主体内容 Start-->
            <div class="v-scrollbar main-wrapper-container">
                <router-view/>
            </div>
            <!--主体内容 End-->
        </div>

        <!--回到顶部-->
        <v-backtop selector=".main-wrapper-container"></v-backtop>
    </div>
</template>

<script>

  export default {

    name: "App",

    data() {
      return {
        isFirstInit: true,
      }
    },

    updated() {

      if (this.isFirstInit) {

        this.isFirstInit = false;

        this.$el.querySelector('.main-wrapper-sidebar').scrollTop = this.$el.querySelector('.active').offsetTop;
      }
    },

    watch: {

      $route(to){

        this.$nextTick(
          _ => {

            let id = to.params.id;

            if(!id){
              return;
            }

            let container = document.querySelector('.main-wrapper-container'),
              target = document.getElementById(id);

            container.scrollTop = target.offsetTop;
          }
        )
      }
    }
  }
</script>

<style scoped>

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .root {
        position: relative;
        width: 100%;
        height: 100%;
        background-color: #fff;
    }

    .main-wrapper {
        display: flex;
        width: 100%;
        height: 100%;
    }

    .main-wrapper-sidebar {
        position: relative;
        width: 240px;
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
    }

    .main-wrapper-sidebar .menu-root {
        position: relative;
        padding: 10px 20px;
        width: calc(240px - 6px);
    }

    .main-wrapper-sidebar a {
        display: inline-block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: #34495e;
    }

    .main-wrapper-sidebar .main-wrapper-sidebar-link {
        font-size: 1rem;
        cursor: default;
        line-height: 2.5em;
        color: #34495e;
    }

    .main-wrapper-sidebar .menu-sub {
        font-size: 1rem;
    }

    .main-wrapper-sidebar .menu-sub li {
        line-height: 2rem;
    }

    .main-wrapper-sidebar .menu-sub li a {
        padding-left: 18px;
    }

    .main-wrapper-sidebar .menu-sub li a.active {
        color: #0092dd;
    }

    .main-wrapper-sidebar .menu-sub li a:hover {
        color: #0092dd;
        background-color: #f5f7fa;
        cursor: pointer;
    }

    .main-wrapper-container {
        flex: 1;
        position: relative;
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        padding: 10px 30px 10px 30px;
    }
</style>
