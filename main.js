function check(){
    var firstquestion = document.quiz.firstquestion.value;
    var secondquestion = document.quiz.secondquestion.value;
    var thirdquestion = document.quiz.thirdquestion.value;
    var rightAnswer = 0;

    if (firstquestion == 2001){
        rightAnswer++;
    }
    if (secondquestion == "Steve Jobs"){
        rightAnswer++;
    }
    if (thirdquestion == "Snowden Edward"){
        rightAnswer++;
    }

    var outputs = ["Good job!", "You did fair!", "Sorry, you need to try more!"];
    var gifs = ["img/obama.gif", "img/fine_doggy.gif", "img/trump.gif"];

    var output_range;

    if(rightAnswer < 1){
        output_range = 2;
    }
    if(rightAnswer > 0 && rightAnswer < 3){
        output_range = 1;
    }
    if(rightAnswer > 2){
        output_range = 0;
    }

    //alert("Well done, you are correct!!");
    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("outputs").innerHTML = outputs[output_range];
    document.getElementById("gifs").src = gifs[output_range];
    document.getElementById("number_rightAnswer").innerHTML = "You got " + rightAnswer + " correct.";
}