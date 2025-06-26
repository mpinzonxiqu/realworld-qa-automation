module.exports = {
  default: {
    require: ['steps/**/*.ts'],
    format: ['progress', 'html:reports/report.html'],
    publishQuiet: true
  }
};