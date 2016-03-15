var moment = require('moment');

$(document).ready(function() {
  $('#addAlarm').submit(function(event){
    event.preventDefault();
    var alarm = $('#alarmTime').val();
    console.log(alarm);
    $('#allAlarms').append('<li class="list-group-item">' + moment(alarm, 'HH:mm').format('LT') + '</li>');
  });
});
