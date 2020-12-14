//Listen for the start button click
$(document).ready(function () {
  $("#start-btn").on("click", function () {
    startQuiz();
  });

  // assign common variables used to traverse the DOM
  let $answers = $("#answers");
  let $startScreen = $("#start-screen")
 
  let $score = $("#quiz-score");
  let $title = $("#question-title");
  let $percent = $("#quiz-score-percent");
  let $questionTitle = $("#question-title");

  // declare game logic variables
  let currentQuestionIndex = 0;
  let score = questions.length;
  let scorePercent;

  function startQuiz() {
    $("#home-page").addClass("hide");
    $("#questions").removeClass("hide");
    getQuestion();
  }

  function getQuestion() {
    let currentQuestion = questions[currentQuestionIndex];

    // Get a new question
    $title.html(currentQuestion.title);

    // Clear out any previous question data
    // $answers.empty();

    $.each(currentQuestion.options, function(name, value) {
        console.log(`${name} = ${value}`);
        $answers.append(`<p><label for="${value}">${value}<input type="radio" id="${value}" name="options" value="${value}"></label></p>`)
      
        $("#start-btn").on("click", function () {
          startQuiz();
        });
      })
    };
  });
