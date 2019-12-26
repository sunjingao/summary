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
                        >Options</a>
                        <ul class="menu-sub">
                            <li>
                                <router-link to="/options">
                                    Options 配置
                                </router-link>
                            </li>
                        </ul>

                        <a
                            class="main-wrapper-sidebar-link"
                            href="javascript:javascript:void(0);"
                        >Detail</a>
                        <ul class="menu-sub">
                            <li>
                                <router-link to="/placement">
                                    placement
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/flip">
                                    flip
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/enableTransition">
                                    enableTransition
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/positionFixed">
                                    positionFixed
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/boundariesElement">
                                    boundariesElement
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/boundariesPadding">
                                    boundariesPadding
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/modifiers">
                                    modifiers
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/updateImmediately">
                                    updateImmediately
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/onCreate">
                                    onCreate
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/onUpdate">
                                    onUpdate
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/methods">
                                    methods
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
