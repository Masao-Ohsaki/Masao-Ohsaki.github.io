var answers=["こい","にじます","しますずき"];
function quizA(num){
  var input_answerA=document.getElementById("Carp").value;
  if(input_answerA===answers[num]){
  alert("正解です");
  }else if(input_answerA!==answers[num]){
  alert("不正解です");
　}
}
function quizB(num){
  var input_answerB=document.getElementById("RainbowTrout").value;
  if(input_answerB===answers[num]){
  alert("正解です");
  }else if(input_answerB!==answers[num]){
  alert("不正解です");
　}
}
function quizC(num){
  var input_answerC=document.getElementById("StripedBass").value;
  if(input_answerC===answers[num]){
  alert("正解です");
  }else if(input_answerC!==answers[num]){
  alert("不正解です");
　}
}

$('img').hide().slideDown('slow');
$('.answer1').click(function(){
  $('.answer1').replaceWith('<button type="button">正解</button>');
});
$('.answer2').click(function(){
  $('.answer2').replaceWith('<button type="button">正解</button>');
});
$('.answer3').click(function(){
  $('.answer3').replaceWith('<button type="button">正解</button>');
});
$('.wrong1').click(function(){
  $('.wrong1').replaceWith('<button type="button">不正解</button>');
});
$('.wrong2').click(function(){
  $('.wrong2').replaceWith('<button type="button">不正解</button>');
});
$('.wrong3').click(function(){
  $('.wrong3').replaceWith('<button type="button">不正解</button>');
});
