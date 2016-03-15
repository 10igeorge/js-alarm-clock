var update = require('./../js/update.js').update;

$(document).ready(function(){
  clock = function() {
    $('#currentTime').html(update());
  };
  setInterval(clock, 1000);
});
