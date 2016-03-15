var moment = require('moment');

$(document).ready(function(){
  var currentTime = moment().format('LTS');
  $('#currentTime').append(currentTime);
});
