export default {

  settings: null,

  // 当总页数小于7时，全部展示
  pageNumLess7() {

    let itemArrays = [];

    for (let index = 0; index < this.settings.totalPageNum; index++) {
      itemArrays.push(
        {
          value: index,
          selected: index === this.settings.currentPage,
        }
      );
    }

    return Object.assign({}, this.settings, {itemArrays: itemArrays});
  },

  // 当选中的页数小于等于4时
  currentPageLeft() {

    let itemArrays = [];

    for (let index = 0; index < 6; index++) {
      itemArrays.push(
        {
          value: index,
          selected: index === this.settings.currentPage,
        }
      );
    }
    itemArrays.push(
      {
        value: "right",
        selected: false,
      }
    );
    itemArrays.push(
      {
        value: this.settings.totalPageNum - 1,
        selected: false,
      }
    );

    return Object.assign(
      {},
      this.settings,
      {
        currentPage: this.settings.currentPage < 0 ? 0 : this.settings.currentPage,
        itemArrays: itemArrays
      }
    );
  },

  // 当选中的页数大于等于总数-3时
  currentPageRight() {

    let itemArrays = [];

    itemArrays.push(
      {
        value: 0,
        selected: false,
      }
    );
    itemArrays.push(
      {
        value: "left",
        selected: false,
      }
    );
    for (let index = this.settings.totalPageNum - 6; index < this.settings.totalPageNum; index++) {
      itemArrays.push(
        {
          value: index,
          selected: index === this.settings.currentPage,
        }
      );
    }

    return Object.assign(
      {},
      this.settings,
      {
        itemArrays: itemArrays
      }
    );
  },

  // 当选中的页数不在上面的情况中时，即选中的内容左右两侧都出现省略号
  currentPageMiddle() {

    let itemArrays = [];

    itemArrays.push(
      {
        value: 0,
        selected: false,
      }
    );
    itemArrays.push(
      {
        value: "left",
        selected: false,
      }
    );

    for (let index = this.settings.currentPage - 2; index <= this.settings.currentPage + 2; index++) {
      itemArrays.push(
        {
          value: index,
          selected: index === this.settings.currentPage,
        }
      );
    }

    itemArrays.push(
      {
        value: "right",
        selected: false,
      }
    );
    itemArrays.push(
      {
        value: this.settings.totalPageNum - 1,
        selected: false,
      }
    );

    return Object.assign({}, this.settings, {
        itemArrays: itemArrays
      }
    );
  },

  // itemArrays 初始化
  initItemArrays(settings) {

    this.settings = settings;

    if (!this.settings.totalPageNum) {
      settings = Object.assign({}, this.settings, {
        itemArrays: []
      });
    } else if (this.settings.totalPageNum <= 7) {
      settings = this.pageNumLess7();
    } else if (this.settings.currentPage <= 4) {
      settings = this.currentPageLeft();
    } else if (this.settings.currentPage >= this.settings.totalPageNum - 5) {
      settings = this.currentPageRight();
    } else {
      settings = this.currentPageMiddle();
    }

    return settings;
  },
};