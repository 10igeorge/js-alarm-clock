var update = require('./../js/update.js').update;
var soundAlarm = require('./../js/alarm.js').soundAlarm;
//var alarmMoment = require('./../js/alarm-interface.js').alarmMoment;

$(document).ready(function(){
  clock = function() {
    $('#currentTime').html(update());
    var brring = soundAlarm(alarmMoment);
    console.log(brring);
  };
  setInterval(clock, 1000);
});
