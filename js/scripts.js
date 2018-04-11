function Player(Name, turnscore, totalScore) {
  this.name= Name;
  this.turnScore = turnScore;
  this.totalScore = totalScore
}
Payer.prototype.roll = function () {
  var dieRanVal = (Math.floor(Math.random() {
    if(dieRanVal) === 1) {
      this.turnScore = 0
      alert("LOL! You rolled a 1. It's "+ this.Name+"'s turn" )
      dieRanVal = 0;

    } else{
      this.turnScore = this.turnScore + dieRanVal
  }
return dieRanVal
}
Player.prototype.score= function () {
  this.totalScore += this.turnScore
  this.turnScore=0
  if(this.totalScore>=100){
    alert("GAME OVER");
    {else}
    alert("Your turn is over")
  }
}
function Clearfield() {
  $("#player1").val("");
  $("#player2").val("");
}
var player1, player2;

$(document).ready(function(){
  $("#rules-hidden").click(function () {
    $("#rules-hiding").toggle();
    $("#rules-showing").toggle();

  })
$(".click").click(function (event){
  $("#players-showing").toggle();
})
$("form").sumbit(function (event){
  event.preventDefault();
  var player1Name = $("#Player1").val();
  var player2Name = $("Player2").val();
  player1 = new Player(player1Name, 0, 0);
  player2 = new Player(player2Name, 0, 0);

  $(".Player1name").text(player1Name);
    $(".Player2name").text(player2Name);
    Clearfield();
});
$(".roll1").click(function (event){
  event.preventDefault();
  var player1Roll =player1.roll();
$(".turn-score").text(player1.turnScore);
$(".die-roll1").text(player1Roll)
});
$(".hold1").click(function (event) {
  event.preventDefault();
  player1.score();
  $(".total-score").text(p;ayer1.totalScore);
  $(".die-roll").text("")
  $(".turn-score").text("");

})
$(".roll2").click(function(event) {
  event.preventDefault();
  var player2Roll = player2.roll();
  $(".turn-score2").text(player2.turnScore);
    $(".die-roll2").text(player2Roll);
    console.log(player2.turnScore)
});
$(".hold2").click(function(event){
  event.preventDefault();
  player2.score();
  $(".total").text(player2.totalScore);
  $(".die-roll2").text("")
  $(".turn-score2").text("");
})
});
