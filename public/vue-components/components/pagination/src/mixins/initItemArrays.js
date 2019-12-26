/*
* 规则：
* 1：当页数小于等于7时，全部显示
* 2：当当前页数小于等于4时，祖册显示6个，再显示...,在显示最右边的数据
* 3：当当前页面 大于等于最大页数 - 4 时，先显示第一个，在现实...,再显示最右侧6个
* 4：不在上面的情况时，先显示第一个，在现实...,在现实以园中元素为中心的五个元素，再显示...,再显示最右侧元素
* */

export default {

  methods: {

    /*
    * 当总页数小于7时，全部展示*/
    pageNumLess7() {

      for (let index = 0; index < this.settings.totalPageNum; index++) {
        this.settings.itemArrays.push(
          {
            value: index,
            selected: index === this.settings.currentPage,
          }
        );
      }
    },

    /*
    * 当选中的页数小于等于4时*/
    currentPageLeft() {

      this.settings.currentPage < 0 ?
        (this.settings.currentPage = 0): "";

      for (let index = 0; index < 6; index++) {
        this.settings.itemArrays.push(
          {
            value: index,
            selected: index === this.settings.currentPage,
          }
        );
      }
      this.settings.itemArrays.push(
        {
          value: "right",
          selected: false,
        }
      );
      this.settings.itemArrays.push(
        {
          value: this.settings.totalPageNum - 1,
          selected: false,
        }
      );
    },

    /*
    * 当选中的页数大于等于总数-3时*/
    currentPageRight() {

      this.settings.currentPage > this.settings.totalPageNum - 1 ?
        (this.settings.currentPage = this.settings.totalPageNum - 1) : "";

      this.settings.itemArrays.push(
        {
          value: 0,
          selected: false,
        }
      );
      this.settings.itemArrays.push(
        {
          value: "left",
          selected: false,
        }
      );
      for (let index = this.settings.totalPageNum - 6; index < this.settings.totalPageNum; index++) {
        this.settings.itemArrays.push(
          {
            value: index,
            selected: index === this.settings.currentPage,
          }
        );
      }
    },

    /*
    * 当选中的页数不在上面的情况中时，即选中的内容左右两侧都出现省略号*/
    currentPageMiddle() {

      this.settings.itemArrays.push(
        {
          value: 0,
          selected: false,
        }
      );
      this.settings.itemArrays.push(
        {
          value: "left",
          selected: false,
        }
      );

      for (let index = this.settings.currentPage - 2; index <= this.settings.currentPage + 2; index++) {
        this.settings.itemArrays.push(
          {
            value: index,
            selected: index === this.settings.currentPage,
          }
        );
      }

      this.settings.itemArrays.push(
        {
          value: "right",
          selected: false,
        }
      );
      this.settings.itemArrays.push(
        {
          value: this.settings.totalPageNum - 1,
          selected: false,
        }
      );
    },

    // itemArrays 初始化
    initItemArrays() {

      this.settings.itemArrays = [];
      if (!this.settings.totalPageNum) {
        this.settings.itemArrays = [];
      }
      else if (this.settings.totalPageNum <= 7) {
        this.pageNumLess7();
      }
      else if (this.settings.currentPage <= 3) {
        this.currentPageLeft();
      }
      else if (this.settings.currentPage >= this.settings.totalPageNum - 4) {
        this.currentPageRight();
      }
      else {
        this.currentPageMiddle();
      }
    },
  },
}
