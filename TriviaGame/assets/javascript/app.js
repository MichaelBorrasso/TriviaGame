
var questions = [{ question: "Whence do We Come?", answer: "" }, { question: "What are We?", answer: "ahahhfhghg" }, { question: "Where are we going?", answer: "ahahhfhghg" }];

$(document).on("click", "#start", function () {
    gameLogic.start();
    console.log("start");
});

$(document).on("click", "#done", function () {
    gameLogic.stop();
    console.log("done got clicked");
});
var gameLogic = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    intervalId: false,

    countdownTimer: function () {
        gameLogic.counter--;
        $("#countdownTimer").html(gameLogic.counter);



    },
    start: function () {
        this.intervalId =setInterval(gameLogic.countdownTimer, 1000);
        console.log(this.intervalId);
        $("#subWrap").prepend("<span id='countdownTimer'></span>");
        for (var i = 0; i < questions.length; i++) {
            $("#questions").html("<h2>" + questions[i].question + "</h2>")
            console.log(questions);


            // if (gameLogic.counter <= 0 || $("#done").clicked ===true) {   
            // then (clearInterval(gameLogic.countdownTimer))

        }
    },
    stop: function () {
        clearInterval(this.intervalId);

        console.log("stop got called");
    }

}




        //   alert("Time Up!")});


    // clearInterval(gameLogic.countdownTimer)       





