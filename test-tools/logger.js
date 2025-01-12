const format = require('./format');

module.exports = class log {
  static info(string) {
    console.log(`[${format(new Date())}] ` + string)
  }
}