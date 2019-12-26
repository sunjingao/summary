import Vue from 'vue';
// 进入这个文件就会加载css样式
import './css/base.scss';

import Button from './components/button/index';
import ButtonGroup from './components/button-group/index';
import Link from './components/link/index';

import Radio from './components/radio/index';
import RadioButton from './components/radio-button/index';
import RadioGroup from './components/radio-group/index';
import Checkbox from './components/checkbox/index';
import checkboxButton from './components/checkbox-button/index';
import CheckboxGroup from './components/checkbox-group/index';
import Input from './components/input/index';
import Textarea from './components/textarea/index';
import AutoComplete from './components/autocomplete/index';
import InputNumber from './components/input-number/index';
import Select from './components/select/index';
import Option from './components/option/index';
import OptionGroup from './components/option-group/index';
import Cascader from "./components/cascader/index";
import Switch from './components/switch/index';
import Slider from './components/slider/index';
import Timepicker from './components/timepicker/index';
import DatePicker from './components/datepicker/index';
import Rate from './components/rate/index';
import Transfer from './components/transfer/index';

import Tag from './components/tag/index';
import Progress from './components/progress/index';
import Tree from './components/tree/index';
import Pagination from './components/pagination/index';
import Badge from "./components/badge/index";

import Alert from "./components/alert/index";
import Loading from "./components/loading/index";
import Message from './components/message/index';
import MessageBox from './components/message-box/index';
import Notification from './components/notification/index';

import Tabs from './components/tabs/index';
import TabPane from './components/tab-pane/index';
import Breadcrumb from './components/breadcrumb/index';
import BreadcrumbItem from './components/breadcrumb-item/index';
import PageHeader from './components/page-header/index';
import Dropdown from './components/dropdown/index';
import DropdownMenuMenu from './components/dropdown-menu/index';
import DropdownMenuItem from './components/dropdown-item/index';
import Step from './components/step/index';
import Steps from './components/steps/index';

import Dialog from './components/dialog/index';
import ToolTip from './components/tooltip/index';
import Popover from './components/popover/index';
import Card from './components/card/index';
import Carousel from './components/carousel/index';
import CarouselItem from './components/carousel-item/index';
import Collapse from './components/collapse/index';
import collapseItem from './components/collapse-item/index';
import Timeline from './components/timeline/index';
import TimelineItem from './components/timeline-item/index';
import Divider from './components/divider/index';
import Image from './components/image/index';
import Backtop from './components/backtop/index';
import InfiniteScroll from './components/infinite-scroll/index';

Vue.component(Button.name, Button);
Vue.component(ButtonGroup.name, ButtonGroup);
Vue.component(Link.name, Link);

Vue.component(Radio.name, Radio);
Vue.component(RadioButton.name, RadioButton);
Vue.component(RadioGroup.name, RadioGroup);
Vue.component(Checkbox.name, Checkbox);
Vue.component(checkboxButton.name, checkboxButton);
Vue.component(CheckboxGroup.name, CheckboxGroup);
Vue.component(Input.name, Input);
Vue.component(Textarea.name, Textarea);
Vue.component(AutoComplete.name, AutoComplete);
Vue.component(InputNumber.name, InputNumber);
Vue.component(Select.name, Select);
Vue.component(Option.name, Option);
Vue.component(OptionGroup.name, OptionGroup);
Vue.component(Cascader.name, Cascader);
Vue.component(Switch.name, Switch);
Vue.component(Slider.name, Slider);
Vue.component(Timepicker.name, Timepicker);
Vue.component(DatePicker.name, DatePicker);
Vue.component(Rate.name, Rate);
Vue.component(Transfer.name, Transfer);

Vue.component(Tag.name, Tag);
Vue.component(Progress.name, Progress);
Vue.component(Tree.name, Tree);
Vue.component(Pagination.name, Pagination);
Vue.component(Badge.name, Badge);

Vue.component(Alert.name, Alert);

Vue.component(Tabs.name, Tabs);
Vue.component(TabPane.name, TabPane);
Vue.component(Breadcrumb.name, Breadcrumb);
Vue.component(BreadcrumbItem.name, BreadcrumbItem);
Vue.component(PageHeader.name, PageHeader);
Vue.component(Dropdown.name, Dropdown);
Vue.component(DropdownMenuMenu.name, DropdownMenuMenu);
Vue.component(DropdownMenuItem.name, DropdownMenuItem);
Vue.component(Carousel.name, Carousel);
Vue.component(CarouselItem.name, CarouselItem);
Vue.component(Step.name, Step);
Vue.component(Steps.name, Steps);

Vue.component(Dialog.name, Dialog);
Vue.component(ToolTip.name, ToolTip);
Vue.component(Popover.name, Popover);
Vue.component(Card.name, Card);
Vue.component(Collapse.name, Collapse);
Vue.component(collapseItem.name, collapseItem);
Vue.component(Timeline.name, Timeline);
Vue.component(TimelineItem.name, TimelineItem);
Vue.component(Divider.name, Divider);
Vue.component(Image.name, Image);
Vue.component(Backtop.name, Backtop);

Vue.prototype.$loading = Loading.service;
Vue.directive("loading", Loading.directive);

Vue.prototype.$message = Message.service;
Vue.prototype.$messageBox = MessageBox.service;
Vue.prototype.$notification = Notification.service;

Vue.directive("infiniteScroll", InfiniteScroll.directive);


