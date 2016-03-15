exports.soundAlarm = function(time) {
  if(time != null) {
    if(moment().diff(time, 'seconds') === 0) {
      return true;
    } else{
      return false;
    }
  } else {
    return false;
  }

}
