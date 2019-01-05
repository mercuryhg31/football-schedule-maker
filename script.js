
//winnie_the_pooh = whoomy_whoomy

var teams = ["Lions", "Cowboys", "Eagles", "Giants", "Rams", "Seahawks", "49ers", "Saints", "Falcons", "Buccaneers", "Ravens", "Steelers", "Patriots", "Jets", "Cheifs", "Broncos", "Titans", "Jaguars"];
var shuffledTeams = [];
teams.forEach(function(element){
  shuffledTeams.push(element);
});
shuffledTeams = shuffledTeams.sort(function(a, b){return 0.5 - Math.random()});

function start(){
  oneShift();
  circleShift();
}

function oneShift(weeks){
  var weeks = prompt("Number of weeks?");
  var finalMessage = "";
  for(var i = 0; i < weeks; i++){
    finalMessage = finalMessage + "<strong>Week number " + (i + 1).toString() + ":</strong> </br>";
    for(var j = 0; j < Math.floor(shuffledTeams.length/2); j++){
      var calculation = (j + i + 9);
      //console.log(calculation);
      if(calculation <= (shuffledTeams.length - 1)){
        finalMessage = finalMessage + shuffledTeams[j] + " against " + shuffledTeams[calculation] + "</br>";
      }else{
        finalMessage = finalMessage + shuffledTeams[j] + " against " + shuffledTeams[calculation - (shuffledTeams.length/2)] + "</br>";
      }
    }
  }
  document.getElementById("funDiv").innerHTML = finalMessage;
}

function circleShift(weeks){
  var weeks = prompt("Number of weeks?");
  var finalMessage = "";
  for(var i = 0; i < weeks; i++){
    finalMessage = finalMessage + "<strong>Week number " + (i + 1).toString() + ":</strong> </br>";
    var messageArray = [];
    for(var j = 0; j < Math.floor(shuffledTeams.length); j ++){
      var calculationCircle = j + (2*i);
      console.log(calculationCircle, i, 1);
      if((calculationCircle % 2) == 0){
        calculationCircle -= (2 * i);
      }else{
        calculationCircle += (2 * i);
      }
      console.log(calculationCircle, i, 2);

      if(calculationCircle > shuffledTeams.length - 1){
        calculationCircle = 0;
      }else if(calculationCircle < 0 && i !== 0){
        calculationCircle = shuffledTeams.length - 1;
      }
      console.log(calculationCircle, i, 3);

      messageArray.push(shuffledTeams[calculationCircle]);

      //console.log(calculationCircle);
    }
    for(var k = 0; k < messageArray.length; k += 2){
      finalMessage = finalMessage + messageArray[k] + " against " + messageArray[k + 1] + "</br>";
    }
  }
  document.getElementById("funDiv").innerHTML = finalMessage;
}
