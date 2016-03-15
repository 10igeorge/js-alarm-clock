exports.soundAlarm = function(time, now) {
  if(time != null) {
    if(now.diff(time, 'milliseconds') >= -100 && now.diff(time, 'milliseconds') <= 100) {
      return true;
    } else{
      return false;
    }
  } else {
    return false;
  }
}
