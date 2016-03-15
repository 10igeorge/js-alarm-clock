var alarmMoment;
$(document).ready(function() {
  $('#addAlarm').submit(function(event){
    event.preventDefault();
    var alarm = $('#alarmTime').val();
    $('#allAlarms').append('<li class="list-group-item">' + moment(alarm, 'HH:mm').format('LT') + '</li>');
    $('#alarmTime').val('');
    alarmMoment = moment(alarm, 'HH:mm');
    //exports.alarmMoment;
  });
});
