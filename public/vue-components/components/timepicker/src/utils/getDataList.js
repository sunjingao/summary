export default {

    props: {
        timeRange: {
            required: false,
            type: Object
        }
    },

    methods: {

        // 判断forbiddenSelected标识的true or false
        isForbidden(startOrEndTag, hMsTag, index) {

            if (!this.timeRange ||
                !this.timeRange[startOrEndTag] ||
                !this.timeRange[startOrEndTag][hMsTag] ||
                !this.timeRange[startOrEndTag][hMsTag].some(x => x.start && x.end)
            ) {
                return false;
            }

            return !this.timeRange[startOrEndTag][hMsTag].some(x => {
                return x.start <= index && x.end >= index;
            })

        },


        // 判断select标识的true or false
        selectAndClassObj(startOrEndTag, hMsTag, value) {

            return {
                selected: this.changeTime[startOrEndTag][hMsTag] === value,
                class: this.changeTime[startOrEndTag][hMsTag] === value ? "selected" : ""
            };
        },

        // 获得dataList
        getDataList() {

            let dataList = {
                    startTime: {
                        hour: [],
                        minute: [],
                        second: []
                    },
                    endTime: {
                        hour: [],
                        minute: [],
                        second: []
                    }
                };

            for (let startOrEndTag in dataList) {
                for (let hMsTag in dataList[startOrEndTag]) {
                    if (dataList[startOrEndTag].hasOwnProperty(hMsTag)) {
                        let timeArr = [],
                            max = hMsTag === "hour" ? 24 : 60,
                            nullTimeObj = {value: null, class: '', forbiddenSelected: false, selected: false};

                        for (let index = 0; index < max; index++) {

                            let value = index < 10 ? "0" + index : index.toString(),
                                selectAndClassObj = this.selectAndClassObj(startOrEndTag, hMsTag, value);
                            timeArr.push({
                                value: value,
                                class: selectAndClassObj.class,
                                forbiddenSelected: this.isForbidden(startOrEndTag, hMsTag, index),
                                selected: selectAndClassObj.selected
                            });
                        }

                        // 尅个时间段的开头和结尾的展示都有两个空
                        timeArr.unshift(nullTimeObj,nullTimeObj);
                        timeArr.push(nullTimeObj,nullTimeObj);

                        dataList[startOrEndTag][hMsTag] = timeArr;
                    }
                }
            }

            return this.dataList = dataList;
        },

    },

    watch: {

        "timeRange": {
            deep: true,
            handler: function () {
                this.getDataList();
            },
        },
        "changeTime": {
            deep: true,
            handler: function () {
                this.getDataList();
            },
        },
    }

}


