var moment = require('moment');

exports.update = function() {
  return moment().format('LTS');
};
