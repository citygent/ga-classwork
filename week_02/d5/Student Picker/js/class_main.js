$(document).ready(function() {

var studentHighlight;

  console.log('hello');

  var leftDiv = $('<div></div>');
  leftDiv.addClass('column student-column twenty-percent').attr('id', 'student-names');
  console.log(leftDiv);
  var rightDiv = leftDiv.clone().attr('id', 'finished-students');

  // cleaner way of chaining
  $('body')
      .prepend(leftDiv)
      .append(rightDiv);

  var ul = $("<ul class='student-list'></ul>");
  $('.student-column').append(ul);

  var h2 = "<h2>Students</h2>";
  var h2_2 = '<h2>In The Clear</h2>';
  leftDiv.prepend(h2);
  rightDiv.prepend(h2_2);

  var studentsArray = ["Ambar", "Carryl", "Chris", "Christine", "Denis", "Gary", "Jack", "James", "Joshua", "Luke", "Mark", "Mike", "Niall", "Paco", "Rob", "Sam", "Yao"];

  var questionsArray = ["this is where a new question should go", 'testing2', 'fdfddf', 'JEEEEEEENNN'];

  // studentsArray.forEach(function(element, index) {
  //   var li = "<li>" + element + "</li>";
  //   $('#student-names ul').append(li);
  // })

  // doing the same as the forEach above, but using $.each
  $.each(studentsArray, function(index, element){
    var li = "<li data-name='" + element + "'>" + element + "</li>";
    $('#student-names ul').append(li);
  })

  $('button').one('click', initGame);

  function initGame() {
    pickRandomStudent();
    // neeed to change the behaviour of the change buttoooooon
    $('button').on('click', nextStudent);
  }

  function pickRandomStudent() {
   // we're creating a variable which stores a random index number from the array
   var randomIndex = Math.floor(Math.random() * studentsArray.length);
   // creating a variable which stores the random student name
   var randomStudent = studentsArray[randomIndex];
   // removes that student from the array
   studentsArray.splice(randomIndex, 1);

   console.log('random', randomStudent);
   highlight(randomStudent);
  }

  function highlight(student) {
    // accessing data attributes
    // studentHighlight = $('#student-names li').first().data('name');
    // we want to find the particular student
    studentHighlight = $('#student-names li[data-name="' + student + '"]');
    console.log('studentHighlight', studentHighlight);
    studentHighlight.addClass('highlight');
  }

  function nextStudent() {
    // hide student from <ul>
    studentHighlight.slideUp();
    studentHighlight.removeClass('highlight').appendTo($('#finished-students ul'));
    studentHighlight.hide().slideDown('slow');

    pickRandomStudent();
    pickRandomQuestion();
  }

  function pickRandomQuestion() {
   var randomIndex = Math.floor(Math.random() * questionsArray.length);
   var randomQuestion = questionsArray[randomIndex];
   questionsArray.splice(randomIndex, 1);

   console.log('random', randomQuestion);
   $('#question').text(randomQuestion);
  }


})








