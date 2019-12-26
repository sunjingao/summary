import {TIME_MATCH_FUN, TIME_REG, FORMATTER_REG} from './const.js';

class Day {

  constructor(time) {

    if (Day.isDayInstance(time)) {
      return time;
    }

    if (this instanceof Day) {
      this.time = time;
      this.init();
      return this;
    }

    return new Day(time);
  }

  init() {

    let time = '';

    if (!this.time) {
      time = new Date();
    }
    else if (typeof this.time === 'number') {
      time = new Date(this.time);
    }
    else if (typeof this.time === 'string') {
      this.time.match(TIME_REG);
      time = new Date(+RegExp.$1 || 0, +RegExp.$2 - 1 || 0, +RegExp.$3 || 1, +RegExp.$5 || 0, +RegExp.$6 || 0, +RegExp.$7 || 0);
    }
    else {
      time = this.time;
    }

    this.basicInfoAssign(time);
  }

  basicInfoAssign(time) {

    this.time = time;

    this.$y = time.getFullYear();
    this.$M = time.getMonth();
    this.$D = time.getDate();

    this.$h = time.getHours();
    this.$m = time.getMinutes();
    this.$s = time.getSeconds();
    this.$ms = time.getMilliseconds();

    this.$W = time.getDay();
    this.$d = this.time;
  }

  isValid() {
    return typeof this.valueOf() === 'number' &&
      !Number.isNaN(this.valueOf()) &&
      Number.MAX_VALUE > this.valueOf() && this.valueOf() > 0;
  }

  valueOf() {
    return this.time.getTime();
  }

  year(val) {
    return val ? this.set('year', val) : this.$y;
  }

  month(val) {
    return val ? this.set('month', val) : this.$M;
  }

  date(val) {
    return val ? this.set('date', val) : this.$D;
  }

  day(val) {
    return val ? this.set('day', val) : this.$W;
  }

  hour(val) {
    return val ? this.set('hour', val) : this.$h;
  }

  minute(val) {
    return val ? this.set('minute', val) : this.$m;
  }

  second(val) {
    return val ? this.set('second', val) : this.$s;
  }

  millionSecond(val) {
    return val ? this.set('millisecond', val) : this.$ms;
  }

  set(type, val) {

    this.basicInfoAssign(
      new Day(this.time['set' + TIME_MATCH_FUN[type]](val)).time
    );

    return this;
  }

  add(val, type) {

    this.basicInfoAssign(
      new Day(this.time['set' + TIME_MATCH_FUN[type]](this.time['get' + TIME_MATCH_FUN[type]]() + val)).time
    );

    return this;
  }

  subtract(val, type) {

    this.basicInfoAssign(
      new Day(this.time['set' + TIME_MATCH_FUN[type]](this.time['get' + TIME_MATCH_FUN[type]]() - val)).time
    );

    return this;
  }

  startOf(type, startStatus = true) {

    function getHms(type) {

      let startOrEndTime = [
        '00:00:00:000',
        '23:59:59:999'
      ];

      let sumStr = '';
      [
        {type: 'date', value: '', startOrEndTimeIndex: 0},
        {type: 'hour', value: this.$h, startOrEndTimeIndex: 3},
        {type: 'minute', value: this.$m, startOrEndTimeIndex: 6},
        {type: 'second', value: this.$s, startOrEndTimeIndex: 9},
      ].some(
        item => {
          if (item.type === type) {
            sumStr += (sumStr.trim().length > 0 ? ':' : '') + item.value;
            sumStr += (sumStr.trim().length > 0 ? ':' : '') + startOrEndTime[startStatus ? 0 : 1].slice(item.startOrEndTimeIndex);
            return true;
          }
        }
      );
      return sumStr;
    }

    switch (type) {
      case 'year':
        return startStatus ? new Day(new Date(this.$y, 0, 1)) : new Day(new Date(this.$y, 11, 31));
      case 'month':
        return startStatus ? new Day(new Date(this.$y, this.$M, 1)) : new Day(new Date(this.$y, this.$M + 1, 0));
      case 'week':
        return startStatus ? new Day(`${this.$y}-${this.$M + 1}-${this.$D - (this.$W === 0 ? 7 : this.$W) + 1}`) :
          new Day(`${this.$y}-${this.$M + 1}-${this.$D + 7 - (this.$W === 0 ? 7 : this.$W) }`);
      case 'date':
      case 'hour':
      case 'minute':
      case 'second':
        return new Day(new Date(`${this.$y}-${this.$M + 1}-${this.$D} ${getHms.call(this, type)}`));
    }
  }

  endOf(type) {
    return this.startOf(type, false);
  }

  format(formatter) {

    return formatter.replace(FORMATTER_REG, function (val, year, month, day, hour, minute, second) {

      if (year) {
        return this.$y.toString().slice(-val.length);
      }
      if (month) {
        return this.$M.toString().length < val.length ? `0${this.$M + 1}` : this.$M + 1;
      }
      if (day) {
        return this.$D.toString().length < val.length ? `0${this.$D}` : this.$D;
      }
      if (hour) {
        return this.$h.toString().length < val.length ? `0${this.$h}` : this.$h;
      }
      if (minute) {
        return this.$m.toString().length < val.length ? `0${this.$m}` : this.$m;
      }
      if (second) {
        return this.$s.toString().length < val.length ? `0${this.$s}` : this.$s;
      }
    }.bind(this));
  }

  daysInMonth() {

    return new Date(this.$y, this.$M + 1, 0).getDate();
  }

  clone() {
    return new Day(this.valueOf());
  }

  toDate() {
    return this.time;
  }

  isBefore(dayIns) {

    return this.valueOf() < new Day(dayIns).valueOf();
  }

  isSame(dayIns) {

    return this.valueOf() === new Day(dayIns).valueOf();
  }

  isAfter(dayIns) {

    return this.valueOf() > new Day(dayIns).valueOf();
  }

  static isDayInstance(val) {

    return val instanceof Day;
  }
}

export default (time) => {
  return new Day(time)
};
