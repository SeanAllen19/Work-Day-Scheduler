$(function () {


var timeBlockEl = $(".time-block");

function saveTextBox() {
  var key = $(this).parent().attr("id");
  var input = $(this).siblings(".description").val();

  localStorage.setItem(key, input);

}

timeBlockEl.on("click", ".saveBtn", saveTextBox);


timeBlockEl.each(function() {
  var key = $(this).attr("id");
  // console.log(key);
  var eventInput = localStorage.getItem(key);
  
  if(eventInput) {
    $(this).children(".description").text(eventInput);
  }

   //if the current hour is === to the hour num ID, change attr to present
    // else if the current hour is greater than the hour set attr to future
    // otherwise set attr to past

    
    
  var currentHour = dayjs().hour();
  var hourNum = key.slice(5)
  // console.log(parseInt(currentHour))
  // console.log(parseInt(hourNum))
  // console.log('this is currentHour:' + currentHour)
  // console.log( 'id based on box ' + hourNum) 


  currentHour= parseInt(currentHour.toString())
  hourNum = parseInt(hourNum)
  console.log('this is currentHour:' + currentHour)
  console.log( 'id based on box ' + hourNum) 

  if (currentHour == hourNum) {
    $(this).attr("class", "row time-block present");
  } else if (currentHour < hourNum) {
    $(this).attr("class", "row time-block future");
  }
  else {
    $(this).attr("class", "row time-block past");
  }
});


function getDate() {
  var reformatDate = dayjs().format('dddd, MMMM D YYYY, h:mm:ss a');
  $('#currentDay').text(reformatDate);
  };
  setInterval(getDate, 1000)
  


});




