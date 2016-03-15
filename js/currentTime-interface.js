var update = require('./../js/update.js').update;
var soundAlarm = require('./../js/alarm.js').soundAlarm;

$(document).ready(function(){
  clock = function() {
    var brring = soundAlarm(alarmMoment, update());
    console.log(brring);
    if(brring === true){
      $('#buzzer').fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500);
    }
    $('#currentTime').html(update().format('LTS'));
  };
  setInterval(clock, 1000);
});
