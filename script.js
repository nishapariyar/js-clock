function updateClock ( )
{
  var currentTime = new Date ( );

  var currentHours = currentTime.getHours ( );
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );

  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

  var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

  currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

  currentHours = ( currentHours == 0 ) ? 12 : currentHours;

  var secondhanddeg= currentSeconds*6
  var secondElement = document.getElementsByClassName('second')[0];
  secondElement.style.transform = 'rotateZ('+secondhanddeg+'deg)';

 var minutedeg = currentMinutes*6
 var minuteElement = document.getElementsByClassName('minutes')[0];
 minuteElement.style.transform = 'rotateZ('+minutedeg+'deg)';

 var hourdeg = currentHours*30
 var hourElement = document.getElementsByClassName('hours')[0];
 hourElement.style.transform = 'rotateZ('+hourdeg+'deg)';

}

document.readyState
updateClock();