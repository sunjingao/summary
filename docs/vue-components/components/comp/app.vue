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
                            <li>
                                <router-link to="/instructions">
                                    开发说明
                                </router-link>
                            </li>
                        </ul>

                        <a
                            class="main-wrapper-sidebar-link"
                            href="javascript:javascript:void(0);"
                        >Basic</a>
                        <ul class="menu-sub">
                            <li>
                                <router-link to="/button">
                                    Button 按钮
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/link">
                                    Link 文字连接
                                </router-link>
                            </li>
                        </ul>

                        <a
                            class="main-wrapper-sidebar-link"
                            href="javascript:javascript:void(0);"
                        >Form</a>
                        <ul class="menu-sub">
                            <li>
                                <router-link to="/radio">
                                    Radio 单选框
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/checkbox">
                                    Checkbox 多选框
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/input">
                                    Input 输入框
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/textarea">
                                    Textarea 文本框
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/autocomplete">
                                    Autocomplete 搜索提示
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/inputNumber">
                                    InputNumber 计数器
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/select">
                                    Select 选择器
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/cascader">
                                    Cascader 级联选择器
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/switchCom">
                                    Switch 开关
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/slider">
                                    Slider 滑块
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/timePicker">
                                    TimePicker 时间选择器
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/datePicker">
                                    DatePicker 日期选择器
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/rate">
                                    Rate 评分
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/transfer">
                                    Transfer 穿梭框
                                </router-link>
                            </li>
                        </ul>

                        <a
                            class="main-wrapper-sidebar-link"
                            href="javascript:javascript:void(0);"
                        >Data</a>
                        <ul class="menu-sub">
                            <li>
                                <router-link to="/tag">
                                    Tag 标签
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/progress">
                                    Progress 进度条
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/tree">
                                    Tree 树形控件
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/pagination">
                                    Pagination 分页
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/badge">
                                    Badge 标记
                                </router-link>
                            </li>
                        </ul>

                        <a
                            class="main-wrapper-sidebar-link"
                            href="javascript:javascript:void(0);"
                        >Notice</a>
                        <ul class="menu-sub">
                            <li>
                                <router-link to="/alert">
                                    Alert 警告
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/loading">
                                    Loading 加载
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/message">
                                    Message 消息提示
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/messageBox">
                                    MessageBox 弹框
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/notification">
                                    Notification 通知
                                </router-link>
                            </li>
                        </ul>

                        <a
                            class="main-wrapper-sidebar-link"
                            href="javascript:javascript:void(0);"
                        >Navigation</a>
                        <ul class="menu-sub">
                            <li>
                                <router-link to="/navMenu">
                                    NavMenu 导航菜单
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/tabs">
                                    Tabs 标签页
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/breadcrumb">
                                    Breadcrumb 面包屑
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/pageHeader">
                                    PageHeader 页头
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/dropdown">
                                    Dropdown 下拉菜单
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/steps">
                                    Steps 步骤条
                                </router-link>
                            </li>
                        </ul>

                        <a
                            class="main-wrapper-sidebar-link"
                            href="javascript:javascript:void(0);"
                        >Others</a>
                        <ul class="menu-sub">
                            <li>
                                <router-link to="/dialog">
                                    Dialog 对话框
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/toolTip">
                                    Tooltip 文字提示
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/popover">
                                    Popover 弹出框
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/card">
                                    Card 卡片
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/carousel">
                                    Carousel 走马灯
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/collapse">
                                    Collapse 折叠面板
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/timeline">
                                    Timeline 时间线
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/divider">
                                    Divider 分割线
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/image">
                                    Image 图片
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/backtop">
                                    Backtop 回到顶部
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/infiniteScroll">
                                    InfiniteScroll 无限滚动
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
