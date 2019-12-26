const objectReg = {
  getType: /\s(.+)]/
};

const utilityReg = {
    escapeMap: {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      '`': '&#x60;'
    },
    template: {
      interpolate: /<%=(?:(?:\s|)+?)(\S+?)(?:(?:\s|)+?)%>/,
      escape: /<%-(?:(?:\s|)+?)(\S+?)(?:(?:\s|)+?)%>/,
      evaluate: /<%(?:(?:\s|)+?)(\S+?)(?:(?:\s|)+?)%>/,
      escaper: /\\|'|\r|\n|\u2028|\u2029/g
    }
  }
;

export {
  objectReg,
  utilityReg,
};
