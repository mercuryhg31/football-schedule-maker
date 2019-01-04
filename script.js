
//winnie_the_pooh = whoomy_whoomy

var teams = ["Lions", "Cowboys", "Eagles", "Giants", "Rams", "Seahawks", "49ers", "Saints", "Falcons", "Buccaneers", "Ravens", "Steelers", "Patriots", "Jets", "Cheifs", "Broncos", "Titans", "Jaguars"];
var shuffledTeams = [];
teams.forEach(function(element){
  shuffledTeams.push(element);
});
shuffledTeams = shuffledTeams.sort(function(a, b){return 0.5 - Math.random()});
console.log(teams);
console.log(shuffledTeams);

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
    for(var j = 0; j < Math.floor(shuffledTeams.length); j += 2){
      console.log((j + i), shuffledTeams.length);
      if(((j + i + 1) > shuffledTeams.length) && ((j + i) > shuffledTeams.length)){
        finalMessage = finalMessage + shuffledTeams[(j + i) - (shuffledTeams.length)] + " against " + shuffledTeams[(j + i + 1) - (shuffledTeams.length)] + "</br>";
      }else if((j + i) > shuffledTeams.length){
        finalMessage = finalMessage + shuffledTeams[(j + i) - (shuffledTeams.length)] + " against " + shuffledTeams[j + i + 1] + "</br>";
      }else if(((j + i + 1) > shuffledTeams.length)){
        finalMessage = finalMessage + shuffledTeams[j + i] + " against " + shuffledTeams[(j + i + 1) - (shuffledTeams.length)] + "</br>";
      }else{
        finalMessage = finalMessage + shuffledTeams[j + i] + " against " + shuffledTeams[j + i + 1] + "</br>";
      }
    }
  }
  document.getElementById("funDiv").innerHTML = finalMessage;
}
