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
                        >Collections</a>
                        <ul class="menu-sub">
                            <li>
                                <router-link to="/core/each">
                                    each
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/map">
                                    map
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/reduce">
                                    reduce
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/reduceright">
                                    reduceRight
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/find">
                                    find
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/filter">
                                    filter
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/findwhere">
                                    findWhere
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/where">
                                    where
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/reject">
                                    reject
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/every">
                                    every
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/some">
                                    some
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/contains">
                                    contains
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/invoke">
                                    invoke
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/pluck">
                                    pluck
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/max">
                                    max
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/min">
                                    min
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/sortby">
                                    sortBy
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/groupby">
                                    groupBy
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/indexby">
                                    indexBy
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/countby">
                                    countBy
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/shuffle">
                                    shuffle
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/sample">
                                    sample
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/toarray">
                                    toArray
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/size">
                                    size
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/partition">
                                    partition
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/compact">
                                    compact
                                </router-link>
                            </li>
                        </ul>

                        <a
                            class="main-wrapper-sidebar-link"
                            href="javascript:javascript:void(0);"
                        >Array</a>
                        <ul class="menu-sub">
                            <li>
                                <router-link to="/core/first">
                                    first
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/initial">
                                    initial
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/last">
                                    last
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/rest">
                                    rest
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/flatten">
                                    flatten
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/without">
                                    without
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/union">
                                    union
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/intersection">
                                    intersection
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/difference">
                                    difference
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/uniq">
                                    uniq
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/zip">
                                    zip
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/unzip">
                                    unzip
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/object">
                                    object
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/chunk">
                                    chunk
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/indexof">
                                    indexOf
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/lastindexof">
                                    lastIndexOf
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/sortedindex">
                                    sortedIndex
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/findindex">
                                    findIndex
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/findlastindex">
                                    findLastIndex
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/range">
                                    range
                                </router-link>
                            </li>
                        </ul>

                        <a
                            class="main-wrapper-sidebar-link"
                            href="javascript:javascript:void(0);"
                        >Functions</a>
                        <ul class="menu-sub">
                            <li>
                                <router-link to="/core/bind">
                                    bind
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/bindall">
                                    bindAll
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/partial">
                                    partial
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/memoize">
                                    memoize
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/delay">
                                    delay
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/defer">
                                    defer
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/throttle">
                                    throttle
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/debounce">
                                    debounce
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/once">
                                    once
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/after">
                                    after
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/before">
                                    before
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/wrap">
                                    wrap
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/negate">
                                    negate
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/compose">
                                    compose
                                </router-link>
                            </li>
                        </ul>

                        <a
                            class="main-wrapper-sidebar-link"
                            href="javascript:javascript:void(0);"
                        >Objects</a>
                        <ul class="menu-sub">
                            <li>
                                <router-link to="/core/isvaluetype">
                                    isValueType
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/keys">
                                    keys
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/allkeys">
                                    allKeys
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/values">
                                    values
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/mapobject">
                                    mapObject
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/pairs">
                                    pairs
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/invert">
                                    invert
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/create">
                                    create
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/functions">
                                    functions
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/findkey">
                                    findKey
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/extend">
                                    extend
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/extendown">
                                    extendOwn
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/pick">
                                    pick
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/omit">
                                    omit
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/defaults">
                                    defaults
                                </router-link>
                            </li>

                            <li>
                                <router-link to="/core/clone">
                                    clone
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/tap">
                                    tap
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/has">
                                    has
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/property">
                                    property
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/propertyof">
                                    propertyOf
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/matcher">
                                    matcher
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/isequal">
                                    isEqual
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/ismatch">
                                    isMatch
                                </router-link>
                            </li>
                        </ul>

                        <a
                            class="main-wrapper-sidebar-link"
                            href="javascript:javascript:void(0);"
                        >Utility</a>
                        <ul class="menu-sub">
                            <li>
                                <router-link to="/core/identity">
                                    identity
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/constant">
                                    constant
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/noop">
                                    noop
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/times">
                                    times
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/random">
                                    random
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/mixin">
                                    mixin
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/iteratee">
                                    iteratee
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/uniqueid">
                                    uniqueId
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/escape">
                                    escape
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/unescape">
                                    unescape
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/result">
                                    result
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/now">
                                    now
                                </router-link>
                            </li>
                        </ul>

                        <a
                            class="main-wrapper-sidebar-link"
                            href="javascript:javascript:void(0);"
                        >Chaining</a>
                        <ul class="menu-sub">
                            <li>
                                <router-link to="/core/chain">
                                    chain
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/core/value">
                                    value
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

      $route(to) {

        this.$nextTick(
          _ => {

            let id = to.params.id;

            if (!id) {
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
