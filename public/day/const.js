export const TIME_MATCH_FUN = {
  year: 'FullYear',
  month: 'Month',
  date: 'Date',
  hour: 'Hour',
  minute: 'Minute',
  second: 'Second',
  millisecond: 'Millisecond'
};

export const TIME_REG = /\s*([0-9]+)\s*-\s*([0-9]+)\s*-\s*([0-9]+)\s*(([0-9]+)\s*:\s*([0-9]+)\s*:\s*([0-9]+))?\s*/;

export const FORMATTER_REG = /(Y+)|(M+)|(d+)|(h+)|(m+)|(s+)/g;
